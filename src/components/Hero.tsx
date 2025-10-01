import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

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
    <section className="relative overflow-hidden py-20 px-4">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background -z-10" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            50+ Tools • All Free • No Sign-up Required
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Tolzo</span>
          <br />
          <span className="text-foreground">All in One Global Tools</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          All the Tools You Need, in One Place 🌍
          <br />
          <span className="text-base">Calculate, Convert, Generate, Analyze – Everything Free Forever</span>
        </p>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Find Your Tool Quickly... (e.g., EMI, BMI, QR Code)"
            value={searchQuery}
            onChange={handleSearch}
            className="pl-12 pr-4 py-6 text-lg rounded-2xl border-2 border-border focus:border-primary shadow-medium hover:shadow-large transition-all duration-300"
          />
        </div>

        {/* Popular Searches */}
        <div className="flex flex-wrap gap-2 justify-center mt-6">
          <span className="text-sm text-muted-foreground">Popular:</span>
          {["EMI Calculator", "BMI Calculator", "QR Code", "JSON Formatter"].map((term) => (
            <button
              key={term}
              onClick={() => {
                setSearchQuery(term);
                onSearch(term);
              }}
              className="text-sm px-3 py-1 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-border"
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
