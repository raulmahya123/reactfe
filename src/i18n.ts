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
companyOverviewTitle: "Company Overview",
companyOverviewText:
  "PT Andalan Artha Primanusa Tbk is a leading energy company engaged in coal mining and trading operations across Indonesia...",
overviewPoint1: "Integrated coal mining & trading operations",
overviewPoint2: "Strong domestic & international market presence",
overviewPoint3: "Committed to sustainable & responsible mining",

established: "Established",
operationalSites: "Operational Sites",
employees: "Employees",


/* ================= FOOTER MENU ================= */
footerAbout: "About Us",
footerVision: "Vision & Mission",
footerPhilosophy: "Our Philosophy",
footerMilestones: "Milestones",
footerManagement: "Management",
footerContactUs: "Contact Us",

footerInvestor: "Investor Relations",
footerFinancial: "Financial Statements",
footerAnnual: "Annual Reports",
footerStock: "Stock Performance",
footerCorporateAction: "Corporate Action",

footerBusiness: "Business Info",
footerOperation: "Operation Map",
footerCustomers: "Our Customers",
footerCoal: "Coal Quality",
footerReserves: "Reserves & Resources",

footerMedia: "Media",
footerAGM: "Upcoming AGM",
footerAnnouncement: "Announcement",
footerPresentation: "Presentations",
footerNews: "News & Press Release",

/* ================= INVESTOR NEWS ================= */
irLabel: "Investor Relations",
irMainTitle: "Andalan Artha Primanusa Wins Two Prestigious ESG Awards",
irDate: "May 09, 2025",

irNews1: "Andalan Group Receives Award from Ministry of Finance",
irNews2: "Andalan Wins International Sustainability Recognition",
irNews3: "Subsidiary Secures National Gold PROPER Award",
irNews4: "Andalan Earns Integrity Award 2024",

irDetailTitle: "ANDALAN ARTHA PRIMANUSA WINS TWO PRESTIGIOUS ESG AWARDS",
irDetailText:
  "PT Andalan Artha Primanusa Tbk received two prestigious awards for its commitment to emission transparency, environmental responsibility, and corporate governance excellence. These recognitions reflect the Company's dedication to responsible mining operations, sustainable development, and long-term stakeholder value creation.",
/* ================= CORE VALUE ================= */
coreValue: "Core Value",
coreValueDesc:
  "Core values that guide Andalan Group’s work culture in maintaining quality, resilience, and sustainable mining business growth.",

values: {
  excellence: {
    title: "Excellence",
    desc: "Ensuring high quality standards across all operations—from workplace safety to production efficiency."
  },
  focus: {
    title: "Focus",
    desc: "Ensuring every project meets targets in time, cost, and sustainability."
  },
  fortitude: {
    title: "Fortitude",
    desc: "Strength and resilience in facing operational challenges in a dynamic industry."
  },
  optimism: {
    title: "Optimism",
    desc: "Maintaining a positive mindset to create innovative and adaptive solutions."
  },
  responsive: {
    title: "Responsive",
    desc: "Quick response to risks at mining sites and stakeholder needs."
  },
  tenacity: {
    title: "Tenacity",
    desc: "Persistence in achieving production targets while ensuring business sustainability."
  },

},
media: "Media",
newsPressTitle: "News & Press Release",
newsLabel: "News",
pressRelease: "Press Release",
download: "Download",
viewAll: "View All",

newsItem1: "Public Expose 2025",
newsItem2: "Annual Report 2024 Released",
newsItem3: "Corporate Action Announcement",
newsItem4: "Strategic Expansion Plan 2025",

/* ================= ANNUAL REPORT PAGE ================= */
annualReportsTitle: "Annual Reports",
annualReportLabel: "Annual Report",
annualReports: {
  "2024": "Innovating Today, Sustaining Tomorrow",
  "2023": "A New Pathway to Future Value",
  "2022": "Ready for Sustainable Growth",
  "2021": "Rebounding Stronger"
},        
  ompanyProfile: "Company Profile",
      goodCorporateGovernance: "Good Corporate Governance",
      sustainability: "Sustainability",
      newsDisclosure: "News & Disclosure",

      milestones: "Milestones",
      management: "Management",

      financialStatements: "Financial Statements",
      stockPerformance: "Stock Performance",


      policy: "Sustainability Policy",
      communityDevelopment: "Community Development",

      announcement: "Announcement",
      presentation: "Presentation",

      addressLine1: "Andalan Tower 15th Floor",
      addressLine2: "South Jakarta 12950",
      addressCountry: "Indonesia",
      telephone: "Tel",
      allRightsReserved: "All Rights Reserved.",
