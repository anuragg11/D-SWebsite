import { t } from "../i18n/i18n";
import { useEffect, useState } from "react";

const About = () => {
  const values = t("about.values.cards") || [];
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section style={styles.heroSection} id="about">
        <div style={styles.heroInner}>
          <h1 style={styles.heroTitle}>{t("about.hero.title")}</h1>
          <p style={styles.heroSubtitle}>{t("about.hero.subtitle")}</p>
        </div>
      </section>

      {/* STORY + MISSION + VISION */}
      <section style={styles.storySection}>
        <div style={styles.container}>
          <div
            style={{
              ...styles.storyGrid,
              ...(isMobile && styles.storyGridMobile)
            }}
          >
            {/* Story */}
            <div>
              <div style={styles.storyHeading}>
                <span style={styles.storyIcon}>🌿</span>
                <h2 style={styles.storyTitle}>
                  {t("about.story.title")}
                </h2>
              </div>

              <p
                style={{
                  ...styles.storyDesc,
                  ...(isMobile && styles.storyDescMobile)
                }}
              >
                {t("about.story.desc")}
              </p>
            </div>

            {/* Mission + Vision */}
            <div style={styles.sideBox}>
              <div style={styles.miniBlock}>
                <div style={styles.miniTitleRow}>
                  <span style={styles.miniDot}>◎</span>
                  <h3 style={styles.miniTitle}>
                    {t("about.mission.title")}
                  </h3>
                </div>
                <p style={styles.miniDesc}>
                  {t("about.mission.desc")}
                </p>
              </div>

              <div style={styles.miniBlock}>
                <div style={styles.miniTitleRow}>
                  <span style={styles.miniDot}>◎</span>
                  <h3 style={styles.miniTitle}>
                    {t("about.vision.title")}
                  </h3>
                </div>
                <p style={styles.miniDesc}>
                  {t("about.vision.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={styles.valuesSection}>
        <div style={styles.container}>
          <h2 style={styles.valuesTitle}>
            {t("about.values.title")}
          </h2>

          <div
            style={{
              ...styles.valuesGrid,
              ...(isMobile && styles.valuesGridMobile)
            }}
          >
            {values.map((item, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.valueCard,
                  ...(isMobile && styles.valueCardMobile)
                }}
              >
                <div style={styles.valueIconWrap}>
                  <span style={styles.valueIcon}>{item.icon}</span>
                </div>

                <h3 style={styles.valueCardTitle}>
                  {item.title}
                </h3>
                <p style={styles.valueCardDesc}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

/* ================= STYLES ================= */

const styles = {
  container: {
    width: "min(1200px, 92%)",
    margin: "0 auto"
  },

  /* HERO */
  heroSection: {
    background: "linear-gradient(180deg, #1d5b3a, #16422b)",
    padding: "90px 0",
    textAlign: "center"
  },

  heroInner: {
    width: "min(1000px, 92%)",
    margin: "0 auto"
  },

  heroTitle: {
    margin: 0,
    fontSize: "clamp(38px, 5vw, 78px)",
    fontWeight: 900,
    color: "#fff",
    lineHeight: 1.1
  },

  heroSubtitle: {
    marginTop: "16px",
    fontSize: "clamp(14px, 1.6vw, 22px)",
    fontWeight: 700,
    color: "rgba(255,255,255,0.9)"
  },

  /* STORY */
  storySection: {
    padding: "80px 0",
    background: "#fff"
  },

  storyGrid: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: "50px",
    alignItems: "start"
  },

  /* ✅ MOBILE OVERRIDE */
  storyGridMobile: {
    gridTemplateColumns: "1fr",
    gap: "30px"
  },

  storyHeading: {
    display: "flex",
    alignItems: "center",
    gap: "14px"
  },

  storyIcon: {
    width: "52px",
    height: "52px",
    borderRadius: "999px",
    background: "rgba(29,91,58,0.15)",
    display: "grid",
    placeItems: "center",
    fontSize: "22px",
    flexShrink: 0
  },

  storyTitle: {
    margin: 0,
    fontSize: "clamp(24px, 2.4vw, 40px)",
    fontWeight: 900,
    color: "#0b2a1c",
    lineHeight: 1.2
  },

  storyDesc: {
    marginTop: "18px",
    fontSize: "16px",
    lineHeight: 1.75,
    fontWeight: 650,
    color: "rgba(0,0,0,0.65)",
    maxWidth: "560px"
  },

  storyDescMobile: {
    maxWidth: "100%"
  },

  sideBox: {
    display: "grid",
    gap: "30px"
  },

  miniTitleRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },

  miniDot: {
    color: "#1d5b3a",
    fontWeight: 900,
    flexShrink: 0
  },

  miniTitle: {
    margin: 0,
    fontSize: "22px",
    fontWeight: 900,
    color: "#0b2a1c"
  },

  miniDesc: {
    marginTop: "10px",
    lineHeight: 1.7,
    fontWeight: 650,
    color: "rgba(0,0,0,0.62)"
  },

  /* VALUES */
  valuesSection: {
    padding: "90px 0",
    background: "#eef5f0",
    backgroundImage:
      "radial-gradient(circle at 15% 15%, rgba(29,91,58,0.05), transparent 45%)"
  },

  valuesTitle: {
    textAlign: "center",
    fontSize: "clamp(32px, 3.6vw, 60px)",
    fontWeight: 900,
    marginBottom: "40px",
    color: "#0b2a1c"
  },

  valuesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "24px"
  },

  /* ✅ MOBILE VALUES GRID */
  valuesGridMobile: {
    gridTemplateColumns: "1fr",
    gap: "18px"
  },

  valueCard: {
    background: "#fff",
    borderRadius: "22px",
    padding: "30px 20px",
    textAlign: "center",
    border: "1px solid rgba(0,0,0,0.06)",
    boxShadow: "0 18px 40px rgba(0,0,0,0.07)"
  },

  valueCardMobile: {
    padding: "22px 18px"
  },

  valueIconWrap: {
    width: "76px",
    height: "76px",
    borderRadius: "999px",
    margin: "0 auto 18px",
    display: "grid",
    placeItems: "center",
    background: "#1d5b3a"
  },

  valueIcon: {
    fontSize: "30px",
    color: "#fff"
  },

  valueCardTitle: {
    fontSize: "22px",
    fontWeight: 900,
    marginBottom: "10px",
    color: "#0b2a1c"
  },

  valueCardDesc: {
    margin: 0,
    fontWeight: 650,
    lineHeight: 1.6,
    color: "rgba(0,0,0,0.62)"
  }
};
