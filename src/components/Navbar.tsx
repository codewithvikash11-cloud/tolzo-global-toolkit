import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Wrench } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent group-hover:scale-110 transition-transform duration-300">
              <Wrench className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">Tolzo</span>
          </Link>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
