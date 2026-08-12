export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  items: string[];
  traits: string[];
};

export const products: Product[] = [
  {
    id: "abha",
    name: "Abha AI Platform",
    tagline: "IaaS · AIaaS · GPUaaS · GCC",
    description:
      "Cloud-native, secure-by-design AI platform delivering Infrastructure as a Service, AI as a Service, GPU as a Service and Government Community Cloud for mission workloads.",
    items: ["IaaS", "AIaaS", "GPUaaS", "GCC"],
    traits: ["Cloud Native", "Secure by Design", "AI Powered", "Mission Focused"],
  },
  {
    id: "miraya",
    name: "Miraya Data Factory",
    tagline: "Data Lake · Analytics · Predictive Modelling",
    description:
      "An end-to-end data factory that unifies lakes, warehouses, marts and analytics — with governance and DevOps — so organizations turn data into decisions.",
    items: ["Data Lake", "Analytics", "Predictive Modelling"],
    traits: ["Governed", "Scalable", "AI/ML Ready", "Insight Driven"],
  },
  {
    id: "narad",
    name: "Narad Security System",
    tagline: "Security Ops Center · Threat Intel · CTEM · C5i",
    description:
      "Mission-grade security platform spanning Security Operations Center, Threat Intelligence, Continuous Threat Exposure Management and C5I network security.",
    items: ["Security Ops Center", "Threat Intel", "CTEM", "C5i"],
    traits: ["Secure", "Interoperable", "Always On", "Zero Trust"],
  },
];

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

export function productPath(id: string) {
  return `/products/${id}`;
}

export function productSlugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

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
