import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, Cloud, Database, Shield } from "lucide-react";
import { Reveal } from "../components/Reveal";
import {
  getProductById,
  productPath,
  productSlugify,
  products,
} from "../data/products";
import "./ProductDetail.css";

const icons = {
  abha: Cloud,
  miraya: Database,
  narad: Shield,
} as const;

export function ProductDetail() {
  const { productId = "" } = useParams();
  const product = getProductById(productId);

  if (!product) return <Navigate to="/products" replace />;

  const Icon = icons[product.id as keyof typeof icons] ?? Cloud;
  const others = products.filter((p) => p.id !== product.id);

  return (
    <div className="product-detail-page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Products</p>
          <div className="product-detail-page__title-row">
            <span className="product-detail-page__icon">
              <Icon size={26} />
            </span>
            <div>
              <h1 className="section-title">{product.name}</h1>
              <p className="product-detail-page__tag">{product.tagline}</p>
            </div>
          </div>
          <p className="section-lead">{product.description}</p>
          <div className="trait-row product-detail-page__traits">
            {product.traits.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <p className="eyebrow">Capabilities</p>
            <h2 className="section-title">What&apos;s included</h2>
          </Reveal>

          <div className="product-detail-page__items">
            {product.items.map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <article
                  id={productSlugify(item)}
                  className="panel product-detail-page__item"
                >
                  <h3>{item}</h3>
                  <p>
                    A core capability of {product.name}, engineered for
                    mission-critical and enterprise environments.
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="panel product-detail-page__cta">
              <div>
                <h2>Explore {product.name}</h2>
                <p>Talk to us about deployment, integration and managed operations.</p>
              </div>
              <Link to="/contact" className="btn btn-primary">
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section product-detail-page__others">
        <div className="container">
          <Reveal>
            <p className="eyebrow">More products</p>
            <h2 className="section-title">Related platforms</h2>
          </Reveal>
          <div className="product-detail-page__others-grid">
            {others.map((p, i) => {
              const OtherIcon = icons[p.id as keyof typeof icons] ?? Cloud;
              return (
                <Reveal key={p.id} delay={i * 0.05}>
                  <Link to={productPath(p.id)} className="panel product-detail-page__other">
                    <span>
                      <OtherIcon size={18} />
                    </span>
                    <strong>{p.name}</strong>
                    <em>
                      {p.items.join(" · ")} <ArrowRight size={14} />
                    </em>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
