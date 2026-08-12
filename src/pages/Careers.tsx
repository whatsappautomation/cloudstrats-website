import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { company } from "../data/company";
import "./Careers.css";

const openings = [
  {
    title: "AI / ML Engineer",
    location: "Mumbai / Hybrid",
    type: "Full-time",
    summary:
      "Build and deploy AI solutions across vision, language and speech for mission-critical customers.",
  },
  {
    title: "Cybersecurity Analyst (SOC)",
    location: "Pan-India",
    type: "Full-time",
    summary:
      "Monitor, detect and respond to threats in 24×7 security operations environments.",
  },
  {
    title: "Cloud & Data Center Engineer",
    location: "Delhi / On-site",
    type: "Full-time",
    summary:
      "Design, deploy and operate AI-ready infrastructure, GPU clusters and hybrid cloud platforms.",
  },
  {
    title: "Business Development Manager",
    location: "Mumbai / Delhi",
    type: "Full-time",
    summary:
      "Grow defence, government and enterprise engagements across Cloudstrats practices.",
  },
];

export function Careers() {
  return (
    <div className="careers-page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Careers</p>
          <h1 className="section-title">Build with purpose. Grow with India.</h1>
          <p className="section-lead">
            Join Cloudstrats and help power mission-critical AI, cloud, data and
            cybersecurity programs for defence, government and critical infrastructure.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="careers-grid">
            {openings.map((job, i) => (
              <Reveal key={job.title} delay={i * 0.05}>
                <article className="panel careers-card">
                  <div className="careers-card__meta">
                    <span>{job.type}</span>
                    <span>{job.location}</span>
                  </div>
                  <h2>{job.title}</h2>
                  <p>{job.summary}</p>
                  <a
                    className="btn btn-primary"
                    href={`mailto:${company.contacts.email}?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                  >
                    Apply Now <ArrowRight size={16} />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="panel careers-cta">
              <div>
                <h2>Don&apos;t see the right role?</h2>
                <p>
                  Send your profile to {company.contacts.email} — we&apos;re always
                  looking for builders across AI, security, cloud and consulting.
                </p>
              </div>
              <Link to="/contact" className="btn btn-ghost">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
