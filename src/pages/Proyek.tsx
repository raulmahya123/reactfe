import { useTranslation } from "react-i18next";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngTuple } from "leaflet";

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
   TYPES
============================= */
type Site = {
  name: string;
  location: string;
  description: string;
  position: LatLngTuple;
};

const ProyekActivities = () => {
  const { t } = useTranslation();

  const sites: Site[] = [
    {
      name: "PT Budi Gema Gempita (BGG Project)",
      location: "Lahat, Sumatera Selatan",
      description:
        "Operasional pertambangan batubara dengan fokus pada efisiensi produksi dan sustainability management.",
      position: [-3.876265, 103.0132169],
    },
    {
      name: "PT Bukit Asam Tbk (SBS Project)",
      location: "Tanjung Enim, Sumatera Selatan",
      description:
        "Kerja sama operasional strategis dengan optimalisasi sistem hauling dan manajemen tambang.",
      position: [-3.70939, 103.751476],
    },
    {
      name: "PT Position (POS Project)",
      location: "Halmahera Timur, Maluku Utara",
      description:
        "Proyek pengembangan infrastruktur pertambangan dengan standar keselamatan tinggi.",
      position: [0.732438, 128.101513],
    },
    {
      name: "PT Daya Bumindo Karunia (DBK Project)",
      location: "Murung Raya, Kalimantan Tengah",
      description:
        "Pengelolaan operasional tambang terintegrasi dengan sistem monitoring modern.",
      position: [-0.14799, 113.871939],
    },
  ];

  return (
    <section
      id="proyek"
      className="relative py-36 bg-white scroll-mt-32 overflow-hidden"
    >
      {/* LUXURY LIGHT EFFECT */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#C6A75E]/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/5 to-transparent"></div>
      </div>

      {/* ================= HEADER ================= */}
      <div className="relative max-w-6xl mx-auto px-6 text-center mb-24">
        <div className="text-sm tracking-[0.3em] text-[#C6A75E] uppercase mb-6">
          Our Operations
        </div>

        <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-black to-[#C6A75E] bg-clip-text text-transparent">
            Andalan Operational Projects
          </span>
        </h2>

        <div className="w-28 h-[3px] bg-[#C6A75E] mx-auto mt-8 rounded-full"></div>

        <p className="mt-10 text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
          PT Andalan Artha Primanusa Tbk menjalankan berbagai proyek
          operasional pertambangan di wilayah strategis Indonesia dengan
          standar profesional, efisiensi operasional, serta komitmen tinggi
          terhadap keselamatan kerja dan keberlanjutan lingkungan.
        </p>
      </div>

      {/* ================= STATISTIC BAR ================= */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <div className="text-4xl font-bold text-[#C6A75E]">4+</div>
            <div className="text-sm text-gray-500 mt-2">
              Operational Sites
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#C6A75E]">3</div>
            <div className="text-sm text-gray-500 mt-2">Provinces</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#C6A75E]">100%</div>
            <div className="text-sm text-gray-500 mt-2">
              Safety Commitment
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#C6A75E]">
              Sustainable
            </div>
            <div className="text-sm text-gray-500 mt-2">Operations</div>
          </div>
        </div>
      </div>

      {/* ================= MAP SECTION ================= */}
      <div className="relative max-w-[1400px] mx-auto px-6">
        <div
          className="relative w-full h-[650px]
          rounded-[40px]
          overflow-hidden
          shadow-2xl
          border border-gray-300"
        >
          {/* VIGNETTE EFFECT */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none z-[400]"></div>

          <MapContainer
            center={[-2.5, 118] as LatLngTuple}
            zoom={5}
            scrollWheelZoom={false}
            className="w-full h-full"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors & CartoDB"
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />

           {sites.map((site, index) => (
  <Marker key={index} position={site.position} icon={goldIcon}>
    <Popup maxWidth={320}>
      <div
        className="relative p-5 rounded-xl bg-white
                   border border-gray-200
                   shadow-lg
                   w-[260px]"
      >
        {/* GOLD ACCENT LINE */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent"></div>

        <div className="text-xs tracking-widest text-gray-400 mb-2 uppercase">
          Operational Project
        </div>

        <h3 className="text-base font-semibold text-[#1a1a1a]">
          {site.name}
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          {site.location}
        </p>

        <p className="text-gray-600 mt-3 leading-relaxed text-sm">
          {site.description}
        </p>
      </div>
    </Popup>
  </Marker>
))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default ProyekActivities;