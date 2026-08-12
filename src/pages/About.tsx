import { Reveal } from "../components/Reveal";
import { company } from "../data/company";
import { domains } from "../data/industries";
import "./About.css";

export function About() {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About Us</p>
          <h1 className="section-title">Accelerate transformation with AI innovation</h1>
          <p className="section-lead">{company.description}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <article className="panel about-story">
              <h2>Who we are</h2>
              <p>{company.about}</p>
              <p className="about-mission">
                <strong>Mission:</strong> {company.mission}
              </p>
            </article>
          </Reveal>

          <div className="grid-3 about-stats">
            {company.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.04}>
                <div className="panel about-stat">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-pillars-section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">What drives us</p>
            <h2 className="section-title">Mission focused. AI driven. Secure by design.</h2>
          </Reveal>
          <div className="grid-2 about-pillars">
            {company.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <article className="panel about-pillar">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Values</p>
            <h2 className="section-title">{company.motto}</h2>
          </Reveal>
          <div className="grid-3 values-grid">
            {company.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <article className="panel value-card">
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-split">
          <Reveal>
            <article className="panel">
              <h2>Trusted by India&apos;s critical stakeholders</h2>
              <div className="chip-cloud">
                {company.stakeholders.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="panel">
              <h2>Powering India&apos;s mission domains</h2>
              <div className="domain-list">
                {domains.map((d) => (
                  <div key={d.title}>
                    <h3>{d.title}</h3>
                    <p>{d.items.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Trusted · Certified · Compliant</p>
            <h2 className="section-title">Quality you can rely on</h2>
          </Reveal>
          <div className="cert-row">
            {company.certifications.map((c, i) => (
              <Reveal key={c} delay={i * 0.03}>
                <div className="panel cert">{c}</div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="panel presence-block">
              <h3>Our presence</h3>
              <div className="chip-cloud">
                {company.presence.map((p) => (
                  <span key={p}>{p}</span>
                ))}
              </div>
              <div className="diff-row">
                {company.differentiators.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
