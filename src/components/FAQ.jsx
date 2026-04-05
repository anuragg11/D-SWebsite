import { useState } from "react";
import { t } from "../i18n/i18n";

const FAQ = () => {
  const items = t("home.faq.questions");
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>{t("home.faq.title")}</h2>
        <p style={styles.subtitle}>{t("home.faq.subtitle")}</p>

        <div style={styles.list}>
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={i} style={styles.item}>
                <button
                  style={styles.qBtn}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <span style={styles.q}>{item.q}</span>
                  <span style={styles.arrow}>{open ? "−" : "+"}</span>
                </button>

                {open && <div style={styles.answer}>{item.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

const styles = {
  section: { padding: "90px 0", background: "#e7f0ea" },
  container: { width: "min(1000px, 92%)", margin: "0 auto", textAlign: "center" },
  title: { fontSize: "clamp(26px, 3.2vw, 52px)", fontWeight: 900, color: "#0b2a1c" },
  subtitle: { marginTop: "10px", color: "rgba(0,0,0,0.65)", fontWeight: 700 },
  list: { marginTop: "34px", display: "grid", gap: "16px" },
  item: {
    background: "#fff",
    borderRadius: "14px",
    border: "1px solid rgba(0,0,0,0.10)",
    overflow: "hidden",
    textAlign: "left",
  },
  qBtn: {
    width: "100%",
    background: "transparent",
    border: "none",
    padding: "18px 18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  q: { fontWeight: 900, color: "#111" },
  arrow: { fontSize: "22px", fontWeight: 900, color: "#1d5b3a" },
  answer: {
    padding: "0 18px 18px",
    color: "rgba(0,0,0,0.7)",
    fontWeight: 700,
    lineHeight: 1.7,
  },
};