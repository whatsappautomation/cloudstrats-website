import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Always open pages from the top on route change.
 * Hash anchors (dropdown sub-items) update page content at the top —
 * they do not jump mid-page.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scrollTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    scrollTop();
    const frame = requestAnimationFrame(scrollTop);
    const timer = window.setTimeout(scrollTop, 50);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [pathname, hash]);

  return null;
}
