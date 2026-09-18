import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PageBanner } from "../components/PageBanner";
import { Reveal } from "../components/Reveal";
import {
  aksharUseCases,
  industryPath,
  industrySectors,
  mirayaUseCases,
  nayanUseCases,
  swarUseCases,
} from "../data/industries";
import "./Industries.css";

const tabs = [
  { id: "nayan", label: "Nayan AI", data: nayanUseCases },
  { id: "akshar", label: "Akshar AI", data: aksharUseCases },
  { id: "swar", label: "Swar AI", data: swarUseCases },
  { id: "miraya", label: "Miraya", data: mirayaUseCases },
] as const;

export function Industries() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("nayan");
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div className="industries-page">
      <PageBanner
        eyebrow="Industries & Use Cases"
        title="Intelligent solutions across key sectors"
        lead="From defence and aerospace to BFSI, healthcare, smart cities and critical infrastructure — Cloudstrats delivers measurable outcomes."
        image="/assets/hero/defence-hero.png"
      />

      <section className="section">
        <div className="container">
          <div className="sectors-grid">
            {industrySectors.map((sector, i) => (
              <Reveal key={sector.id} delay={i * 0.03}>
                <Link to={industryPath(sector.id)} className="panel sector-card">
                  <h2>{sector.title}</h2>
                  <p>{sector.summary}</p>
                  <span>
                    Explore <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section usecase-section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Product Use Cases</p>
            <h2 className="section-title">Industry applications by platform</h2>
          </Reveal>

          <div className="tabs" role="tablist" aria-label="AI platform use cases">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={active === tab.id}
                className={active === tab.id ? "is-active" : ""}
                onClick={() => setActive(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="usecase-grid" role="tabpanel">
            {current.data.map((row, i) => (
              <Reveal key={`${current.id}-${row.industry}`} delay={i * 0.03}>
                <article className="panel usecase-card">
                  <h3>{row.industry}</h3>
                  <ul>
                    {row.cases.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
