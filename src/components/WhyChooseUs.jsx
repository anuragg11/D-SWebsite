import { t } from "../i18n/i18n";

const WhyChooseUs = () => {
  const cards = t("home.whyChoose.cards") || [];

  return (
    <section style={styles.section} id="about">
      <div style={styles.container}>
        <h2 style={styles.title}>{t("home.whyChoose.title")}</h2>
        <p style={styles.subtitle}>{t("home.whyChoose.subtitle")}</p>

        <div style={styles.grid}>
          {cards.map((c, idx) => (
            <div key={idx} style={styles.card}>
              <div style={styles.icon}>✓</div>
              <h3 style={styles.cardTitle}>{c.title}</h3>
              <p style={styles.cardDesc}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

const styles = {
  section: {
    padding: "90px 0",
    background:
      "radial-gradient(circle at top, rgba(29,91,58,0.06), rgba(255,255,255,1))",
  },
  container: {
    width: "min(1200px, 92%)",
    margin: "0 auto",
    textAlign: "center",
  },
  title: {
    fontSize: "clamp(28px, 3.5vw, 52px)",
    fontWeight: 900,
    color: "#0b2a1c",
  },
  subtitle: {
    marginTop: "10px",
    fontSize: "clamp(14px, 1.4vw, 20px)",
    color: "rgba(0,0,0,0.65)",
    maxWidth: "700px",
    marginInline: "auto",
  },
  grid: {
    marginTop: "40px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "22px",
  },
  card: {
    background: "#fff",
    border: "1px solid rgba(0,0,0,0.08)",
    borderRadius: "18px",
    padding: "30px 22px",
    boxShadow: "0 10px 22px rgba(0,0,0,0.06)",
  },
  icon: {
    width: "60px",
    height: "60px",
    borderRadius: "999px",
    display: "grid",
    placeItems: "center",
    margin: "0 auto 16px",
    background: "rgba(29,91,58,0.12)",
    color: "#1d5b3a",
    fontSize: "22px",
    fontWeight: 900,
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: 900,
    marginBottom: "10px",
    color: "#0b2a1c",
  },
  cardDesc: {
    color: "rgba(0,0,0,0.6)",
    lineHeight: 1.6,
    fontWeight: 600,
  },
};