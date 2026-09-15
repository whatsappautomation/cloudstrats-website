import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { EnigmaField } from "../components/EnigmaField";
import { LiveImage } from "../components/LiveMedia";
import { Reveal } from "../components/Reveal";
import { company } from "../data/company";
import { productPath, products } from "../data/products";
import { servicePath } from "../data/services";
import "./Home.css";

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

const pillars = [
  {
    title: "Build",
    text: "AI-ready infrastructure and data centres engineered for mission uptime.",
  },
  {
    title: "Secure",
    text: "Zero-trust operations, SOC depth and C5I-grade network resilience.",
  },
  {
    title: "Scale",
    text: "Automation and analytics that turn complexity into measurable outcomes.",
  },
];

export function Home() {
  return (
    <div className="home home--editorial">
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
              className="ed-kicker ed-kicker--light"
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
          </div>
        </div>

        <a href="#discover" className="enigma-hero__scroll" aria-label="Scroll to discover">
          <ChevronDown size={22} />
        </a>
      </section>

      <section id="discover" className="ed-marquee">
        <div className="container">
          <Reveal>
            <p className="ed-marquee__line">
              {["AI", "Data", "C5I", "Security", "Automation"].map((item, i) => (
                <span key={item}>
                  {i > 0 && <span className="ed-marquee__dot" aria-hidden />}
                  {item}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section ed-pillars">
        <div className="container">
          <Reveal>
            <div className="ed-intro ed-intro--center">
              <p className="ed-kicker">What we do</p>
              <h2 className="ed-title">Build. Secure. Scale.</h2>
              <p className="ed-lead">
                End-to-end digital infrastructure — revealed as you explore.
              </p>
            </div>
          </Reveal>

          <div className="ed-pillars__row">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <article className="ed-pillar">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section ed-signal">
        <div className="container">
          <div className="ed-signal__layout">
            <div className="ed-signal__copy">
              <Reveal>
                <p className="ed-kicker">By the numbers</p>
                <h2 className="ed-title">Quiet figures. Loud outcomes.</h2>
              </Reveal>
              <div className="ed-signal__stats">
                {company.stats.slice(0, 4).map((stat, i) => (
                  <Reveal key={stat.label} delay={i * 0.06}>
                    <div className="ed-stat">
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={0.1}>
              <figure className="ed-signal__photo">
                <LiveImage
                  className="live-image--tall"
                  src="/assets/lifestyle/stats-award.png"
                  alt="Cloudstrats at India Digital Empowerment Meet & Awards"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section ed-services">
        <div className="container">
          <Reveal>
            <div className="ed-intro">
              <p className="ed-kicker">Our services</p>
              <h2 className="ed-title ed-title--wide">
                Digital transformation with lasting impact
              </h2>
              <p className="ed-lead">
                End-to-end solutions that strengthen digital infrastructure and
                keep critical environments secure.
              </p>
            </div>
          </Reveal>

          <div className="ed-services__list">
            {homeServices.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.04}>
                <Link to={servicePath(service.id)} className="ed-service">
                  <span className="ed-service__code">{service.code}</span>
                  <div className="ed-service__body">
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                  <span className="ed-service__go" aria-hidden>
                    <ArrowRight size={18} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/services" className="ed-text-link">
              View all services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section ed-platforms">
        <div className="container">
          <Reveal>
            <div className="ed-intro ed-intro--center">
              <p className="ed-kicker">Platforms</p>
              <h2 className="ed-title">Named quietly. Built deeply.</h2>
            </div>
          </Reveal>

          <div className="ed-platforms__row">
            {products.map((product, i) => (
              <Reveal key={product.id} delay={i * 0.08}>
                <Link to={productPath(product.id)} className="ed-platform">
                  <p className="ed-platform__tag">{product.tagline}</p>
                  <h3>{product.name.split(" ")[0]}</h3>
                  <p className="ed-platform__text">{product.description}</p>
                  <span className="ed-text-link">
                    Explore <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section ed-why">
        <div className="container ed-why__grid">
          <Reveal>
            <figure className="ed-why__photo">
              <LiveImage
                className="live-image--tall"
                src="/assets/lifestyle/team-cover.png"
                alt="Cloudstrats team"
              />
            </figure>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="ed-why__copy">
              <p className="ed-kicker">Why Cloudstrats</p>
              <h2 className="ed-title">
                One partner. Multiple transformation capabilities.
              </h2>
              <p className="ed-lead">{company.advantageIntro}</p>
              <p className="ed-why__punch">{company.punchline}</p>
              <Link to="/about" className="btn btn-primary">
                About Cloudstrats <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section ed-close">
        <div className="container">
          <Reveal>
            <div className="ed-close__inner">
              <p className="ed-kicker">Building what’s next</p>
              <h2 className="ed-title ed-title--center">{company.futurePunch}</h2>
              <p className="ed-lead ed-lead--center">{company.futureText}</p>
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
