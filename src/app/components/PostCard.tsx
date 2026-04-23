import { useState } from "react";
import { Link } from "react-router";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import type { Post } from "../data/mockData";
import { getUserById, currentUserId } from "../data/mockData";

interface PostCardProps {
  post: Post;
  showFullComments?: boolean;
}

export function PostCard({ post, showFullComments = false }: PostCardProps) {
  const user = getUserById(post.userId);
  const [isLiked, setIsLiked] = useState(post.likedBy.includes(currentUserId));
  const [likes, setLikes] = useState(post.likes);

  if (!user) return null;

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
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
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-4 flex items-center gap-3">
        <Link to={`/profile/${user.id}`}>
          <img
            src={user.avatar}
            alt={user.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        </Link>
        <div className="flex-1">
          <Link to={`/profile/${user.id}`} className="hover:underline">
            <p className="font-semibold text-gray-900">{user.name}</p>
          </Link>
          <p className="text-sm text-gray-500">
            {user.username} · {formatTimestamp(post.timestamp)}
          </p>
        </div>
      </div>

      <Link to={`/post/${post.id}`} className="block">
        <div className="px-4 pb-3">
          <p className="text-gray-800 whitespace-pre-wrap">{post.content}</p>
        </div>

        {post.image && (
          <img
            src={post.image}
            alt="Post content"
            className="w-full object-cover max-h-96"
          />
        )}
      </Link>

      <div className="px-4 py-3 flex items-center gap-6 border-t border-gray-100">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 transition-colors ${
            isLiked
              ? "text-red-500"
              : "text-gray-600 hover:text-red-500"
          }`}
        >
          <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
          <span className="text-sm font-medium">{likes}</span>
        </button>

        <Link
          to={`/post/${post.id}`}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <MessageCircle size={20} />
          <span className="text-sm font-medium">{post.comments.length}</span>
        </Link>

        <button className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors ml-auto">
          <Share2 size={20} />
        </button>
      </div>

      {!showFullComments && post.comments.length > 0 && (
        <Link to={`/post/${post.id}`} className="block px-4 pb-4">
          <p className="text-sm text-gray-500 hover:underline">
            View all {post.comments.length} comment{post.comments.length !== 1 ? "s" : ""}
          </p>
        </Link>
      )}
    </div>
  );
}
