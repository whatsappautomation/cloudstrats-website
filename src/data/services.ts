export type ServiceCategory = {
  id: string;
  title: string;
  summary: string;
  icon: string;
  items: string[];
  whyImportant: string;
  experience: string;
  itemBlurbs: Record<string, string>;
  industries: { id: string; title: string; text: string }[];
  whyChoose: string;
  stats: { value: string; label: string }[];
  bannerImage: string;
  chartImage: string;
  whyImage: string;
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

const sharedIndustries = [
  {
    id: "defense-aerospace",
    title: "Defense & Aerospace",
    text: "Mission-ready architectures that protect sensitive operations and accelerate decision cycles.",
  },
  {
    id: "government-public-sector",
    title: "Government & Public Sector",
    text: "Secure, scalable platforms that keep citizen and critical programs always available.",
  },
  {
    id: "banking-financial-services",
    title: "Banking & Financial Services",
    text: "Analytics, automation and security that reduce risk while improving customer outcomes.",
  },
  {
    id: "healthcare-life-sciences",
    title: "Healthcare & Life Sciences",
    text: "Reliable monitoring and predictive insight that support better care delivery.",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    text: "Smarter workflows and uptime improvements through AI, data and automation.",
  },
  {
    id: "energy-utilities",
    title: "Energy & Utilities",
    text: "Operational intelligence and resilient infrastructure for grids, plants and field assets.",
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: "ai-infrastructure",
    title: "AI Infrastructure & Data Centers",
    summary:
      "High-performance, secure and scalable AI-ready infrastructure for training, inference and mission workloads.",
    icon: "server",
    items: [
      "AI Data Center Design & Build",
      "GPU Infrastructure",
      "AI/HPC Infrastructure",
      "Cloud & Hybrid Cloud Infrastructure",
      "Data Center Modernization",
      "AI Infrastructure Management",
    ],
    whyImportant:
      "AI outcomes depend on infrastructure quality. Purpose-built GPU clusters, storage and secure fabrics turn ambitious models into reliable production systems — with uptime, sovereignty and scale designed in from day one.",
    experience:
      "Cloudstrats designs, builds and operates AI-ready data centers and hybrid platforms for defence, government and enterprise — combining GPU acceleration, resilient architecture and 24×7 managed operations.",
    itemBlurbs: {
      "AI Data Center Design & Build":
        "End-to-end design and build for high-density, secure AI facilities.",
      "GPU Infrastructure":
        "NVIDIA-optimized clusters engineered for training and inference at scale.",
      "AI/HPC Infrastructure":
        "Compute platforms built for high-performance AI and scientific workloads.",
      "Cloud & Hybrid Cloud Infrastructure":
        "Flexible on-prem, edge, hybrid and cloud deployment models.",
      "Data Center Modernization":
        "Upgrade legacy estates for density, efficiency and AI readiness.",
      "AI Infrastructure Management":
        "24×7 monitoring, optimization and lifecycle management by specialists.",
    },
    industries: sharedIndustries,
    whyChoose:
      "From strategy to operations, Cloudstrats brings deep domain expertise, secure-by-design engineering and proven delivery for mission-critical AI infrastructure.",
    stats: [
      { value: "24×7", label: "Managed Operations" },
      { value: "100+", label: "Expert Professionals" },
      { value: "50+", label: "Mission Engagements" },
      { value: "15+", label: "Years of Experience" },
    ],
    bannerImage: "/assets/lifestyle/data-infra.png",
    chartImage: "/assets/lifestyle/analytics-dashboard.png",
    whyImage: "/assets/lifestyle/strategy-review.png",
  },
  {
    id: "data-ai-analytics",
    title: "Data, AI & Analytics",
    summary:
      "Unify, govern and enrich data to deliver real-time insights, predictive intelligence and operational advantage.",
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
    whyImportant:
      "Decisions improve when data becomes intelligence. Modern lakes, governed pipelines and AI models help organizations anticipate risk, unlock insight and act faster across every mission and business domain.",
    experience:
      "Our data and AI practice turns fragmented sources into trusted platforms — with analytics, ML and generative AI that drive measurable outcomes.",
    itemBlurbs: {
      "Data Engineering": "Reliable pipelines that ingest, cleanse and prepare data at scale.",
      "Data Platforms & Data Lakes":
        "Lakehouse foundations for storage, discovery and governed access.",
      "Business Intelligence": "Dashboards and reporting that put insight in decision-makers’ hands.",
      "AI & ML Solutions": "Models that detect patterns, forecast outcomes and automate decisions.",
      "Generative AI": "Language and content intelligence tailored to enterprise workflows.",
      "Predictive Analytics": "Forward-looking insight that improves planning and response.",
      "Data Strategy & Modernization":
        "Roadmaps that modernize estates and unlock long-term data value.",
    },
    industries: sharedIndustries,
    whyChoose:
      "Cloudstrats combines data engineering depth with AI delivery experience — helping you move from raw information to decisions you can trust.",
    stats: [
      { value: "250+", label: "Customer Engagements" },
      { value: "100+", label: "Consultants" },
      { value: "15+", label: "Years of Experience" },
      { value: "24×7", label: "Support Readiness" },
    ],
    bannerImage: "/assets/lifestyle/analytics-dashboard.png",
    chartImage: "/assets/lifestyle/ai-briefing.png",
    whyImage: "/assets/lifestyle/team-collab.png",
  },
  {
    id: "c5i-networks",
    title: "C5I & Mission-Critical Networks",
    summary:
      "Secure, interoperable command-and-control networks for defence, homeland security and critical national operations.",
    icon: "network",
    items: [
      "C5I Network Integration",
      "Command & Control Systems",
      "Secure Communications",
      "Network Modernization",
      "Intelligence & Situational Awareness",
      "Mission-Critical Infrastructure",
    ],
    whyImportant:
      "Mission superiority depends on connected, trusted networks. C5I integration unifies command, communications and intelligence so teams share situational awareness and act with confidence.",
    experience:
      "We integrate and modernize mission-critical networks with security, interoperability and resilience designed for the most demanding operating environments.",
    itemBlurbs: {
      "C5I Network Integration":
        "Seamless Command, Control, Communications, Computers and Intelligence integration.",
      "Command & Control Systems":
        "Platforms that coordinate operations with clarity and speed.",
      "Secure Communications":
        "Protected voice, data and mission channels across contested environments.",
      "Network Modernization":
        "Upgrade paths that improve performance without compromising assurance.",
      "Intelligence & Situational Awareness":
        "Fused insight that strengthens real-time operational understanding.",
      "Mission-Critical Infrastructure":
        "Always-on foundations for high-stakes national and enterprise missions.",
    },
    industries: sharedIndustries,
    whyChoose:
      "Cloudstrats understands mission domains — delivering interoperable C5I and network programs with security and operational excellence at the core.",
    stats: [
      { value: "50+", label: "Mission Programs" },
      { value: "100%", label: "Security Focus" },
      { value: "24×7", label: "Operational Support" },
      { value: "15+", label: "Years Domain Depth" },
    ],
    bannerImage: "/assets/lifestyle/ai-workshop.png",
    chartImage: "/assets/lifestyle/boardroom-skyline.png",
    whyImage: "/assets/lifestyle/digital-consult.png",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Security Operations",
    summary:
      "Continuous monitoring, deep threat visibility and rapid response to protect digital infrastructure around the clock.",
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
    whyImportant:
      "Threats move fast. A modern SOC with AI-assisted detection, threat intel and rapid response reduces dwell time and protects mission continuity before damage spreads.",
    experience:
      "Cloudstrats delivers managed security operations with continuous monitoring, investigation excellence and response playbooks tuned for critical environments.",
    itemBlurbs: {
      "Security Operations Center (SOC)":
        "24×7 command for detection, investigation and coordinated response.",
      "Managed Security Services":
        "Expert-led protection across endpoints, networks, cloud and users.",
      "SIEM & Threat Detection":
        "AI/ML analytics that prioritize real threats over noise.",
      "Threat Intelligence":
        "Actionable intel that hardens posture before incidents escalate.",
      "Incident Response":
        "Rapid containment, forensics and recovery to restore operations.",
      "Cloud Security": "Controls and monitoring for hybrid and multi-cloud estates.",
      "Network Security": "Segmentation, visibility and defence for critical fabrics.",
      "Cybersecurity Assessment":
        "Risk and readiness reviews that strengthen compliance and resilience.",
    },
    industries: sharedIndustries,
    whyChoose:
      "Security is not a bolt-on for Cloudstrats — it is built into delivery, operations and culture across every engagement.",
    stats: [
      { value: "<15m", label: "Mean Time to Detect" },
      { value: "<60m", label: "Mean Time to Respond" },
      { value: "24×7", label: "SOC Coverage" },
      { value: "100+", label: "Security Specialists" },
    ],
    bannerImage: "/assets/lifestyle/digital-consult.png",
    chartImage: "/assets/lifestyle/process-automation.png",
    whyImage: "/assets/lifestyle/boardroom-skyline.png",
  },
  {
    id: "automation",
    title: "Intelligent Automation & Digital Transformation",
    summary:
      "Automation, AI agents and AIOps that reduce friction, accelerate outcomes and optimize operations.",
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
    whyImportant:
      "Manual bottlenecks slow growth. Intelligent automation frees teams, improves accuracy and scales processes so organizations deliver faster with less operational drag.",
    experience:
      "We design automation programs that combine RPA, AI agents, document intelligence and AIOps — focused on measurable efficiency and reliable operations.",
    itemBlurbs: {
      "Business Process Automation":
        "Streamline core workflows end-to-end with measurable cycle-time gains.",
      "AI Automation": "Embed intelligence into processes that need judgment at scale.",
      "Intelligent Document Processing":
        "Extract, classify and route documents with speed and accuracy.",
      "AI Agents": "Goal-driven assistants that execute multi-step enterprise tasks.",
      "RPA": "Reliable bots for high-volume, rules-based operational work.",
      "AIOps": "Intelligent IT operations that detect, correlate and remediate faster.",
      "IT Operations Automation":
        "Automate provisioning, monitoring and routine infra tasks.",
      "Workflow Optimization":
        "Redesign processes for clarity, speed and sustainable improvement.",
    },
    industries: sharedIndustries,
    whyChoose:
      "Cloudstrats pairs automation technology with outcome-driven delivery — so transformation shows up in throughput, quality and cost.",
    stats: [
      { value: "60%", label: "Growth Momentum" },
      { value: "15+", label: "Years Experience" },
      { value: "250+", label: "Engagements" },
      { value: "24×7", label: "Operational Support" },
    ],
    bannerImage: "/assets/lifestyle/automation-rpa.png",
    chartImage: "/assets/lifestyle/process-automation.png",
    whyImage: "/assets/lifestyle/team-meeting.png",
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
