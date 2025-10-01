import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AIAssistant } from "@/components/AIAssistant";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator } from "lucide-react";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState<number | null>(null);
  const [aiMessage, setAiMessage] = useState("");

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 12 / 100; // Monthly interest rate
    const n = parseFloat(tenure) * 12; // Total months

    if (P && r && n) {
      const emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmi(emiValue);

      // Generate AI message
      const totalAmount = emiValue * n;
      const totalInterest = totalAmount - P;
      setAiMessage(
        `Your EMI is ₹${emiValue.toFixed(2)}/month 🎉. Total interest will be ₹${totalInterest.toFixed(
          2
        )} over ${tenure} years. Paying early can save you extra 💡!`
      );
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
              <Calculator className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">EMI Calculator</h1>
              <p className="text-muted-foreground">Calculate your monthly loan installments</p>
            </div>
          </div>
        </div>

        {/* Calculator Card */}
        <Card>
          <CardHeader>
            <CardTitle>Loan Details</CardTitle>
            <CardDescription>
              Enter your loan amount, interest rate, and tenure to calculate EMI
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Loan Amount */}
            <div className="space-y-2">
              <Label htmlFor="loanAmount">Loan Amount (₹)</Label>
              <Input
                id="loanAmount"
                type="number"
                placeholder="e.g., 1000000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />
            </div>

            {/* Interest Rate */}
            <div className="space-y-2">
              <Label htmlFor="interestRate">Interest Rate (% per annum)</Label>
              <Input
                id="interestRate"
                type="number"
                step="0.1"
                placeholder="e.g., 8.5"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>

            {/* Tenure */}
            <div className="space-y-2">
              <Label htmlFor="tenure">Loan Tenure (years)</Label>
              <Input
                id="tenure"
                type="number"
                placeholder="e.g., 15"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
              />
            </div>

            {/* Calculate Button */}
            <Button
              onClick={calculateEMI}
              className="w-full btn-hero"
              disabled={!loanAmount || !interestRate || !tenure}
            >
              Calculate EMI
            </Button>

            {/* Result */}
            {emi !== null && (
              <div className="mt-6 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Your Monthly EMI</p>
                  <p className="text-4xl font-bold gradient-text">₹{emi.toFixed(2)}</p>
                  <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Loan Amount</p>
                      <p className="font-semibold">₹{parseFloat(loanAmount).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Total Interest</p>
                      <p className="font-semibold">
                        ₹{(emi * parseFloat(tenure) * 12 - parseFloat(loanAmount)).toFixed(0)}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Total Amount</p>
                      <p className="font-semibold">
                        ₹{(emi * parseFloat(tenure) * 12).toFixed(0)}
                      </p>
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

export default EMICalculator;
