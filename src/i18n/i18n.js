import en from "./locales/en.json";
import hi from "./locales/hi.json";
import ar from "./locales/ar.json";
import fr from "./locales/fr.json";
import es from "./locales/es.json";
import de from "./locales/de.json";

const translations = { en, hi, ar, fr, es, de };

// ✅ default lang
let currentLang = localStorage.getItem("lang") || "en";

// ✅ listeners (to re-render app)
const listeners = new Set();

// ✅ return current language
export const getLanguage = () => currentLang;

// ✅ subscribe for language changes
export const subscribeLanguage = (fn) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

// ✅ notify all listeners
const notify = () => {
  listeners.forEach((fn) => fn(currentLang));
};

// ✅ set html dir for RTL language
const applyDirection = (lang) => {
  if (lang === "ar") {
    document.documentElement.setAttribute("dir", "rtl");
  } else {
    document.documentElement.setAttribute("dir", "ltr");
  }
  document.documentElement.setAttribute("lang", lang);
};

// ✅ call once initially
applyDirection(currentLang);

export const setLanguage = (lang) => {
  if (!translations[lang]) lang = "en";

  currentLang = lang;
  localStorage.setItem("lang", lang);

  applyDirection(lang);

  notify(); // ✅ rerender trigger
};

export const t = (key) => {
  const keys = key.split(".");

  // ✅ fallback chain: currentLang -> en
  let value = translations[currentLang];
  for (const k of keys) value = value?.[k];

  if (value === undefined || value === null) {
    // fallback english
    value = translations.en;
    for (const k of keys) value = value?.[k];
  }

  // ✅ If not found return key
  if (value === undefined || value === null) return key;

  // ✅ object/array return as it is
  return value;
};