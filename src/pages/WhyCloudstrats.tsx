import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { company } from "../data/company";
import "./WhyCloudstrats.css";

const reasons = [
  {
    title: "Mission First",
    text: "We understand the unique needs of Defence, Security and Critical Infrastructure — and design for the most demanding environments.",
  },
  {
    title: "Security by Design",
    text: "Built-in security, air-gapped ready architecture and a zero-trust approach across every layer.",
  },
  {
    title: "End-to-End Capability",
    text: "Consult, design, build, integrate, operate and support — under one trusted partner.",
  },
  {
    title: "Proven & Reliable",
    text: "Delivered high-availability and high-performance solutions in the most demanding environments.",
  },
  {
    title: "AI & Automation Led",
    text: "Leverage AI, automation and analytics for smarter operations and faster decision-making.",
  },
  {
    title: "24×7 Support",
    text: "Round-the-clock monitoring and rapid response with a nationwide support footprint.",
  },
];

export function WhyCloudstrats() {
  return (
    <div className="why-page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Why Cloudstrats?</p>
          <h1 className="section-title">Deep domain expertise. Proven delivery.</h1>
          <p className="section-lead">
            Trusted by India&apos;s protectors and critical stakeholders — we combine
            mission understanding, cutting-edge technology and an unwavering commitment
            to deliver secure, intelligent and resilient infrastructure.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-3 why-stats">
            {company.stats.slice(0, 6).map((s, i) => (
              <Reveal key={s.label} delay={i * 0.04}>
                <div className="panel why-stat">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="why-reasons">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.05}>
                <article className="panel why-reason">
                  <h2>{r.title}</h2>
                  <p>{r.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="panel why-diff">
              <p className="eyebrow">Differentiators</p>
              <h2>What sets us apart</h2>
              <div className="why-chips">
                {company.differentiators.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="panel why-cta">
              <div>
                <h2>Your mission. Our commitment.</h2>
                <p>Securing today. Empowering tomorrow. Strengthening India.</p>
              </div>
              <Link to="/contact" className="btn btn-primary">
                Talk to Us <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
