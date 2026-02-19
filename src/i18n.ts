import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          /* ================= NAVIGATION ================= */
          home: "Home",
          about: "Company Profile",
          investor: "Investor Relations",
          governance: "Good Corporate Governance",
          csr: "Sustainability",
          news: "News & Disclosure",
          contact: "Contact",
          welcome: "Reliable Energy Solutions",

          /* ================= COMPANY PROFILE ================= */
          companyOverview: "Company Overview",
          visionMission: "Vision & Mission",
          organizationStructure: "Organization Structure",
          shareholdingStructure: "Shareholding Structure",
          boardOfDirectors: "Board of Directors",
          boardOfCommissioners: "Board of Commissioners",
          committees: "Committees",
          corporateSecretary: "Corporate Secretary",

          /* ================= INVESTOR (POJK Pasal 6 ayat 2) ================= */
          prospectus: "Public Offering Prospectus",
          annualReport: "Annual & Sustainability Reports",
          financialInfo: "Financial Statements",
          generalMeeting: "General Meeting of Shareholders",
          stockInfo: "Stock Performance",
          dividend: "Dividend History",
          dividendPolicy: "Dividend Policy",
          corporateAction: "Corporate Actions",
          materialInformation: "Material Information / Disclosure",

          /* ================= GOVERNANCE (POJK Pasal 6 ayat 3) ================= */
          boardCharter: "Board Charter",
          internalAudit: "Internal Audit Charter",
          ethicsCode: "Code of Conduct",
          riskManagement: "Risk Management Framework",
          whistleblowing: "Whistleblowing Mechanism",
          antiCorruption: "Anti-Corruption Policy",
          supplierPolicy: "Supplier & Vendor Policy",

          /* ================= SUSTAINABILITY (POJK Pasal 6 ayat 4) ================= */
          environment: "Environmental Commitment",
          laborPractices: "Human Capital & OHS",
          socialDev: "Corporate Social Responsibility",
          sustainabilityReport: "Sustainability Report",

          heroTitle: "Reliable Energy Solutions",
