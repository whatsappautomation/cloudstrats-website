import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { LiveImage } from "../components/LiveMedia";
import { PageBanner } from "../components/PageBanner";
import { Reveal } from "../components/Reveal";
import { company } from "../data/company";
import { servicePath } from "../data/services";
import "./About.css";

export function About() {
  return (
    <div className="about-page">
      <PageBanner
        eyebrow="About Cloudstrats"
        title={company.headline}
        lead={company.description}
        image="/assets/lifestyle/boardroom-skyline.png"
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="section-lead">{company.about}</p>
            <p className="about-punch">{company.punchline}</p>
          </Reveal>

          <Reveal>
            <div className="about-visual">
              <LiveImage
                className="live-image--wide"
                src="/assets/lifestyle/team-cover.png"
                alt="Cloudstrats team"
                caption="The Cloudstrats team"
              />
            </div>
          </Reveal>

          <Reveal>
            <article className="panel about-story">
              <h2>Our Approach</h2>
              <p>{company.mission}</p>
              <ul className="about-list">
                {company.approach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section about-pillars-section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Our Capabilities</p>
            <h2 className="section-title">End-to-end transformation under one partner</h2>
          </Reveal>
          <div className="about-capabilities">
            {company.capabilities.map((cap, i) => (
              <Reveal key={cap.id} delay={i * 0.05}>
                <article className="panel about-capability">
                  <h3>{cap.title}</h3>
                  <p>{cap.text}</p>
                  <Link to={servicePath(cap.id)} className="about-capability__cta">
                    {cap.cta} <ArrowRight size={14} />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Our Values</p>
            <h2 className="section-title">The Cloudstrats Advantage</h2>
            <p className="section-lead">
              One Partner. Multiple Transformation Capabilities.
            </p>
            <p className="section-lead">{company.advantageIntro}</p>
          </Reveal>
          <div className="grid-3 values-grid">
            {company.advantage.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="panel value-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Our Approach</p>
            <h2 className="section-title">Discover. Strategize. Transform. Optimize.</h2>
          </Reveal>
          <div className="grid-2 about-method">
            {company.method.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.05}>
                <article className="panel about-pillar">
                  <span className="about-step">0{i + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-pillars-section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Our Values</p>
            <h2 className="section-title">{company.motto}</h2>
          </Reveal>
          <div className="grid-2 about-pillars">
            {company.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <article className="panel about-pillar">
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="panel about-future">
              <h2>{company.futureHeadline}</h2>
              <p>{company.futureText}</p>
              <p className="about-punch">{company.futurePunch}</p>
              <Link to="/contact" className="btn btn-primary">
                Talk to our experts <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <div className="panel presence-block" style={{ marginTop: "1.25rem" }}>
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
              <div className="cert-row" style={{ marginTop: "1rem" }}>
                {company.certifications.map((c) => (
                  <div key={c} className="panel cert">
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
