
import { useEffect, useRef, useState } from "react";
import { t, setLanguage, getLanguage } from "../i18n/i18n";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

// ✅ Languages list (Future-proof: yaha add/remove kar sakta hai)
const LANGUAGES = [
  { code: "en", native: "English", label: "English" },
  { code: "hi", native: "हिन्दी", label: "Hindi" },
  { code: "ar", native: "العربية", label: "Arabic" },
  { code: "fr", native: "Français", label: "French" },
  { code: "es", native: "Español", label: "Spanish" },
  { code: "de", native: "Deutsch", label: "German" },
];

const SUPPORTED = LANGUAGES.map((l) => l.code);

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ language dropdown
  const [langOpen, setLangOpen] = useState(false);
  const [activeLang, setActiveLang] = useState(getLanguage() || "en");

  // ✅ IMPORTANT: desktop & mobile separate refs (warna conflict hota hai)
  const dropdownDesktopRef = useRef(null);
  const dropdownMobileRef = useRef(null);

  // ✅ handle resize
  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth < 900;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ✅ route change close all menus
  useEffect(() => {
    setMenuOpen(false);
    setLangOpen(false);
  }, [location.pathname]);

  // ✅ outside click close dropdown
  useEffect(() => {
    const handler = (e) => {
      const inDesktop =
        dropdownDesktopRef.current &&
        dropdownDesktopRef.current.contains(e.target);

      const inMobile =
        dropdownMobileRef.current &&
        dropdownMobileRef.current.contains(e.target);

      if (!inDesktop && !inMobile) setLangOpen(false);
    };

    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  // ✅ ESC close dropdown
  useEffect(() => {
    const esc = (e) => {
      if (e.key === "Escape") setLangOpen(false);
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  // ✅ create correct lang route (Hybrid supported)
  const buildLangPath = (newLang) => {
    const parts = location.pathname.split("/").filter(Boolean);

    // If already has lang in first segment -> remove it
    if (parts.length > 0 && SUPPORTED.includes(parts[0])) {
      parts.shift();
    }

    // parts now = ["about"] / ["products"] / []
    const rest = parts.join("/");

    return rest ? `/${newLang}/${rest}` : `/${newLang}`;
  };

  // ✅ select language + navigate to lang url
  const selectLang = (newLang) => {
    setActiveLang(newLang);
    setLanguage(newLang);
    setLangOpen(false);

    const newPath = buildLangPath(newLang);
    navigate(newPath);
  };

  // ✅ Get Quote should go contact page (same lang)
  const goToContact = () => {
    const parts = location.pathname.split("/").filter(Boolean);

    let lang = activeLang || "en";
    if (parts.length > 0 && SUPPORTED.includes(parts[0])) {
      lang = parts[0];
    }

    navigate(`/${lang}/contact`);
  };

  const currentLangObj =
    LANGUAGES.find((l) => l.code === activeLang) || LANGUAGES[0];

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* ✅ Logo -> always go to current lang home */}
        <NavLink to={`/${activeLang}`} style={styles.logoWrap}>
          <div style={styles.logoTitle}>{t("site.name")}</div>
          <div style={styles.logoSubtitle}>{t("site.tagline")}</div>
        </NavLink>

        {/* ✅ Nav Desktop */}
        {!isMobile && (
          <nav style={styles.nav}>
            <NavLink
              to={`/${activeLang}`}
              style={({ isActive }) => ({
                ...styles.link,
                ...(isActive ? styles.activeLink : {}),
              })}
              end
            >
              {t("nav.home")}
            </NavLink>

            <NavLink
              to={`/${activeLang}/about`}
              style={({ isActive }) => ({
                ...styles.link,
                ...(isActive ? styles.activeLink : {}),
              })}
            >
              {t("nav.about")}
            </NavLink>

            <NavLink
              to={`/${activeLang}/products`}
              style={({ isActive }) => ({
                ...styles.link,
                ...(isActive ? styles.activeLink : {}),
              })}
            >
              {t("nav.products")}
            </NavLink>

            <NavLink
              to={`/${activeLang}/certifications`}
              style={({ isActive }) => ({
                ...styles.link,
                ...(isActive ? styles.activeLink : {}),
              })}
            >
              {t("nav.certifications")}
            </NavLink>

            <NavLink
              to={`/${activeLang}/contact`}
              style={({ isActive }) => ({
                ...styles.link,
                ...(isActive ? styles.activeLink : {}),
              })}
            >
              {t("nav.contact")}
            </NavLink>
          </nav>
        )}

        {/* ✅ Actions */}
        <div style={styles.actions}>
          {/* ✅ Language dropdown Desktop */}
          {!isMobile && (
            <div
              style={styles.langWrap}
              ref={dropdownDesktopRef}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                style={styles.langBtn}
                onClick={() => setLangOpen((p) => !p)}
              >
                <span style={styles.langIcon}>🌐</span>
                <span style={styles.langText}>
                  {currentLangObj.native}{" "}
                  <span style={styles.langSmall}>({currentLangObj.label})</span>
                </span>
                <span
                  style={{
                    ...styles.langArrow,
                    transform: langOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  ▾
                </span>
              </button>

              {langOpen && (
                <div style={styles.dropdown}>
                  {LANGUAGES.map((lang) => {
                    const active = lang.code === activeLang;
                    return (
                      <button
                        key={lang.code}
                        style={{
                          ...styles.dropItem,
                          ...(active ? styles.dropItemActive : {}),
                        }}
                        onClick={() => selectLang(lang.code)}
                      >
                        <span style={styles.dropNative}>{lang.native}</span>
                        <span style={styles.dropLabel}>({lang.label})</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {!isMobile && (
            <button style={styles.cta} onClick={goToContact}>
              {t("site.cta.getQuote")}
            </button>
          )}

          {/* ✅ Mobile hamburger */}
          {isMobile && (
            <button
              style={styles.hamburger}
              onClick={() => setMenuOpen((p) => !p)}
            >
              ☰
            </button>
          )}
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {isMobile && menuOpen && (
        <div style={styles.mobileMenu}>
          <NavLink
            to={`/${activeLang}`}
            style={({ isActive }) => ({
              ...styles.mobileLink,
              ...(isActive ? styles.mobileActive : {}),
            })}
            end
          >
            {t("nav.home")}
          </NavLink>

          <NavLink
            to={`/${activeLang}/about`}
            style={({ isActive }) => ({
              ...styles.mobileLink,
              ...(isActive ? styles.mobileActive : {}),
            })}
          >
            {t("nav.about")}
          </NavLink>

          <NavLink
            to={`/${activeLang}/products`}
            style={({ isActive }) => ({
              ...styles.mobileLink,
              ...(isActive ? styles.mobileActive : {}),
            })}
          >
            {t("nav.products")}
          </NavLink>

          <NavLink
            to={`/${activeLang}/certifications`}
            style={({ isActive }) => ({
              ...styles.mobileLink,
              ...(isActive ? styles.mobileActive : {}),
            })}
          >
            {t("nav.certifications")}
          </NavLink>

          <NavLink
            to={`/${activeLang}/contact`}
            style={({ isActive }) => ({
              ...styles.mobileLink,
              ...(isActive ? styles.mobileActive : {}),
            })}
          >
            {t("nav.contact")}
          </NavLink>

          {/* ✅ Language dropdown Mobile */}
          <div style={styles.mobileActions}>
            <div
              style={styles.langWrapMobile}
              ref={dropdownMobileRef}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                style={styles.langBtnMobile}
                onClick={() => setLangOpen((p) => !p)}
              >
                <span style={styles.langIcon}>🌐</span>
                <span style={styles.langText}>
                  {currentLangObj.native}{" "}
                  <span style={styles.langSmall}>({currentLangObj.label})</span>
                </span>
                <span
                  style={{
                    ...styles.langArrow,
                    transform: langOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  ▾
                </span>
              </button>

              {langOpen && (
                <div style={styles.dropdownMobile}>
                  {LANGUAGES.map((lang) => {
                    const active = lang.code === activeLang;
                    return (
                      <button
                        key={lang.code}
                        style={{
                          ...styles.dropItem,
                          ...(active ? styles.dropItemActive : {}),
                        }}
                        onClick={() => selectLang(lang.code)}
                      >
                        <span style={styles.dropNative}>{lang.native}</span>
                        <span style={styles.dropLabel}>({lang.label})</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <button style={styles.ctaFull} onClick={goToContact}>
              {t("site.cta.getQuote")}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: "#f4f7f4",
    borderBottom: "1px solid rgba(0,0,0,0.08)",
    padding: "14px 0",
  },

  container: {
    width: "min(1200px, 92%)",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "18px",
  },

  logoWrap: {
    minWidth: "180px",
    textDecoration: "none",
  },

  logoTitle: {
    fontSize: "22px",
    fontWeight: 800,
    color: "#1d5b3a",
    lineHeight: 1.1,
  },

  logoSubtitle: {
    fontSize: "12px",
    fontWeight: 600,
    color: "rgba(0,0,0,0.6)",
    marginTop: "2px",
  },

  nav: {
    display: "flex",
    alignItems: "center",
    gap: "26px",
  },

  link: {
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: 600,
    color: "rgba(0,0,0,0.65)",
  },

  activeLink: {
    color: "#1d5b3a",
  },

  actions: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },

  // ✅ dropdown desktop
  langWrap: { position: "relative" },

  langBtn: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
    fontWeight: 700,
    color: "rgba(0,0,0,0.80)",
    userSelect: "none",
    border: "1px solid rgba(0,0,0,0.10)",
    background: "#fff",
    padding: "10px 12px",
    borderRadius: "12px",
  },

  langText: { fontSize: "14px", fontWeight: 800 },

  langSmall: { fontWeight: 700, opacity: 0.65, marginLeft: "3px" },

  langIcon: { fontSize: "16px" },

  langArrow: { fontSize: "14px", opacity: 0.8, transition: "0.2s" },

  dropdown: {
    position: "absolute",
    top: "110%",
    right: 0,
    width: "230px",
    background: "#fff",
    borderRadius: "12px",
    padding: "8px",
    border: "1px solid rgba(0,0,0,0.10)",
    boxShadow: "0 14px 30px rgba(0,0,0,0.10)",
    zIndex: 999,
  },

  dropItem: {
    width: "100%",
    textAlign: "left",
    border: "none",
    background: "transparent",
    padding: "10px 10px",
    borderRadius: "10px",
    cursor: "pointer",
    display: "flex",
    gap: "8px",
    alignItems: "center",
    fontWeight: 800,
    color: "#111",
  },

  dropItemActive: {
    background: "rgba(29, 91, 58, 0.12)",
    color: "#1d5b3a",
  },

  dropNative: { fontSize: "15px" },

  dropLabel: { fontSize: "13px", opacity: 0.65, fontWeight: 800 },

  cta: {
    background: "#f4b400",
    color: "#111",
    border: "none",
    padding: "10px 16px",
    borderRadius: "10px",
    fontWeight: 800,
    cursor: "pointer",
  },

  hamburger: {
    border: "1px solid rgba(0,0,0,0.12)",
    background: "#fff",
    padding: "10px 14px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: 900,
    fontSize: "18px",
  },

  mobileMenu: {
    width: "min(1200px, 92%)",
    margin: "10px auto 0",
    borderRadius: "14px",
    background: "#ffffff",
    border: "1px solid rgba(0,0,0,0.10)",
    overflow: "hidden",
    padding: "10px",
  },

  mobileLink: {
    display: "block",
    textDecoration: "none",
    color: "rgba(0,0,0,0.75)",
    fontWeight: 800,
    padding: "12px 12px",
    borderRadius: "10px",
  },

  mobileActive: {
    background: "rgba(29,91,58,0.10)",
    color: "#1d5b3a",
  },

  mobileActions: {
    display: "grid",
    gap: "10px",
    marginTop: "10px",
    paddingTop: "10px",
    borderTop: "1px solid rgba(0,0,0,0.08)",
  },

  // ✅ dropdown mobile
  langWrapMobile: { position: "relative" },

  langBtnMobile: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
    padding: "12px 12px",
    borderRadius: "12px",
    background: "rgba(0,0,0,0.04)",
    border: "1px solid rgba(0,0,0,0.06)",
    cursor: "pointer",
    fontWeight: 900,
  },

  dropdownMobile: {
    marginTop: "10px",
    width: "100%",
    background: "#fff",
    borderRadius: "12px",
    padding: "8px",
    border: "1px solid rgba(0,0,0,0.10)",
    boxShadow: "0 14px 30px rgba(0,0,0,0.10)",
  },

  ctaFull: {
    width: "100%",
    background: "#f4b400",
    color: "#111",
    border: "none",
    padding: "12px 16px",
    borderRadius: "12px",
    fontWeight: 900,
    cursor: "pointer",
  },
};