heroSubtitle: "Driving Sustainable Growth for Indonesia",
viewAnnualReport: "View Annual Report",
investorRelations: "Investor Relations",
companyOverviewTitle: "Company Overview",
companyOverviewText: "PT Andalan Artha Primanusa Tbk is a leading energy company engaged in coal mining and trading operations across Indonesia. With strong operational excellence and strategic partnerships, the Company continues to deliver sustainable value for shareholders and stakeholders.",
performanceTitle: "Key Performance Highlights",
revenue: "Revenue",
netProfit: "Net Profit",
production: "Production Volume",
assets: "Total Assets",
businessTitle: "Our Business Segments",
mining: "Mining Operations",
trading: "Coal Trading",
logistics: "Logistics & Infrastructure",
energyDev: "Energy Development",
miningDesc: "Integrated coal mining operations with strong operational excellence.",
tradingDesc: "Reliable domestic and international coal trading network.",
logisticsDesc: "Efficient transportation and port management infrastructure.",
energyDevDesc: "Strategic energy development initiatives for long-term growth.",
sustainTitle: "Sustainability Commitment",
sustainSubtitle: "Driving responsible operations for long-term value creation.",
environmentTitle: "Environmental Responsibility",
laborTitle: "Health, Safety & Human Capital",
socialTitle: "Community Development",
environmentDesc: "Implementing sustainable mining practices to minimize environmental impact.",
laborDesc: "Ensuring workplace safety and continuous development of our workforce.",
socialDesc: "Empowering local communities through strategic CSR programs.",
viewSustainReport: "View Sustainability Report",
investorAccessTitle: "Investor Relations",
investorAccessSubtitle: "Providing transparent and timely information to our shareholders.",
annualReportBtn: "Annual Report",
financialReportBtn: "Financial Statements",
gmsBtn: "General Meeting of Shareholders",
disclosureBtn: "Material Information",
stockBtn: "Stock Information",
newsTitle: "Latest News & Disclosure",
newsSubtitle: "Stay updated with our latest corporate developments.",
readMore: "Read More",
footerAddressTitle: "Head Office",
footerContactTitle: "Contact Information",
footerQuickLinks: "Quick Links",
footerSecretary: "Corporate Secretary",
footerDisclaimer: "All information on this website is provided for transparency purposes in accordance with regulatory requirements.",
footerRights: "All Rights Reserved.",

        }
      },

      id: {
        translation: {
          /* ================= NAVIGATION ================= */
          home: "Beranda",
          about: "Profil Perusahaan",
          investor: "Hubungan Investor",
          governance: "Tata Kelola Perusahaan",
          csr: "Keberlanjutan",
          news: "Berita & Keterbukaan Informasi",
          contact: "Kontak",
          welcome: "Solusi Energi Terpercaya",

          /* ================= COMPANY PROFILE ================= */
          companyOverview: "Sekilas Perusahaan",
          visionMission: "Visi & Misi",
          organizationStructure: "Struktur Organisasi",
          shareholdingStructure: "Struktur Kepemilikan Saham",
          boardOfDirectors: "Direksi",
          boardOfCommissioners: "Dewan Komisaris",
          committees: "Komite",
          corporateSecretary: "Sekretaris Perusahaan",

          /* ================= INVESTOR (POJK Pasal 6 ayat 2) ================= */
          prospectus: "Prospektus Penawaran Umum",
          annualReport: "Laporan Tahunan & Keberlanjutan",
          financialInfo: "Laporan Keuangan",
          generalMeeting: "Rapat Umum Pemegang Saham",
          stockInfo: "Informasi Saham",
          dividend: "Riwayat Dividen",
          dividendPolicy: "Kebijakan Dividen",
          corporateAction: "Aksi Korporasi",
          materialInformation: "Keterbukaan Informasi / Fakta Material",

          /* ================= GOVERNANCE (POJK Pasal 6 ayat 3) ================= */
          boardCharter: "Piagam Direksi & Dewan Komisaris",
          internalAudit: "Piagam Audit Internal",
          ethicsCode: "Kode Etik Perusahaan",
          riskManagement: "Kebijakan Manajemen Risiko",
          whistleblowing: "Sistem Pelaporan Pelanggaran",
          antiCorruption: "Kebijakan Anti Korupsi",
          supplierPolicy: "Kebijakan Seleksi & Pengembangan Vendor",

          /* ================= SUSTAINABILITY (POJK Pasal 6 ayat 4) ================= */
          environment: "Tanggung Jawab Lingkungan",
          laborPractices: "Praktik Ketenagakerjaan & K3",
          socialDev: "Tanggung Jawab Sosial & Masyarakat",
          sustainabilityReport: "Laporan Keberlanjutan",

          heroTitle: "Solusi Energi Terpercaya",
heroSubtitle: "Mendorong Pertumbuhan Berkelanjutan untuk Indonesia",
viewAnnualReport: "Lihat Laporan Tahunan",
investorRelations: "Hubungan Investor",
companyOverviewTitle: "Sekilas Perusahaan",
companyOverviewText: "PT Andalan Artha Primanusa Tbk merupakan perusahaan energi terkemuka yang bergerak di bidang pertambangan dan perdagangan batubara di Indonesia. Dengan keunggulan operasional dan kemitraan strategis, Perseroan terus memberikan nilai berkelanjutan bagi pemegang saham dan pemangku kepentingan.",
performanceTitle: "Kinerja Utama Perusahaan",
revenue: "Pendapatan",
netProfit: "Laba Bersih",
production: "Volume Produksi",
assets: "Total Aset",

businessTitle: "Lini Bisnis Kami",
mining: "Operasi Pertambangan",
trading: "Perdagangan Batubara",
logistics: "Logistik & Infrastruktur",
energyDev: "Pengembangan Energi",
miningDesc: "Operasi pertambangan batubara terintegrasi dengan keunggulan operasional.",
tradingDesc: "Jaringan perdagangan batubara domestik dan internasional yang andal.",
logisticsDesc: "Infrastruktur transportasi dan pengelolaan pelabuhan yang efisien.",
energyDevDesc: "Inisiatif pengembangan energi strategis untuk pertumbuhan jangka panjang.",
sustainTitle: "Komitmen Keberlanjutan",
sustainSubtitle: "Mendorong operasional yang bertanggung jawab untuk penciptaan nilai jangka panjang.",
environmentTitle: "Tanggung Jawab Lingkungan",
laborTitle: "Kesehatan, Keselamatan & SDM",
socialTitle: "Pengembangan Masyarakat",
environmentDesc: "Menerapkan praktik pertambangan berkelanjutan untuk meminimalkan dampak lingkungan.",
laborDesc: "Menjamin keselamatan kerja serta pengembangan berkelanjutan bagi karyawan.",
socialDesc: "Memberdayakan masyarakat sekitar melalui program CSR strategis.",
viewSustainReport: "Lihat Laporan Keberlanjutan",
investorAccessTitle: "Hubungan Investor",
investorAccessSubtitle: "Menyediakan informasi yang transparan dan tepat waktu bagi pemegang saham.",
annualReportBtn: "Laporan Tahunan",
financialReportBtn: "Laporan Keuangan",
gmsBtn: "RUPS",
disclosureBtn: "Keterbukaan Informasi",
stockBtn: "Informasi Saham",
newsTitle: "Berita & Keterbukaan Informasi",
newsSubtitle: "Ikuti perkembangan terbaru dan informasi resmi Perseroan.",
readMore: "Baca Selengkapnya",
footerAddressTitle: "Kantor Pusat",
footerContactTitle: "Informasi Kontak",
footerQuickLinks: "Tautan Cepat",
footerSecretary: "Sekretaris Perusahaan",
footerDisclaimer: "Seluruh informasi dalam situs ini disediakan untuk tujuan transparansi sesuai dengan ketentuan peraturan yang berlaku.",
footerRights: "Seluruh Hak Cipta Dilindungi.",

        }
      }
    },

    lng: "id",          // Default Bahasa Indonesia (sesuai regulasi)
    fallbackLng: "en",  // Wajib tersedia Bahasa Inggris
    interpolation: { escapeValue: false }
  });

export default i18n;
