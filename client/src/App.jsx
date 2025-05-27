
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <NavBar />

      <main className="flex-grow w-full">
        <div className="px-8 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Apex Subsea Inc.</h1>
          <p className="text-gray-600">This is a placeholder section.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

