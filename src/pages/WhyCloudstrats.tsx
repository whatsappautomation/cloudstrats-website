import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import "./WhyCloudstrats.css";

export function WhyCloudstrats() {
  return (
    <div className="why-page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Why Cloudstrats?</p>
          <h1 className="section-title">Outcome-driven technology, under one roof</h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <article className="panel why-lead">
              <p>
                CloudStrats helps organizations turn complex technology challenges into
                measurable business outcomes by bringing AI infrastructure, data and
                analytics, C5I networks, cybersecurity, and intelligent automation together
                under one roof. From building AI-ready infrastructure and transforming
                enterprise data into actionable intelligence to securing mission-critical
                environments and automating business operations, CloudStrats combines deep
                technology expertise with an outcome-driven approach—helping businesses
                build smarter, operate more securely, make better decisions, and scale
                faster.
              </p>
            </article>
          </Reveal>

          <Reveal>
            <div className="panel why-cta">
              <div>
                <h2>Ready to talk?</h2>
                <p>Share your priorities and we&apos;ll map the right path forward.</p>
              </div>
              <Link to="/contact" className="btn btn-primary">
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
