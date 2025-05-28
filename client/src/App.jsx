
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <NavBar />
      <Routes>
          <Route path="/" element={<HomePage />} />
      </Routes>

      <Footer />
    </div>
  );
}

