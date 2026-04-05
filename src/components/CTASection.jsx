import { t } from "../i18n/i18n";

const CTASection = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>{t("home.cta.title")}</h2>
        <p style={styles.subtitle}>{t("home.cta.subtitle")}</p>
        <a href="#contact" style={styles.btn}>
          {t("home.cta.button")}
        </a>
      </div>
    </section>
  );
};

export default CTASection;

const styles = {
  section: {
    padding: "70px 0",
    background: "linear-gradient(180deg, #1d5b3a, #174a30)",
    color: "#fff",
    textAlign: "center",
  },
  container: { width: "min(900px, 92%)", margin: "0 auto" },
  title: { fontSize: "clamp(24px, 3vw, 44px)", fontWeight: 900 },
  subtitle: { marginTop: "10px", opacity: 0.95, fontWeight: 700 },
  btn: {
    display: "inline-block",
    marginTop: "22px",
    background: "#f4b400",
    color: "#111",
    padding: "12px 22px",
    borderRadius: "12px",
    fontWeight: 900,
    textDecoration: "none",
  },
};