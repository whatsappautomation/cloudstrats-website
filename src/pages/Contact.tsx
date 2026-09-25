import { useState } from "react";
import type { FormEvent } from "react";
import { LiveImage } from "../components/LiveMedia";
import { PageBanner } from "../components/PageBanner";
import { Reveal } from "../components/Reveal";
import { company } from "../data/company";
import "./Contact.css";

export function Contact() {
  const [sent, setSent] = useState(false);

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
    <div className="contact-page">
      <PageBanner
        eyebrow="Contact"
        title="Let's build mission-ready infrastructure"
        lead="Reach our business development team — we partner with defence, government, PSUs and critical enterprises worldwide."
        image="/assets/lifestyle/digital-consult.png"
      />

      <section className="section">
        <div className="container contact-grid">
          <Reveal>
            <form className="panel contact-form" onSubmit={onSubmit}>
              <h2>Send a message</h2>
              <label>
                Full name
                <input name="name" required placeholder="Your name" />
              </label>
              <label>
                Work email
                <input name="email" type="email" required placeholder="you@organization.com" />
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
                  rows={5}
                  placeholder="Tell us about your mission, timeline or RFP."
                />
              </label>
              <button type="submit" className="btn btn-primary">
                Contact
              </button>
              {sent && (
                <p className="form-note">
                  Your mail client should open with the enquiry pre-filled.
                </p>
              )}
            </form>
          </Reveal>

          <div className="contact-side">
            <Reveal>
              <LiveImage
                src="/assets/lifestyle/digital-consult.png"
                alt="Talk to Cloudstrats"
                caption="We're ready when you are"
              />
            </Reveal>
            <Reveal>
              <article className="panel contact-card">
                <h3>Direct</h3>
                <a href={`mailto:${company.contacts.email}`}>{company.contacts.email}</a>
                {company.contacts.phones.map((p) => (
                  <a key={p.value} href={`tel:${p.value.replace(/\s/g, "")}`}>
                    {p.label}: {p.value}
                  </a>
                ))}
                <a
                  href={`https://${company.contacts.website}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {company.contacts.website}
                </a>
              </article>
            </Reveal>

            {company.contacts.offices.map((o, i) => (
              <Reveal key={o.city} delay={0.05 * (i + 1)}>
                <article className="panel contact-card">
                  <h3>
                    {o.city}
                    <span>{o.role}</span>
                  </h3>
                  <p>{o.address}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
