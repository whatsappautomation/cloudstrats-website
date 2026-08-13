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
import {
  aiInfraFeatures,
  highlightServices,
  serviceCategories,
  servicePath,
  servicePillars,
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

export function Services() {
  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Our Services</p>
          <h1 className="section-title">Comprehensive solutions. Measurable impact.</h1>
          <p className="section-lead">
            Strategy · Design · Management — end-to-end services for mission
            success across AI infrastructure, data, C5I, cybersecurity and
            intelligent automation.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <MediaStrip
              items={[
                {
                  src: "/assets/lifestyle/data-infra.png",
                  alt: "AI infrastructure services",
                  label: "AI Infrastructure",
                },
                {
                  src: "/assets/lifestyle/ai-briefing.png",
                  alt: "Mission intelligence briefing",
                  label: "Data & Mission Intel",
                },
                {
                  src: "/assets/lifestyle/automation-rpa.png",
                  alt: "Automation services",
                  label: "Automation",
                },
              ]}
            />
          </Reveal>
          <div className="grid-3" style={{ marginTop: "1.25rem" }}>
            {servicePillars.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06}>
                <article className="panel services-pillar">
                  <span>0{i + 1}</span>
                  <h2>{p.title}</h2>
                  <p>{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="services-highlights">
            {highlightServices.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.05}>
                <article className="panel services-highlight">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
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
              <h2>24×7 command. Complete visibility. Faster detection. Stronger response.</h2>
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
