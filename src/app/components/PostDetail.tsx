import { useState } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, Send } from "lucide-react";
import { PostCard } from "./PostCard";
import { getPostById, getUserById } from "../data/mockData";

export function PostDetail() {
  const { postId } = useParams();
  const post = getPostById(postId || "");
  const [newComment, setNewComment] = useState("");

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-500">Post not found</p>
      </div>
    );
  }

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      console.log("New comment:", newComment);
      setNewComment("");
    }
  };

  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return "Just now";
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back to feed</span>
      </Link>

      <PostCard post={post} showFullComments={true} />

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-6">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Comments ({post.comments.length})
          </h2>
        </div>

        <form onSubmit={handleSubmitComment} className="p-4 border-b border-gray-200">
          <div className="flex gap-3">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="flex-1 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={2}
            />
            <button
              type="submit"
              disabled={!newComment.trim()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center gap-2 h-fit"
            >
              <Send size={18} />
            </button>
          </div>
        </form>

        <div className="divide-y divide-gray-100">
          {post.comments.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No comments yet. Be the first to comment!
            </div>
          ) : (
            post.comments.map((comment) => {
              const commentUser = getUserById(comment.userId);
              if (!commentUser) return null;

              return (
                <div key={comment.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex gap-3">
                    <Link to={`/profile/${commentUser.id}`}>
                      <img
                        src={commentUser.avatar}
                        alt={commentUser.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </Link>
                    <div className="flex-1">
                      <div className="bg-gray-100 rounded-lg p-3">
                        <Link
                          to={`/profile/${commentUser.id}`}
                          className="font-semibold text-gray-900 hover:underline"
                        >
                          {commentUser.name}
                        </Link>
                        <p className="text-gray-800 mt-1">{comment.content}</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 ml-3">
                        {formatTimestamp(comment.timestamp)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
