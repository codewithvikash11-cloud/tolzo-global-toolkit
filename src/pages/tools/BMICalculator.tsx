import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AIAssistant } from "@/components/AIAssistant";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");
  const [aiMessage, setAiMessage] = useState("");

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // Convert cm to meters

    if (w && h) {
      const bmiValue = w / (h * h);
      setBmi(bmiValue);

      let cat = "";
      let message = "";

      if (bmiValue < 18.5) {
        cat = "Underweight";
        message = `Your BMI is ${bmiValue.toFixed(1)} 📊. You're underweight. Consider eating more nutritious foods! 🥗`;
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        cat = "Normal";
        message = `Your BMI is ${bmiValue.toFixed(1)} 🧘. That's healthy—keep it up! 💪`;
      } else if (bmiValue >= 25 && bmiValue < 30) {
        cat = "Overweight";
        message = `Your BMI is ${bmiValue.toFixed(1)} ⚖️. You're slightly overweight. Regular exercise can help! 🏃`;
      } else {
        cat = "Obese";
        message = `Your BMI is ${bmiValue.toFixed(1)} 📈. Consider consulting a healthcare provider for personalized advice 👨‍⚕️`;
      }

      setCategory(cat);
      setAiMessage(message);
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case "Underweight":
        return "text-blue-600 dark:text-blue-400";
      case "Normal":
        return "text-green-600 dark:text-green-400";
      case "Overweight":
        return "text-orange-600 dark:text-orange-400";
      case "Obese":
        return "text-red-600 dark:text-red-400";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">BMI Calculator</h1>
              <p className="text-muted-foreground">Calculate your Body Mass Index</p>
            </div>
          </div>
        </div>

        {/* Calculator Card */}
        <Card>
          <CardHeader>
            <CardTitle>Your Details</CardTitle>
            <CardDescription>
              Enter your weight and height to calculate your BMI
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Weight */}
            <div className="space-y-2">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                id="weight"
                type="number"
                placeholder="e.g., 70"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            {/* Height */}
            <div className="space-y-2">
              <Label htmlFor="height">Height (cm)</Label>
              <Input
                id="height"
                type="number"
                placeholder="e.g., 175"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>

            {/* Calculate Button */}
            <Button
              onClick={calculateBMI}
              className="w-full btn-hero"
              disabled={!weight || !height}
            >
              Calculate BMI
            </Button>

            {/* Result */}
            {bmi !== null && (
              <div className="mt-6 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Your BMI</p>
                  <p className="text-4xl font-bold gradient-text">{bmi.toFixed(1)}</p>
                  <p className={`mt-2 text-lg font-semibold ${getCategoryColor()}`}>
                    {category}
                  </p>
                  
                  {/* BMI Chart */}
                  <div className="mt-6 space-y-2 text-left text-sm">
                    <div className="flex justify-between">
                      <span>Underweight:</span>
                      <span className="font-medium">&lt; 18.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Normal:</span>
                      <span className="font-medium">18.5 - 24.9</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Overweight:</span>
                      <span className="font-medium">25 - 29.9</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Obese:</span>
                      <span className="font-medium">≥ 30</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* AI Assistant */}
            <AIAssistant message={aiMessage} />
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default BMICalculator;
