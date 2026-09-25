import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  HeartPulse,
  Landmark,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { LiveImage } from "../components/LiveMedia";
import { Reveal } from "../components/Reveal";
import { company } from "../data/company";
import { getServiceById, slugify } from "../data/services";
import "./ServiceCategory.css";

const industryIcons = {
  "defense-aerospace": Shield,
  "government-public-sector": Landmark,
  "banking-financial-services": Building2,
  "healthcare-life-sciences": HeartPulse,
  "energy-utilities": Zap,
  "smart-cities-infrastructure": Sparkles,
} as const;

export function ServiceCategoryPage() {
  const { serviceId = "" } = useParams();
  const { hash } = useLocation();
  const category = getServiceById(serviceId);
  const [sent, setSent] = useState(false);

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
      document.getElementById(id)?.classList.add("service-cat__card--flash");
    }, 80);
    return () => {
      window.clearTimeout(timer);
      document.getElementById(id)?.classList.remove("service-cat__card--flash");
    };
  }, [selectedItem]);

  if (!category) return <Navigate to="/services" replace />;

  const shortTitle = category.shortTitle ?? category.title;
  const whyTag = category.whyTag ?? `Why ${shortTitle}`;
  const whyTitle = selectedItem
    ? selectedItem
    : (category.whyTitle ?? shortTitle);
  const whyLead = selectedItem
    ? (category.itemBlurbs[selectedItem] ??
      `${selectedItem} is a core capability within our ${category.title} practice for mission-critical environments.`)
    : category.whyImportant;
  const cardImage = category.cardImage ?? category.bannerImage;
  const whyParas = category.whyChoose
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const org = String(data.get("organization") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(
      `Cloudstrats enquiry — ${shortTitle} — ${name}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${org}\nService: ${category.title}\n\n${message}`,
    );
    window.location.href = `mailto:${company.contacts.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="service-cat">
      <section className="service-banner">
        <img src={category.bannerImage} alt="" className="service-banner__bg" />
        <div className="service-banner__overlay" />
        <div className="container service-banner__content">
          <p className="eyebrow">
            Services → {shortTitle}
            {selectedItem ? ` → ${selectedItem}` : ""}
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
              <p className="eyebrow">{whyTag}</p>
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
              className="live-image--tall live-image--contain"
              src={category.chartImage}
              alt={`${category.title} impact`}
              caption="Impact & insight"
            />
          </Reveal>
        </div>
      </section>

      <section className="service-quote">
        <div className="container service-quote__inner">
          <Reveal>
            <span className="service-quote__mark" aria-hidden>
              “
            </span>
            <h2>{category.quote}</h2>
            <Link to="/contact" className="btn btn-primary">
              Schedule a Consultation <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section service-subs">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Capabilities</p>
            <h2 className="section-title">
              {category.servicesHeading ?? `Our ${category.title} Services`}
            </h2>
            <p className="section-lead">{category.servicesIntro}</p>
          </Reveal>
          <div className="service-cat__items">
            {category.items.map((item, i) => {
              const active = selectedItem === item;
              return (
                <Reveal key={item} delay={i * 0.04}>
                  <article
                    id={slugify(item)}
                    className={`service-cat__card${active ? " service-cat__card--active" : ""}`}
                  >
                    <div className="service-cat__card-media" aria-hidden>
                      <img src={cardImage} alt="" />
                    </div>
                    <div className="service-cat__card-body">
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      <h3>{item}</h3>
                      <p>
                        {category.itemBlurbs[item] ??
                          `Part of our ${category.title} practice for mission-critical environments.`}
                      </p>
                      <Link to="/contact" className="service-cat__card-cta">
                        Explore <ArrowUpRight size={16} />
                      </Link>
                    </div>
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
            <h2 className="section-title">
              {category.industriesHeading ?? "Where this service creates impact"}
            </h2>
          </Reveal>
          <div className="service-industries">
            {category.industries.map((industry, i) => {
              const Icon =
                industryIcons[industry.id as keyof typeof industryIcons] ??
                Building2;
              return (
                <Reveal key={industry.id} delay={i * 0.04}>
                  <Link
                    to={`/industries/${industry.id}`}
                    className="service-industry"
                  >
                    <span className="service-industry__icon" aria-hidden>
                      <Icon size={18} />
                    </span>
                    <h3>{industry.title}</h3>
                    <p>{industry.text}</p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section service-choose">
        <div className="container service-choose__grid">
          <Reveal>
            <div className="service-choose__copy">
              <h2 className="section-title">Why Choose Cloudstrats?</h2>
              {whyParas.map((para) => (
                <p key={para.slice(0, 40)} className="section-lead">
                  {para}
                </p>
              ))}
              <Link to="/contact" className="btn btn-primary service-choose__cta">
                Talk to an Expert <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <LiveImage
              className="live-image--tall"
              src={category.whyImage}
              alt="Cloudstrats nasscom recognition"
            />
          </Reveal>
        </div>
      </section>

      <section className="section service-stats-section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Our Stats</p>
            <h2 className="section-title">{shortTitle} by the Numbers</h2>
          </Reveal>
          <div className="service-stats">
            {category.stats.map((stat, i) => (
              <Reveal key={`${stat.value}-${i}`} delay={i * 0.05}>
                <div className="service-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="service-close">
        <div className="container service-close__layout">
          <Reveal>
            <div className="service-close__copy">
              <p className="eyebrow service-close__kicker">Building what&apos;s next</p>
              <h2>{category.finalHeadline}</h2>
              <p>{category.finalText}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <form className="service-close__form" onSubmit={onSubmit}>
              <h3>Talk to us</h3>
              <label>
                Full name
                <input name="name" required placeholder="Your name" />
              </label>
              <label>
                Work email
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@organization.com"
                />
              </label>
              <label>
                Organization
                <input name="organization" placeholder="Agency / Enterprise" />
              </label>
              <label>
                How can we help?
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your mission, timeline or RFP."
                />
              </label>
              <button type="submit" className="btn btn-primary">
                Contact <ArrowRight size={16} />
              </button>
              {sent ? (
                <p className="service-close__note">
                  Your mail client should open with the enquiry pre-filled.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
