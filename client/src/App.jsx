
import ScrollToTop from "./utils/ScrollToTop.jsx";

import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";
import BreadCrumbs from "./components/Breadcrumbs.jsx";

import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";


import DrillingCompletions from "./pages/DrillingCompletions.jsx";
import RigSelectionPage from "./pages/DrillingAndCompletionsPages/RigSelectionPage.jsx";
import DrillingPage from "./pages/DrillingAndCompletionsPages/DrillingPage.jsx";
import LcPage from "./pages/DrillingAndCompletionsPages/LcPage.jsx";
import UcPage from "./pages/DrillingAndCompletionsPages/UcPage.jsx";

import ProjectControlsLandingPage from "./pages/ProjectControls/ProjectControlsLandingPage.jsx";
import CostControlPage from "./pages/ProjectControls/CostControlsPage.jsx";
import ScheduleManagementPage from "./pages/ProjectControls/ScheduleManagementPage.jsx";
import QualityControlInspectionPage from "./pages/ProjectControls/QualityControlInspectionPage.jsx";
import WBSSetupPage from "./pages/ProjectControls/WBSSetupPage.jsx";


import SurfSPSLandingPage from "./pages/SURF-SPS/SurfSPSLandingPage.jsx";
import SurfPage from "./pages/SURF-SPS/SurfPage.jsx";
import SystemsEngineeringPage from "./pages/SURF-SPS/SystemsEngineeringPage.jsx";
import SkidPackagingIEManagementPage from "./pages/SURF-SPS/SkidPackagingIEManagementPage.jsx";
import ControlDCSPage from "./pages/SURF-SPS/ControlDCSPage.jsx";



import StorageMaitenenceLandingPage from "./pages/Storage&Maitenence/StorageMaitenenceLandingPage.jsx";
import SubseaInspectionsLandingPage from "./pages/SubseaInspections/SubseaInspectionsLandingPage.jsx";
import AllProductsServices from "./pages/AllProductsServicesPage.jsx";

export default function App() {


  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <NavBar2 />
      <BreadCrumbs />
        <ScrollToTop />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/storage-maitenence" element={<StorageMaitenenceLandingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/all-products-services" element={<AllProductsServices />} />

              
              <Route path="/project-controls" element={<ProjectControlsLandingPage />} />
              <Route path="/cost-control" element={<CostControlPage />} />
              <Route path="/schedule-management" element={<ScheduleManagementPage />} />
              <Route path="/quality-inspection" element={<QualityControlInspectionPage />} />
              <Route path="/wbs-setup" element={<WBSSetupPage />} />

              <Route path="/subsea-inspections" element={<SubseaInspectionsLandingPage />} />

              <Route path="/surf-sps" element={<SurfSPSLandingPage/>} />
              <Route path="/surf-execution" element={<SurfPage />} />
              <Route path="/systems-engineering" element={<SystemsEngineeringPage/>} />
              <Route path="/skid-packaging" element={<SkidPackagingIEManagementPage />} />
              <Route path="/controls-dcs" element={<ControlDCSPage />} />

              <Route path="/drillingcompletions" element={<DrillingCompletions/>} />
              <Route path="/rig-selection" element={<RigSelectionPage />} />
              <Route path="/drilling" element={<DrillingPage />} />
              <Route path="/lower-completions" element={<LcPage />} />
              <Route path="/upper-completions" element={<UcPage />} />

              
          </Routes>
      <Footer />
    </div>
  );
}

