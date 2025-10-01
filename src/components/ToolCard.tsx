import { LucideIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ToolCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  category: string;
  path: string;
}

export const ToolCard = ({ icon: Icon, title, description, category, path }: ToolCardProps) => {
  const categoryColors: Record<string, string> = {
    Finance: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    Health: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
    Text: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
    Developer: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
    SEO: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    Utility: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
  };

  return (
    <Link to={path} className="group block">
      <div className="tool-card group">
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500 rounded-2xl" />
        
        {/* Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>

        <div className="relative z-10">
          {/* Icon with Enhanced Animation */}
          <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 group-hover:from-primary/20 group-hover:via-secondary/20 group-hover:to-accent/20 transition-all duration-300 group-hover:shadow-lg">
            <Icon className="h-6 w-6 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
          </div>

          {/* Category Badge with Enhanced Style */}
          <div className="flex items-center gap-2 mb-3">
            <span className={`category-badge ${categoryColors[category] || ""}`}>
              {category}
            </span>
          </div>

          {/* Title with Gradient on Hover */}
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {description}
          </p>

          {/* Enhanced Arrow Icon */}
          <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
            <span className="text-sm font-medium">Use Tool</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};
