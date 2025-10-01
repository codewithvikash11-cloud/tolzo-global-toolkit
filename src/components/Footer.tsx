import { Link } from "react-router-dom";
import { Wrench, Mail, Github, Twitter } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
                <Wrench className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Tolzo</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              All the Tools You Need, in One Place 🌍
              <br />
              Free, Fast, and Forever.
            </p>
            <div className="flex gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/10 transition-colors duration-300"
              >
                <Twitter className="h-4 w-4 text-muted-foreground" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/10 transition-colors duration-300"
              >
                <Github className="h-4 w-4 text-muted-foreground" />
              </a>
              <a
                href="mailto:contact@tolzo.com"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/10 transition-colors duration-300"
              >
                <Mail className="h-4 w-4 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Tolzo. All rights reserved. Made with ❤️ for everyone.</p>
        </div>
      </div>
    </footer>
  );
};
