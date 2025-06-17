


import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";


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

function getHeroiconMarker(type) {
  const color =
    type === "Facilities" ? "#22c55e" : type === "D&C" ? "#ef4444" : "#000000";
  return L.divIcon({
    html: getMapPinSVG(color),
    className: "leaflet-div-icon !bg-transparent !border-none",
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  });
}




const projects = [
  // Talos Energy (green = Facilities)
  { name: "Tornado – Phase 1", coordinates: [27.3, -91.3], company: "Talos Energy", status: "Completed", type: "Facilities", description: "Tornado Phase 1 under Talos Energy operations." },
  { name: "Tornado – Phase 2", coordinates: [27.31, -91.35], company: "Talos Energy", status: "Completed", type: "Facilities", description: "Phase 2 of Tornado project." },
  { name: "Tornado – Phase 3", coordinates: [27.32, -91.40], company: "Talos Energy", status: "Completed", type: "Facilities", description: "Final Tornado phase." },
  { name: "Bulleit", coordinates: [27.4, -91.1], company: "Talos Energy", status: "Completed", type: "Facilities", description: "Bulleit field development." },
  { name: "Boris", coordinates: [27.45, -91.05], company: "Talos Energy", status: "Completed", type: "Facilities", description: "Boris project." },
  { name: "Venice", coordinates: [27.55, -90.9], company: "Talos Energy", status: "Completed", type: "Facilities", description: "Venice operations by Talos." },
  { name: "Lime Rock", coordinates: [27.6, -90.8], company: "Talos Energy", status: "Completed", type: "Facilities", description: "Lime Rock site." },
  { name: "Sunspear", coordinates: [27.65, -90.75], company: "Talos Energy", status: "Ongoing", type: "Facilities", description: "Currently ongoing Sunspear project." },

  // Beacon (orange = D&C except Shenandoah)
  { name: "Lafem", coordinates: [27.1, -91.6], company: "Beacon", status: "Completed", type: "D&C", description: "Beacon’s Lafem project." },
  { name: "Claybourne", coordinates: [27.15, -91.5], company: "Beacon", status: "Completed", type: "D&C", description: "Claybourne development." },
  { name: "Crown and Anchor", coordinates: [27.2, -91.4], company: "Beacon", status: "Completed", type: "D&C", description: "Crown and Anchor operations." },
  { name: "Winterfell", coordinates: [27.25, -91.3], company: "Beacon", status: "Completed", type: "D&C", description: "Winterfell site." },
  { name: "Shenandoah", coordinates: [27.3, -91.2], company: "Beacon", status: "Ongoing", type: "Facilities", description: "Ongoing Shenandoah project." },

  // BP (orange = D&C)
  { name: "Kaskida – I3P Support", coordinates: [26.9, -93.2], company: "BP", status: "Support", type: "D&C", description: "Instrumentation and project support for Kaskida." },
  { name: "Life Of Field Support", coordinates: [27.1, -92.8], company: "BP", status: "Support", type: "D&C", description: "BP’s long-term support operations." },

  // Stone Energy (green = Facilities)
  { name: "Cardona", coordinates: [27.7, -91.7], company: "Stone Energy", status: "Completed", type: "Facilities", description: "Cardona site." },
  { name: "Mt. Providence", coordinates: [27.75, -91.8], company: "Stone Energy", status: "Completed", type: "Facilities", description: "Providence project." },
  { name: "Amethyst", coordinates: [27.8, -91.9], company: "Stone Energy", status: "Completed", type: "Facilities", description: "Amethyst development." },

  // FWE/QNE (green = Facilities)
  { name: "Katmai", coordinates: [26.8, -92.4], company: "FWE/QNE", status: "Completed", type: "Facilities", description: "Katmai field." },
  { name: "Orlov", coordinates: [26.85, -92.5], company: "FWE/QNE", status: "Completed", type: "Facilities", description: "Orlov development." },
  { name: "Troika Expansion", coordinates: [26.9, -92.6], company: "FWE/QNE", status: "Completed", type: "Facilities", description: "Expansion of Troika." },
  { name: "Genovesa", coordinates: [26.95, -92.7], company: "FWE/QNE", status: "Completed", type: "Facilities", description: "Genovesa site." },
  { name: "Gunflint Expansion", coordinates: [27.0, -92.8], company: "FWE/QNE", status: "Completed", type: "Facilities", description: "Expansion of Gunflint." },

  // Oxy (orange = D&C)
  { name: "Trees", coordinates: [26.6, -92.9], company: "Oxy", status: "Completed", type: "D&C", description: "Oxy tree installations." },
  { name: "Completions", coordinates: [26.55, -92.85], company: "Oxy", status: "Completed", type: "D&C", description: "Oxy completions support." },

  // Shell (orange = D&C)
  { name: "Sparta", coordinates: [26.4, -93], company: "Shell", status: "Completed", type: "D&C", description: "Shell’s Sparta field." },
  { name: "Upper Completions", coordinates: [26.35, -92.95], company: "Shell", status: "Global Contract", type: "D&C", description: "Shell global completions contract." },

  // Woodside (orange = D&C)
  { name: "Shenzi North XT Support", coordinates: [27.5, -89.8], company: "Woodside", status: "Support", type: "D&C", description: "Xmas Tree support for Shenzi North." },
  { name: "Trion XT Support", coordinates: [25.8, -90.4], company: "Woodside", status: "Support", type: "D&C", description: "Trion project XT support." },

  // Response (red = Response)
  { name: "HWCG", coordinates: [27.2, -90.1], company: "Response", status: "Response", type: "Response", description: "HWCG emergency response operations." },
  { name: "OSRL", coordinates: [27.25, -90.15], company: "Response", status: "Response", type: "Response", description: "OSRL response support." },
];


