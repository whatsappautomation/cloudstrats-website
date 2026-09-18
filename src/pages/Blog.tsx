import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageBanner } from "../components/PageBanner";
import { Reveal } from "../components/Reveal";
import "./Blog.css";

const posts = [
  {
    title: "Building AI-Ready Data Centers for Mission Workloads",
    category: "AI Infrastructure",
    date: "Aug 2026",
    excerpt:
      "What defence and government programs need from high-density GPU infrastructure, storage and secure network fabric.",
  },
  {
    title: "Inside a Modern Security Operations Centre",
    category: "Cybersecurity",
    date: "Jul 2026",
    excerpt:
      "How 24×7 monitoring, AI/ML detection and rapid response reduce mean time to detect and contain threats.",
  },
  {
    title: "From Data Lakes to Decision Advantage",
    category: "Data & Analytics",
    date: "Jun 2026",
    excerpt:
      "Turning disparate operational data into predictive intelligence across mission and enterprise domains.",
  },
  {
    title: "C5I Network Modernization Essentials",
    category: "C5I",
    date: "May 2026",
    excerpt:
      "Interoperable command, control and secure communications for mission-critical national ecosystems.",
  },
];

export function Blog() {
  return (
    <div className="blog-page">
      <PageBanner
        eyebrow="Blog"
        title="Insights from the field"
        lead="Perspectives on AI infrastructure, cybersecurity, data platforms and mission-critical digital transformation."
        image="/assets/lifestyle/ai-briefing.png"
      />

      <section className="section">
        <div className="container blog-grid">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.05}>
              <article className="panel blog-card">
                <div className="blog-card__meta">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <Link to="/contact" className="blog-card__link">
                  Talk to an expert <ArrowRight size={14} />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
