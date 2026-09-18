import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { company } from "../data/company";
import { productPath, products } from "../data/products";
import { serviceCategories, servicePath } from "../data/services";
import "./Home.css";

const serviceImages: Record<string, string> = {
  "ai-infrastructure": "/assets/lifestyle/data-infra.png",
  "data-ai-analytics": "/assets/lifestyle/analytics-dashboard.png",
  "c5i-networks": "/assets/hero/defence-hero.png",
  cybersecurity: "/assets/hero/soc.png",
  automation: "/assets/lifestyle/process-automation.png",
};

const homeServices = serviceCategories.map((service, index) => ({
  id: service.id,
  code: String(index + 1).padStart(2, "0"),
  title: service.title,
  text: service.summary,
  image: serviceImages[service.id] ?? service.bannerImage,
}));

export function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);
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

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const org = String(data.get("organization") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Cloudstrats enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${org}\n\n${message}`,
    );
    window.location.href = `mailto:${company.contacts.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

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

        <motion.div className="wow-hero__copy" style={{ opacity: copyOpacity }}>
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
        <div className="container wow-manifesto__layout">
          <Reveal>
            <div className="wow-manifesto__quote">
              <span className="wow-manifesto__mark" aria-hidden>
                “
              </span>
              <h2>
                Build the foundations.
                <br />
                Secure the mission.
                <br />
                <em>Scale what matters.</em>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="wow-manifesto__support">
              Cloudstrats is known to modernise organisations with environments
              that facilitate critical operations and digital transformation. We
              specialise in AI Infrastructure, Data Centres, Data, AI &amp;
              Analytics, C5I &amp; Mission-Critical Networks, Cybersecurity, and
              Intelligent Automation – all of which work towards a stable, fully
              connected system that is ready for mission critical tasks.
            </p>
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
            <h2>
              Transform your organization with five practices and one operating
              system
            </h2>
          </Reveal>
        </div>

        <div className="container wow-services__grid">
          {homeServices.map((service, i) => (
            <Link
              key={service.id}
              to={servicePath(service.id)}
              className="wow-service wow-service--image"
              style={{ animationDelay: `${i * 40}ms` }}
              aria-label={`${service.title} — explore`}
            >
              <div className="wow-service__media">
                <img src={service.image} alt={service.title} />
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
            <p className="wow-kicker wow-kicker--light">Our Products</p>
            <h2>Intelligent platforms. Unified by purpose.</h2>
            <p className="wow-platforms__lead">
              Abha, Miraya and Narad — cloud-native, secure-by-design platforms
              built for mission interoperability.
            </p>
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
        <div className="container wow-why__layout">
          <div className="wow-why__media">
            <img
              src="/assets/lifestyle/team-collab-group.png"
              alt="Cloudstrats team"
            />
          </div>
          <div className="wow-why__copy">
            <Reveal>
              <p className="wow-kicker">Why Cloudstrats</p>
              <h2>One partner. Multiple transformation capabilities.</h2>
              <p>{company.advantageIntro}</p>
              <p>{company.advantageBody}</p>
              <p className="wow-why__punch">{company.punchline}</p>
              <Link to="/about" className="wow-btn wow-btn--dark">
                About Cloudstrats <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="wow-close">
        <div className="container wow-close__layout">
          <Reveal>
            <div className="wow-close__copy">
              <p className="wow-kicker wow-kicker--light">Building what&apos;s next</p>
              <h2>{company.futureHeadlineHome}</h2>
              <p>{company.advantageIntro}</p>
              <p>{company.advantageBody}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <form className="wow-close__form" onSubmit={onSubmit}>
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
              <button type="submit" className="wow-btn wow-btn--solid">
                Email Us <ArrowRight size={16} />
              </button>
              {sent && (
                <p className="wow-close__note">
                  Your mail client should open with the enquiry pre-filled.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
