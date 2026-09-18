import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { LiveImage } from "../components/LiveMedia";
import { Reveal } from "../components/Reveal";
import { getServiceById, slugify } from "../data/services";
import "./ServiceCategory.css";

export function ServiceCategoryPage() {
  const { serviceId = "" } = useParams();
  const { hash } = useLocation();
  const category = getServiceById(serviceId);

  const selectedItem = useMemo(() => {
    if (!category) return null;
    const id = hash.replace("#", "");
    if (!id) return null;
    return category.items.find((item) => slugify(item) === id) ?? null;
  }, [category, hash]);

  useEffect(() => {
    if (!selectedItem) return;
    const id = slugify(selectedItem);
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.classList.add("service-cat__item--flash");
    }, 80);
    return () => {
      window.clearTimeout(timer);
      document.getElementById(id)?.classList.remove("service-cat__item--flash");
    };
  }, [selectedItem]);

  if (!category) return <Navigate to="/services" replace />;

  const whyTitle = selectedItem
    ? `Why ${category.title} — ${selectedItem} matters`
    : `Why ${category.title} matters`;

  const whyLead = selectedItem
    ? (category.itemBlurbs[selectedItem] ??
      `${selectedItem} is a core capability within our ${category.title} practice for mission-critical environments.`)
    : category.whyImportant;

  return (
    <div className="service-cat">
      <section className="service-banner">
        <img src={category.bannerImage} alt="" className="service-banner__bg" />
        <div className="service-banner__overlay" />
        <div className="container service-banner__content">
          <p className="eyebrow">
            Services
            {selectedItem ? ` · ${category.title}` : ""}
          </p>
          <h1>{selectedItem ?? category.headline}</h1>
          <p>
            {selectedItem
              ? `${selectedItem} under ${category.title}. ${category.summary}`
              : category.summary}
          </p>
          <Link to="/contact" className="btn btn-primary">
            Talk to Our Experts <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container service-why-grid">
          <Reveal key={selectedItem ?? "main"}>
            <div>
              <h2 className="section-title" style={{ maxWidth: "28ch" }}>
                {whyTitle}
              </h2>
              <p className="section-lead">{whyLead}</p>
              {selectedItem ? (
                <p className="section-lead service-why-context">
                  Part of <strong>{category.title}</strong>. {category.whyImportant}
                </p>
              ) : null}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <LiveImage
              className="live-image--tall"
              src={category.chartImage}
              alt={`${category.title} impact`}
              caption="Impact & insight"
            />
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="panel service-highlight">
              <div>
                <p className="eyebrow">Our experience</p>
                <h2>{category.quote}</h2>
                <p>{category.experience}</p>
              </div>
              <Link to="/contact" className="btn btn-primary">
                Schedule a Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section service-subs">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Capabilities</p>
            <h2 className="section-title">Our {category.title} Services</h2>
            <p className="section-lead">{category.servicesIntro}</p>
          </Reveal>
          <div className="service-cat__items">
            {category.items.map((item, i) => {
              const active = selectedItem === item;
              return (
                <Reveal key={item} delay={i * 0.04}>
                  <article
                    id={slugify(item)}
                    className={`panel service-cat__item${active ? " service-cat__item--active" : ""}`}
                  >
                    <h3>{item}</h3>
                    <p>
                      {category.itemBlurbs[item] ??
                        `Part of our ${category.title} practice for mission-critical environments.`}
                    </p>
                    <Link to="/contact" className="service-cat__item-cta">
                      Enquire <ArrowRight size={14} />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Industries</p>
            <h2 className="section-title">Where this service creates impact</h2>
          </Reveal>
          <div className="service-industries">
            {category.industries.map((industry, i) => (
              <Reveal key={industry.id} delay={i * 0.04}>
                <Link
                  to={`/industries/${industry.id}`}
                  className="panel service-industry"
                >
                  <h3>{industry.title}</h3>
                  <p>{industry.text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-choose">
        <div className="container service-choose__grid">
          <Reveal>
            <div>
              <h2 className="section-title">Why Choose Cloudstrats?</h2>
              <p className="section-lead">{category.whyChoose}</p>
              <Link to="/contact" className="btn btn-primary">
                Talk to an Expert <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <LiveImage
              className="live-image--tall"
              src={category.whyImage}
              alt="Why choose Cloudstrats"
            />
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <p className="eyebrow">By the numbers</p>
            <h2 className="section-title">{category.title} by the Numbers</h2>
          </Reveal>
          <div className="service-stats">
            {category.stats.map((stat, i) => (
              <Reveal key={`${stat.value}-${i}`} delay={i * 0.05}>
                <div className="panel service-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="panel service-cat__cta">
              <div>
                <h2>{category.finalHeadline}</h2>
                <p>{category.finalText}</p>
              </div>
              <Link to="/contact" className="btn btn-primary">
                Get in Touch <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
