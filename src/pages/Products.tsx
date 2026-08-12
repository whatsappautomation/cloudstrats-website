import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import {
  aiSuites,
  productPath,
  productSlugify,
  products,
} from "../data/products";
import "./Products.css";

export function Products() {
  return (
    <div className="products-page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Our Products</p>
          <h1 className="section-title">Intelligent platforms. Unified by purpose.</h1>
          <p className="section-lead">
            Cloud native · Secure by design · AI powered · Mission interoperable.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container products-stack">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.06}>
              <article id={product.id} className="panel product-detail">
                <div className="product-detail__intro">
                  <p className="product-detail__tag">{product.tagline}</p>
                  <Link to={productPath(product.id)}>
                    <h2>{product.name}</h2>
                  </Link>
                  <p>{product.description}</p>
                  <div className="trait-row">
                    {product.traits.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <ul>
                    {product.items.map((o) => (
                      <li key={o}>
                        <Link to={`${productPath(product.id)}#${productSlugify(o)}`}>
                          {o}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link to={productPath(product.id)} className="product-detail__cta">
                    Open product page <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section ai-suite-section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">AI Suites</p>
            <h2 className="section-title">Nayan · Akshar · Swar</h2>
            <p className="section-lead">
              Complementary AI capabilities spanning vision, language and speech —
              powering industry use cases across defence, government and enterprise.
            </p>
          </Reveal>
          <div className="grid-3 ai-suite-grid">
            {aiSuites.map((suite, i) => (
              <Reveal key={suite.id} delay={i * 0.07}>
                <article className="panel ai-suite-card">
                  <h3>{suite.name}</h3>
                  <p className="ai-suite-card__focus">{suite.focus}</p>
                  <p>{suite.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <article className="panel miraya-pipeline">
              <p className="eyebrow">Miraya Data Factory</p>
              <h2>From data sources to outcomes</h2>
              <p>
                Store · Manage · Prep · Train · Model · Serve — with governance,
                integration and DevOps built in.
              </p>
              <div className="pipeline">
                {[
                  "Data Sources",
                  "Lake / Warehouse / Marts",
                  "Prep & Train",
                  "Analytics",
                  "Insights & Action",
                ].map((step) => (
                  <div key={step}>{step}</div>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
