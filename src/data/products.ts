export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  offerings: string[];
  traits: string[];
};

export const products: Product[] = [
  {
    id: "abha",
    name: "Abha AI Platform",
    tagline: "IaaS · AIaaS · GPUaaS · GCC",
    description:
      "Cloud-native, secure-by-design AI platform delivering Infrastructure as a Service, AI as a Service, GPU as a Service and Government Community Cloud for mission workloads.",
    offerings: [
      "Infrastructure as a Service (IaaS)",
      "AI as a Service (AIaaS)",
      "GPU as a Service (GPUaaS)",
      "Government Community Cloud (GCC)",
    ],
    traits: ["Cloud Native", "Secure by Design", "AI Powered", "Mission Focused"],
  },
  {
    id: "miraya",
    name: "Miraya Data Factory",
    tagline: "Data Lake · Analytics · Predictive Modelling",
    description:
      "An end-to-end data factory that unifies lakes, warehouses, marts and analytics — with governance and DevOps — so organizations turn data into decisions.",
    offerings: [
      "Common Data Framework",
      "Data Lake House",
      "Analytics & Insights",
      "Predictive Modeling",
      "Data Integration & Orchestration",
      "Data Governance",
      "Miraya DevOps",
    ],
    traits: ["Governed", "Scalable", "AI/ML Ready", "Insight Driven"],
  },
  {
    id: "narad",
    name: "Narad Security System",
    tagline: "SOC · Threat Intel · CTEM · C5I",
    description:
      "Mission-grade security platform spanning Security Operations Center, Threat Intelligence, Continuous Threat Exposure Management and C5I network security.",
    offerings: [
      "Security Operations Center",
      "Threat Intel Platform",
      "Continuous Threat Exposure Management (CTEM)",
      "C5I Network Security",
    ],
    traits: ["Secure", "Interoperable", "Always On", "Zero Trust"],
  },
];

export const aiSuites = [
  {
    id: "nayan",
    name: "Nayan AI",
    focus: "Computer Vision & Visual Intelligence",
    description:
      "Vision AI for monitoring, detection, attendance, quality control and city-scale situational awareness.",
  },
  {
    id: "akshar",
    name: "Akshar AI",
    focus: "Language, Documents & Generative Text",
    description:
      "NLP and generative AI for summarization, translation, document intelligence and multilingual communication.",
  },
  {
    id: "swar",
    name: "Swar AI",
    focus: "Speech, Voice & Audio Intelligence",
    description:
      "Speech AI for transcription, voice bots, noise cancellation and multilingual voice experiences.",
  },
] as const;
