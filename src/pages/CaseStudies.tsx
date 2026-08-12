import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import "./CaseStudies.css";

const cases = [
  {
    title: "AI Infrastructure for Mission Training & Inference",
    sector: "Defense & Aerospace",
    outcome: "High-density GPU clusters with secure, air-gapped ready operations.",
  },
  {
    title: "National-Scale Security Operations Centre",
    sector: "Government & Public Sector",
    outcome: "24×7 monitoring with faster detection and coordinated incident response.",
  },
  {
    title: "Data Factory for Operational Intelligence",
    sector: "Energy & Utilities",
    outcome: "Unified lakes, analytics and predictive models for grid and asset insight.",
  },
  {
    title: "C5I Network Integration Program",
    sector: "Homeland Security",
    outcome: "Interoperable command-and-control communications across agencies.",
  },
  {
    title: "Intelligent Automation for Citizen Services",
    sector: "Smart Cities & Infrastructure",
    outcome: "Automated workflows and AI assistants that improve service delivery.",
  },
  {
    title: "Fraud & Risk Analytics Platform",
    sector: "Banking & Financial Services",
    outcome: "Real-time detection models and governed data pipelines for BFSI.",
  },
];

export function CaseStudies() {
  return (
    <div className="cases-page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Case Studies</p>
          <h1 className="section-title">Outcomes that matter</h1>
          <p className="section-lead">
            Selected engagements across defence, government, enterprise and critical
            infrastructure — where Cloudstrats delivered measurable impact.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container cases-grid">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.04}>
              <article className="panel case-card">
                <span>{c.sector}</span>
                <h2>{c.title}</h2>
                <p>{c.outcome}</p>
                <Link to="/contact" className="case-card__link">
                  Discuss a similar program <ArrowRight size={14} />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
