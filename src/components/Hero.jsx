import { useEffect, useState } from "react";
import { t } from "../i18n/i18n";
import heroImg from "../assets/hero.jpg";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 700);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section id="home" style={styles.hero}>
      {/* Background */}
      <div style={{ ...styles.bg, backgroundImage: `url(${heroImg})` }} />

      {/* Overlay */}
      <div style={styles.overlay} />

      {/* Content */}
      <div style={styles.content}>
        <h1 style={styles.title}>{t("home.hero.title")}</h1>
        <h2 style={styles.subtitle}>{t("home.hero.subtitle")}</h2>

        <p style={styles.desc}>{t("home.hero.description")}</p>

        {/* Buttons */}
        <div style={{ ...styles.btnRow, flexDirection: isMobile ? "column" : "row" }}>
          <a href="products" style={{ ...styles.btn, ...styles.btnPrimary }}>
            {t("home.hero.buttons.viewProducts")}
          </a>

          <a href="#contact" style={{ ...styles.btn, ...styles.btnSecondary }}>
            {t("home.hero.buttons.contactUs")}
          </a>
        </div>

        {/* Down Arrow
        <div style={styles.arrowWrap}>
          <span style={styles.arrow}></span>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;

const styles = {
  hero: {
    position: "relative",
    minHeight: "85vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  bg: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2000&auto=format&fit=crop')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transform: "scale(1.05)",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(9, 52, 32, 0.35), rgba(9, 52, 32, 0.85))",
  },

  content: {
    position: "relative",
    zIndex: 2,
    width: "min(1100px, 92%)",
    margin: "0 auto",
    textAlign: "center",
    color: "#fff",
    padding: "90px 0 60px",
  },

  title: {
    fontSize: "clamp(38px, 5vw, 82px)",
    fontWeight: 900,
    letterSpacing: "-1px",
    textShadow: "0 8px 25px rgba(0,0,0,0.35)",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "clamp(18px, 2.6vw, 44px)",
    fontWeight: 900,
    letterSpacing: "4px",
    marginBottom: "20px",
  },

  desc: {
    fontSize: "clamp(14px, 1.4vw, 22px)",
    fontWeight: 600,
    opacity: 0.92,
    marginBottom: "30px",
  },

  btnRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    flexWrap: "wrap",
  },

  btn: {
    textDecoration: "none",
    padding: "14px 30px",
    borderRadius: "12px",
    fontWeight: 900,
    fontSize: "16px",
    minWidth: "200px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.2s",
  },

  btnPrimary: {
    background: "#f4b400",
    color: "#111",
    boxShadow: "0 14px 30px rgba(0,0,0,0.25)",
  },

  btnSecondary: {
    background: "rgba(10, 80, 50, 0.45)",
    border: "2px solid rgba(255,255,255,0.55)",
    color: "#fff",
  },

  arrowWrap: {
    marginTop: "42px",
    display: "flex",
    justifyContent: "center",
  },

  arrow: {
    fontSize: "48px",
    opacity: 0.7,
    transform: "translateY(10px)",
    userSelect: "none",
  },
};