import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { EnigmaField } from "../components/EnigmaField";
import { LiveImage } from "../components/LiveMedia";
import { Reveal } from "../components/Reveal";
import { TiltCard } from "../components/TiltCard";
import { company } from "../data/company";
import { productPath, products } from "../data/products";
import { servicePath } from "../data/services";
import "./Home.css";

const trustLine = [
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
    text: "High-performance AI data centre solutions with advanced cybersecurity and continuous uptime.",
  },
  {
    id: "data-ai-analytics",
    code: "02",
    title: "Data AI & Analytics",
    text: "Predictive analytics that turn complex data into clear, decisive intelligence.",
  },
  {
    id: "c5i-networks",
    code: "03",
    title: "C5I and Mission Critical Networks",
    text: "Mission-ready C5I integration for secure, resilient command environments.",
  },
  {
    id: "cybersecurity",
    code: "04",
    title: "Cyber Security Operations",
    text: "Managed SOC with continuous monitoring, deep visibility and rapid response.",
  },
  {
    id: "automation",
    code: "05",
    title: "Intelligent Automation and Digital Transformation",
    text: "Intelligent automation that removes friction and accelerates business outcomes.",
  },
];

export function Home() {
  return (
    <div className="home home--enigma home--luxe">
      <section className="enigma-hero enigma-hero--banner">
        <div className="enigma-hero__banner" aria-hidden>
          <img
            src="/assets/lifestyle/home-banner.png"
            alt=""
            className="enigma-hero__banner-img"
          />
        </div>
        <div className="enigma-hero__shade" aria-hidden />
        <EnigmaField />

        <div className="container enigma-hero__layout enigma-hero__layout--banner">
          <div className="enigma-hero__copy">
            <motion.p
              className="enigma-kicker"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Defence · Government · Critical Infrastructure
            </motion.p>

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
              <Link to="/services" className="btn btn-ghost enigma-hero__ghost">
                Explore Services
              </Link>
            </motion.div>

            <motion.p
              className="enigma-trustline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {trustLine.map((item, i) => (
                <span key={item}>
                  {i > 0 && <span className="enigma-trustline__sep" aria-hidden />}
                  {item}
                </span>
              ))}
            </motion.p>
          </div>
        </div>

        <a href="#discover" className="enigma-hero__scroll" aria-label="Scroll to discover">
          <ChevronDown size={22} />
        </a>
      </section>

      <section id="discover" className="enigma-codes">
        <div className="container">
          <Reveal>
            <ul className="enigma-codes__list">
              {["AI", "Data", "C5I", "Security", "Automation"].map((item) => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

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

      <section className="section enigma-signal">
        <div className="enigma-signal__glow" aria-hidden />
        <div className="container">
          <Reveal>
            <p className="eyebrow">Signal</p>
            <h2 className="enigma-heading">Numbers that stay quiet until you look.</h2>
          </Reveal>
          <div className="enigma-signal__layout">
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
            <Reveal delay={0.12}>
              <div className="enigma-signal__media">
                <LiveImage
                  className="live-image--tall"
                  src="/assets/lifestyle/stats-award.png"
                  alt="Cloudstrats at India Digital Empowerment Meet & Awards"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section enigma-layers">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Our Services</p>
            <h2 className="enigma-heading enigma-heading--services">
              Digital Transformation Services that Delivers Impact
            </h2>
            <p className="enigma-sub">
              End-to-end solutions that strengthen digital infrastructure and
              keep critical environments secure.
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

      <section className="section enigma-why">
        <div className="container enigma-why__grid">
          <Reveal>
            <div className="enigma-why__media">
              <LiveImage
                className="live-image--tall"
                src="/assets/lifestyle/team-cover.png"
                alt="Cloudstrats team"
              />
              <div className="enigma-why__media-veil" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="enigma-why__copy">
              <p className="eyebrow">Why Cloudstrats</p>
              <h2 className="enigma-heading">
                One partner. Multiple transformation capabilities.
              </h2>
              <p className="enigma-why__lead">{company.advantageIntro}</p>
              <p className="enigma-why__punch">{company.punchline}</p>
              <Link to="/about" className="btn btn-primary">
                About Cloudstrats <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section enigma-threshold">
        <div className="container">
          <Reveal>
            <div className="enigma-threshold__panel">
              <p className="eyebrow">Building What’s Next</p>
              <h2>{company.futurePunch}</h2>
              <p>{company.futureText}</p>
              <Link to="/contact" className="btn btn-primary">
                Talk to our experts <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
