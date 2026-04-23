import { useState } from "react";
import { useParams, Link } from "react-router";
import { Grid, List } from "lucide-react";
import { getUserById, getPostsByUserId, currentUserId } from "../data/mockData";
import { EditProfileModal } from "./EditProfileModal";

export function Profile() {
  const { userId } = useParams();
  const user = getUserById(userId || "");
  const userPosts = getPostsByUserId(userId || "");
  const [isFollowing, setIsFollowing] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showEditModal, setShowEditModal] = useState(false);
  const [followers, setFollowers] = useState(user?.followers || 0);

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-500">User not found</p>
      </div>
    );
  }

  const isOwnProfile = user.id === currentUserId;

  const handleFollow = () => {
    if (isFollowing) {
      setFollowers(followers - 1);
    } else {
      setFollowers(followers + 1);
    }
    setIsFollowing(!isFollowing);
  };

  const handleSaveProfile = (updatedUser: Record<string, string>) => {
    console.log("Profile updated:", updatedUser);
  };

  const formatTimestamp = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-100"
          />

          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              {!isOwnProfile && (
                <button
                  onClick={handleFollow}
                  className={`px-6 py-2 rounded-lg transition-colors ${
                    isFollowing
                      ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {isFollowing ? "Following" : "Follow"}
                </button>
              )}
              {isOwnProfile && (
                <button
                  onClick={() => setShowEditModal(true)}
                  className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Edit Profile
                </button>
              )}
            </div>

            <p className="text-gray-600 mb-4">{user.username}</p>
            <p className="text-gray-800 mb-6">{user.bio}</p>

            <div className="flex justify-center sm:justify-start gap-8">
              <div className="text-center">
                <p className="text-xl font-bold text-gray-900">{userPosts.length}</p>
                <p className="text-sm text-gray-600">Posts</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-gray-900">{followers.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-gray-900">{user.following.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Following</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Posts</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === "grid"
                ? "bg-blue-100 text-blue-600"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <Grid size={20} />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === "list"
                ? "bg-blue-100 text-blue-600"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <List size={20} />
          </button>
        </div>
      </div>

      {userPosts.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
          <p className="text-gray-500">No posts yet</p>
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {userPosts.map((post) => (
            <Link
              key={post.id}
              to={`/post/${post.id}`}
              className="group relative aspect-square bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              {post.image ? (
                <img
                  src={post.image}
                  alt="Post"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full p-4 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
                  <p className="text-sm text-gray-700 line-clamp-6">
                    {post.content}
                  </p>
                </div>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex gap-6 text-white">
                  <span className="flex items-center gap-1">
                    ❤️ {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    💬 {post.comments.length}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {userPosts.map((post) => (
            <Link
              key={post.id}
              to={`/post/${post.id}`}
              className="block bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <p className="text-gray-800 mb-3">{post.content}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="Post"
                  className="w-full rounded-lg object-cover max-h-64 mb-3"
                />
              )}
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span>{formatTimestamp(post.timestamp)}</span>
                <span>❤️ {post.likes}</span>
                <span>💬 {post.comments.length}</span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {showEditModal && user && (
        <EditProfileModal
          user={user}
          onClose={() => setShowEditModal(false)}
          onSave={handleSaveProfile}
        />
      )}
    </div>
  );
}
