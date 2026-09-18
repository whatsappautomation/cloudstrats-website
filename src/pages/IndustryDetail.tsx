import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageBanner } from "../components/PageBanner";
import { Reveal } from "../components/Reveal";
import {
  getIndustryById,
  industryPath,
  industrySectors,
} from "../data/industries";
import "./IndustryDetail.css";

export function IndustryDetail() {
  const { industryId = "" } = useParams();
  const industry = getIndustryById(industryId);

  if (!industry) return <Navigate to="/industries" replace />;

  const others = industrySectors.filter((s) => s.id !== industry.id);

  return (
    <div className="industry-detail">
      <PageBanner
        eyebrow="Industries"
        title={industry.title}
        lead={industry.summary}
        image="/assets/hero/defence-hero.png"
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <article className="panel industry-detail__body">
              <h2>How Cloudstrats helps</h2>
              <p>
                We bring AI infrastructure, data platforms, cybersecurity, C5I
                networks and intelligent automation to {industry.title} —
                designed for scale, security and measurable outcomes.
              </p>
              <ul>
                <li>Strategy, design and managed operations</li>
                <li>Secure, sovereign and mission-ready architectures</li>
                <li>AI, analytics and automation tailored to sector needs</li>
                <li>24×7 support across India and global offices</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">
                Talk to Us <ArrowRight size={16} />
              </Link>
            </article>
          </Reveal>

          <Reveal>
            <div className="industry-detail__more">
              <p className="eyebrow">Explore more</p>
              <h2 className="section-title">Other industries</h2>
              <div className="industry-detail__grid">
                {others.map((s) => (
                  <Link key={s.id} to={industryPath(s.id)} className="panel">
                    <strong>{s.title}</strong>
                    <span>
                      Learn more <ArrowRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
