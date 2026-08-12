export type ServiceCategory = {
  id: string;
  title: string;
  summary: string;
  icon: string;
  items: string[];
};

export const servicePillars = [
  {
    id: "strategy",
    title: "Strategy",
    text: "Plan & roadmap mission-ready digital programs.",
  },
  {
    id: "design",
    title: "Design",
    text: "Engineer & integrate secure, scalable architectures.",
  },
  {
    id: "management",
    title: "Management",
    text: "Operate, optimize and evolve for lasting impact.",
  },
] as const;

export const highlightServices = [
  {
    id: "ai-dc",
    title: "Build AI Data Centers",
    text: "High-performance, secure and scalable AI-ready infrastructure.",
  },
  {
    id: "soc",
    title: "Run Security Operation Centers",
    text: "24×7 monitoring, threat detection, investigation and response.",
  },
  {
    id: "data",
    title: "Leverage Data for Insights",
    text: "Turn data into intelligence with analytics, AI/ML and predictive insights.",
  },
  {
    id: "c5i",
    title: "Integrate C5I Networks",
    text: "Seamless integration of Command, Control, Communications, Computers & Intelligence.",
  },
  {
    id: "automate",
    title: "Automate & Optimize Business",
    text: "Automation, orchestration and optimization for agility, resilience and efficiency.",
  },
] as const;

export const serviceCategories: ServiceCategory[] = [
  {
    id: "ai-infrastructure",
    title: "AI Infrastructure & Data Centers",
    summary:
      "We build and operate secure, high-performance AI infrastructure that powers training, inference and high-density workloads for mission-critical environments.",
    icon: "server",
    items: [
      "AI Data Center Design & Build",
      "GPU Infrastructure",
      "AI/HPC Infrastructure",
      "Cloud & Hybrid Cloud Infrastructure",
      "Data Center Modernization",
      "AI Infrastructure Management",
    ],
  },
  {
    id: "data-ai-analytics",
    title: "Data, AI & Analytics",
    summary:
      "From disparate data to actionable intelligence — unifying, governing and enriching data to deliver real-time insights and operational advantage.",
    icon: "brain",
    items: [
      "Data Engineering",
      "Data Platforms & Data Lakes",
      "Business Intelligence",
      "AI & ML Solutions",
      "Generative AI",
      "Predictive Analytics",
      "Data Strategy & Modernization",
    ],
  },
  {
    id: "c5i-networks",
    title: "C5I & Mission-Critical Networks",
    summary:
      "Secure, interoperable command-and-control networks engineered for defence, homeland security and critical national operations.",
    icon: "network",
    items: [
      "C5I Network Integration",
      "Command & Control Systems",
      "Secure Communications",
      "Network Modernization",
      "Intelligence & Situational Awareness",
      "Mission-Critical Infrastructure",
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Security Operations",
    summary:
      "Continuous monitoring, deep threat visibility and rapid response to protect digital infrastructure, users and data — around the clock.",
    icon: "shield",
    items: [
      "Security Operations Center (SOC)",
      "Managed Security Services",
      "SIEM & Threat Detection",
      "Threat Intelligence",
      "Incident Response",
      "Cloud Security",
      "Network Security",
      "Cybersecurity Assessment",
    ],
  },
  {
    id: "automation",
    title: "Intelligent Automation & Digital Transformation",
    summary:
      "Automation, AI agents and AIOps that reduce friction, accelerate outcomes and optimize mission and business operations.",
    icon: "spark",
    items: [
      "Business Process Automation",
      "AI Automation",
      "Intelligent Document Processing",
      "AI Agents",
      "RPA",
      "AIOps",
      "IT Operations Automation",
      "Workflow Optimization",
    ],
  },
];

export function getServiceById(id: string) {
  return serviceCategories.find((c) => c.id === id);
}

export function servicePath(id: string) {
  return `/services/${id}`;
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const socCapabilities = [
  "Continuous Monitoring",
  "Threat Detection (AI/ML)",
  "Investigation & Analysis",
  "Incident Response",
  "Threat Intelligence",
  "Risk & Compliance",
  "Executive Reporting",
] as const;

export const socOutcomes = [
  { label: "Mean Time to Detect", value: "< 15 mins" },
  { label: "Mean Time to Respond", value: "< 60 mins" },
  { label: "Coverage", value: "24×7 Global" },
  { label: "Team", value: "DID Certified Analysts" },
] as const;

export const aiInfraFeatures = [
  {
    title: "GPU Acceleration",
    text: "NVIDIA GPU optimized systems for AI/ML at massive scale.",
  },
  {
    title: "Compute Platforms",
    text: "Enterprise-grade servers engineered for compute-intensive workloads.",
  },
  {
    title: "Storage Architecture",
    text: "High-performance storage for data lakes, models and datasets.",
  },
  {
    title: "Network Fabric",
    text: "Low-latency, high-bandwidth networks for AI clusters and data movement.",
  },
] as const;
