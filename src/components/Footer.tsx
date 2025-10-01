import { Link } from "react-router-dom";
import { Wrench, Mail, Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent animate-pulse-glow">
                <Wrench className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">{t('nav.brand')}</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              {t('footer.aboutText')}
            </p>
            <div className="flex gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 border border-secondary/20"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 border border-secondary/20"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 border border-secondary/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 border border-secondary/20"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:contact@tolzo.com"
                className="p-2 rounded-lg bg-secondary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 border border-secondary/20"
                aria-label="Email"
              >
                <Mail className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  {t('footer.contact')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  {t('footer.blog')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
            
            {/* Language Switcher in Footer */}
            <div className="mt-6">
              <h4 className="font-medium mb-2 text-sm text-muted-foreground">Language</h4>
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {t('nav.brand')}. {t('footer.rights')} 
            <span className="mx-2">•</span>
            Made with <span className="text-red-500 animate-pulse">❤️</span> for everyone 🌍
          </p>
        </div>
      </div>
    </footer>
  );
};
