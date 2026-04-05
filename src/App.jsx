// import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import HomePage from "./pages/HomePage";
// import About from "./pages/About";
// import ProductsPage from "./pages/ProductPage";
// import CertificationsPage from "./pages/CertificationsPage";
// import ContactPage from "./pages/ContactPage";
// import { useEffect, useState } from "react";
// import { subscribeLanguage } from "./i18n/i18n";

// function App() {
//   const [, forceUpdate] = useState(0);

//   useEffect(() => {
//     const unsub = subscribeLanguage(() => {
//       forceUpdate((x) => x + 1); // ✅ re-render
//     });
//     return () => unsub();
//   }, []);

  
//   return (
//     <>
//       <Header />

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<ProductsPage />} />
//         <Route path="/certifications" element={<CertificationsPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;


import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import ProductsPage from "./pages/ProductPage";
import CertificationsPage from "./pages/CertificationsPage";
import ContactPage from "./pages/ContactPage";
import { useEffect, useState } from "react";
import { subscribeLanguage } from "./i18n/i18n";

// ✅ new wrapper for language routes
import LangWrapper from "./routes/LangWrapper";

function App() {
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const unsub = subscribeLanguage(() => {
      forceUpdate((x) => x + 1); // ✅ re-render
    });
    return () => unsub();
  }, []);

  return (
    <>
      <Header />

      <Routes>
        {/* ✅ NORMAL ROUTES (same as before) */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* ✅ LANGUAGE ROUTES (NEW) */}
        <Route path="/:lang" element={<LangWrapper page={<HomePage />} />} />
        <Route path="/:lang/about" element={<LangWrapper page={<About />} />} />
        <Route
          path="/:lang/products"
          element={<LangWrapper page={<ProductsPage />} />}
        />
        <Route
          path="/:lang/certifications"
          element={<LangWrapper page={<CertificationsPage />} />}
        />
        <Route
          path="/:lang/contact"
          element={<LangWrapper page={<ContactPage />} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;