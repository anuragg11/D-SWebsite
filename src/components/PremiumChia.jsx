import { useEffect, useState } from "react";
import { t } from "../i18n/i18n";
import chiaSeedsImg from "../assets/chia-seeds.jpg";

const PremiumChia = () => {
  const points = t("home.premium.points");

  // ✅ mobile detect (no layout break)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section style={styles.section}>
      <div
        style={{
          ...styles.container,
          ...(isMobile && styles.containerMobile),
        }}
      >
        {/* LEFT */}
        <div style={styles.left}>
          <div style={styles.tag}>{t("home.premium.tag")}</div>
          <h2 style={styles.title}>{t("home.premium.title")}</h2>

          <ul style={styles.list}>
            {points.map((p, i) => (
              <li key={i} style={styles.li}>
                <span style={styles.tick}>✓</span>
                {p}
              </li>
            ))}
          </ul>

          <a
            href="/products"
            style={{
              ...styles.btn,
              ...(isMobile && styles.btnMobile),
            }}
          >
            {t("home.premium.button")}
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div
          style={{
            ...styles.right,
            ...(isMobile && styles.rightMobile),
          }}
        >
          <div style={styles.img}></div>

          <div
            style={{
              ...styles.badge,
              ...(isMobile && styles.badgeMobile),
            }}
          >
            {t("home.premium.badge")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumChia;

const styles = {
  section: { padding: "90px 0", background: "#e7f0ea" },

  container: {
    width: "min(1200px, 92%)",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px",
    alignItems: "center",
  },

  // ✅ MOBILE ADD ONLY
  containerMobile: {
    gridTemplateColumns: "1fr",
    gap: "26px",
  },

  left: {},

  tag: {
    letterSpacing: "2px",
    fontWeight: 900,
    color: "rgba(0,0,0,0.55)",
    fontSize: "12px",
  },

  title: {
    marginTop: "10px",
    lineHeight: 1,
    fontSize: "clamp(28px, 3.6vw, 56px)",
    fontWeight: 900,
    color: "#0b2a1c",
  },

  list: { marginTop: "20px", display: "grid", gap: "14px", padding: 0 },

  li: {
    listStyle: "none",
    display: "flex",
    gap: "12px",
    fontWeight: 700,
    color: "#1a1a1a",
  },

  tick: {
    width: "28px",
    height: "28px",
    borderRadius: "999px",
    background: "rgba(29,91,58,0.15)",
    display: "grid",
    placeItems: "center",
    color: "#1d5b3a",
    fontWeight: 900,
    flexShrink: 0,
  },

  btn: {
    display: "inline-block",
    marginTop: "26px",
    padding: "12px 20px",
    background: "#f4b400",
    borderRadius: "10px",
    fontWeight: 900,
    color: "#111",
    textDecoration: "none",
    width: "fit-content",
  },

  // ✅ MOBILE ADD ONLY
  btnMobile: {
    width: "100%",
    textAlign: "center",
  },

  right: {
    position: "relative",
    borderRadius: "26px",
    overflow: "hidden",
    height: "450px",
    background: "#ddd",
  },

  // ✅ MOBILE ADD ONLY
  rightMobile: {
    height: "auto",
    aspectRatio: "4 / 5",
    minHeight: "320px",
  },

  img: {
    position: "absolute",
    inset: 0,
    backgroundImage: `url(${chiaSeedsImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

  badge: {
    position: "absolute",
    right: "50px",
    bottom: "20px",
    width: "110px",
    height: "110px",
    borderRadius: "999px",
    display: "grid",
    placeItems: "center",
    background: "#f4b400",
    fontWeight: 900,
    textAlign: "center",
    padding: "10px",
  },

  // ✅ MOBILE ADD ONLY
  badgeMobile: {
    right: "14px",
    bottom: "14px",
    width: "90px",
    height: "90px",
    fontSize: "14px",
  },
};
