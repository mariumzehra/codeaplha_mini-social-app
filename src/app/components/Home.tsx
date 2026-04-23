import { useState } from "react";
import { PostCard } from "./PostCard";
import { posts } from "../data/mockData";

export function Home() {
  const [allPosts] = useState(posts);

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <textarea
          placeholder="What's on your mind?"
          className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
        />
        <div className="flex justify-end mt-3">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Post
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {allPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
