import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  ArrowRight,
  Brain,
  Network,
  Server,
  Shield,
  Sparkles,
} from "lucide-react";
import { Reveal } from "../components/Reveal";
import {
  getServiceById,
  serviceCategories,
  servicePath,
  slugify,
} from "../data/services";
import "./ServiceCategory.css";

const icons = {
  server: Server,
  brain: Brain,
  network: Network,
  shield: Shield,
  spark: Sparkles,
} as const;

export function ServiceCategoryPage() {
  const { serviceId = "" } = useParams();
  const location = useLocation();
  const category = getServiceById(serviceId);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash, serviceId]);

  if (!category) {
    return <Navigate to="/services" replace />;
  }

  const Icon = icons[category.icon as keyof typeof icons] ?? Server;
  const others = serviceCategories.filter((c) => c.id !== category.id);

  return (
    <div className="service-cat">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <div className="service-cat__title-row">
            <span className="service-cat__icon">
              <Icon size={26} />
            </span>
            <h1 className="section-title">{category.title}</h1>
          </div>
          <p className="section-lead">{category.summary}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <p className="eyebrow">Capabilities</p>
            <h2 className="section-title" style={{ maxWidth: "20ch" }}>
              What&apos;s included
            </h2>
          </Reveal>

          <div className="service-cat__items">
            {category.items.map((item, i) => (
              <Reveal key={item} delay={i * 0.04}>
                <article id={slugify(item)} className="panel service-cat__item">
                  <h3>{item}</h3>
                  <p>
                    Part of our {category.title} practice — delivered with
                    strategy, design and managed operations for mission-critical
                    environments.
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="panel service-cat__cta">
              <div>
                <h2>Talk to our specialists</h2>
                <p>
                  Share your requirements and we&apos;ll map the right solution
                  under {category.title}.
                </p>
              </div>
              <Link to="/contact" className="btn btn-primary">
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section service-cat__others">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Explore more</p>
            <h2 className="section-title">Other service areas</h2>
          </Reveal>
          <div className="service-cat__others-grid">
            {others.map((cat, i) => {
              const OtherIcon = icons[cat.icon as keyof typeof icons] ?? Server;
              return (
                <Reveal key={cat.id} delay={i * 0.04}>
                  <Link to={servicePath(cat.id)} className="panel service-cat__other">
                    <span>
                      <OtherIcon size={18} />
                    </span>
                    <strong>{cat.title}</strong>
                    <em>
                      {cat.items.length} capabilities <ArrowRight size={14} />
                    </em>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
