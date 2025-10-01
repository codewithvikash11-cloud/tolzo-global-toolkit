import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ToolsGrid } from "@/components/ToolsGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero onSearch={setSearchQuery} />
      <ToolsGrid searchQuery={searchQuery} />
      <Footer />
    </div>
  );
};

export default Index;
