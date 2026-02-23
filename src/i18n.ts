import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        /* ================= NAVIGATION ================= */
        home: "Home",
        about: "Company Profile",
        investor: "Investor Relations",
        governance: "Good Corporate Governance",
        csr: "Investor",
        news: "News & Disclosure",
        contact: "Contact",
        welcome: "Reliable Energy Solutions",
        budgetDocument: "Articles of Association",
        budgetDocumentDesc:
          "The Articles of Association serve as the legal foundation governing the Company's structure, governance framework, and operational activities.",
        effectiveDate: "Effective Date",
        notarialDeed: "Notarial Deed Information",
        documentOverview: "Document Overview",
        budgetDocumentFullDesc:
          "The Articles of Association outline the Company's objectives, scope of business activities, capital structure, shareholder rights, governance mechanisms, and other statutory provisions in accordance with Indonesian corporate law and applicable regulations.",
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
        miningDesc:
          "Integrated coal mining operations with strong operational excellence.",
        tradingDesc:
          "Reliable domestic and international coal trading network.",
        logisticsDesc:
          "Efficient transportation and port management infrastructure.",
        energyDevDesc:
          "Strategic energy development initiatives for long-term growth.",
        sustainTitle: "Sustainability Commitment",
        sustainSubtitle:
          "Driving responsible operations for long-term value creation.",
        environmentTitle: "Environmental Responsibility",
        laborTitle: "Health, Safety & Human Capital",
        socialTitle: "Community Development",
        environmentDesc:
          "Implementing sustainable mining practices to minimize environmental impact.",
        laborDesc:
          "Ensuring workplace safety and continuous development of our workforce.",
        socialDesc:
          "Empowering local communities through strategic CSR programs.",
        viewSustainReport: "View Sustainability Report",
        investorAccessTitle: "Investor Relations",
        investorAccessSubtitle:
          "Providing transparent and timely information to our shareholders.",
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
        footerDisclaimer:
          "All information on this website is provided for transparency purposes in accordance with regulatory requirements.",
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

        irDetailTitle:
          "ANDALAN ARTHA PRIMANUSA WINS TWO PRESTIGIOUS ESG AWARDS",
        irDetailText:
          "PT Andalan Artha Primanusa Tbk received two prestigious awards for its commitment to emission transparency, environmental responsibility, and corporate governance excellence. These recognitions reflect the Company's dedication to responsible mining operations, sustainable development, and long-term stakeholder value creation.",
        /* ================= CORE VALUE ================= */
        coreValue: "Core Value",
        coreValueDesc:
          "Core values that guide Andalan Group’s work culture in maintaining quality, resilience, and sustainable mining business growth.",

        values: {
          excellence: {
            title: "Excellence",
            desc: "Ensuring high quality standards across all operations—from workplace safety to production efficiency.",
          },
          focus: {
            title: "Focus",
            desc: "Ensuring every project meets targets in time, cost, and sustainability.",
          },
          fortitude: {
            title: "Fortitude",
            desc: "Strength and resilience in facing operational challenges in a dynamic industry.",
          },
          optimism: {
            title: "Optimism",
            desc: "Maintaining a positive mindset to create innovative and adaptive solutions.",
          },
          responsive: {
            title: "Responsive",
            desc: "Quick response to risks at mining sites and stakeholder needs.",
          },
          tenacity: {
            title: "Tenacity",
            desc: "Persistence in achieving production targets while ensuring business sustainability.",
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
          "2021": "Rebounding Stronger",
        },
        ompanyProfile: "Company Profile",
        goodCorporateGovernance: "Good Corporate Governance",
        sustainability: "Sustainability",
        newsDisclosure: "News & Disclosure",
        governanceInformation: "Governance Information",
        milestones: "Milestones",
        management: "Management",
        governanceInformationDesc:
          "The Company is committed to implementing Good Corporate Governance (GCG) principles consistently and sustainably in accordance with applicable regulations.",
        governanceDocumentList: "Corporate Governance Documents",
        csrInformation: "Corporate Social Responsibility Information",
        csrInformationDesc:
          "Disclosure of CSR policies, program types, and expenditures in accordance with regulatory requirements.",

        csrEnvironment: "Environmental Responsibility",
        csrEnvironmentDesc:
          "Policies, programs, and expenditures related to environmental management, emissions control, land rehabilitation, and sustainable mining practices.",

        csrLabor: "Labor Practices, Health & Safety",
        csrLaborDesc:
          "Employee welfare programs, occupational health and safety initiatives, training development, and workforce protection measures.",

        csrSocial: "Social & Community Development",
        csrSocialDesc:
          "Community empowerment programs, local infrastructure development, education support, and social investment initiatives.",

        csrProduct: "Product & Service Responsibility",
        csrProductDesc:
          "Quality assurance standards, customer protection policies, responsible service delivery, and compliance with industry regulations.",
        boardManual: "Board of Directors and Board of Commissioners Charter",
        corporateSecretaryAppointment:
          "Appointment, dismissal, and/or vacancy of the Corporate Secretary",
        internalAuditCharter: "Internal Audit Charter",
        codeOfEthics: "Code of Ethics",
        committeeGuidelines: "Committee Charter",
        auditCommitteeAppointment:
          "Appointment and dismissal of Audit Committee members",
        nominationRemunerationProcedure:
          "Nomination and remuneration procedures (if no nomination and remuneration committee is established)",
        riskManagementPolicy: "Risk Management Policy",
        whistleblowingSystem: "Whistleblowing System Policy (if any)",
        antiCorruptionPolicy: "Anti-Corruption Policy (if any)",
        supplierCreditorPolicy:
          "Supplier selection and creditor rights policy (if any)",
        vendorDevelopmentPolicy:
          "Vendor capability development policy (if any)",
        financialStatements: "Financial Statements",
        stockPerformance: "Stock Performance",

        policy: "Sustainability Policy",
        communityDevelopment: "Community Development",

        announcement: "Announcement",
        presentation: "Presentation",

        addressLine1: "PT Andalan Artha Primanusa",
        addressLine2: "Tanah Andalan Tanah Andalan Kebon Melati, Tanah Abang",
        addressCountry: "Jakarta Pusat 10230 DKI Jakarta – Indonesia",
        telephone: "Telepon +62 21 6669 2917 | Fax: +62 21 6669 2918",
        allRightsReserved: "All Rights Reserved.",
        vision: "Vision",
        mission: "Mission",
        visionText:
          "Become the prominent and trustworthy mining contractor in Indonesia with excellent credibility and commitment in delivering result, supported  by solid foundation of mining operation, integrated system and excellent teamwork.",
        mission1:
          "Precise identification with meticulous data examination as the continuous improvement and development",
        mission2:
          "Strong resilient mindset to have mental and emotional fortitude to bounce back from adversity, overcome challenges, and adapt to difficult situations",
        mission3: "Providing mutually beneficial solutions for stakeholders",
        mission4:
          "Maximize the operational productivity with excellent monitoring system",
        milestone1:
          "The Company was established based on Deed of Establishment No. 58 dated July 31, 2018 and was officially approved by the Ministry of Law and Human Rights of the Republic of Indonesia.",

        milestone2:
          "Signed a contract with PT Budi Gema Gempita on August 8, 2018 for coal mining services in Lahat, South Sumatra. This marked AAP’s first operational project and laid the foundation for its operational track record.",

        milestone3:
          "Signed a contract with PT Satria Bahana Sarana on December 30, 2024 for production support services in Tanjung Enim, South Sumatra, strengthening recurring revenue and service diversification.",
        milestone4:
          "On December 1, 2025, AAP obtained a contract addendum from PT Satria Bahana Sarana, including additional production volume and material hauling scope. This reflects the client’s satisfaction and trust in AAP’s performance.",
        milestone5:
          "Received a Letter of Award from PT Position dated January 22, 2026 for nickel mining development and operations in Maba Village, East Halmahera, North Maluku, marking AAP’s strategic expansion into the nickel sector.",
        presidentDirector: "President Director",
        financeDirector: "Finance Director",
        operationsDirector: "Operations Director",

        commissionerPresident: "President Commissioner",
        commissioner: "Commissioner",
        independentCommissioner: "Independent Commissioner",

        /* ================= CONTACT PAGE ================= */
        contactSection: {
          official: "Official Information",
          title: "Contact Us",
          description:
            "We are ready to provide further information regarding our company, operations, and partnership opportunities.",
          headOffice: "Head Office",
          repOffice: "Representative Office",

          address:
            "PT Andalan Artha Primanusa\nTanah Andalan\nJl. Plaju No.11\nKebon Melati, Tanah Abang\nJakarta Pusat 10230\nDKI Jakarta – Indonesia",

          phone: "Phone: +62 21 6669 2917 | Fax: +62 21 6669 2918",
          email: "Email: info@pt-aap.co.id",
          hours: "Monday – Friday: 08.00 – 17.00 WIB",

          sites: {
            bgg: {
              name: "Site PT Budi Gema Gempita (BGG)",
              location: "Lahat, South Sumatera – Indonesia",
            },
            sbs: {
              name: "Site PT Satria Bahana Sarana (SBS)",
              location: "Tanjung Enim, South Sumatera – Indonesia",
            },
            dbk: {
              name: "Site PT Daya Bumindo Karunia (DBK)",
              location: "Murung Raya, Central Kalimantan – Indonesia",
            },
            pos: {
              name: "Site PT Position (POS)",
              location: "East Halmahera, North Maluku – Indonesia",
            },
          },
        },
      },
    },

    id: {
      translation: {
        /* ================= NAVIGATION ================= */
        home: "Beranda",
        about: "Profil Perusahaan",
        investor: "Hubungan Investor",
        governance: "Tata Kelola Perusahaan",
        csr: "Investor",
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
        governanceInformation: "Informasi Tata Kelola Perusahaan",
        governanceInformationDesc:
          "Perseroan berkomitmen menerapkan prinsip Tata Kelola Perusahaan yang Baik (Good Corporate Governance) secara konsisten dan berkelanjutan sesuai dengan ketentuan peraturan yang berlaku.",
        governanceDocumentList: "Daftar Dokumen Tata Kelola",

        boardManual: "Pedoman kerja Direksi dan Dewan Komisaris",
        corporateSecretaryAppointment:
          "Pengangkatan, pemberhentian, dan/atau kekosongan Sekretaris Perusahaan",
        internalAuditCharter: "Piagam Unit Audit Internal",
        codeOfEthics: "Kode Etik",
        committeeGuidelines: "Pedoman kerja komite",
        auditCommitteeAppointment:
          "Pengangkatan dan pemberhhentian anggota Komite Audit",
        nominationRemunerationProcedure:
          "Uraian prosedur nominasi dan remunerasi (apabila tidak dibentuk komite nominasi dan remunerasi)",
        riskManagementPolicy: "Kebijakan Manajemen Risiko",
        whistleblowingSystem:
          "Kebijakan mekanisme sistem pelaporan pelanggaran (jika ada)",
        antiCorruptionPolicy: "Kebijakan Anti Korupsi (jika ada)",
        supplierCreditorPolicy:
          "Kebijakan terkait seleksi pemasok dan hak kreditur (jika ada)",
        vendorDevelopmentPolicy:
          "Kebijakan dalam peningkatan kemampuan vendor (jika ada)",
        /* ================= GOVERNANCE (POJK Pasal 6 ayat 3) ================= */
        boardCharter: "Piagam Direksi & Dewan Komisaris",
        internalAudit: "Piagam Audit Internal",
        ethicsCode: "Kode Etik Perusahaan",
        riskManagement: "Kebijakan Manajemen Risiko",
        whistleblowing: "Sistem Pelaporan Pelanggaran",
        antiCorruption: "Kebijakan Anti Korupsi",
        supplierPolicy: "Kebijakan Seleksi & Pengembangan Vendor",
        budgetDocument: "Dokumen Anggaran Dasar",
        budgetDocumentDesc:
          "Anggaran Dasar merupakan dasar hukum yang mengatur struktur, tata kelola, dan kegiatan operasional Perseroan.",
        effectiveDate: "Tanggal Berlaku",
        notarialDeed: "Informasi Akta Notaris",
        documentOverview: "Ringkasan Dokumen",
        budgetDocumentFullDesc:
          "Anggaran Dasar Perseroan memuat tujuan dan kegiatan usaha, struktur permodalan, hak pemegang saham, mekanisme tata kelola, serta ketentuan lainnya sesuai dengan peraturan perundang-undangan yang berlaku di Indonesia.",
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
        miningDesc:
          "Operasi pertambangan batubara terintegrasi dengan keunggulan operasional.",
        tradingDesc:
          "Jaringan perdagangan batubara domestik dan internasional yang andal.",
        logisticsDesc:
          "Infrastruktur transportasi dan pengelolaan pelabuhan yang efisien.",
        energyDevDesc:
          "Inisiatif pengembangan energi strategis untuk pertumbuhan jangka panjang.",
        sustainTitle: "Komitmen Keberlanjutan",
        sustainSubtitle:
          "Mendorong operasional yang bertanggung jawab untuk penciptaan nilai jangka panjang.",
        environmentTitle: "Tanggung Jawab Lingkungan",
        laborTitle: "Kesehatan, Keselamatan & SDM",
        socialTitle: "Pengembangan Masyarakat",
        environmentDesc:
          "Menerapkan praktik pertambangan berkelanjutan untuk meminimalkan dampak lingkungan.",
        laborDesc:
          "Menjamin keselamatan kerja serta pengembangan berkelanjutan bagi karyawan.",
        socialDesc:
          "Memberdayakan masyarakat sekitar melalui program CSR strategis.",
        viewSustainReport: "Lihat Laporan Keberlanjutan",
        investorAccessTitle: "Hubungan Investor",
        investorAccessSubtitle:
          "Menyediakan informasi yang transparan dan tepat waktu bagi pemegang saham.",
        annualReportBtn: "Laporan Tahunan",
        financialReportBtn: "Laporan Keuangan",
        gmsBtn: "RUPS",
        disclosureBtn: "Keterbukaan Informasi",
        stockBtn: "Informasi Saham",
        newsTitle: "Berita & Keterbukaan Informasi",
        newsSubtitle:
          "Ikuti perkembangan terbaru dan informasi resmi Perseroan.",
        readMore: "Baca Selengkapnya",
        footerAddressTitle: "Kantor Pusat",
        footerContactTitle: "Informasi Kontak",
        footerQuickLinks: "Tautan Cepat",
        footerSecretary: "Sekretaris Perusahaan",
        footerDisclaimer:
          "Seluruh informasi dalam situs ini disediakan untuk tujuan transparansi sesuai dengan ketentuan peraturan yang berlaku.",
        footerRights: "Seluruh Hak Cipta Dilindungi.",
        companyOverviewTitle: "Sekilas Perusahaan",
        companyOverviewText:
          "PT Andalan Artha Primanusa Tbk merupakan perusahaan energi terkemuka yang bergerak di bidang pertambangan dan perdagangan batubara di Indonesia. Dengan keunggulan operasional dan kemitraan strategis, Perseroan terus memberikan nilai berkelanjutan bagi pemegang saham dan pemangku kepentingan.",
        overviewPoint1:
          "Operasi pertambangan & perdagangan batubara terintegrasi",
        overviewPoint2: "Kehadiran pasar domestik & internasional yang kuat",
        overviewPoint3:
          "Berkomitmen pada pertambangan berkelanjutan & bertanggung jawab",

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
        csrInformation: "Informasi Tanggung Jawab Sosial Perusahaan",
        csrInformationDesc:
          "Pengungkapan kebijakan, jenis program, dan biaya yang dikeluarkan Perseroan terkait Tanggung Jawab Sosial sesuai peraturan yang berlaku.",

        csrEnvironment: "Aspek Lingkungan Hidup",
        csrEnvironmentDesc:
          "Kebijakan pengelolaan lingkungan, program pengendalian emisi, reklamasi lahan, dan inisiatif pertambangan berkelanjutan.",
        csrEnvironmentBudget:
          "Total Alokasi: Rp 5.000.000.000 (Tahun Buku 2025)",

        csrLabor: "Praktik Ketenagakerjaan, K3",
        csrLaborDesc:
          "Program kesejahteraan karyawan, inisiatif kesehatan dan keselamatan kerja, pelatihan, dan perlindungan tenaga kerja.",
        csrLaborBudget: "Total Alokasi: Rp 3.500.000.000 (Tahun Buku 2025)",

        csrSocial: "Pengembangan Sosial & Kemasyarakatan",
        csrSocialDesc:
          "Program pemberdayaan masyarakat, dukungan pendidikan, pembangunan infrastruktur, dan investasi sosial.",
        csrSocialBudget: "Total Alokasi: Rp 4.200.000.000 (Tahun Buku 2025)",

        csrProduct: "Tanggung Jawab Produk & Layanan",
        csrProductDesc:
          "Standar jaminan mutu, kebijakan perlindungan pelanggan, dan kepatuhan terhadap regulasi industri.",
        csrProductBudget: "Total Alokasi: Rp 1.800.000.000 (Tahun Buku 2025)",

        csrBudget: "Biaya Program",
        csrSupportingDocument: "Laporan Keberlanjutan",
        csrSupportingDocumentDesc:
          "Informasi lengkap mengenai kinerja CSR tersedia dalam Laporan Keberlanjutan Perseroan.",

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
        irMainTitle:
          "Andalan Artha Primanusa Raih Dua Penghargaan Bergengsi ESG",
        irDate: "09 Mei 2025",

        irNews1: "Grup Andalan Terima Penghargaan dari Kementerian Keuangan",
        irNews2: "Andalan Raih Pengakuan Keberlanjutan Internasional",
        irNews3: "Anak Usaha Raih Penghargaan PROPER Emas Nasional",
        irNews4: "Andalan Terima Penghargaan Integritas 2024",

        irDetailTitle:
          "ANDALAN ARTHA PRIMANUSA RAIH DUA PENGHARGAAN BERGENGSI ESG",
        irDetailText:
          "PT Andalan Artha Primanusa Tbk menerima dua penghargaan bergengsi atas komitmennya terhadap transparansi emisi, tanggung jawab lingkungan, serta tata kelola perusahaan yang unggul. Penghargaan ini mencerminkan dedikasi Perseroan dalam menjalankan praktik pertambangan yang bertanggung jawab dan pembangunan berkelanjutan.",
        /* ================= CORE VALUE ================= */
        coreValue: "Nilai Inti",
        coreValueDesc:
          "Nilai inti yang menuntun perilaku kerja Andalan Group dalam menjaga kualitas, ketahanan, dan keberlanjutan bisnis pertambangan.",

        values: {
          excellence: {
            title: "Excellence",
            desc: "Menjamin standar kualitas tinggi di seluruh operasi—dari keselamatan kerja hingga efisiensi produksi.",
          },
          focus: {
            title: "Focus",
            desc: "Memastikan setiap proyek berjalan sesuai target waktu, biaya, dan keberlanjutan.",
          },
          fortitude: {
            title: "Fortitude",
            desc: "Keteguhan dan ketahanan dalam menghadapi tantangan operasional di industri yang dinamis.",
          },
          optimism: {
            title: "Optimism",
            desc: "Menjaga semangat positif dalam menciptakan solusi inovatif dan adaptif.",
          },
          responsive: {
            title: "Responsive",
            desc: "Cepat tanggap terhadap risiko di lokasi tambang dan kebutuhan pemangku kepentingan.",
          },
          tenacity: {
            title: "Tenacity",
            desc: "Gigih mencapai target produksi sekaligus menjaga keberlanjutan bisnis.",
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
          "2021": "Bangkit Lebih Kuat",
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

          addressLine1: "PT Andalan Artha Primanusa",
        addressLine2: "Tanah Andalan Kebon Melati, Tanah Abang",
        addressCountry: "Jakarta Pusat 10230 DKI Jakarta – Indonesia",
        telephone: "Telepon +62 21 6669 2917 | Fax: +62 21 6669 2918",
        allRightsReserved: "Seluruh Hak Cipta Dilindungi.",
        visionText:
          "Menjadi kontraktor pertambangan yang terkemuka dan terpercaya di Indonesia dengan kredibilitas dan komitmen yang unggul dalam memberikan hasil, didukung oleh fondasi operasi pertambangan yang solid, sistem terintegrasi, dan kerja tim yang luar biasa.",

        mission1:
          "Identifikasi yang tepat dengan pemeriksaan data secara teliti sebagai bagian dari perbaikan dan pengembangan berkelanjutan.",

        mission2:
          "Membangun pola pikir yang kuat dan tangguh dengan ketahanan mental dan emosional untuk bangkit dari keterpurukan, mengatasi tantangan, dan beradaptasi dengan situasi sulit.",

        mission3:
          "Memberikan solusi yang saling menguntungkan bagi seluruh pemangku kepentingan.",

        mission4:
          "Memaksimalkan produktivitas operasional dengan sistem pemantauan yang unggul.",
        milestone1:
          "Perseroan didirikan berdasarkan Akta Pendirian No. 58 tanggal 31 Juli 2018 dan telah memperoleh pengesahan dari Menteri Hukum dan Hak Asasi Manusia Republik Indonesia.",

        milestone2:
          "Penandatanganan kontrak dengan PT Budi Gema Gempita pada 8 Agustus 2018 untuk pekerjaan jasa penambangan batubara di Lahat, Sumatera Selatan. Proyek ini menjadi fondasi awal rekam jejak operasional AAP.",

        milestone3:
          "Penandatanganan kontrak dengan PT Satria Bahana Sarana pada 30 Desember 2024 untuk pengadaan jasa penunjang produksi di Tanjung Enim, Sumatera Selatan, memperkuat keberlanjutan pendapatan dan diversifikasi layanan.",

        milestone4:
          "Pada 1 Desember 2025, AAP menandatangani addendum kontrak dengan PT Satria Bahana Sarana yang mencakup tambahan volume produksi dan jasa angkutan material. Hal ini mencerminkan kepuasan serta kepercayaan berkelanjutan dari pemberi kerja terhadap kinerja AAP.",
        milestone5:
          "Perolehan Letter of Award dari PT Position tertanggal 22 Januari 2026 untuk pekerjaan pengembangan dan operasi penambangan nikel di Desa Maba, Halmahera Timur, Maluku Utara, menandai ekspansi strategis AAP ke sektor nikel.",

        presidentDirector: "Direktur Utama",
        financeDirector: "Direktur Keuangan",
        operationsDirector: "Direktur Operasional",

        commissionerPresident: "Komisaris Utama",
        commissioner: "Komisaris",
        independentCommissioner: "Komisaris Independen",

        /* ================= CONTACT PAGE ================= */
        contactSection: {
          official: "Informasi Resmi",
          title: "Hubungi Kami",
          description:
            "Kami siap memberikan informasi lebih lanjut mengenai perusahaan, operasional, dan peluang kerja sama.",
          headOffice: "Kantor Pusat",
          repOffice: "Kantor Perwakilan",

          address:
            "PT Andalan Artha Primanusa\nTanah Andalan\nJl. Plaju No.11\nKebon Melati, Tanah Abang\nJakarta Pusat 10230\nDKI Jakarta – Indonesia",

          phone: "Telepon: +62 21 6669 2917 | Fax: +62 21 6669 2918",
          email: "Email: info@pt-aap.co.id",
          hours: "Senin – Jumat: 08.00 – 17.00 WIB",

          sites: {
            bgg: {
              name: "Site PT Budi Gema Gempita (BGG)",
              location: "Lahat, Sumatera Selatan – Indonesia",
            },
            sbs: {
              name: "Site PT Satria Bahana Sarana (SBS)",
              location: "Tanjung Enim, Sumatera Selatan – Indonesia",
            },
            dbk: {
              name: "Site PT Daya Bumindo Karunia (DBK)",
              location: "Murung Raya, Kalimantan Tengah – Indonesia",
            },
            pos: {
              name: "Site PT Position (POS)",
              location: "Halmahera Timur, Maluku Utara – Indonesia",
            },
          },
        },
      },
    },
  },

  lng: "id", // Default Bahasa Indonesia (sesuai regulasi)
  fallbackLng: "en", // Wajib tersedia Bahasa Inggris
  interpolation: { escapeValue: false },
});

export default i18n;
