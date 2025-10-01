import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import tolzoLogo from "@/assets/tolzo-logo.png";

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative group-hover:scale-110 transition-all duration-300">
              <img 
                src={tolzoLogo} 
                alt="Tolzo Logo" 
                className="h-10 w-10 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity animate-pulse-glow" />
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
