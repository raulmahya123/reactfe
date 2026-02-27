import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngTuple } from "leaflet";
import { useTranslation } from "react-i18next";

/* =============================
   FIX DEFAULT ICON
============================= */
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
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

const ProyekActivities = () => {
  const { t } = useTranslation();

  const sites: Site[] = [
    {
      name: "PT Budi Gema Gempita (BGG Project)",
      location: "Lahat, Sumatera Selatan",
      description: t("proyek.bggDesc"),
      position: [-3.876265, 103.0132169],
    },
    {
      name: "PT Bukit Asam Tbk (SBS Project)",
      location: "Tanjung Enim, Sumatera Selatan",
      description: t("proyek.sbsDesc"),
      position: [-3.70939, 103.751476],
    },
    {
      name: "PT Position (POS Project)",
      location: "Halmahera Timur, Maluku Utara",
      description: t("proyek.posDesc"),
      position: [0.732438, 128.101513],
    },
    {
      name: "PT Daya Bumindo Karunia (DBK Project)",
      location: "Murung Raya, Kalimantan Tengah",
      description: t("proyek.dbkDesc"),
      position: [-0.14799, 113.871939],
    },
  ];

  return (
    <section
      id="proyek"
      className="py-20 bg-white scroll-mt-24"
    >
      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-[#2F3E34]">
          {t("proyek.title")}
        </h2>

        <div className="w-20 h-[3px] bg-[#C6A75E] mx-auto mt-6"></div>

        <p className="mt-6 text-gray-700 max-w-3xl mx-auto leading-relaxed">
          {t("proyek.description")}
        </p>
      </div>

      {/* MAP */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="w-full h-[550px] rounded-lg overflow-hidden border border-gray-200 shadow-md">
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
                <Popup maxWidth={280}>
                  <div className="p-4 bg-white border border-gray-200 rounded-lg">
                    <div className="text-xs uppercase tracking-widest text-[#C6A75E] mb-2">
                      {t("proyek.operationalProject")}
                    </div>

                    <h3 className="text-sm font-semibold text-[#2F3E34]">
                      {site.name}
                    </h3>

                    <p className="text-gray-500 text-xs mt-1">
                      {site.location}
                    </p>

                    <p className="text-gray-700 mt-3 leading-relaxed text-sm">
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