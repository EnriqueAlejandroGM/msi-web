import { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const classes = `msi-scroll-top-btn ${
    visible ? "msi-scroll-top-btn--visible" : "msi-scroll-top-btn--hidden"
  }`;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={classes}
      aria-label="Volver al inicio"
    >
      {/* Si ya usas Bootstrap Icons, esto mostrará un chevron elegante */}
      <span className="msi-scroll-top-icon">↑</span>
    </button>
  );
}