vision: "Vision",
mission: "Mission",
visionText:
  "To become a leading and sustainable mining company that creates long-term value for stakeholders.",
mission1:
  "Deliver sustainable growth and maximize shareholder value.",
mission2:
  "Operate responsibly with strong corporate governance.",
mission3:
  "Contribute positively to communities and the environment.",

milestone1: "Company established.",
milestone2: "Expansion of mining operations.",
milestone3: "Listed on the stock exchange.",
milestone4: "Strengthened international partnerships.",
milestone5: "Enhanced ESG commitment and sustainability initiatives.",

presidentDirector: "President Director",
financeDirector: "Finance Director",
operationsDirector: "Operations Director",
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
companyOverviewTitle: "Sekilas Perusahaan",
companyOverviewText:
  "PT Andalan Artha Primanusa Tbk merupakan perusahaan energi terkemuka yang bergerak di bidang pertambangan dan perdagangan batubara di Indonesia. Dengan keunggulan operasional dan kemitraan strategis, Perseroan terus memberikan nilai berkelanjutan bagi pemegang saham dan pemangku kepentingan.",
overviewPoint1: "Operasi pertambangan & perdagangan batubara terintegrasi",
overviewPoint2: "Kehadiran pasar domestik & internasional yang kuat",
overviewPoint3: "Berkomitmen pada pertambangan berkelanjutan & bertanggung jawab",

established: "Didirikan",
operationalSites: "Lokasi Operasional",
employees: "Karyawan",
/* ================= FOOTER MENU ================= */
footerAbout: "Tentang Kami",
footerVision: "Visi & Misi",
footerPhilosophy: "Filosofi Perusahaan",
footerMilestones: "Tonggak Sejarah",
footerManagement: "Manajemen",
footerContactUs: "Hubungi Kami",

footerInvestor: "Hubungan Investor",
footerFinancial: "Laporan Keuangan",
footerAnnual: "Laporan Tahunan",
footerStock: "Performa Saham",
footerCorporateAction: "Aksi Korporasi",

footerBusiness: "Informasi Bisnis",
footerOperation: "Peta Operasi",
footerCustomers: "Pelanggan Kami",
footerCoal: "Kualitas Batubara",
footerReserves: "Cadangan & Sumber Daya",

footerMedia: "Media",
footerAGM: "RUPS Mendatang",
footerAnnouncement: "Pengumuman",
footerPresentation: "Presentasi",
footerNews: "Berita & Siaran Pers",


/* ================= INVESTOR NEWS ================= */
irLabel: "Hubungan Investor",
irMainTitle: "Andalan Artha Primanusa Raih Dua Penghargaan Bergengsi ESG",
irDate: "09 Mei 2025",

irNews1: "Grup Andalan Terima Penghargaan dari Kementerian Keuangan",
irNews2: "Andalan Raih Pengakuan Keberlanjutan Internasional",
irNews3: "Anak Usaha Raih Penghargaan PROPER Emas Nasional",
irNews4: "Andalan Terima Penghargaan Integritas 2024",

irDetailTitle: "ANDALAN ARTHA PRIMANUSA RAIH DUA PENGHARGAAN BERGENGSI ESG",
irDetailText:
  "PT Andalan Artha Primanusa Tbk menerima dua penghargaan bergengsi atas komitmennya terhadap transparansi emisi, tanggung jawab lingkungan, serta tata kelola perusahaan yang unggul. Penghargaan ini mencerminkan dedikasi Perseroan dalam menjalankan praktik pertambangan yang bertanggung jawab dan pembangunan berkelanjutan.",
