import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Crosshair, Settings, User, LogOut } from "lucide-react";
import { User as UserEntity } from "@/entities/User";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const currentUser = await UserEntity.me();
      setUser(currentUser);
    } catch (error) {
      setUser(null);
    }
  };

  const handleLogout = async () => {
    await UserEntity.logout();
    window.location.reload();
  };

  const isActive = (pageName) => location.pathname === createPageUrl(pageName);

  return (
    <div className="min-h-screen bg-gray-800 bg-[url('https://www.transparenttextures.com/patterns/crissxcross.png')] text-gray-300">
      <style>{`
        :root {
          --primary: #2d3748; /* Dark Gray-Blue */
          --accent: #8f7f5f; /* Muted Khaki/Olive */
          --accent-hover: #a99878;
        }
        .font-stencil {
            font-family: 'Courier New', Courier, monospace;
            text-transform: uppercase;
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link 
              to={createPageUrl("Shop")} 
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 border-2 border-amber-800/50 bg-gray-800 rounded-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <Crosshair className="w-5 h-5 text-amber-600" />
              </div>
              <span className="text-xl font-bold tracking-widest text-gray-200 font-stencil">BayonEtsy</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <Link to={createPageUrl("Shop")}>
                <Button
                  variant="ghost"
                  className={`${isActive("Shop") ? "text-white bg-gray-700/50" : "text-gray-400"} hover:text-white hover:bg-gray-700/50 transition-all duration-200 font-stencil`}
                >
                  The Exchange
                </Button>
              </Link>
              {user?.role === 'admin' && (
                <Link to={createPageUrl("AdminProducts")}>
                  <Button
                    variant="ghost"
                    className={`${isActive("AdminProducts") ? "text-white bg-gray-700/50" : "text-gray-400"} hover:text-white hover:bg-gray-700/50 transition-all duration-200 font-stencil`}
                  >
                    Manage Contraband
                  </Button>
                </Link>
              )}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="hover:bg-gray-700/50 transition-all duration-200"
                    >
                      <User className="w-5 h-5 text-gray-300 mr-2" />
                      <span className="hidden sm:inline">{user.full_name}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 bg-gray-900 border-gray-700 text-gray-300">
                    <div className="px-2 py-1.5">
                      <p className="text-sm font-medium text-white">{user.full_name}</p>
                      <p className="text-xs text-gray-400">{user.email}</p>
                    </div>
                    <DropdownMenuSeparator className="bg-gray-700" />
                    {user.role === 'admin' && (
                      <DropdownMenuItem asChild className="cursor-pointer focus:bg-gray-700">
                          <Link to={createPageUrl("AdminProducts")}>
                            <Settings className="w-4 h-4 mr-2" />
                            Admin Panel
                          </Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator className="bg-gray-700"/>
                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-400 focus:bg-red-900/50 focus:text-red-300">
                      <LogOut className="w-4 h-4 mr-2" />
                      Go Dark
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  onClick={() => UserEntity.login()}
                  className="bg-amber-800 hover:bg-amber-700 text-white transition-all duration-200 font-stencil"
                >
                  Report for Duty
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-4rem)]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/80 border-t border-gray-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <p className="text-sm text-gray-500 font-stencil">
                BayonEtsy is a fictional website for a school project.
            </p>
            <p className="text-xs text-gray-600 mt-2">
                All items are for display purposes only. No actual goods or services are sold.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-700 text-center text-xs text-gray-500">
              © 1953 BayonEtsy. All intel is classified.
            </div>
        </div>
      </footer>
    </div>
  );
}