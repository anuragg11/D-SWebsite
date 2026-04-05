import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { setLanguage } from "../i18n/i18n";

// ✅ here you can add/remove languages anytime
const SUPPORTED = ["en", "hi", "ar", "fr", "es", "de"];

const LangWrapper = ({ page }) => {
  const { lang } = useParams();

  const isValid = SUPPORTED.includes(lang);

  useEffect(() => {
    if (isValid) setLanguage(lang);
  }, [lang, isValid]);

  if (!isValid) return <Navigate to="/" replace />;

  return page;
};

export default LangWrapper;