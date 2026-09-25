import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Network,
  Server,
  Shield,
  Sparkles,
} from "lucide-react";
import { Reveal } from "../components/Reveal";
import { MediaStrip } from "../components/LiveMedia";
import { PageBanner } from "../components/PageBanner";
import {
  aiInfraFeatures,
  serviceCategories,
  servicePath,
  slugify,
  socCapabilities,
  socOutcomes,
} from "../data/services";
import "./Services.css";

const icons = {
  server: Server,
  brain: Brain,
  network: Network,
  shield: Shield,
  spark: Sparkles,
} as const;

const stripItems = [
  {
    id: "ai-infrastructure",
    src: "/assets/services/ai-infra.png",
    alt: "AI infrastructure services",
    label: "AI Infrastructure",
  },
  {
    id: "data-ai-analytics",
    src: "/assets/services/data-ai.png",
    alt: "Data AI and analytics",
    label: "Data & Analytics",
  },
  {
    id: "c5i-networks",
    src: "/assets/services/c5i.png",
    alt: "C5I and mission networks",
    label: "C5I Networks",
  },
  {
    id: "cybersecurity",
    src: "/assets/services/cyber.png",
    alt: "Cybersecurity operations",
    label: "Cyber Security",
  },
  {
    id: "automation",
    src: "/assets/services/automation.png",
    alt: "Intelligent automation",
    label: "Automation",
  },
] as const;

export function Services() {
  return (
    <div className="services-page">
      <PageBanner
        eyebrow="Our Services"
        title="Comprehensive solutions. Measurable impact."
        lead="End-to-end technology solutions designed to power smarter, more secure businesses."
        image="/assets/lifestyle/data-infra.png"
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <MediaStrip
              items={stripItems.map((item) => ({
                ...item,
                to: servicePath(item.id),
              }))}
            />
          </Reveal>

          <Reveal>
            <div className="services-intro">
              <h2 className="section-title">
                Build A Future Ready Environment for Optimized Workflows
              </h2>
              <p className="section-lead">
                Cloudstrats delivers end-to-end technology solutions across AI
                infrastructure, data and analytics, mission-critical networks,
                cybersecurity, and intelligent automation. Our intention is to
                build scalable AI-ready infrastructure, turn data into actionable
                insights, modernise critical networks, strengthen security
                operations, and automate complex business processes. By bringing
                these capabilities together, Cloudstrats enables businesses and
                institutions to improve efficiency, strengthen resilience, and
                build a more intelligent, secure and future-ready technology
                ecosystem.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section hierarchy-section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Service Hierarchy</p>
            <h2 className="section-title">Main services & sub-services</h2>
            <p className="section-lead">
              Expanded content architecture designed for clarity, SEO depth and
              mission coverage.
            </p>
          </Reveal>

          <div className="hierarchy-list">
            {serviceCategories.map((cat, i) => {
              const Icon = icons[cat.icon as keyof typeof icons] ?? Server;
              return (
                <Reveal key={cat.id} delay={i * 0.05}>
                  <article id={cat.id} className="panel hierarchy-card">
                    <div className="hierarchy-card__top">
                      <span>
                        <Icon size={22} />
                      </span>
                      <div>
                        <Link to={servicePath(cat.id)}>
                          <h3>{cat.title}</h3>
                        </Link>
                        <p>{cat.summary}</p>
                      </div>
                    </div>
                    <ul>
                      {cat.items.map((item) => (
                        <li key={item}>
                          <Link to={`${servicePath(cat.id)}#${slugify(item)}`}>
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link to={servicePath(cat.id)} className="hierarchy-card__cta">
                      Open page <ArrowRight size={15} />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container deep-grid">
          <Reveal>
            <article className="panel deep-block">
              <p className="eyebrow">AI Infrastructure</p>
              <h2>High performance. Scalable by design. Intelligence at scale.</h2>
              <p>
                We build and operate secure, high-performance AI infrastructure
                for training, inference and high-density workloads — on-premise,
                edge, hybrid or cloud, including air-gapped environments.
              </p>
              <div className="grid-2 deep-features">
                {aiInfraFeatures.map((f) => (
                  <div key={f.title}>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="panel deep-block">
              <p className="eyebrow">Security Operations Centre</p>
              <h2>
                24×7 command. Complete visibility. Faster detection. Stronger
                response.
              </h2>
              <p>
                Continuous monitoring, deep threat visibility and rapid response
                to protect your digital infrastructure, users and data.
              </p>
              <ul className="chip-list">
                {socCapabilities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <div className="grid-2 soc-metrics">
                {socOutcomes.map((o) => (
                  <div key={o.label} className="soc-metric">
                    <strong>{o.value}</strong>
                    <span>{o.label}</span>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
