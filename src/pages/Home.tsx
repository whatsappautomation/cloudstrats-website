import { Link } from "react-router-dom";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Network,
  Server,
  Shield,
  Sparkles,
} from "lucide-react";
import { BrandLogo } from "../components/BrandLogo";
import { LiveImage, MediaStrip } from "../components/LiveMedia";
import { Reveal } from "../components/Reveal";
import { company } from "../data/company";
import { products } from "../data/products";
import {
  highlightServices,
  serviceCategories,
  servicePillars,
} from "../data/services";
import { practices } from "../data/industries";
import "./Home.css";

const icons = {
  server: Server,
  brain: Brain,
  network: Network,
  shield: Shield,
  spark: Sparkles,
} as const;

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
            <motion.div
              className="hero__logo-wrap"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.7 }}
            >
              <BrandLogo variant="hero" />
            </motion.div>
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Defence · Government · Critical Infrastructure
            </motion.p>
            <motion.h1
              className="hero__tagline"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
            >
              {company.tagline}
            </motion.h1>
            <motion.p
              className="hero__lead"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36 }}
            >
              Secure, intelligent and resilient digital infrastructure for
              India&apos;s most critical missions.
            </motion.p>
            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.44 }}
            >
              <Link to="/services" className="btn btn-primary">
                Explore Services <ArrowRight size={18} />
              </Link>
              <Link to="/products" className="btn btn-ghost">
                View Products
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.8 }}
          >
            <div className="hero__stage">
              <LiveImage
                className="live-image--hero"
                src="/assets/lifestyle/boardroom-skyline.png"
                alt="Cloudstrats team in a strategic boardroom session"
                caption="Strategy in motion"
              />
              <div className="hero__float panel">
                <p className="hero__panel-kicker">Exponential Technology</p>
                <strong>AI · Data · C5I · Security · Automation</strong>
              </div>
            </div>
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

      <section className="section home-live">
        <div className="container">
          <Reveal>
            <p className="eyebrow">In action</p>
            <h2 className="section-title">Built for real teams and real missions</h2>
            <p className="section-lead">
              From AI-ready infrastructure to analytics, automation and secure
              operations — Cloudstrats helps organizations move from complexity to outcomes.
            </p>
          </Reveal>
          <Reveal>
            <MediaStrip
              items={[
                {
                  src: "/assets/lifestyle/data-infra.png",
                  alt: "AI and data infrastructure visualization",
                  label: "AI Infrastructure",
                },
                {
                  src: "/assets/lifestyle/analytics-dashboard.png",
                  alt: "Analytics dashboard review",
                  label: "Data & Analytics",
                },
                {
                  src: "/assets/lifestyle/automation-rpa.png",
                  alt: "Intelligent automation and RPA",
                  label: "Intelligent Automation",
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Our Services</p>
            <h2 className="section-title">Strategy · Design · Management</h2>
            <p className="section-lead">
              End-to-end services for mission success — from roadmap to
              operations, we design, build, secure and manage digital
              infrastructure that delivers measurable impact.
            </p>
          </Reveal>

          <div className="pillars">
            {servicePillars.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <article className="pillar panel">
                  <span>0{i + 1}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="highlight-services">
            {highlightServices.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.06}>
                <article className="highlight panel">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="service-hierarchy">
            {serviceCategories.map((cat, i) => {
              const Icon = icons[cat.icon as keyof typeof icons] ?? Server;
              return (
                <Reveal key={cat.id} delay={i * 0.05}>
                  <article className="service-card panel">
                    <div className="service-card__head">
                      <span className="service-card__icon">
                        <Icon size={20} />
                      </span>
                      <div>
                        <h3>{cat.title}</h3>
                        <p>{cat.summary}</p>
                      </div>
                    </div>
                    <ul>
                      {cat.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <div className="section-cta">
            <Link to="/services" className="btn btn-primary">
              Full Services Map <ArrowRight size={18} />
            </Link>
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
                <Link to={`/products#${product.id}`} className="product-card panel">
                  <p className="product-card__tag">{product.tagline}</p>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <ul>
                    {product.items.map((o) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>
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
            <p className="eyebrow">Practices</p>
            <h2 className="section-title">Delivering intelligent solutions across key sectors</h2>
          </Reveal>
          <div className="practices-row">
            {practices.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05}>
                <article className="practice panel">
                  <h3>{p.title}</h3>
                  <ul>
                    {p.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/industries" className="btn btn-ghost">
              Industry Use Cases <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section home-people">
        <div className="container">
          <Reveal>
            <div className="media-duo">
              <LiveImage
                className="live-image--tall"
                src="/assets/lifestyle/team-meeting.png"
                alt="Cloudstrats team collaborating"
                caption="People + process + technology"
              />
              <div className="media-duo__stack">
                <LiveImage
                  src="/assets/lifestyle/ai-workshop.png"
                  alt="AI briefing and workshop"
                  caption="Intelligence at work"
                />
                <LiveImage
                  src="/assets/lifestyle/strategy-review.png"
                  alt="Strategy review with experts"
                  caption="Outcome-driven delivery"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band__inner panel">
          <div>
            <p className="eyebrow">Partner with Cloudstrats</p>
            <h2>Your mission. Our commitment.</h2>
            <p>
              Securing today. Empowering tomorrow. Strengthening India.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            Contact BD <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
