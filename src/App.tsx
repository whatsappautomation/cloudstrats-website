import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Careers } from "./pages/Careers";
import { CaseStudies } from "./pages/CaseStudies";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Industries } from "./pages/Industries";
import { IndustryDetail } from "./pages/IndustryDetail";
import { ProductDetail } from "./pages/ProductDetail";
import { Products } from "./pages/Products";
import { ServiceCategoryPage } from "./pages/ServiceCategory";
import { Services } from "./pages/Services";
import { WhyCloudstrats } from "./pages/WhyCloudstrats";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:serviceId" element={<ServiceCategoryPage />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<ProductDetail />} />
          <Route path="industries" element={<Industries />} />
          <Route path="industries/:industryId" element={<IndustryDetail />} />
          <Route path="why-cloudstrats" element={<WhyCloudstrats />} />
          <Route path="blog" element={<Blog />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="about" element={<About />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
