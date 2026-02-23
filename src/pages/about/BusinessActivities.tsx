import { useTranslation } from "react-i18next";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* =============================
   GOLD MARKER ICON
============================= */
const goldIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [28, 45],
  iconAnchor: [14, 45],
});

/* =============================
   COMPONENT
============================= */
const BusinessActivities = () => {
  const { t } = useTranslation();

  const sites = [
    {
      name: "PT Budi Gema Gempita (BGG Project)",
      location: "Lahat, Sumatera Selatan",
      position: [-3.876265, 103.0132169],
    },
    {
      name: "PT Bukit Asam Tbk (SBS Project)",
      location: "Tanjung Enim, Sumatera Selatan",
      position: [-3.7093903468670226, 103.75147600097807],
    },
    {
      name: "PT Position (POS Project)",
      location: "Halmahera Timur, Maluku Utara",
      position: [0.7324381216724647, 128.10151397129096],
    },
    {
      name: "PT Daya Bumindo Karunia (DBK Project)",
      location: "Murung Raya, Kalimantan Tengah",
      position: [-0.14799017580602936, 113.87193915831443],
    },
  ];

  return (
    <section
      id="business"
      className="relative py-32 bg-[#f8f6f1] scroll-mt-32 overflow-hidden"
    >
      {/* GOLD SOFT GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C6A75E]/10 blur-3xl rounded-full"></div>
      </div>

      {/* =============================
          TITLE
      ============================= */}
      <div className="relative max-w-[1200px] mx-auto px-6 text-center mb-24">
        <h2 className="text-5xl font-bold tracking-tight text-[#1a1a1a]">
          {t("operationalLocations")}
        </h2>

        <div className="w-24 h-[3px] bg-[#C6A75E] mx-auto mt-6 rounded-full"></div>

        <p className="mt-8 text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
          {t("operationalLocationsDesc")}
        </p>
      </div>

      {/* =============================
          MAP SECTION
      ============================= */}
      <div className="relative max-w-[1400px] mx-auto px-6">
        <div
          className="relative w-full h-[600px] rounded-[32px] overflow-hidden
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          border border-[#C6A75E]/30
          bg-white"
        >
          <MapContainer
            center={[-2.5, 118]}
            zoom={5}
            scrollWheelZoom={false}
            className="w-full h-full"
          >
            {/* LIGHT MAP (NO BLUE DOMINANT) */}
            <TileLayer
              attribution='&copy; OpenStreetMap contributors & CartoDB'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />

            {sites.map((site, index) => (
              <Marker key={index} position={site.position} icon={goldIcon}>
                <Popup>
                  <div className="text-sm font-medium">
                    <div className="text-black font-semibold mb-1">
                      {site.name}
                    </div>
                    <div className="text-gray-600">
                      {site.location}
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      {/* =============================
          LOCATION CARDS
      ============================= */}
      <div className="relative max-w-[1200px] mx-auto px-6 mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sites.map((site, index) => (
          <div
            key={index}
            className="group p-6 rounded-2xl bg-white
                       border border-gray-200
                       hover:border-[#C6A75E]
                       hover:shadow-xl
                       transition-all duration-300"
          >
            <div className="text-xs tracking-widest text-gray-500 mb-3 uppercase">
              Operational Site
            </div>

            <div className="text-lg font-semibold text-[#1a1a1a] group-hover:text-[#C6A75E] transition">
              {site.name}
            </div>

            <div className="text-gray-600 text-sm mt-2">
              {site.location}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessActivities;