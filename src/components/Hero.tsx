import { Search, Sparkles, Zap, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import heroImage from "@/assets/hero-tools.png";

interface HeroProps {
  onSearch: (query: string) => void;
}

export const Hero = ({ onSearch }: HeroProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="text-center md:text-left space-y-8">
          {/* Badge with Icon */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary animate-glow" />
            <span className="text-sm font-medium text-foreground">🌍 Global Tools Platform</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-slide-up">
            <span className="gradient-text">Tolzo</span>
            <br />
            <span className="text-foreground">All the Tools You Need</span>
            <br />
            <span className="text-muted-foreground text-3xl md:text-5xl">in One Place</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            From calculators to converters, SEO tools to generators—everything you need to work smarter and faster.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:scale-105 transition-transform">
              <Zap className="w-4 h-4" />
              50+ Tools
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium hover:scale-105 transition-transform">
              <TrendingUp className="w-4 h-4" />
              Always Free
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4" />
              AI Powered
            </div>
          </div>

          {/* Search Bar */}
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <Input
                type="text"
                placeholder="Find Your Tool Quickly..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-12 pr-4 py-6 text-lg rounded-2xl border-2 border-border focus:border-primary bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg focus:shadow-xl"
              />
            </div>
          </div>

          {/* Popular Searches */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <span className="text-sm text-muted-foreground">Popular:</span>
            {["EMI Calculator", "BMI Calculator", "Currency Converter", "QR Code"].map((term) => (
              <button
                key={term}
                onClick={() => {
                  setSearchQuery(term);
                  onSearch(term);
                }}
                className="px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium hover:bg-secondary/20 hover:scale-105 transition-all duration-300 border border-secondary/20 hover:border-secondary/40"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Hero Image */}
        <div className="relative animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative rounded-3xl overflow-hidden">
            <img 
              src={heroImage} 
              alt="Tolzo Tools Platform - All in One Global Tools" 
              className="w-full h-auto rounded-3xl shadow-2xl animate-float"
            />
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 rounded-3xl animate-pulse-glow" />
          </div>
          
          {/* Floating Stats Cards */}
          <div className="absolute -top-6 -right-6 px-6 py-4 rounded-2xl bg-card border border-primary/20 shadow-lg backdrop-blur-sm animate-float">
            <div className="text-3xl font-bold gradient-text">50+</div>
            <div className="text-sm text-muted-foreground">Tools</div>
          </div>
          
          <div className="absolute -bottom-6 -left-6 px-6 py-4 rounded-2xl bg-card border border-secondary/20 shadow-lg backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }}>
            <div className="text-3xl font-bold gradient-text">100%</div>
            <div className="text-sm text-muted-foreground">Free</div>
          </div>
        </div>
      </div>
    </section>
  );
};
