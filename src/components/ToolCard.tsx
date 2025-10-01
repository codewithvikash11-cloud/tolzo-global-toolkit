import { LucideIcon } from "lucide-react";
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
    Finance: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
    Health: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
    Text: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    Developer: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    SEO: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
    Utility: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
  };

  return (
    <Link to={path}>
      <div className="tool-card">
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500 rounded-2xl" />

        <div className="relative z-10">
          {/* Icon */}
          <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
            <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Category Badge */}
          <span className={`category-badge mb-3 ${categoryColors[category] || ""}`}>
            {category}
          </span>

          {/* Title */}
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>

          {/* Arrow Icon */}
          <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
            <span className="text-sm font-medium">Use Tool</span>
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};
