import { Link } from "react-router-dom";
import { BrandLogo } from "./BrandLogo";
import { company } from "../data/company";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <BrandLogo variant="footer" />
          <p>{company.tagline}</p>
          <p className="footer__motto">{company.motto}</p>
        </div>

        <div>
          <h4>Explore</h4>
          <div className="footer__links">
            <Link to="/services">Services</Link>
            <Link to="/products">Products</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4>Reach Us</h4>
          <div className="footer__links">
            <a href={`mailto:${company.contacts.email}`}>{company.contacts.email}</a>
            {company.contacts.phones.map((p) => (
              <a key={p.value} href={`tel:${p.value.replace(/\s/g, "")}`}>
                {p.label}: {p.value}
              </a>
            ))}
            <a href="https://cloudstrats.ai" target="_blank" rel="noreferrer">
              cloudstrats.ai
            </a>
          </div>
        </div>

        <div>
          <h4>Offices</h4>
          <div className="footer__offices">
            {company.contacts.offices.map((o) => (
              <p key={o.city}>
                <strong>{o.city}</strong>
                <span>{o.address}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {company.legalName}</span>
        <span>Made in India · Made for India · Made to Protect</span>
      </div>
    </footer>
  );
}
