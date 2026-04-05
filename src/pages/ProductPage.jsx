import { t } from "../i18n/i18n";

const ProductsPage = () => {
  const products = t("products.items") || [];
  const specs = t("products.specs.items") || [];

  return (
    <>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroContainer}>
          <h1 style={styles.heroTitle}>{t("products.hero.title")}</h1>
          <p style={styles.heroSub}>{t("products.hero.subtitle")}</p>
        </div>
      </section>

      {/* Products Grid */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.grid}>
            {products.map((p, idx) => (
              <div
                key={idx}
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 18px 40px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 20px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    ...styles.cardImg,
                    backgroundImage: `url(${p.image})`,
                  }}
                />

                <div style={styles.cardBody}>
                  <h3 style={styles.cardTitle}>{p.title}</h3>
                  <p style={styles.cardDesc}>{p.desc}</p>

                  <a href="/#contact" style={styles.cardBtn}>
                    {t("products.requestQuote")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <div style={styles.ctaContainer}>
          <h2 style={styles.ctaTitle}>{t("products.cta.title")}</h2>
          <p style={styles.ctaSub}>{t("products.cta.subtitle")}</p>
          <a href="/#contact" style={styles.ctaBtn}>
            {t("products.cta.button")}
          </a>
        </div>
      </section>

      {/* Specs */}
      <section style={styles.specSection}>
        <div style={styles.container}>
          <h2 style={styles.specTitle}>{t("products.specs.title")}</h2>

          <div style={styles.specCard}>
            {specs.map((s, i) => (
              <div key={i} style={styles.specRow}>
                <div style={styles.specKey}>{s.key}</div>
                <div style={styles.specValue}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;

const styles = {
  hero: {
    background: "linear-gradient(180deg,#1d5b3a,#16422b)",
    padding: "90px 0",
  },
  heroContainer: {
    width: "min(1200px, 92%)",
    margin: "0 auto",
    textAlign: "center",
  },
  heroTitle: {
    margin: 0,
    fontSize: "clamp(34px, 5vw, 64px)",
    fontWeight: 900,
    color: "#fff",
  },
  heroSub: {
    marginTop: "14px",
    fontSize: "clamp(14px, 2vw, 20px)",
    fontWeight: 600,
    color: "rgba(255,255,255,0.9)",
    maxWidth: "700px",
    marginInline: "auto",
  },

  section: {
    padding: "70px 0",
    background: "#fff",
  },
  container: {
    width: "min(1200px, 92%)",
    margin: "0 auto",
  },

  grid: {
    display: "grid",
    gap: "22px",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  },

  card: {
    borderRadius: "18px",
    overflow: "hidden",
    border: "1px solid rgba(0,0,0,0.08)",
    background: "#fff",
    transition: "0.25s",
    transform: "translateY(0px)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
  },

  cardImg: {
    width: "100%",
    height: "190px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  cardBody: {
    padding: "18px 18px 20px",
  },

  cardTitle: {
    margin: 0,
    fontWeight: 900,
    fontSize: "18px",
    color: "#0b2a1c",
  },

  cardDesc: {
    marginTop: "8px",
    fontSize: "13px",
    fontWeight: 700,
    lineHeight: 1.5,
    color: "rgba(0,0,0,0.6)",
    minHeight: "38px",
  },

  cardBtn: {
    display: "inline-block",
    marginTop: "14px",
    background: "#f4b400",
    color: "#111",
    fontWeight: 900,
    padding: "9px 12px",
    borderRadius: "10px",
    textDecoration: "none",
    fontSize: "13px",
  },

  cta: {
    background: "linear-gradient(180deg,#1d5b3a,#16422b)",
    padding: "80px 0",
  },
  ctaContainer: {
    width: "min(900px, 92%)",
    margin: "0 auto",
    textAlign: "center",
  },
  ctaTitle: {
    margin: 0,
    color: "#fff",
    fontSize: "clamp(28px, 4vw, 48px)",
    fontWeight: 900,
  },
  ctaSub: {
    marginTop: "12px",
    color: "rgba(255,255,255,0.9)",
    fontWeight: 700,
    fontSize: "16px",
  },
  ctaBtn: {
    display: "inline-block",
    marginTop: "22px",
    padding: "16px 28px",
    background: "#f4b400",
    borderRadius: "14px",
    fontWeight: 900,
    textDecoration: "none",
    color: "#111",
    boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
  },

  specSection: {
    padding: "90px 0",
    background: "#e7f0ea",
  },

  specTitle: {
    textAlign: "center",
    margin: 0,
    fontSize: "clamp(30px, 4vw, 56px)",
    fontWeight: 900,
    color: "#0b2a1c",
  },

  specCard: {
    marginTop: "34px",
    maxWidth: "860px",
    marginInline: "auto",
    borderRadius: "18px",
    background: "#f7faf7",
    border: "1px solid rgba(0,0,0,0.08)",
    overflow: "hidden",
  },

  specRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "18px 22px",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
    gap: "20px",
  },

  specKey: {
    fontWeight: 900,
    color: "#111",
  },

  specValue: {
    fontWeight: 800,
    color: "rgba(0,0,0,0.65)",
  },
};