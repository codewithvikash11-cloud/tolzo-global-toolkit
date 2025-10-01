import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent group-hover:scale-110 transition-all duration-300 shadow-md group-hover:shadow-lg">
              <Wrench className="h-5 w-5 text-white animate-pulse" />
            </div>
            <span className="text-xl font-bold gradient-text">{t('nav.brand')}</span>
          </Link>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
