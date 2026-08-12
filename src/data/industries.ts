export type IndustryUseCase = {
  industry: string;
  cases: string[];
};

export const practices = [
  {
    id: "enterprise",
    title: "Enterprise & Industry",
    items: ["Manufacturing", "Services", "Healthcare", "eCommerce"],
  },
  {
    id: "bfsi",
    title: "Banking & Finance",
    items: ["Banking", "Financial Services", "Insurance", "FinTech"],
  },
  {
    id: "energy",
    title: "Oil, Gas, Energy & Utilities",
    items: ["Oil & Gas", "Energy", "Power", "Utilities"],
  },
  {
    id: "defence",
    title: "Defence & National Security",
    items: [
      "Defence & Para-Military",
      "Police & Homeland Security",
      "Intelligence Agencies",
      "Space & Critical Research",
    ],
  },
  {
    id: "government",
    title: "Government & Critical Infrastructure",
    items: [
      "Public Sector Enterprises",
      "Central Government",
      "State Government",
      "Public Private Partnerships",
    ],
  },
] as const;

export const domains = [
  {
    title: "Defence",
    items: ["Army", "Navy", "Air Force"],
  },
  {
    title: "Homeland Security",
    items: ["CISF", "BSF", "CRPF", "ITBP", "NSG & More"],
  },
  {
    title: "Government",
    items: ["Central Departments", "State Departments"],
  },
  {
    title: "PSUs & Critical Infrastructure",
    items: ["Public Sector", "Energy", "Transport", "Telecom & More"],
  },
] as const;

export const nayanUseCases: IndustryUseCase[] = [
  {
    industry: "Healthcare",
    cases: ["Patient Monitoring", "Medical Staff Attendance", "Sudden Fall Detection"],
  },
  {
    industry: "Education",
    cases: [
      "Student360",
      "Command Control Centre",
      "Student Attendance Management",
      "Visitor Management",
    ],
  },
  {
    industry: "Manufacturing",
    cases: [
      "Smart Manufacturing",
      "Digital Twin",
      "Quality Control",
      "Downtime Automation",
      "Fire Prevention",
    ],
  },
  {
    industry: "Oil & Gas",
    cases: ["Advanced Analytics AI/ML", "Oil Field Monitoring"],
  },
  {
    industry: "Transport",
    cases: [
      "Drone Analytics",
      "ITMS",
      "Safe City",
      "Citizen Helplines",
      "CVTMS & JMS",
      "Process Automation",
      "ANPR",
      "Public Grievance Management",
    ],
  },
  {
    industry: "E-Government",
    cases: ["Citizen Services Automation", "Command Control Centre"],
  },
  {
    industry: "Agriculture",
    cases: ["Smart Agriculture", "Crop Detection", "Helpline & Grievance AI"],
  },
  {
    industry: "Defense",
    cases: ["Mission Planning", "Terrain Monitoring", "Suspect Tracking", "Incident Detection"],
  },
  {
    industry: "Energy & Utilities",
    cases: ["Quality Control", "Intelligent Grid Monitoring", "Intrusion Prevention"],
  },
  {
    industry: "BFSI",
    cases: [
      "Customer Insights",
      "Fraud Detection",
      "Faceless Governance",
      "Financial Forecasting",
      "E-KYC",
    ],
  },
];

export const aksharUseCases: IndustryUseCase[] = [
  {
    industry: "Healthcare",
    cases: ["Medical Record Summarization", "Patient Feedback Analysis"],
  },
  {
    industry: "Education",
    cases: [
      "Language Learning Assistance",
      "Individualized Learning Plans",
      "Analytics and Reports",
    ],
  },
  {
    industry: "Manufacturing",
    cases: ["Quality Control Documentation", "Inventory Description Generation"],
  },
  {
    industry: "Oil & Gas",
    cases: ["Customer Satisfaction Feedback Analytics", "Vehicle Maintenance Schedule"],
  },
  {
    industry: "Transport",
    cases: [
      "Real-time Updates via SMS",
      "Smart Invoice Management",
      "Translate Legal Documents",
    ],
  },
  {
    industry: "E-Government",
    cases: ["Citizen Grievance Analytics", "Citizen Helpline Chatbot"],
  },
  {
    industry: "Agriculture",
    cases: ["Crop Consulting", "Market Intelligence", "Text Analytics for Research"],
  },
  {
    industry: "Defense",
    cases: ["DMS", "Social Media Analytics", "Forged Document Prevention"],
  },
  {
    industry: "Energy & Utilities",
    cases: ["Predictive Maintenance", "Forecast Energy Consumption Patterns"],
  },
  {
    industry: "BFSI",
    cases: [
      "Product Description Generation",
      "Customer Review Analysis",
      "Multi-Language Communication",
      "Document Encryption",
    ],
  },
];

