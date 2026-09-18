type PageBannerProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  image?: string;
  children?: React.ReactNode;
};

export function PageBanner({
  eyebrow,
  title,
  lead,
  image = "/assets/lifestyle/home-banner.png",
  children,
}: PageBannerProps) {
  return (
    <section className="page-banner">
      <img src={image} alt="" className="page-banner__bg" />
      <div className="page-banner__overlay" aria-hidden />
      <div className="container page-banner__content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {lead ? <p>{lead}</p> : null}
        {children}
      </div>
    </section>
  );
}
