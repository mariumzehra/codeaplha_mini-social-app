import { useState } from "react";
import { Link } from "react-router";
import { TrendingUp, Hash, Users } from "lucide-react";
import { users, posts } from "../data/mockData";

export function Explore() {
  const [activeTab, setActiveTab] = useState<"trending" | "people">("trending");
  const [followingUsers, setFollowingUsers] = useState<Set<string>>(new Set());

  const trendingPosts = [...posts].sort((a, b) => b.likes - a.likes).slice(0, 5);
  const suggestedUsers = users.slice(0, 4);

  const handleFollowToggle = (userId: string) => {
    setFollowingUsers((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(userId)) {
        newSet.delete(userId);
      } else {
        newSet.add(userId);
      }
      return newSet;
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Explore</h1>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab("trending")}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 transition-colors ${
              activeTab === "trending"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <TrendingUp size={20} />
            <span>Trending</span>
          </button>
          <button
            onClick={() => setActiveTab("people")}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 transition-colors ${
              activeTab === "people"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Users size={20} />
            <span>People</span>
          </button>
        </div>

        {activeTab === "trending" && (
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Trending Topics
            </h2>
            <div className="space-y-3 mb-6">
              {["#DesignTrends2026", "#WebDevelopment", "#Photography", "#DigitalArt", "#TechNews"].map(
                (tag) => (
                  <div
                    key={tag}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <Hash size={20} className="text-gray-400" />
                      <div>
                        <p className="font-semibold text-gray-900">{tag}</p>
                        <p className="text-sm text-gray-500">
                          {Math.floor(Math.random() * 5000) + 1000} posts
                        </p>
                      </div>
                    </div>
                    <TrendingUp size={16} className="text-blue-600" />
                  </div>
                )
              )}
            </div>

            <h2 className="text-lg font-semibold text-gray-900 mb-4 mt-8">
              Top Posts
            </h2>
            <div className="space-y-4">
              {trendingPosts.map((post, index) => {
                const user = users.find((u) => u.id === post.userId);
                if (!user) return null;

                return (
                  <Link
                    key={post.id}
                    to={`/post/${post.id}`}
                    className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        <span className="font-semibold text-gray-900 text-sm">
                          {user.name}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {user.username}
                        </span>
                      </div>
                      <p className="text-gray-800 text-sm line-clamp-2 mb-2">
                        {post.content}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>❤️ {post.likes}</span>
                        <span>💬 {post.comments.length}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === "people" && (
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Suggested for you
            </h2>
            <div className="space-y-4">
              {suggestedUsers.map((user) => {
                const isFollowing = followingUsers.has(user.id);

                return (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Link
                      to={`/profile/${user.id}`}
                      className="flex items-center gap-3 flex-1"
                    >
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.username}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {user.followers.toLocaleString()} followers
                        </p>
                      </div>
                    </Link>
                    <button
                      onClick={() => handleFollowToggle(user.id)}
                      className={`px-4 py-2 rounded-lg transition-colors text-sm ${
                        isFollowing
                          ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      {isFollowing ? "Following" : "Follow"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