/* ================= CORE VALUE ================= */
coreValue: "Nilai Inti",
coreValueDesc:
  "Nilai inti yang menuntun perilaku kerja Andalan Group dalam menjaga kualitas, ketahanan, dan keberlanjutan bisnis pertambangan.",

values: {
  excellence: {
    title: "Excellence",
    desc: "Menjamin standar kualitas tinggi di seluruh operasi—dari keselamatan kerja hingga efisiensi produksi."
  },
  focus: {
    title: "Focus",
    desc: "Memastikan setiap proyek berjalan sesuai target waktu, biaya, dan keberlanjutan."
  },
  fortitude: {
    title: "Fortitude",
    desc: "Keteguhan dan ketahanan dalam menghadapi tantangan operasional di industri yang dinamis."
  },
  optimism: {
    title: "Optimism",
    desc: "Menjaga semangat positif dalam menciptakan solusi inovatif dan adaptif."
  },
  responsive: {
    title: "Responsive",
    desc: "Cepat tanggap terhadap risiko di lokasi tambang dan kebutuhan pemangku kepentingan."
  },
  tenacity: {
    title: "Tenacity",
    desc: "Gigih mencapai target produksi sekaligus menjaga keberlanjutan bisnis."
  },
    
},     
 /* ================= NEWS ================= */
media: "Media",
newsPressTitle: "Berita & Siaran Pers",
newsLabel: "Berita",
pressRelease: "Siaran Pers",
download: "Unduh",
viewAll: "Lihat Semua",

newsItem1: "Public Expose 2025",
newsItem2: "Laporan Tahunan 2024 Dirilis",
newsItem3: "Pengumuman Aksi Korporasi",
newsItem4: "Rencana Ekspansi Strategis 2025",

/* ================= ANNUAL REPORT PAGE ================= */
annualReportsTitle: "Laporan Tahunan",
annualReportLabel: "Laporan Tahunan",
annualReports: {
  "2024": "Berinovasi Hari Ini, Menjaga Keberlanjutan Esok Hari",
  "2023": "Jalur Baru Menuju Nilai Masa Depan",
  "2022": "Siap untuk Pertumbuhan Berkelanjutan",
  "2021": "Bangkit Lebih Kuat"
},

  companyProfile: "Profil Perusahaan",
      goodCorporateGovernance: "Tata Kelola Perusahaan",
      sustainability: "Keberlanjutan",
      newsDisclosure: "Berita & Keterbukaan Informasi",

      milestones: "Tonggak Sejarah",
      management: "Manajemen",

      financialStatements: "Laporan Keuangan",
      stockPerformance: "Performa Saham",


      policy: "Kebijakan Keberlanjutan",
      communityDevelopment: "Pengembangan Masyarakat",

      announcement: "Pengumuman",
      presentation: "Presentasi",

      addressLine1: "Gedung Andalan Tower Lt. 15",
      addressLine2: "Jakarta Selatan 12950",
      addressCountry: "Indonesia",
      telephone: "Telp",
      allRightsReserved: "Seluruh Hak Cipta Dilindungi.",
vision: "Visi",
mission: "Misi",
visionText:
  "Menjadi perusahaan pertambangan terkemuka dan berkelanjutan yang menciptakan nilai jangka panjang bagi para pemangku kepentingan.",
mission1:
  "Mewujudkan pertumbuhan berkelanjutan dan memaksimalkan nilai pemegang saham.",
mission2:
  "Beroperasi secara bertanggung jawab dengan tata kelola perusahaan yang kuat.",
mission3:
  "Memberikan kontribusi positif bagi masyarakat dan lingkungan.",

milestone1: "Perusahaan didirikan.",
milestone2: "Ekspansi operasional pertambangan.",
milestone3: "Melantai di bursa saham.",
milestone4: "Memperkuat kemitraan internasional.",
milestone5: "Meningkatkan komitmen ESG dan keberlanjutan.",

presidentDirector: "Direktur Utama",
financeDirector: "Direktur Keuangan",
operationsDirector: "Direktur Operasional",
},

      }
    },

    lng: "id",          // Default Bahasa Indonesia (sesuai regulasi)
    fallbackLng: "en",  // Wajib tersedia Bahasa Inggris
    interpolation: { escapeValue: false }
  });

export default i18n;
