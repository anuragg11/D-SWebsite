import Header from "../components/Header";
import Footer from "../components/Footer";
import { t } from "../i18n/i18n";

const CertificationsPage = () => {
  const list = t("certifications.list") || [];

  return (
    <>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroInner}>
          <h1 style={styles.heroTitle}>{t("certifications.title")}</h1>
          <p style={styles.heroSubtitle}>{t("certifications.subtitle")}</p>
        </div>
      </section>

      {/* GRID */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.grid} className="certGrid">
            {list.map((item, idx) => (
              <div key={idx} style={styles.card}>
                {/* ✅ Image placeholder (tu baad me certificate image yaha dal dena) */}
                <div style={styles.preview}>
                  <div style={styles.previewText}>
                    {t("certifications.clickToView")}
                  </div>
                </div>

                <div style={styles.cardBody}>
                  <h3 style={styles.cardTitle}>{item.title}</h3>
                  <p style={styles.cardDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default CertificationsPage;

const styles = {
  hero: {
    background: "linear-gradient(180deg, #1d5b3a, #16422b)",
    padding: "90px 0",
    textAlign: "center",
  },

  heroInner: {
    width: "min(1200px, 92%)",
    margin: "0 auto",
  },

  heroTitle: {
    margin: 0,
    color: "#fff",
    fontWeight: 900,
    fontSize: "clamp(34px, 5vw, 70px)",
  },

  heroSubtitle: {
    marginTop: "14px",
    color: "rgba(255,255,255,0.88)",
    fontWeight: 700,
    fontSize: "clamp(14px, 1.5vw, 20px)",
  },

  section: {
    padding: "70px 0",
    background: "#f2f7f3",
  },

  container: {
    width: "min(1200px, 92%)",
    margin: "0 auto",
  },

  // ✅ 2 cards per row on desktop, 1 on mobile
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "22px",
  },

  card: {
    borderRadius: "18px",
    overflow: "hidden",
    background: "#fff",
    border: "1px solid rgba(0,0,0,0.08)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    transition: "0.25s ease",
  },

  preview: {
    height: "220px",
    background: "#e9f2ec",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
    display: "grid",
    placeItems: "center",
  },

  previewText: {
    fontWeight: 800,
    color: "rgba(0,0,0,0.55)",
    fontSize: "14px",
  },

  cardBody: {
    padding: "18px 18px",
  },

  cardTitle: {
    margin: 0,
    fontWeight: 900,
    fontSize: "18px",
    color: "#0b2a1c",
  },

  cardDesc: {
    marginTop: "8px",
    marginBottom: 0,
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: 1.6,
    color: "rgba(0,0,0,0.65)",
  },
};