import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useState, useEffect } from "react";
import {projects} from "./Data/projects.jsx";
import defaultImage from "../assets/apex_logo_white.jpg";
import "leaflet/dist/leaflet.css";
import { createPortal } from "react-dom";


function MapFlyTo({ coords }) {
  const map = useMap();
  map.flyTo(coords, 8);
  return null;
}

function getMapPinSVG(color = "#000000") {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" fill="${color}" viewBox="0 0 24 24" width="24" height="24">
      <path fill-rule="evenodd" d="M12 2.25a6.75 6.75 0 00-6.75 6.75c0 4.457 4.95 8.33 6.24 9.226a.75.75 0 00.92 0c1.29-.896 6.24-4.77 6.24-9.226A6.75 6.75 0 0012 2.25zm0 9a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd" />
    </svg>
  `;
}

function getHeroiconMarker(type, colorOverride) {
  const color =
    colorOverride ||
    (type === "Facilities" ? "#22c55e" : type === "D&C" ? "#ef4444" : "#000000");
  return L.divIcon({
    html: getMapPinSVG(color),
    className: "leaflet-div-icon !bg-transparent !border-none",
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  });
}

// const oilRigIcon = new L.Icon({
//   iconUrl: "/map/rig_icon.png", 
//   iconSize: [32, 32],            
//   iconAnchor: [16, 32],          
//   popupAnchor: [0, -32],         
//   shadowUrl: null
// });

// LegendControl: attaches a React node as a Leaflet control using React Portal
function LegendControl({ children }) {
  const map = useMap();
  const [container, setContainer] = useState(null);

  useEffect(() => {
    const controlDiv = L.DomUtil.create("div", "custom-legend");
    const control = L.control({ position: "topleft" });
    control.onAdd = () => controlDiv;
    control.addTo(map);
    setContainer(controlDiv);
    return () => {
      control.remove();
    };
  }, [map]);

  // Only render portal if container is available
  return container ? createPortal(children, container) : null;
}

export default function GulfMap() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const lightTile = "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";
  const darkTile = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  // Collapsible legend state
  const [legendOpen, setLegendOpen] = useState(() => window.innerWidth >= 640);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    // Responsive: open on desktop, closed on mobile
    const handleResize = () => {
      setLegendOpen(window.innerWidth >= 640);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filteredProjects = projects.filter((proj) =>
    proj.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
   <div className="w-full bg-gray-100 dark:bg-[#2b2b2b]">
      {/* 🔠 Section Title */}
      <h2 className="text-3xl font-bold text-center text-black dark:text-white dark:bg-[#313131] my-2 p-4">
        Operational History
      </h2>

      <div className="relative w-full h-[500px]">
        <MapContainer
          className="z-10"
          center={[26.5, -90]}
          zoom={5}
          minZoom={5}
          maxZoom={10}
          scrollWheelZoom={true}
          zoomControl={true}
          style={{ height: "100%", width: "100%" }}
          maxBounds={[[18, -100], [31, -80]]}
          maxBoundsViscosity={1.0}
          attributionControl={false}
        >
          {/* Collapsible Legend/Search as a true Leaflet control */}
          <LegendControl>
            <div className="sm:w-[300px] w-[85vw] max-w-xs">
              {/* Collapsible button for mobile */}
              <div className="block sm:hidden mb-2">
                <button
                  className="w-full bg-!white dark:!bg-black text-black dark:text-white rounded px-2 py-1 text-sm font-semibold flex items-center justify-between"
                  onClick={() => setLegendOpen((open) => !open)}
                  aria-expanded={legendOpen}
                  aria-controls="map-legend-content"
                >
                  Legend & Search
                  <span>{legendOpen ? "▲" : "▼"}</span>
                </button>
              </div>
              {/* Legend content */}
              {(legendOpen || window.innerWidth >= 640) && (
                <div
                  id="map-legend-content"
                  className="bg-white p-2 sm:p-3 rounded shadow-md space-y-2 sm:space-y-4 dark:bg-black dark:text-white text-sm sm:text-base"
                >
                  {/* Search */}
                  <input
                    type="text"
                    placeholder="Search for a project..."
                    className="w-full p-2 border border-gray-300 rounded text-xs sm:text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {/* Legend */}
                  <div className="text-xs sm:text-sm">
                    <p className="flex items-center gap-x-2 mb-1">
                      <span className="w-4 h-4 sm:w-5 sm:h-5 leading-none flex items-center justify-center" dangerouslySetInnerHTML={{ __html: getMapPinSVG("#22c55e") }} />
                      <span>Facilities</span>
                    </p>
                    <p className="flex items-center gap-x-2 mb-1">
                      <span className="w-4 h-4 sm:w-5 sm:h-5 leading-none flex items-center justify-center" dangerouslySetInnerHTML={{ __html: getMapPinSVG("#ef4444") }} />
                      <span>D&amp;C</span>
                    </p>
                    <p className="flex items-center gap-x-2">
                      <span className="w-4 h-4 sm:w-5 sm:h-5 leading-none flex items-center justify-center" dangerouslySetInnerHTML={{ __html: getMapPinSVG(isDark ? "#fff" : "#000000") }} />
                      <span>Other / Response</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </LegendControl>
          <TileLayer
            url={isDark ? darkTile : lightTile}
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> dark:darkTile'
          />

          {filteredProjects.map((proj, idx) => (
            <Marker
              key={idx}
              position={proj.coordinates}
              icon={getHeroiconMarker(
                proj.type,
                isDark && proj.type !== "Facilities" && proj.type !== "D&C" ? "#fff" : undefined
              )}
              eventHandlers={{
                click: () => setSelectedProject(proj),
              }}
            >
              <Popup>{proj.name}</Popup>
            </Marker>
          ))}

          {selectedProject && <MapFlyTo coords={selectedProject.coordinates} />}
        </MapContainer>

        {/* 📋 Side Panel */}
        {selectedProject && (
          <div className="absolute top-0 right-0 w-full md:w-1/3 h-full z-10 bg-white dark:bg-neutral-900 shadow-lg p-6 overflow-y-auto">
            <button
              className="mb-4 text-red-500 font-bold"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>

            {/* 🔤 Title */}
            <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">
              {selectedProject.name}
            </h2>

            {/* 🖼️ Image — only if top or unspecified */}
            {(!selectedProject.imagePosition || selectedProject.imagePosition === "top") && (
              <img
                src={selectedProject.image || defaultImage}
                alt={selectedProject.name}
                className={`w-full ${selectedProject.imageHeight || "h-48"} object-cover rounded mb-4`}
              />
            )}

            {/* 📄 Layout with left/right image */}
            {["left", "right"].includes(selectedProject.imagePosition) ? (
              <div className={`flex ${selectedProject.imagePosition === "left" ? "flex-row" : "flex-row-reverse"} gap-4`}>
                <img
                  src={selectedProject.image || defaultImage}
                  alt={selectedProject.name}
                  className={`w-1/2 ${selectedProject.imageHeight || "h-48"} object-cover rounded`}
                />
                <div className="flex flex-col justify-start">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                    <strong>Company:</strong> {selectedProject.company}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    <strong>Status:</strong> {selectedProject.status}
                  </p>
                  <p className="text-md text-gray-700 dark:text-gray-200 mb-2">
                    {selectedProject.description}
                  </p>
                  {selectedProject.details && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {selectedProject.details}
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <>
                {/* 🏢 Company/Status */}
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                  <strong>Company:</strong> {selectedProject.company}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  <strong>Status:</strong> {selectedProject.status}
                </p>

                {/* 📄 Text content */}
                <p className="text-md text-gray-700 dark:text-gray-200 mb-2">
                  {selectedProject.description}
                </p>
                {selectedProject.details && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {selectedProject.details}
                  </p>
                )}

                {/* 🖼️ Bottom image if specified */}
                {selectedProject.imagePosition === "bottom" && (
                  <img
                    src={selectedProject.image || defaultImage}
                    alt={selectedProject.name}
                    className={`w-full ${selectedProject.imageHeight || "h-48"} object-cover rounded mt-4`}
                  />
                )}
              </>
            )}
          </div>
        )}  
      </div>
    </div>
  );
}