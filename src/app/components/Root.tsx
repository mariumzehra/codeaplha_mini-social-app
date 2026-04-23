import { Outlet, Link, useLocation } from "react-router";
import { Home, User, TrendingUp } from "lucide-react";
import { currentUserId } from "../data/mockData";

export function Root() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            SocialHub
          </Link>

          <nav className="flex items-center gap-8">
            <Link
              to="/"
              className={`flex items-center gap-2 transition-colors ${
                isActive("/") && location.pathname === "/"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Home size={20} />
              <span className="hidden sm:inline">Home</span>
            </Link>

            <Link
              to={`/profile/${currentUserId}`}
              className={`flex items-center gap-2 transition-colors ${
                isActive(`/profile/${currentUserId}`)
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <User size={20} />
              <span className="hidden sm:inline">Profile</span>
            </Link>

            <Link
              to="/explore"
              className={`flex items-center gap-2 transition-colors ${
                isActive("/explore")
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <TrendingUp size={20} />
              <span className="hidden sm:inline">Explore</span>
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
