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
import { industryPath, industrySectors } from "../data/industries";
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
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

type MenuKey = "services" | "products" | "industries" | null;

export function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState<MenuKey>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveMenu(null);
    setMobileOpen(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const servicesActive = location.pathname.startsWith("/services");
  const productsActive = location.pathname.startsWith("/products");
  const industriesActive = location.pathname.startsWith("/industries");

  const openMenu = (key: MenuKey) => setActiveMenu(key);
  const closeMenus = () => setActiveMenu(null);

  return (
    <header className={`nav ${scrolled || activeMenu ? "nav--scrolled" : ""}`}>
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
            className={`nav__item ${activeMenu === "services" ? "nav__item--open" : ""}`}
            onMouseEnter={() => openMenu("services")}
            onMouseLeave={closeMenus}
          >
            <Link
              to="/services"
              className={`nav__link nav__link--trigger ${servicesActive ? "nav__link--active" : ""}`}
              aria-expanded={activeMenu === "services"}
              aria-haspopup="true"
            >
              Services
              <ChevronDown size={15} className="nav__chevron" />
            </Link>

            <div className={`nav__mega ${activeMenu === "services" ? "nav__mega--open" : ""}`}>
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
            className={`nav__item ${activeMenu === "products" ? "nav__item--open" : ""}`}
            onMouseEnter={() => openMenu("products")}
            onMouseLeave={closeMenus}
          >
            <Link
              to="/products"
              className={`nav__link nav__link--trigger ${productsActive ? "nav__link--active" : ""}`}
              aria-expanded={activeMenu === "products"}
              aria-haspopup="true"
            >
              Products
              <ChevronDown size={15} className="nav__chevron" />
            </Link>

            <div className={`nav__mega ${activeMenu === "products" ? "nav__mega--open" : ""}`}>
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
                        <Link to={productPath(product.id)} className="nav__mega-title">
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

          <div
            className={`nav__item ${activeMenu === "industries" ? "nav__item--open" : ""}`}
            onMouseEnter={() => openMenu("industries")}
            onMouseLeave={closeMenus}
          >
            <Link
              to="/industries"
              className={`nav__link nav__link--trigger ${industriesActive ? "nav__link--active" : ""}`}
              aria-expanded={activeMenu === "industries"}
              aria-haspopup="true"
            >
              Industries
              <ChevronDown size={15} className="nav__chevron" />
            </Link>

            <div className={`nav__mega ${activeMenu === "industries" ? "nav__mega--open" : ""}`}>
              <div className="nav__mega-inner nav__mega-inner--industries">
                <div className="nav__mega-head">
                  <div>
                    <p className="nav__mega-kicker">Industries</p>
                    <h3>Sectors we serve</h3>
                  </div>
                  <Link to="/industries" className="nav__mega-all">
                    View all industries →
                  </Link>
                </div>
                <div className="nav__mega-grid nav__mega-grid--industries">
                  {industrySectors.map((sector) => (
                    <Link
                      key={sector.id}
                      to={industryPath(sector.id)}
                      className="nav__industry-link"
                    >
                      <strong>{sector.title}</strong>
                      <span>{sector.summary}</span>
                    </Link>
                  ))}
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

        {(
          [
            {
              key: "services" as const,
              label: "Services",
              active: servicesActive,
              allTo: "/services",
              allLabel: "All Services",
              items: serviceCategories.map((c) => ({
                id: c.id,
                title: c.title,
                to: servicePath(c.id),
              })),
            },
            {
              key: "products" as const,
              label: "Products",
              active: productsActive,
              allTo: "/products",
              allLabel: "All Products",
              items: products.map((p) => ({
                id: p.id,
                title: p.name,
                to: productPath(p.id),
              })),
            },
            {
              key: "industries" as const,
              label: "Industries",
              active: industriesActive,
              allTo: "/industries",
              allLabel: "All Industries",
              items: industrySectors.map((s) => ({
                id: s.id,
                title: s.title,
                to: industryPath(s.id),
              })),
            },
          ] as const
        ).map((section) => (
          <div key={section.key}>
            <button
              type="button"
              className={`nav__drawer-link nav__drawer-toggle ${section.active ? "nav__link--active" : ""}`}
              onClick={() =>
                setMobileOpen((v) => (v === section.key ? null : section.key))
              }
            >
              {section.label}
              <ChevronDown
                size={18}
                className={
                  mobileOpen === section.key
                    ? "nav__chevron nav__chevron--up"
                    : "nav__chevron"
                }
              />
            </button>
            {mobileOpen === section.key && (
              <div className="nav__drawer-services">
                <Link to={section.allTo} onClick={() => setOpen(false)}>
                  {section.allLabel}
                </Link>
                {section.items.map((item) => (
                  <Link key={item.id} to={item.to} onClick={() => setOpen(false)}>
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

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
