export type ServiceCategory = {
  id: string;
  title: string;
  shortTitle?: string;
  headline: string;
  summary: string;
  quote: string;
  servicesIntro: string;
  servicesHeading?: string;
  industriesHeading?: string;
  whyTitle?: string;
  whyTag?: string;
  icon: string;
  items: string[];
  whyImportant: string;
  experience: string;
  itemBlurbs: Record<string, string>;
  industries: { id: string; title: string; text: string }[];
  whyChoose: string;
  stats: { value: string; label: string }[];
  finalHeadline: string;
  finalText: string;
  bannerImage: string;
  chartImage: string;
  cardImage?: string;
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

export const serviceCategories: ServiceCategory[] = [
  {
    id: "ai-infrastructure",
    title: "AI Infrastructure and Data Centres",
    shortTitle: "AI Infrastructure",
    headline: "Build Scalable AI Infrastructure for the Future of Enterprise Innovation",
    summary:
      "Adapt AI infrastructure solutions designed to support modern workloads, GPU-intensive computing, and next-generation data center environments.",
    quote:
      "Our AI infrastructure solutions ensure that innovation works hand in hand with performance, security, efficiency, and long-term scalability.",
    servicesIntro: "Solutions catered for excellence",
    servicesHeading: "Our AI Infrastructure & Data Center Services",
    industriesHeading: "AI Infrastructure Catered for Key Industries",
    whyTitle: "AI Infrastructure – the Foundation of Modern Success",
    whyTag: "Why AI Infrastructure",
    icon: "server",
    items: [
      "Building AI Data Centers",
      "GPU Infrastructure",
      "AI/HPC Infrastructure",
      "Cloud & Hybrid Cloud Infrastructure",
      "Data Center Modernization",
      "AI Infrastructure Management",
    ],
    whyImportant:
      "As organizations invest in artificial intelligence, machine learning, generative AI, and advanced analytics, traditional IT environments often struggle to meet the growing demands for compute power, scalability, and performance. Modern enterprises require AI-ready infrastructure that can support LLMs, AI training environments, inference workloads, high-performance computing (HPC), and data-intensive applications.",
    experience:
      "Cloudstrats helps businesses design, deploy, modernize, and manage AI infrastructure to ensure that innovation works hand in hand with performance, security, operational efficiency, and long-term scalability.",
    itemBlurbs: {
      "Building AI Data Centers":
        "Create future-ready AI data centers designed to support high-density computing, advanced cooling requirements, AI workloads, and exponential growth.",
      "GPU Infrastructure":
        "Deploy high-performance GPU infrastructure for AI workloads, machine learning, deep learning, and generative AI applications.",
      "AI/HPC Infrastructure":
        "Build premium AI and HPC infrastructure, equipped to handle compute-intensive workloads, advanced analytics, and large-scale AI model training.",
      "Cloud & Hybrid Cloud Infrastructure":
        "Develop flexible cloud and hybrid infrastructure for AI applications and enterprise workloads to ensure optimum performance, cost, security, and scalability.",
      "Data Center Modernization":
        "Transform legacy infrastructure into modern, AI-ready environments for improved efficiency, optimized resources, and enhanced security.",
      "AI Infrastructure Management":
        "Ensure optimal performance, availability, and security through proactive AI infrastructure management services.",
    },
    industries: [
      {
        id: "defense-aerospace",
        title: "Defence & Aerospace",
        text: "Support mission-critical operations, advanced simulations, intelligence systems, and real-time analytics with secure AI infrastructure built for demanding environments.",
      },
      {
        id: "government-public-sector",
        title: "Government & Public Sector",
        text: "Enable smart governance, citizen services, digital transformation initiatives, and data-driven decision-making with scalable and secure AI infrastructure solutions.",
      },
      {
        id: "banking-financial-services",
        title: "Banking & Financial Services",
        text: "Strengthen systems with fraud detection, risk analysis, algorithmic trading, customer intelligence, and regulatory compliance.",
      },
      {
        id: "healthcare-life-sciences",
        title: "Healthcare & Life Sciences",
        text: "Accelerate medical research, diagnostic imaging, drug discovery, genomics, and patient care applications with high-performance AI computing infrastructure.",
      },
      {
        id: "energy-utilities",
        title: "Energy & Utilities",
        text: "Improve efficiency, predictive maintenance, asset monitoring, and demand forecasting using AI infrastructure solutions capable of processing large volumes of data.",
      },
      {
        id: "smart-cities-infrastructure",
        title: "Smart Cities & Infrastructure",
        text: "Support intelligent transportation systems, public safety initiatives, urban planning, and IoT ecosystems with resilient AI-ready infrastructure.",
      },
    ],
    whyChoose:
      "With years of experience delivering AI infrastructure solutions, Cloudstrats helps organizations build and manage scalable AI ecosystems aligned with their business objectives. Our team combines expertise across AI data centers, GPU infrastructure, cloud environments, infrastructure modernization, and managed services to deliver solutions that support both current requirements and future growth.\n\nFrom strategy and architecture to deployment and ongoing management, we provide end-to-end support throughout the AI infrastructure lifecycle.",
    stats: [
      {
        value: "80%+",
        label:
          "Of large-scale company data tends to be unstructured, increasing the need for scalable AI-ready infrastructure.",
      },
      {
        value: "10x Faster",
        label:
          "Parallel processing can be achieved with AI data centres having GPU infrastructure for AI workloads.",
      },
      {
        value: "Petabyte-Scale",
        label:
          "Storage and data processing requirements are becoming the norm for AI-driven enterprises.",
      },
      {
        value: "24×7",
        label:
          "Monitoring and management capabilities help maximize infrastructure availability and performance.",
      },
      {
        value: "Multi-Cloud",
        label:
          "Environments are increasingly adopted to support AI scalability, resilience, and flexibility.",
      },
      {
        value: "Enterprise-Grade",
        label:
          "Modern security and governance frameworks help protect critical AI infrastructure including data centres.",
      },
    ],
    finalHeadline: "A Future-Ready Foundation for Exponential Growth",
    finalText: "Ready to optimize your CPUs and data centres? Let’s get started.",
    bannerImage: "/assets/services/ai-infra.png",
    chartImage: "/assets/services/ai-chip.png",
    cardImage: "/assets/services/ai-infra.png",
    whyImage: "/assets/lifestyle/nasscom-award.png",
  },
  {
    id: "data-ai-analytics",
    title: "Data AI & Analytics",
    shortTitle: "Data & Analytics",
    whyTag: "Why Data & Analytics",
    headline: "Transform data into Actionable Intelligence",
    summary:
      "Harness analytics from modern data platforms, and AI-powered business insights, that drive smarter decision making.",
    quote:
      "Identify trends and implement deliberate improvements faster than your competitors with Data, AI and Analytics.",
    servicesIntro: "Collect, store, analyse and implement",
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
      "In today's digital economy, data is one of the most valuable business assets. However, many organizations struggle with fragmented systems, isolated data, outdated infrastructure, and limited visibility into business performance. Modern Data, AI & Analytics solutions help organizations unify data sources, improve decision-making, automate processes, uncover hidden opportunities, and accelerate innovation.",
    experience:
      "Cloudstrats helps organizations build scalable data ecosystems that transform raw data into meaningful insights, enabling faster growth, greater efficiency, and sustainable competitive advantage.",
    itemBlurbs: {
      "Data Engineering":
        "Build reliable, scalable, and efficient data pipelines that collect, process, transform, and deliver high-quality data across your organization.",
      "Data Platforms & Data Lakes":
        "Create modern data platforms and centralized data lakes that unify structured and unstructured data from multiple sources.",
      "Business Intelligence":
        "Turn complex business data into actionable insights through intuitive dashboards, reporting systems, and visualization tools.",
      "AI & ML Solutions":
        "Analyse stored data to enhance automation, improve operational efficiency, customer experiences, and uncover valuable business insights.",
      "Generative AI":
        "Enhance productivity, automate content generation, improve customer engagement, and streamline business operations with Generative AI.",
      "Predictive Analytics":
        "Anticipate future outcomes and make proactive business decisions using advanced predictive analytics.",
      "Data Strategy & Modernization":
        "Modernize legacy data environments and establish a future-ready data strategy that supports business growth, innovation, and digital transformation initiatives.",
    },
    industries: [
      {
        id: "defense-aerospace",
        title: "Defence & Aerospace",
        text: "Enable mission-critical decision-making, predictive maintenance, intelligence analysis, and operational optimization through advanced analytics and AI.",
      },
      {
        id: "government-public-sector",
        title: "Government & Public Sector",
        text: "Improve public services, enhance transparency, optimize resource allocation, and support data-driven policymaking.",
      },
      {
        id: "banking-financial-services",
        title: "Banking & Financial Services",
        text: "Adapt AI-powered analytics to strengthen fraud detection, risk management, customer intelligence, regulatory compliance, and financial forecasting.",
      },
      {
        id: "manufacturing",
        title: "Manufacturing",
        text: "Adapt real time data analytics to optimize production processes, improve quality control, enable predictive maintenance, and increase operational efficiency.",
      },
      {
        id: "retail-consumer",
        title: "Retail & Consumer",
        text: "Improve inventory management, optimize pricing strategies, and enhance demand forecasting using advanced analytics and AI solutions.",
      },
      {
        id: "transportation-logistics",
        title: "Transportation & Logistics",
        text: "Increase supply chain visibility, optimize route planning, and improve fleet management, through predictive analytics and intelligent data platforms.",
      },
    ],
    whyChoose:
      "Cloudstrats brings 15+ years of experience in delivering enterprise-scale data, AI, and analytics solutions across diverse industries. Our team combines expertise in data engineering, analytics, artificial intelligence, cloud technologies, and modernization initiatives to help organizations unlock measurable business value from their data. From strategy and architecture to implementation and ongoing optimization, we provide end-to-end support to help organizations build intelligent, data-driven enterprises that are ready for the future.",
    stats: [
      {
        value: "3x Faster",
        label:
          "Decision-making can be achieved through real-time business intelligence and analytics platforms.",
      },
      {
        value: "70%+",
        label:
          "Of enterprise AI initiatives depend on strong data foundations and effective data management practices.",
      },
      {
        value: "10,00,000+",
        label:
          "Of records can be processed and analysed in real time through modern data engineering architectures.",
      },
    ],
    finalHeadline: "Data Modernisation Services; Powered by AI",
    finalText: "Prioritize data-driven decision making to have an edge over your competition.",
    bannerImage: "/assets/lifestyle/analytics-dashboard.png",
    chartImage: "/assets/lifestyle/ai-briefing.png",
    cardImage: "/assets/services/data-ai.png",
    whyImage: "/assets/lifestyle/team-collab.png",
  },
  {
    id: "c5i-networks",
    title: "C5I and Mission Critical Networks",
    shortTitle: "C5I Networks",
    whyTag: "Why C5I Networks",
    headline: "C5I Networks for Mission Critical Networks",
    summary:
      "Enable secure, resilient, and mission-ready operations with advanced C5I systems.",
    quote:
      "Connecting Intelligence, Communication, and Operational Excellence with C5I Infrastructure services.",
    servicesIntro:
      "Build secure, scalable, resilient C5I networks for mission critical communication systems.",
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
      "Modern defence organizations, government agencies, critical infrastructure providers, and public safety institutions operate in increasingly complex and dynamic environments. The ability to collect, process, share, and act on information in real time is essential for operational success. C5I (Command, Control, Communications, Computers, Cyber, and Intelligence) systems serve as the backbone of mission-critical operations by enabling seamless communication, rapid decision-making, enhanced situational awareness, and coordinated responses across distributed teams and assets.",
    experience:
      "Cloudstrats helps organizations design, integrate, modernize, and manage secure mission-critical networks that support operational readiness, information superiority, and resilient communications in the most demanding environments.",
    itemBlurbs: {
      "C5I Network Integration":
        "Integrate communications, intelligence, surveillance, command, and operational systems into a unified network environment.",
      "Command & Control Systems":
        "Build advanced command and control systems that provide centralized operational oversight, real-time monitoring, and coordinated mission execution.",
      "Secure Communications":
        "Protect critical information and ensure uninterrupted communication through secure communication networks designed for mission-critical environments.",
      "Network Modernization":
        "Modernize legacy network environments for improved performance, scalability, security, and resilience.",
      "Intelligence & Situational Awareness":
        "Gain real-time visibility into operational environments through advanced intelligence and situational awareness solutions.",
      "Mission-Critical Infrastructure":
        "Design and deploy resilient infrastructure that supports continuous operations and high availability.",
    },
    industries: [
      {
        id: "defense-aerospace",
        title: "Defence & Aerospace",
        text: "Support military operations, intelligence gathering, surveillance systems, tactical communications, and command structures with highly resilient C5I networks.",
      },
      {
        id: "government-public-sector",
        title: "Government & Public Sector",
        text: "Enable secure emergency response coordination, critical communications, and digital governance initiatives through mission-critical infrastructure.",
      },
      {
        id: "healthcare-life-sciences",
        title: "Healthcare & Life Sciences",
        text: "Ensure uninterrupted communication, secure data exchange, emergency preparedness, and operational continuity for healthcare and life science departments.",
      },
      {
        id: "energy-utilities",
        title: "Energy & Utilities",
        text: "Strengthen operational resilience, infrastructure monitoring, incident response, and asset management through secure communication networks.",
      },
      {
        id: "transportation-logistics",
        title: "Transportation & Logistics",
        text: "Improve fleet coordination, operational visibility, asset tracking, and incident management with integrated communication, and monitoring systems.",
      },
      {
        id: "telecommunications",
        title: "Telecommunications",
        text: "Enhance network reliability, security, service delivery, and operational management through mission-critical communication systems.",
      },
    ],
    whyChoose:
      "Cloudstrats brings extensive experience in delivering secure network integration, infrastructure modernization to complex operational environments. Our team adapts their expertise in C5I systems to help organizations improve operational efficiency, resilience, and readiness. From planning and architecture to deployment, modernization, and ongoing support, we provide end-to-end capabilities that help organizations maintain reliable, secure, and mission-ready networks.",
    stats: [
      {
        value: "30-40%",
        label:
          "Reduced finished product wastage experienced by core industries after adapting C5I networks",
      },
      {
        value: "90%",
        label:
          "Accuracy experienced in C5I forecasting tasks pertaining to sales and inventory storage",
      },
      {
        value: "30%",
        label:
          "Reduction in output time after integrating tactical and integrated communication systems",
      },
    ],
    finalHeadline: "Modernise Networks for Mission Success",
    finalText: "Ready to build resilient infrastructure with C5I?",
    bannerImage: "/assets/lifestyle/ai-workshop.png",
    chartImage: "/assets/lifestyle/boardroom-skyline.png",
    cardImage: "/assets/services/c5i.png",
    whyImage: "/assets/lifestyle/digital-consult.png",
  },
  {
    id: "cybersecurity",
    title: "Cyber Security Operations",
    shortTitle: "Cyber Security",
    whyTag: "Why Cyber Security",
    headline: "Strengthen Security Posture with Around the Clock Monitoring",
    summary:
      "Cybersecurity services built for threat detection, incident response, and better preparedness against unprecedented threats.",
    quote:
      "Build a Stronger, More Proactive Security Defence with our Cybersecurity Operations Services",
    servicesIntro: "Our Cybersecurity Operations Services",
    icon: "shield",
    items: [
      "Security Operations Centre (SOC)",
      "Managed Security Services",
      "SIEM & Threat Detection",
      "Threat Intelligence",
      "Incident Response",
      "Cloud Security",
      "Network Security",
      "Cybersecurity Assessment",
    ],
    whyImportant:
      "Cyber threats are becoming more sophisticated, persistent, and difficult to detect. At the same time, expanding cloud environments, connected networks, remote workforces, and growing volumes of enterprise data are creating new attack surfaces for organizations to secure. Traditional security approaches are no longer enough. Organizations need continuous visibility, real-time threat detection, proactive threat intelligence, and rapid incident response to identify and contain threats before they impact critical operations.",
    experience:
      "Cloudstrats provides comprehensive cybersecurity services that combine security operations, threat detection, intelligence, and response capabilities to help organizations strengthen cyber resilience and protect their most critical assets.",
    itemBlurbs: {
      "Security Operations Centre (SOC)":
        "Ensure proactive threat protection with around the clock monitoring and expert oversight.",
      "Managed Security Services":
        "Ensure continuous monitoring, threat detection, security management, and operational support via managed security.",
      "SIEM & Threat Detection":
        "Bring security data together and identify potential threats with SIEM and threat detection solutions.",
      "Threat Intelligence":
        "Receive and act on real-time threat intelligence provided by cybersecurity experts with 10+ years of experience.",
      "Incident Response":
        "Detect, contain, investigate, and recover from cybersecurity incidents while minimizing operational disruption and reducing potential business impact.",
      "Cloud Security":
        "Strengthen cloud security monitoring and maintain secure, resilient environments with comprehensive cloud security monitoring services.",
      "Network Security":
        "Identify network-based threats and strengthen protection across increasingly distributed environments.",
      "Cybersecurity Assessment":
        "Understand your security posture and identify areas for improvement through comprehensive cybersecurity maturity assessment.",
    },
    industries: [
      {
        id: "defense-aerospace",
        title: "Defence & Aerospace",
        text: "Protect mission-critical systems, sensitive information, communications, and operational infrastructure.",
      },
      {
        id: "government-public-sector",
        title: "Government & Public Sector",
        text: "Strengthen the security of government systems, citizen data, digital services, and critical infrastructure.",
      },
      {
        id: "banking-financial-services",
        title: "Banking & Financial Services",
        text: "Implement around the clock monitoring to protect financial systems, customer data, digital banking environments, and transaction infrastructure.",
      },
      {
        id: "healthcare-life-sciences",
        title: "Healthcare & Life Sciences",
        text: "Adapt network, cloud and cybersecurity services to secure sensitive patient data, connected medical environments, research systems, and healthcare infrastructure.",
      },
      {
        id: "energy-utilities",
        title: "Energy & Utilities",
        text: "Protect industrial systems, critical infrastructure, and networks from cyber threats through proactive monitoring, threat intelligence, and managed security services.",
      },
      {
        id: "transportation-logistics",
        title: "Transportation & Logistics",
        text: "Secure connected transportation systems, logistics networks, operational technologies, and sensitive business data with continuous threat detection.",
      },
    ],
    whyChoose:
      "With years of experience delivering enterprise technology, infrastructure, cloud, and security solutions, Cloudstrats brings a holistic approach to cybersecurity operations. We help enterprises move from reactive security system to proactive cyber defense by combining technology, security expertise, continuous monitoring, and actionable intelligence. We excel at building security strategies aligned with your business goals and risk environment.",
    stats: [
      {
        value: "$10.5 trillion",
        label:
          "Projected costs of damage caused globally to enterprises through cyber crimes",
      },
      {
        value: "$4.4 million",
        label: "Global average of data breach costs",
      },
      {
        value: "$1.9 billion",
        label:
          "Average annual savings, by organizations that deploy AI and security operations",
      },
    ],
    finalHeadline: "A Proactive Solution to Cyber Threats",
    finalText: "Ready to build a security-first system? Let’s get started.",
    bannerImage: "/assets/lifestyle/digital-consult.png",
    chartImage: "/assets/lifestyle/process-automation.png",
    cardImage: "/assets/services/cyber.png",
    whyImage: "/assets/lifestyle/boardroom-skyline.png",
  },
  {
    id: "automation",
    title: "Intelligent Automation and Digital Transformation",
    shortTitle: "Automation",
    whyTag: "Why Automation",
    headline: "Transform Operations with AI-Powered Automation",
    summary:
      "Incorporate intelligent workflows, and digital transformation solutions that improve efficiency, agility, and business performance.",
    quote:
      "Digital transformation is no longer simply about adopting new technology. It is about fundamentally improving how work gets done.",
    servicesIntro: "Intelligent Automation & Digital Transformation Services",
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
      "Organizations are under constant pressure to improve productivity, reduce operational costs, and deliver better customer experiences. Yet repetitive processes, disconnected systems, manual workflows, and legacy operations tend to prevent businesses from achieving these goals. Intelligent automation combines artificial intelligence, machine learning, robotic process automation, workflow automation, and advanced technologies to transform how businesses operate.",
    experience:
      "Instead of simply automating repetitive tasks, Cloudstrats creates intelligent, connected processes that understand information, make decisions, and adapt to changing business requirements.",
    itemBlurbs: {
      "Business Process Automation":
        "Automate repetitive and time-consuming business processes to improve efficiency and reduce manual intervention; enabling teams to focus on core activities.",
      "AI Automation":
        "Combine AI-powered decision-making, intelligent workflows, and machine learning to automate complex processes and improve team productivity.",
      "Intelligent Document Processing":
        "Transform documents and unstructured information into actionable data with intelligent document processing (IDP).",
      "AI Agents":
        "Our AI agent solutions help enterprises automate business processes and create AI-powered digital workers for a range of operational use cases.",
      "RPA":
        "Streamline data entry and automate rule-based, repetitive tasks across enterprise applications with Robotic Process Automation (RPA).",
      "AIOps":
        "Our AIOps solutions help automate monitoring, identify anomalies, correlate events, predict potential issues, and improve the performance of complex IT environments.",
      "IT Operations Automation":
        "Our IT operations automation services help enterprises reduce manual intervention, accelerate issue resolution, and create more efficient and resilient IT environments.",
      "Workflow Optimization":
        "Combine process analysis, automation, AI, and orchestration to redesign workflows for greater efficiency, speed, and scalability.",
    },
    industries: [
      {
        id: "defense-aerospace",
        title: "Defence & Aerospace",
        text: "Automate critical processes, IT operations, document workflows, and data-intensive tasks while improving operational efficiency for faster decision-making.",
      },
      {
        id: "government-public-sector",
        title: "Government & Public Sector",
        text: "Streamline citizen services, administrative workflows, document processing, and back-office operations through intelligent automation.",
      },
      {
        id: "banking-financial-services",
        title: "Banking & Financial Services",
        text: "Automate transaction processing, customer onboarding, compliance workflows, document processing, and repetitive operational tasks.",
      },
      {
        id: "energy-utilities",
        title: "Energy & Utilities",
        text: "Optimize asset management, field operations, IT processes, service workflows, and data-driven operations with intelligent automation.",
      },
      {
        id: "transportation-logistics",
        title: "Transportation & Logistics",
        text: "Automate shipment processing, documentation, scheduling, customer service, fleet operations, and supply chain workflows.",
      },
      {
        id: "smart-cities-infrastructure",
        title: "Smart Cities & Infrastructure",
        text: "Enable smarter public infrastructure through automation of monitoring, maintenance, service delivery, and operational workflows.",
      },
    ],
    whyChoose:
      "With years of experience delivering enterprise technology, AI, infrastructure, and digital transformation solutions, Cloudstrats helps organizations move beyond isolated automation projects and toward scalable enterprise automation strategies. Our years of experience has taught us how to approach automation holistically—identifying the right processes to automate, selecting the right technologies, integrating them with existing systems, and helping organizations scale automation across the enterprise.",
    stats: [
      {
        value: "80%",
        label:
          "Activities across company operations can benefit from some level of AI automation.",
      },
      {
        value: "65%",
        label:
          "Organizations are regularly using generative AI in at least one business function—nearly double the share reported ten months earlier.",
      },
      {
        value: "30%",
        label:
          "Estimated potential share of current work hours could be automated by 2030",
      },
    ],
    finalHeadline: "Make Automation the Engine of Digital Transformation",
    finalText:
      "The future of enterprise operations is intelligent, connected, and increasingly automated.",
    bannerImage: "/assets/lifestyle/automation-rpa.png",
    chartImage: "/assets/lifestyle/process-automation.png",
    cardImage: "/assets/services/automation.png",
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

export const aiInfraFeatures = [
  { title: "GPU Acceleration", text: "High-density GPU clusters for training and inference." },
  { title: "Compute Platforms", text: "Scalable platforms for AI, HPC and mission workloads." },
  { title: "Storage Architecture", text: "High-throughput storage for data-intensive AI pipelines." },
  { title: "Network Fabric", text: "Low-latency fabrics for distributed AI and C5I systems." },
];

export const socCapabilities = [
  "24×7 Monitoring",
  "Threat Detection",
  "Incident Response",
  "Threat Intelligence",
  "SIEM Analytics",
  "Vulnerability Management",
];

export const socOutcomes = [
  { value: "Faster", label: "Reduced dwell time" },
  { value: "Stronger", label: "Faster containment" },
  { value: "Clearer", label: "Improved visibility" },
  { value: "Safer", label: "Stronger compliance posture" },
];