export const swarUseCases: IndustryUseCase[] = [
  {
    industry: "Healthcare",
    cases: ["Transcribe Patient Interactions", "Virtual Health Assistants"],
  },
  {
    industry: "Education",
    cases: [
      "Feedback Assessment",
      "Adaptive Learning",
      "Smart Student",
      "Teacher Training & Professional Development",
    ],
  },
  {
    industry: "Manufacturing",
    cases: ["Transcribe Safety Briefings", "Translation for Global Workforce"],
  },
  {
    industry: "Oil & Gas",
    cases: [
      "Multilingual Helpline",
      "Field Report Transcription",
      "Noise Cancellation for Workstations",
    ],
  },
  {
    industry: "Transport",
    cases: ["Transcribe Air Traffic Communications", "Multilingual Interactions"],
  },
  {
    industry: "E-Government",
    cases: [
      "Metadata Tagging",
      "Audio Analytics",
      "Digital Court Live Translation",
      "Contact Language Translation",
    ],
  },
  {
    industry: "Agriculture",
    cases: ["Voice Bot for Farmers' Queries", "Omni Channel Integration", "Multilingual Responses"],
  },
  {
    industry: "Defense",
    cases: ["Noise Cancellation during Military Communication", "Post Mission Debriefing"],
  },
  {
    industry: "Energy & Utilities",
    cases: ["Customer Service Voice Bot", "Transcribe & Translate Customer Service Calls"],
  },
  {
    industry: "BFSI",
    cases: ["Voice Banking Assistants", "Call Analytics"],
  },
];

export const mirayaUseCases: IndustryUseCase[] = [
  {
    industry: "Healthcare",
    cases: ["Hospital Management", "Pharmaceutical Sales Analysis", "Case-based Analysis"],
  },
  {
    industry: "Education",
    cases: ["School Management", "Staff Management", "Student Report"],
  },
  {
    industry: "Manufacturing",
    cases: ["Quality Analysis", "Production & Sales Analysis", "Health & Safety Analysis"],
  },
  {
    industry: "Oil & Gas",
    cases: ["Gas Station Monitoring System", "Upstream/Downstream Analysis"],
  },
  {
    industry: "Transport",
    cases: [
      "Route Optimization",
      "Vehicle Status and Information",
      "Predictive Maintenance",
      "Drivers' Scorecard",
      "Integrated Transportation Management System",
      "Air Quality Impact Analysis",
    ],
  },
  {
    industry: "E-Government",
    cases: [
      "Citizen Grievance",
      "Scheme Management",
      "Sentiment Analysis CM Dashboard",
      "Price Monitoring System",
    ],
  },
  {
    industry: "E-Commerce",
    cases: [
      "Inventory Management",
      "Sales Analysis",
      "Customer Footfall Analysis",
      "Overall E-commerce Analysis",
    ],
  },
  {
    industry: "Defense",
    cases: ["Crime Management", "Border Management", "Surveillance System"],
  },
  {
    industry: "Energy & Utilities",
    cases: [
      "Energy Generation, Transmission, Distribution Analysis",
      "Finance, Operation and Grievance Analysis",
    ],
  },
  {
    industry: "BFSI",
    cases: [
      "Bank Management",
      "Credit & Risk Analysis",
      "Insurance Analysis",
      "Financial Reporting",
      "Insurance Incentive Reporting",
    ],
  },
];
