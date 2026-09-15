import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
    text: "High-performance AI data centre solutions engineered for scale, security and continuous uptime.",
    image: "/assets/lifestyle/data-infra.png",
  },
  {
    id: "data-ai-analytics",
    code: "02",
    title: "Data AI & Analytics",
    text: "Turn fragmented data into decisive intelligence with modern platforms and predictive analytics.",
    image: "/assets/lifestyle/analytics-dashboard.png",
  },
  {
    id: "c5i-networks",
    code: "03",
    title: "C5I and Mission Critical Networks",
    text: "Secure, resilient command networks for environments where continuity is non-negotiable.",
    image: "/assets/hero/defence-hero.png",
  },
  {
    id: "cybersecurity",
    code: "04",
    title: "Cyber Security Operations",
    text: "Around-the-clock SOC depth — detection, intelligence and response in one operating rhythm.",
    image: "/assets/hero/soc.png",
  },
  {
    id: "automation",
    code: "05",
    title: "Intelligent Automation and Digital Transformation",
    text: "AI-powered workflows that remove friction and accelerate measurable business outcomes.",
    image: "/assets/lifestyle/process-automation.png",
  },
];

export function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bannerY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 140]), {
    stiffness: 80,
    damping: 28,
  });
  const bannerScale = useSpring(
    useTransform(scrollYProgress, [0, 1], [1.08, 1.18]),
    { stiffness: 80, damping: 28 },
  );
  const copyOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0.15]);

  return (
    <div className="home home--wow">
      <section ref={heroRef} className="wow-hero">
        <motion.div className="wow-hero__media" style={{ y: bannerY }}>
          <motion.img
            src="/assets/lifestyle/home-banner.png"
            alt=""
            className="wow-hero__img"
            style={{ scale: bannerScale }}
          />
        </motion.div>
        <div className="wow-hero__shade" aria-hidden />

        <motion.div className="container wow-hero__copy" style={{ opacity: copyOpacity }}>
          <motion.p
            className="wow-kicker wow-kicker--light"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            Defence · Government · Critical Infrastructure
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Empowering India&apos;s
            <br />
            <span>Mission Domains</span>
          </motion.h1>

          <motion.p
            className="wow-hero__lead"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.75 }}
          >
            AI infrastructure for missions that cannot afford noise — designed,
            secured and operated by Cloudstrats.
          </motion.p>

          <motion.div
            className="wow-hero__actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.7 }}
          >
            <Link to="/contact" className="wow-btn wow-btn--solid">
              Partner with Cloudstrats <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="wow-btn wow-btn--ghost">
              Explore Services
            </Link>
          </motion.div>
        </motion.div>

        <div className="wow-hero__rail" aria-hidden>
          <span>Scroll</span>
          <i />
        </div>
      </section>

      <section className="wow-marquee" aria-hidden>
        <div className="wow-marquee__track">
          {[0, 1].map((copy) => (
            <div className="wow-marquee__group" key={copy}>
              {["AI Infrastructure", "Data & Analytics", "C5I Networks", "Cybersecurity", "Automation", "Cloudstrats"].map(
                (item) => (
                  <span key={`${copy}-${item}`}>{item}</span>
                ),
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="wow-manifesto">
        <div className="container">
          <Reveal>
            <p className="wow-kicker">What we do</p>
            <h2>
              Build the foundations.
              <br />
              Secure the mission.
              <br />
              <em>Scale what matters.</em>
            </h2>
          </Reveal>
        </div>
      </section>

      <section className="wow-signal">
        <div className="wow-signal__photo">
          <img
            src="/assets/lifestyle/stats-award.png"
            alt="Cloudstrats at India Digital Empowerment Meet & Awards"
          />
          <div className="wow-signal__veil" aria-hidden />
        </div>
        <div className="container wow-signal__content">
          <Reveal>
            <p className="wow-kicker wow-kicker--light">By the numbers</p>
            <h2>Quiet figures. Loud outcomes.</h2>
          </Reveal>
          <div className="wow-signal__stats">
            {company.stats.slice(0, 4).map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.07}>
                <div className="wow-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="wow-services">
        <div className="container wow-services__head">
          <Reveal>
            <p className="wow-kicker">Services</p>
            <h2>Five practices. One operating system for transformation.</h2>
          </Reveal>
        </div>

        <div className="wow-services__scroller">
          {homeServices.map((service, i) => (
            <Link
              key={service.id}
              to={servicePath(service.id)}
              className="wow-service"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className="wow-service__media">
                <img src={service.image} alt="" />
              </div>
              <div className="wow-service__body">
                <span>{service.code}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <em>
                  Explore <ArrowUpRight size={16} />
                </em>
              </div>
            </Link>
          ))}
        </div>

        <div className="container">
          <Link to="/services" className="wow-text-link">
            View all services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="wow-platforms">
        <div className="container">
          <Reveal>
            <p className="wow-kicker wow-kicker--light">Platforms</p>
            <h2>Named quietly. Built deeply.</h2>
          </Reveal>

          <div className="wow-platforms__list">
            {products.map((product, i) => (
              <Reveal key={product.id} delay={i * 0.08}>
                <Link to={productPath(product.id)} className="wow-platform">
                  <div className="wow-platform__meta">
                    <span>0{i + 1}</span>
                    <p>{product.tagline}</p>
                  </div>
                  <h3>{product.name.split(" ")[0]}</h3>
                  <p className="wow-platform__text">{product.description}</p>
                  <span className="wow-platform__go">
                    Enter platform <ArrowUpRight size={18} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="wow-why">
        <div className="wow-why__media">
          <img src="/assets/lifestyle/team-cover.png" alt="Cloudstrats team" />
        </div>
        <div className="wow-why__copy">
          <Reveal>
            <p className="wow-kicker">Why Cloudstrats</p>
            <h2>One partner. Multiple transformation capabilities.</h2>
            <p>{company.advantageIntro}</p>
            <p className="wow-why__punch">{company.punchline}</p>
            <Link to="/about" className="wow-btn wow-btn--dark">
              About Cloudstrats <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="wow-close">
        <div className="container">
          <Reveal>
            <p className="wow-kicker wow-kicker--light">Building what’s next</p>
            <h2>{company.futurePunch}</h2>
            <p>{company.futureText}</p>
            <Link to="/contact" className="wow-btn wow-btn--solid">
              Talk to our experts <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
