
import ScrollToTop from "./utils/ScrollToTop.jsx";

import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";

import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

import RigSelectionPage from "./pages/DrillingAndCompletionsPages/RigSelectionPage.jsx";
import DrillingPage from "./pages/DrillingAndCompletionsPages/DrillingPage.jsx";
import LcPage from "./pages/DrillingAndCompletionsPages/LcPage.jsx";
import UcPage from "./pages/DrillingAndCompletionsPages/UcPage.jsx";

import DrillingCompletions from "./pages/DrillingCompletions.jsx";
import AllProductsServices from "./pages/AllProductsServicesPage.jsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <NavBar2 />
        <ScrollToTop />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/drillingcompletions" element={<DrillingCompletions/>} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/all-products-services" element={<AllProductsServices />} />


              <Route path="/rig-selection" element={<RigSelectionPage />} />
              <Route path="/drilling" element={<DrillingPage />} />
              <Route path="/lower-completions" element={<LcPage />} />
              <Route path="/upper-completions" element={<UcPage />} />
          </Routes>
      <Footer />
    </div>
  );
}

