import {
  Calculator,
  DollarSign,
  Heart,
  Calendar,
  FileText,
  Code,
  QrCode,
  Palette,
  Tag,
  Globe,
  BarChart,
  FileJson,
  Percent,
  Activity,
} from "lucide-react";

export interface Tool {
  id: string;
  icon: any;
  title: string;
  description: string;
  category: string;
  path: string;
}

export const tools: Tool[] = [
  // Finance Tools
  {
    id: "emi-calculator",
    icon: Calculator,
    title: "EMI Calculator",
    description: "Calculate your monthly loan EMI with interest rates and tenure",
    category: "Finance",
    path: "/tools/emi-calculator",
  },
  {
    id: "loan-calculator",
    icon: DollarSign,
    title: "Loan Calculator",
    description: "Calculate loan amounts, interest, and repayment schedules",
    category: "Finance",
    path: "/tools/loan-calculator",
  },
  {
    id: "gst-calculator",
    icon: Percent,
    title: "GST Calculator",
    description: "Calculate GST amounts and net prices instantly",
    category: "Finance",
    path: "/tools/gst-calculator",
  },
  {
    id: "percentage-calculator",
    icon: Percent,
    title: "Percentage Calculator",
    description: "Calculate percentages, discounts, and increases",
    category: "Finance",
    path: "/tools/percentage-calculator",
  },

  // Health Tools
  {
    id: "bmi-calculator",
    icon: Heart,
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index and health status",
    category: "Health",
    path: "/tools/bmi-calculator",
  },
  {
    id: "age-calculator",
    icon: Calendar,
    title: "Age Calculator",
    description: "Calculate your exact age in years, months, and days",
    category: "Health",
    path: "/tools/age-calculator",
  },

  // Text Tools
  {
    id: "word-counter",
    icon: FileText,
    title: "Word Counter",
    description: "Count words, characters, sentences, and paragraphs",
    category: "Text",
    path: "/tools/word-counter",
  },
  {
    id: "case-converter",
    icon: FileText,
    title: "Text Case Converter",
    description: "Convert text between uppercase, lowercase, and more",
    category: "Text",
    path: "/tools/case-converter",
  },
  {
    id: "text-analyzer",
    icon: BarChart,
    title: "Text Analyzer",
    description: "Analyze text readability, keyword density, and more",
    category: "Text",
    path: "/tools/text-analyzer",
  },

  // Developer Tools
  {
    id: "json-formatter",
    icon: FileJson,
    title: "JSON Formatter",
    description: "Format and validate JSON code beautifully",
    category: "Developer",
    path: "/tools/json-formatter",
  },
  {
    id: "color-picker",
    icon: Palette,
    title: "Color Picker",
    description: "Pick colors and get HEX, RGB, HSL values",
    category: "Developer",
    path: "/tools/color-picker",
  },
  {
    id: "unit-converter",
    icon: Activity,
    title: "Unit Converter",
    description: "Convert between different units of measurement",
    category: "Developer",
    path: "/tools/unit-converter",
  },

  // SEO Tools
  {
    id: "meta-tag-generator",
    icon: Tag,
    title: "Meta Tag Generator",
    description: "Generate SEO-friendly meta tags for your website",
    category: "SEO",
    path: "/tools/meta-tag-generator",
  },
  {
    id: "domain-age-checker",
    icon: Globe,
    title: "Domain Age Checker",
    description: "Check the age and registration date of any domain",
    category: "SEO",
    path: "/tools/domain-age-checker",
  },

  // Utility Tools
  {
    id: "qr-code-generator",
    icon: QrCode,
    title: "QR Code Generator",
    description: "Generate QR codes for URLs, text, and more",
    category: "Utility",
    path: "/tools/qr-code-generator",
  },
];

export const categories = [
  "All",
  "Finance",
  "Health",
  "Text",
  "Developer",
  "SEO",
  "Utility",
];
