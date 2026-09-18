import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Always land at the top of the page on route changes. */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    scrollTop();
    // Re-run after route transition paint so mid-page restores don't stick
    const frame = requestAnimationFrame(scrollTop);
    const timer = window.setTimeout(scrollTop, 50);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
