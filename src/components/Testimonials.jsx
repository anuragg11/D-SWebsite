import { t } from "../i18n/i18n";

const Testimonials = () => {
  const list = t("home.testimonials.list");

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>{t("home.testimonials.title")}</h2>
        <p style={styles.subtitle}>{t("home.testimonials.subtitle")}</p>

        <div style={styles.grid}>
          {list.map((x, i) => (
            <div key={i} style={styles.card}>
              <div style={styles.quoteIcon}>“</div>
              <p style={styles.quote}>{x.quote}</p>
              <div style={styles.line} />
              <div style={styles.name}>{x.name}</div>
              <div style={styles.company}>{x.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

const styles = {
  section: {
    padding: "90px 0",
    background:
      "radial-gradient(circle at top, rgba(29,91,58,0.07), rgba(255,255,255,1))",
  },
  container: { width: "min(1200px, 92%)", margin: "0 auto", textAlign: "center" },
  title: { fontSize: "clamp(26px, 3.2vw, 46px)", fontWeight: 900, color: "#0b2a1c" },
  subtitle: { marginTop: "10px", color: "rgba(0,0,0,0.65)", fontWeight: 700 },
  grid: {
    marginTop: "40px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "22px",
  },
  card: {
    background: "#fff",
    border: "1px solid rgba(0,0,0,0.08)",
    borderRadius: "18px",
    padding: "26px",
    textAlign: "left",
  },
  quoteIcon: { fontSize: "42px", color: "rgba(0,0,0,0.15)", fontWeight: 900 },
  quote: { marginTop: "6px", fontWeight: 700, color: "rgba(0,0,0,0.75)", lineHeight: 1.7 },
  line: { height: "1px", background: "rgba(0,0,0,0.1)", margin: "18px 0" },
  name: { fontWeight: 900 },
  company: { color: "rgba(0,0,0,0.55)", fontWeight: 700, marginTop: "4px" },
};