const oilRigIcon = new L.Icon({
  iconUrl: "/map/rig_icon.png", // ✅ path to PNG in public folder
  iconSize: [32, 32],            // ⬅️ Adjust size as needed
  iconAnchor: [16, 32],          // ⬅️ Align bottom center
  popupAnchor: [0, -32],         // ⬅️ Popup above marker
  shadowUrl: null
});

export default function GulfMap() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const lightTile = "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";
  const darkTile = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => observer.disconnect();
  }, []);

  const filteredProjects = projects.filter((proj) =>
    proj.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
   <div className="w-full">
      {/* 🔠 Section Title */}
      <h2 className="text-3xl font-bold text-center text-black dark:text-white my-8">
        Our Resume
      </h2>

      <div className="relative w-full h-[500px]">
        {/* 🔍 Search + Legend */}
        <div className="absolute top-4 left-20 z-[1000] bg-white p-3 rounded shadow-md w-[300px] space-y-4 dark:bg-black dark:text-white">
          {/* Search */}
          <input
            type="text"
            placeholder="Search for a project..."
            className="w-full p-2 border border-gray-300 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Legend */}
          <div className="text-sm">
            <p className="flex items-center gap-2 mb-1">
              <span dangerouslySetInnerHTML={{ __html: getMapPinSVG("#22c55e") }} />
              <span>Facilities</span>
            </p>
            <p className="flex items-center gap-2 mb-1">
              <span dangerouslySetInnerHTML={{ __html: getMapPinSVG("#ef4444") }} />
              <span>D&amp;C</span>
            </p>
            <p className="flex items-center gap-2">
              <span dangerouslySetInnerHTML={{ __html: getMapPinSVG("#000000") }} />
              <span>Other / Response</span>
            </p>
          </div>
        </div>

      {/* 🗺️ Map */}
      <MapContainer
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
        <TileLayer
          url={isDark ? darkTile : lightTile}
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> dark:darkTile'
        />

        {filteredProjects.map((proj, idx) => (
          <Marker
            key={idx}
            position={proj.coordinates}
            icon={getHeroiconMarker(proj.type)}
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
        <div className="absolute top-0 right-0 w-1/3 h-full z-10 bg-white shadow-lg p-6 overflow-y-auto">
          <button
            className="mb-4 text-red-500 font-bold"
            onClick={() => setSelectedProject(null)}
          >
            Close
          </button>
          <h2 className="text-xl font-bold">{selectedProject.name}</h2>
          <p className="mt-2"><strong>Company:</strong> {selectedProject.company}</p>
          <p><strong>Status:</strong> {selectedProject.status}</p>
          <p className="mt-4">{selectedProject.description}</p>
        </div>
      )}
    </div>
    </div>
  );
}
