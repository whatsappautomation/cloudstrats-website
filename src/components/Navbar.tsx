import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Brain,
  ChevronDown,
  Cloud,
  Database,
  Menu,
  Network,
  Server,
  Shield,
  Sparkles,
  X,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import {
  serviceCategories,
  servicePath,
  slugify,
} from "../data/services";
import {
  productPath,
  productSlugify,
  products,
} from "../data/products";
import "./Navbar.css";

const serviceIcons = {
  server: Server,
  brain: Brain,
  network: Network,
  shield: Shield,
  spark: Sparkles,
} as const;

const productIcons = {
  abha: Cloud,
  miraya: Database,
  narad: Shield,
} as const;

const simpleLinks = [
  { to: "/industries", label: "Industries" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setProductsOpen(false);
    setMobileServicesOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const servicesActive = location.pathname.startsWith("/services");
  const productsActive = location.pathname.startsWith("/products");
  const menuOpen = servicesOpen || productsOpen;

  return (
    <header className={`nav ${scrolled || menuOpen ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <Link
          to="/"
          className="nav__brand"
          onClick={() => setOpen(false)}
          aria-label="CloudSTRATS home"
        >
          <BrandLogo variant="nav" />
        </Link>

        <nav className="nav__links" aria-label="Primary">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav__link ${isActive ? "nav__link--active" : ""}`
            }
          >
            Home
          </NavLink>

          <div
            className={`nav__item ${servicesOpen ? "nav__item--open" : ""}`}
            onMouseEnter={() => {
              setServicesOpen(true);
              setProductsOpen(false);
            }}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              className={`nav__link nav__link--trigger ${servicesActive ? "nav__link--active" : ""}`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown size={15} className="nav__chevron" />
            </Link>

            <div className={`nav__mega ${servicesOpen ? "nav__mega--open" : ""}`}>
              <div className="nav__mega-inner">
                <div className="nav__mega-head">
                  <div>
                    <p className="nav__mega-kicker">Our Services</p>
                    <h3>Main services & capabilities</h3>
                  </div>
                  <Link to="/services" className="nav__mega-all">
                    View all services →
                  </Link>
                </div>

                <div className="nav__mega-grid">
                  {serviceCategories.map((cat) => {
                    const Icon =
                      serviceIcons[cat.icon as keyof typeof serviceIcons] ?? Server;
                    return (
                      <div key={cat.id} className="nav__mega-col">
                        <Link to={servicePath(cat.id)} className="nav__mega-title">
                          <span className="nav__mega-icon">
                            <Icon size={16} />
                          </span>
                          <span>{cat.title}</span>
                        </Link>
                        <ul>
                          {cat.items.map((item) => (
                            <li key={item}>
                              <Link to={`${servicePath(cat.id)}#${slugify(item)}`}>
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`nav__item ${productsOpen ? "nav__item--open" : ""}`}
            onMouseEnter={() => {
              setProductsOpen(true);
              setServicesOpen(false);
            }}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link
              to="/products"
              className={`nav__link nav__link--trigger ${productsActive ? "nav__link--active" : ""}`}
              aria-expanded={productsOpen}
              aria-haspopup="true"
            >
              Products
              <ChevronDown size={15} className="nav__chevron" />
            </Link>

            <div
              className={`nav__mega nav__mega--products ${productsOpen ? "nav__mega--open" : ""}`}
            >
              <div className="nav__mega-inner nav__mega-inner--products">
                <div className="nav__mega-head">
                  <div>
                    <p className="nav__mega-kicker">Our Products</p>
                    <h3>Platforms & capabilities</h3>
                  </div>
                  <Link to="/products" className="nav__mega-all">
                    View all products →
                  </Link>
                </div>

                <div className="nav__mega-grid nav__mega-grid--products">
                  {products.map((product) => {
                    const Icon =
                      productIcons[product.id as keyof typeof productIcons] ?? Cloud;
                    return (
                      <div key={product.id} className="nav__mega-col">
                        <Link
                          to={productPath(product.id)}
                          className="nav__mega-title"
                        >
                          <span className="nav__mega-icon">
                            <Icon size={16} />
                          </span>
                          <span>{product.name}</span>
                        </Link>
                        <ul>
                          {product.items.map((item) => (
                            <li key={item}>
                              <Link
                                to={`${productPath(product.id)}#${productSlugify(item)}`}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {simpleLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav__link ${isActive ? "nav__link--active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="btn btn-primary nav__cta">
          Talk to Us
        </Link>

        <button
          className="nav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`nav__drawer ${open ? "nav__drawer--open" : ""}`}>
        <NavLink
          to="/"
          end
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            `nav__drawer-link ${isActive ? "nav__link--active" : ""}`
          }
        >
          Home
        </NavLink>

        <button
          type="button"
          className={`nav__drawer-link nav__drawer-toggle ${servicesActive ? "nav__link--active" : ""}`}
          onClick={() => setMobileServicesOpen((v) => !v)}
        >
          Services
          <ChevronDown
            size={18}
            className={
              mobileServicesOpen ? "nav__chevron nav__chevron--up" : "nav__chevron"
            }
          />
        </button>
        {mobileServicesOpen && (
          <div className="nav__drawer-services">
            <Link to="/services" onClick={() => setOpen(false)}>
              All Services
            </Link>
            {serviceCategories.map((cat) => (
              <Link
                key={cat.id}
                to={servicePath(cat.id)}
                onClick={() => setOpen(false)}
              >
                {cat.title}
              </Link>
            ))}
          </div>
        )}

        <button
          type="button"
          className={`nav__drawer-link nav__drawer-toggle ${productsActive ? "nav__link--active" : ""}`}
          onClick={() => setMobileProductsOpen((v) => !v)}
        >
          Products
          <ChevronDown
            size={18}
            className={
              mobileProductsOpen ? "nav__chevron nav__chevron--up" : "nav__chevron"
            }
          />
        </button>
        {mobileProductsOpen && (
          <div className="nav__drawer-services">
            <Link to="/products" onClick={() => setOpen(false)}>
              All Products
            </Link>
            {products.map((product) => (
              <Link
                key={product.id}
                to={productPath(product.id)}
                onClick={() => setOpen(false)}
              >
                {product.name}
              </Link>
            ))}
          </div>
        )}

        {simpleLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `nav__drawer-link ${isActive ? "nav__link--active" : ""}`
            }
          >
            {link.label}
          </NavLink>
        ))}

        <Link
          to="/contact"
          className="btn btn-primary"
          onClick={() => setOpen(false)}
        >
          Talk to Us
        </Link>
      </div>
    </header>
  );
}
