import { Link } from "react-router-dom";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { EnigmaField } from "../components/EnigmaField";
import { LiveImage } from "../components/LiveMedia";
import { Reveal } from "../components/Reveal";
import { TiltCard } from "../components/TiltCard";
import { company } from "../data/company";
import { productPath, products } from "../data/products";
import { servicePath } from "../data/services";
import "./Home.css";

const trustBadges = [
  "Make in India",
  "Defence Ready",
  "ISO Certified",
  "GeM Registered",
  "MeitY Empanelled",
];

const homeServices = [
  {
    id: "ai-infrastructure",
    code: "01",
    title: "AI Infrastructure and Data Centres",
    text: "Build high performance AI data centre solutions with advanced cybersecurity and 24/7 uptime.",
  },
  {
    id: "data-ai-analytics",
    code: "02",
    title: "Data AI & Analytics",
    text: "Align circumstantial expectations and ensure preparedness using predictive analytics solutions.",
  },
  {
    id: "c5i-networks",
    code: "03",
    title: "C5I and Mission Critical Networks",
    text: "Collate analytics and insights derived from years of experience with our C5I integration services.",
  },
  {
    id: "cybersecurity",
    code: "04",
    title: "Cyber Security Operations",
    text: "Managed SOC services for around the clock monitoring, deep threat visibility and rapid response.",
  },
  {
    id: "automation",
    code: "05",
    title: "Intelligent Automations and Digital Transformation",
    text: "Intelligent automation services that reduce friction, accelerate outcomes and optimize business operations.",
  },
];

const homeIndustries = [
  {
    id: "government-public-sector",
    code: "I",
    title: "Government Critical Infrastructure",
    text: "Modern AI infrastructure with threat detection and response services ensure that mission critical programmes are protected.",
  },
  {
    id: "defense-aerospace",
    code: "II",
    title: "Defence and Aerospace",
    text: "Modern security monitoring services protects critical data, keeping it away from the public eye.",
  },
  {
    id: "banking-financial-services",
    code: "III",
    title: "Banking and Finance",
    text: "Enterprise data analytics and machine learning solutions catch market trends and protects organizations from significant losses.",
  },
  {
    id: "manufacturing",
    code: "IV",
    title: "Manufacturing",
    text: "AI automation solutions and intelligent process automation ensures faster output and efficient workflow.",
  },
  {
    id: "healthcare-life-sciences",
    code: "V",
    title: "Healthcare and Life Sciences",
    text: "Around the clock monitoring services paired with predictive analysis solutions ensure efficient treatment.",
  },
];

