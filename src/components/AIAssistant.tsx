import { Sparkles } from "lucide-react";

interface AIAssistantProps {
  message: string;
}

export const AIAssistant = ({ message }: AIAssistantProps) => {
  if (!message) return null;

  return (
    <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 animate-fade-in">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-primary mb-1">💡 Tolzo AI</p>
          <p className="text-sm text-foreground">{message}</p>
        </div>
      </div>
    </div>
  );
};
