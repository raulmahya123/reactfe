import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngTuple } from "leaflet";
import StrategySection from "./StrategySection";

/* =============================
   FIX DEFAULT ICON
============================= */
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

/* =============================
   GOLD MARKER ICON
============================= */
const goldIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [30, 48],
  iconAnchor: [15, 48],
  popupAnchor: [0, -45],
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

const ProyekActivities = () => {
  return (
    <section
      id="proyek"
      className="relative py-36 bg-white scroll-mt-32 overflow-hidden"
    >
      {/* ================= HEADER ================= */}
      <div className="relative max-w-6xl mx-auto px-6 text-center mb-28">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-black to-[#C6A75E] bg-clip-text text-transparent">
            Kegiatan Usaha
          </span>
        </h2>

        <div className="w-32 h-[4px] bg-[#C6A75E] mx-auto mt-8 rounded-full"></div>

        <p className="mt-10 text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
          PT Andalan Artha Primanusa Tbk menjalankan berbagai proyek
          operasional pertambangan di wilayah strategis Indonesia dengan
          standar profesional dan komitmen tinggi terhadap keselamatan kerja.
        </p>
      </div>

      {/* ================= MAP ================= */}
      <div className="relative max-w-[1400px] mx-auto px-6">
        <div className="relative w-full h-[650px] rounded-[40px] overflow-hidden shadow-2xl border border-gray-300">
          <MapContainer
            center={[-2.5, 118]}
            zoom={5}
            scrollWheelZoom={false}
            preferCanvas={true}
            zoomControl={false}
            className="w-full h-full"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors & CartoDB"
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />

            {sites.map((site, index) => (
              <Marker key={index} position={site.position} icon={goldIcon}>
                <Popup maxWidth={300}>
                  <div className="relative p-5 rounded-xl bg-white border border-gray-200 shadow-lg w-[260px]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent"></div>

                    <div className="text-xs tracking-widest text-gray-400 mb-2 uppercase">
                      Operational Project
                    </div>

                    <h3 className="text-base font-semibold text-gray-900">
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

      {/* ================= SUMBER DAYA KAMI ================= */}
      <section className="relative mt-40 py-32 bg-gradient-to-b from-white to-gray-100 text-center overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
            SUMBER DAYA KAMI
          </h2>

          <div className="w-32 h-[4px] bg-[#C6A75E] mx-auto mt-8 rounded-full"></div>

          <p className="mt-10 text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
            Komitmen kami didukung oleh sumber daya manusia profesional,
            peralatan modern, serta sistem operasional terintegrasi yang
            memastikan efisiensi, keselamatan, dan keberlanjutan di setiap
            proyek.
          </p>
        </div>
      </section>

      {/* ================= STRATEGY (NO EXTRA GAP) ================= */}
      <section id="strategiKeunggulan" className="scroll-mt-32">
        <StrategySection />
      </section>
    </section>
  );
};

export default ProyekActivities;