import { Link } from "react-router-dom";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LiveImage } from "../components/LiveMedia";
import { Reveal } from "../components/Reveal";
import { company } from "../data/company";
import { productPath, products } from "../data/products";
import { servicePath } from "../data/services";
import "./Home.css";

const homeServices = [
  {
    id: "ai-infrastructure",
    title: "AI Infrastructure and Data Centres",
    text: "Build high performance AI data centre solutions with advanced cybersecurity and 24/7 uptime.",
  },
  {
    id: "data-ai-analytics",
    title: "Data AI & Analytics",
    text: "Align circumstantial expectations and ensure preparedness using predictive analytics solutions.",
  },
  {
    id: "c5i-networks",
    title: "C5I and Mission Critical Networks",
    text: "Collate analytics and insights derived from years of experience with our C5I integration services.",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Operations",
    text: "Managed SOC services for around the clock monitoring, deep threat visibility and rapid response.",
  },
  {
    id: "automation",
    title: "Intelligent Automations and Digital Transformation",
    text: "Intelligent automation services that reduce friction, accelerate outcomes and optimize business operations.",
  },
];

const homeIndustries = [
  {
    id: "government-public-sector",
    title: "Government Critical Infrastructure",
    text: "Modern AI infrastructure with threat detection and response services ensure that mission critical programmes are protected.",
  },
  {
    id: "defense-aerospace",
    title: "Defence and Aerospace",
    text: "Modern security monitoring services protects critical data, keeping it away from the public eye.",
  },
  {
    id: "banking-financial-services",
    title: "Banking and Finance",
    text: "Enterprise data analytics and machine learning solutions catch market trends and protects organizations from significant losses.",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    text: "AI automation solutions and intelligent process automation ensures faster output and efficient workflow.",
  },
  {
    id: "healthcare-life-sciences",
    title: "Healthcare and Life Sciences",
    text: "Around the clock monitoring services paired with predictive analysis solutions ensure efficient treatment.",
  },
];

export function Home() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const glow = useMotionTemplate`radial-gradient(520px circle at ${mx}px ${my}px, rgba(0,119,182,0.16), transparent 45%)`;

  return (
    <div
      className="home"
      onMouseMove={(e) => {
        mx.set(e.clientX);
        my.set(e.clientY);
      }}
    >
      <motion.div className="home__cursor-glow" style={{ background: glow }} />

      <section className="hero">
        <div className="hero__atmosphere" />
        <div className="container hero__grid">
          <div className="hero__copy">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Defence · Government · Critical Infrastructure
            </motion.p>
            <motion.h1
              className="hero__headline"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.7 }}
            >
              Empowering India&apos;s Mission Domains with Critical Infrastructure
            </motion.h1>
            <motion.p
              className="hero__lead"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              AI infrastructure services for mission critical sectors; managed by
              Cloudstrats experts.
            </motion.p>
            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/services" className="btn btn-primary">
                Explore Services <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Talk to Us
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.8 }}
          >
            <LiveImage
              className="live-image--hero"
              src="/assets/lifestyle/boardroom-skyline.png"
              alt="Cloudstrats empowering mission-critical programs"
            />
          </motion.div>
        </div>
      </section>

      <section className="section home-stats">
        <div className="container grid-3 home-stats__grid">
          {company.stats.slice(0, 6).map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.05}>
              <div className="stat panel">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="section-title" style={{ maxWidth: "18ch" }}>
              Digital Transformation Services that Delivers Impact
            </h2>
            <p className="section-lead">
              We provide end-to-end solutions that strengthens your digital
              infrastructure, ensuring a smoother work environment with
              comprehensive security.
            </p>
          </Reveal>

          <div className="home-service-grid">
            {homeServices.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.05}>
                <Link to={servicePath(service.id)} className="panel home-service-card">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span>
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section products-band">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Our Products</p>
            <h2 className="section-title">Intelligent platforms. Unified by purpose.</h2>
            <p className="section-lead">
              Abha, Miraya and Narad — cloud-native, secure-by-design platforms
              built for mission interoperability.
            </p>
          </Reveal>

          <div className="grid-3 product-grid">
            {products.map((product, i) => (
              <Reveal key={product.id} delay={i * 0.08}>
                <Link to={productPath(product.id)} className="product-card panel">
                  <p className="product-card__tag">{product.tagline}</p>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <span className="product-card__more">
                    Explore <ArrowRight size={16} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Industries</p>
            <h2 className="section-title">
              Delivering intelligent solutions across key sectors
            </h2>
          </Reveal>
          <div className="home-industry-grid">
            {homeIndustries.map((industry, i) => (
              <Reveal key={industry.id} delay={i * 0.05}>
                <Link
                  to={`/industries/${industry.id}`}
                  className="panel home-industry-card"
                >
                  <h3>{industry.title}</h3>
                  <p>{industry.text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/industries" className="btn btn-ghost">
              View All Industries <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section home-why">
        <div className="container home-why__grid">
          <Reveal>
            <LiveImage
              className="live-image--tall"
              src="/assets/lifestyle/team-collab.png"
              alt="Why Cloudstrats team"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="home-why__copy">
              <h2>Why Cloudstrats?</h2>
              <p>
                What started as a simple tech company, slowly developed into an AI
                infrastructure and growth solutions provider. Our 15+ years of
                experience has taught us the importance of an efficient system and
                unique workflows, that encourage faster output.
              </p>
              <p>
                We help organizations turn complex technology challenges into
                measurable business outcomes. From building AI-ready infrastructure
                and transforming enterprise data into something you can use, all
                while automating business operations, CloudStrats combines deep
                technology expertise with an outcome-driven approach.
              </p>
              <p className="home-why__punch">
                Build smarter. Operate securely. Scale faster.
                <br />
                And Make Better Decisions
              </p>
              <Link to="/why-cloudstrats" className="btn btn-primary">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band__inner panel">
          <div>
            <p className="eyebrow">Let&apos;s Get Started</p>
            <h2>Ready to move from complexity to outcomes?</h2>
            <p>Talk to Cloudstrats about your next mission-critical initiative.</p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
