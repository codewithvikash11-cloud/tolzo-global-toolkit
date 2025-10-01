import { useState } from "react";
import { ToolCard } from "./ToolCard";
import { tools, categories } from "@/data/tools";

interface ToolsGridProps {
  searchQuery: string;
}

export const ToolsGrid = ({ searchQuery }: ToolsGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTools = tools.filter((tool) => {
    const matchesSearch = 
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === "All" || tool.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg scale-105"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10 border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-center text-muted-foreground mb-8">
          {filteredTools.length} {filteredTools.length === 1 ? "tool" : "tools"} found
        </p>

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-2">No tools found</p>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search or category filter
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
