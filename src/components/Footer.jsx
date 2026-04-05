import { t } from "../i18n/i18n";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footer} id="contact">
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Column 1 */}
          <div>
            <div style={styles.brandRow}>
              <div style={styles.leaf}>🍃</div>
              <div>
                <h3 style={styles.brandTitle}>{t("footer.about.title")}</h3>
                <p style={styles.brandSub}>{t("footer.about.subtitle")}</p>
              </div>
            </div>

            <p style={styles.desc}>{t("footer.about.description")}</p>

            <div style={styles.socialRow}>
              <a href="#" style={styles.socialBtn} aria-label="facebook">
                f
              </a>
              <a href="#" style={styles.socialBtn} aria-label="twitter">
                x
              </a>
              <a href="#" style={styles.socialBtn} aria-label="linkedin">
                in
              </a>
              <a href="#" style={styles.socialBtn} aria-label="instagram">
                ig
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 style={styles.colTitle}>{t("footer.quickLinks.title")}</h4>

            <div style={styles.links}>
              {/* ✅ Routes */}
              <NavLink to="/" style={styles.link}>
                {t("footer.quickLinks.home")}
              </NavLink>

              <NavLink to="/about" style={styles.link}>
                {t("footer.quickLinks.about")}
              </NavLink>

              {/* ✅ Anchors always from Home */}
              <NavLink to="/products" style={styles.link}>
                {t("footer.quickLinks.products")}
              </NavLink>

              <NavLink to="/certifications" style={styles.link}>
                {t("footer.quickLinks.certifications")}
              </NavLink>

              <NavLink to="/contact" style={styles.link}>
                {t("footer.quickLinks.contact")}
              </NavLink>
            </div>
          </div>

          {/* Column 3 */}
          <div style={styles.box}>
            <h4 style={styles.colTitle}>{t("footer.contact.title")}</h4>

            <div style={styles.infoItem}>
              <div>
                <div style={styles.label}>{t("footer.contact.phoneLabel")}</div>
                <div style={styles.value}>{t("footer.contact.phone")}</div>
              </div>
            </div>

            <div style={styles.infoItem}>
              <div>
                <div style={styles.label}>{t("footer.contact.emailLabel")}</div>
                <div style={styles.value}>{t("footer.contact.email")}</div>
              </div>
            </div>

            <div style={styles.infoItem}>
              <div>
                <div style={styles.label}>
                  {t("footer.contact.addressLabel")}
                </div>
                <div style={styles.value}>{t("footer.contact.address")}</div>
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h4 style={styles.colTitle}>{t("footer.highlight.title")}</h4>

            <div style={styles.highlightCard}>
              <div style={styles.highlightIcon}>🍃</div>
              <div style={styles.highlightText}>
                {t("footer.highlight.title")}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div style={styles.bottom}>
          <p style={styles.copy}>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const styles = {
  footer: {
    background: "linear-gradient(180deg, #1d5b3a, #16422b)",
    color: "#fff",
    padding: "70px 0 20px",
  },

  container: {
    width: "min(1200px, 92%)",
    margin: "0 auto",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "40px",
    alignItems: "start",
  },

  brandRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  leaf: {
    width: "42px",
    height: "42px",
    borderRadius: "999px",
    display: "grid",
    placeItems: "center",
    background: "rgba(255,255,255,0.12)",
    fontSize: "18px",
  },

  brandTitle: {
    margin: 0,
    fontSize: "22px",
    fontWeight: 900,
  },

  brandSub: {
    margin: 0,
    marginTop: "2px",
    opacity: 0.85,
    fontWeight: 400,
    fontSize: "13px",
  },

  desc: {
    marginTop: "18px",
    opacity: 0.9,
    fontWeight: 400,
    lineHeight: 1.6,
    maxWidth: "340px",
  },

  socialRow: {
    marginTop: "18px",
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },

  socialBtn: {
    width: "44px",
    height: "44px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.12)",
    display: "grid",
    placeItems: "center",
    textDecoration: "none",
    color: "#fff",
    fontWeight: 900,
    border: "1px solid rgba(255,255,255,0.12)",
  },

  colTitle: {
    fontSize: "18px",
    fontWeight: 900,
    marginBottom: "18px",
  },

  links: {
    display: "grid",
    gap: "12px",
  },

  link: {
    textDecoration: "none",
    color: "rgba(255,255,255,0.90)",
    fontWeight: 700,
  },

  infoItem: {
    display: "flex",
    gap: "12px",
    marginBottom: "16px",
  },

  infoIcon: {
    width: "38px",
    height: "38px",
    borderRadius: "12px",
    display: "grid",
    placeItems: "center",
    background: "rgba(255,255,255,0.10)",
  },

  label: {
    opacity: 0.85,
    fontWeight: 700,
    fontSize: "12px",
  },

  value: {
    marginTop: "2px",
    fontWeight: 700,
    color: "#fff",
  },

  highlightCard: {
    background: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "18px",
    padding: "22px",
    minHeight: "150px",
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },

  highlightIcon: {
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    display: "grid",
    placeItems: "center",
    background: "rgba(0,0,0,0.18)",
    fontSize: "22px",
  },

  highlightText: {
    fontWeight: 900,
    fontSize: "16px",
    opacity: 0.95,
  },

  bottom: {
    marginTop: "40px",
    paddingTop: "18px",
    borderTop: "1px solid rgba(255,255,255,0.14)",
    textAlign: "center",
  },

  copy: {
    margin: 0,
    opacity: 0.85,
    fontWeight: 700,
  },
};