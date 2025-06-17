
const breadcrumbsMap = {
  "/": { name: "Home" },

  // Drilling & Completions
  "/drillingcompletions": { name: "Drilling & Completions", parent: "/" },
  "/rig-selection": { name: "Rig Selection", parent: "/drillingcompletions" },
  "/drilling": { name: "Drilling", parent: "/drillingcompletions" },
  "/lower-completions": { name: "Lower Completions", parent: "/drillingcompletions" },
  "/upper-completions": { name: "Upper Completions", parent: "/drillingcompletions" },

  // Project Controls
  "/project-controls": { name: "Project Controls", parent: "/" },
  "/cost-control": { name: "Cost Control", parent: "/project-controls" },
  "/schedule-management": { name: "Schedule Management", parent: "/project-controls" },
  "/quality-inspection": { name: "Quality Control", parent: "/project-controls" },
  "/wbs-setup": { name: "WBS Setup", parent: "/project-controls" },

  // SURF/SPS
  "/surf-sps": { name: "SURF & SPS", parent: "/" },
  "/surf-execution": { name: "SURF Execution", parent: "/surf-sps" },
  "/systems-engineering": { name: "Systems Engineering", parent: "/surf-sps" },
  "/skid-packaging": { name: "Skid Packaging & I&E", parent: "/surf-sps" },
  "/controls-dcs": { name: "Controls & DCS Integration", parent: "/surf-sps" },

  // Other pages
  "/about": { name: "About", parent: "/" },
  "/contact": { name: "Contact", parent: "/" },
  "/all-products-services": { name: "All Products & Services", parent: "/" },
  "/storage-maitenence": { name: "Storage & Maintenance", parent: "/" },
  "/subsea-inspections": { name: "Subsea Inspections", parent: "/" },
};

export default breadcrumbsMap;

