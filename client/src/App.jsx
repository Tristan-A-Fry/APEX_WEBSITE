
import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";

import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import DrillingCompletions from "./pages/DrillingCompletions.jsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <NavBar2 />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drillingcompletions" element={<DrillingCompletions/>} />
          <Route path="/contact" element={<ContactPage />} />
          
      </Routes>

      <Footer />
    </div>
  );
}