export function Home() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const glow = useMotionTemplate`radial-gradient(640px circle at ${mx}px ${my}px, rgba(0,119,182,0.12), transparent 48%)`;

  return (
    <div
      className="home home--enigma"
      onMouseMove={(e) => {
        mx.set(e.clientX);
        my.set(e.clientY);
      }}
    >
      <motion.div className="home__cursor-glow" style={{ background: glow }} />

      {/* NDIA-style composition · CloudStrats colours */}
      <section className="enigma-hero">
        <div className="enigma-hero__atmosphere" aria-hidden />
        <EnigmaField />
        <div className="enigma-hero__orb" aria-hidden />
        <div className="enigma-hero__veil" aria-hidden />

        <div className="container enigma-hero__layout">
          <div className="enigma-hero__copy">
            <motion.span
              className="enigma-badge"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Defence · Government · Critical Infrastructure
            </motion.span>

            <motion.h1
              className="enigma-hero__title"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              Empowering India&apos;s{" "}
              <span className="enigma-hero__accent">Mission Domains</span>
            </motion.h1>

            <motion.p
              className="enigma-hero__lead"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.7 }}
            >
              AI infrastructure for missions that cannot afford noise — designed,
              secured and operated by Cloudstrats.
            </motion.p>

            <motion.div
              className="enigma-hero__actions"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.65 }}
            >
              <Link to="/contact" className="btn btn-primary">
                Partner with Cloudstrats <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-ghost">
                Explore Services
              </Link>
            </motion.div>

            <motion.ul
              className="enigma-trust"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {trustBadges.map((badge) => (
                <li key={badge}>{badge}</li>
              ))}
            </motion.ul>
          </div>
        </div>

        <a href="#discover" className="enigma-hero__scroll" aria-label="Scroll to discover">
          <ChevronDown size={22} />
        </a>
      </section>

      {/* Whisper codes */}
      <section id="discover" className="enigma-codes">
        <div className="container">
          <Reveal>
            <ul className="enigma-codes__list">
              {["AI", "Data", "C5I", "Security", "Automation"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Design. Secure. Scale. — pillar rhythm like NDIA */}
      <section className="section enigma-pillars">
        <div className="container">
          <Reveal>
            <p className="eyebrow">What we do</p>
            <h2 className="enigma-heading enigma-heading--wide">
              Build. Secure. Scale.
            </h2>
            <p className="enigma-sub enigma-sub--center">
              End-to-end digital infrastructure — revealed as you explore.
            </p>
          </Reveal>

          <div className="enigma-pillars__grid">
            {[
              {
                n: "01",
                title: "Build",
                text: "AI-ready infrastructure and data centres engineered for mission uptime.",
              },
              {
                n: "02",
                title: "Secure",
                text: "Zero-trust operations, SOC depth and C5I-grade network resilience.",
              },
              {
                n: "03",
                title: "Scale",
                text: "Automation and analytics that turn complexity into measurable outcomes.",
              },
            ].map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <TiltCard>
                  <div className="enigma-pillar">
                    <span className="enigma-pillar__n">{pillar.n}</span>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.text}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Signal */}
      <section className="section enigma-signal">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Signal</p>
            <h2 className="enigma-heading">Numbers that stay quiet until you look.</h2>
          </Reveal>
          <div className="enigma-signal__grid">
            {company.stats.slice(0, 4).map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="enigma-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Layers / services — document copy */}
      <section className="section enigma-layers">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Our Services</p>
            <h2 className="enigma-heading enigma-heading--services">
              Digital Transformation Services that Delivers Impact
            </h2>
            <p className="enigma-sub">
              We provide end-to-end solutions that strengthens your digital
              infrastructure, ensuring a smoother work environment with
              comprehensive security.
            </p>
          </Reveal>

          <div className="enigma-layers__grid">
            {homeServices.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.06}>
                <TiltCard>
                  <Link to={servicePath(service.id)} className="enigma-layer">
                    <span className="enigma-layer__num" aria-hidden>
                      {service.code}
                    </span>
                    <div className="enigma-layer__body">
                      <h3>{service.title}</h3>
                      <p className="enigma-layer__text">{service.text}</p>
                      <span className="enigma-layer__cta">
                        Learn more <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/services" className="btn btn-ghost">
              View all services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="section enigma-platforms">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Platforms</p>
            <h2 className="enigma-heading">Named quietly. Built deeply.</h2>
          </Reveal>

          <div className="enigma-platforms__grid">
            {products.map((product, i) => (
              <Reveal key={product.id} delay={i * 0.1}>
                <TiltCard>
                  <Link to={productPath(product.id)} className="enigma-platform">
                    <span className="enigma-platform__index">0{i + 1}</span>
                    <p className="enigma-platform__tag">{product.tagline}</p>
                    <h3>{product.name.split(" ")[0]}</h3>
                    <p className="enigma-platform__hint">Hover to reveal</p>
                    <p className="enigma-platform__text">{product.description}</p>
                    <span className="enigma-platform__cta">
                      Explore <ArrowRight size={16} />
                    </span>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section enigma-sectors">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Sectors</p>
            <h2 className="enigma-heading">Where the work lives.</h2>
          </Reveal>

          <div className="enigma-sectors__list">
            {homeIndustries.map((industry, i) => (
              <Reveal key={industry.id} delay={i * 0.05}>
                <Link to={`/industries/${industry.id}`} className="enigma-sector">
                  <span className="enigma-sector__code">{industry.code}</span>
                  <div className="enigma-sector__main">
                    <h3>{industry.title}</h3>
                    <p>{industry.text}</p>
                  </div>
                  <ArrowRight className="enigma-sector__arrow" size={18} />
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/industries" className="btn btn-ghost">
              View all industries <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section enigma-why">
        <div className="container enigma-why__grid">
          <Reveal>
            <div className="enigma-why__media">
              <LiveImage
                className="live-image--tall"
                src="/assets/lifestyle/team-collab.png"
                alt="Cloudstrats team"
              />
              <div className="enigma-why__media-veil" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="enigma-why__copy">
              <p className="eyebrow">Why Cloudstrats</p>
              <h2 className="enigma-heading">
                Fifteen years. Still asking better questions.
              </h2>
              <p className="enigma-why__lead">
                What began as a tech company became an AI infrastructure and growth
                partner — for missions that cannot afford noise.
              </p>
              <p className="enigma-why__punch">
                Build smarter. Operate securely. Scale faster.
              </p>
              <Link to="/why-cloudstrats" className="btn btn-primary">
                Go deeper <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Threshold CTA */}
      <section className="section enigma-threshold">
        <div className="container">
          <Reveal>
            <div className="enigma-threshold__panel">
              <p className="eyebrow">Threshold</p>
              <h2>Ready when you are.</h2>
              <p>No pitch deck required. Just the next conversation.</p>
              <Link to="/contact" className="btn btn-primary">
                Contact Cloudstrats <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
