import { t } from "../i18n/i18n";

const ExportProcess = () => {
  const steps = t("home.exportProcess.steps");

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>{t("home.exportProcess.title")}</h2>
        <p style={styles.subtitle}>{t("home.exportProcess.subtitle")}</p>

        <div style={styles.grid}>
          {steps.map((s, i) => (
            <div key={i} style={styles.step}>
              <div style={styles.circle}>
                <span style={styles.num}>{i + 1}</span>
              </div>
              <h3 style={styles.stepTitle}>{s.title}</h3>
              <p style={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExportProcess;

const styles = {
  section: { padding: "90px 0", background: "#fff" },
  container: { width: "min(1200px, 92%)", margin: "0 auto", textAlign: "center" },
  title: {
    fontSize: "clamp(26px, 3.2vw, 46px)",
    fontWeight: 900,
    color: "#0b2a1c",
  },
  subtitle: { marginTop: "10px", color: "rgba(0,0,0,0.65)", fontWeight: 700 },
  grid: {
    marginTop: "50px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "22px",
    alignItems: "start",
  },
  step: { padding: "10px" },
  circle: {
    width: "78px",
    height: "78px",
    borderRadius: "999px",
    background: "#f4b400",
    margin: "0 auto 18px",
    display: "grid",
    placeItems: "center",
    position: "relative",
  },
  num: {
    position: "absolute",
    width: "70px",
    height: "70px",
    borderRadius: "999px",
    background: "#1d5b3a",
    display: "grid",
    placeItems: "center",
    fontWeight: 900,
    color: "#ffffff",
  },
  stepTitle: { fontSize: "20px", fontWeight: 900 },
  stepDesc: { marginTop: "8px", color: "rgba(0,0,0,0.6)", fontWeight: 700 },
};