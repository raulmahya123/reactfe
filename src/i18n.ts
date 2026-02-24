import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        csrInformation: "CSR Information",
        csrInformationDesc:
          "PT Andalan Artha Primanusa is committed to conducting sustainable business activities through structured Corporate Social Responsibility (CSR) programs that create measurable impact for communities, employees, and the environment.",

        csrEnvironment: "Environment",
        csrEnvironmentDesc:
          "Environmental CSR programs focus on responsible waste management, land reclamation, reforestation initiatives, and emission reduction to support sustainable operations.",
        csrEnvironmentBudget:
          "The realized environmental program budget for the current year amounts to IDR 2,500,000,000.",

        csrLabor: "Labor & Occupational Safety",
        csrLaborDesc:
          "The Company ensures employee rights, promotes a safe and healthy working environment, and consistently implements Occupational Health and Safety standards.",
        csrLaborBudget:
          "The realized labor and occupational safety program budget amounts to IDR 1,750,000,000.",

        csrSocial: "Social & Community Empowerment",
        csrSocialDesc:
          "Social programs include educational assistance, healthcare support, village infrastructure development, and economic empowerment initiatives for communities surrounding operational areas.",
        csrSocialBudget:
          "The realized social and community empowerment program budget amounts to IDR 3,000,000,000.",

        csrProduct: "Product Responsibility",
        csrProductDesc:
          "The Company ensures product quality meets industry standards, maintains secure distribution processes, and provides transparent information to stakeholders.",
        csrProductBudget:
          "The realized quality control and product supervision budget amounts to IDR 1,200,000,000.",

        csrBudget: "Budget Realization",
        csrSupportingDocument: "Supporting Document",
        csrSupportingDocumentDesc:
          "Download the Company's sustainability report for comprehensive information regarding CSR implementation.",
        download: "Download",
        businessActivities: "Business Activities",
        businessOverviewTitle: "Our Core Business Activities",
        businessOverviewText:
          "PT Andalan Artha Primanusa Tbk operates in integrated mining services, coal trading, and strategic energy development with a focus on operational excellence and sustainability.",

        businessSegment1Title: "Mining Services",
        businessSegment1Desc:
          "Comprehensive overburden removal, coal extraction, hauling, and mine support services across multiple operational sites in Indonesia.",

        businessSegment2Title: "Coal Trading",
        businessSegment2Desc:
          "Domestic and international coal trading supported by strong logistics infrastructure and long-term customer partnerships.",

        businessSegment3Title: "Logistics & Infrastructure",
        businessSegment3Desc:
          "Efficient hauling roads, port facilities, and heavy equipment fleet management to ensure reliable supply chain operations.",

        businessSegment4Title: "Energy Development",
        businessSegment4Desc:
          "Strategic expansion into energy and mineral sectors, including nickel development and renewable energy opportunities.",

        operationalExcellence: "Operational Excellence",
        operationalExcellenceDesc:
          "We are committed to safety, efficiency, regulatory compliance, and sustainable growth across all operations.",
        quarterlyReports: "Quarterly Reports",
        publicExpose: "Public Expose",
        dividendInformation: "Dividend Information",
        boardOfDirectors: "Board of Directors",
        boardOfCommissioners: "Board of Commissioners",
        auditCommittee: "Audit Committee",
        riskManagement: "Risk Management",
        codeOfConduct: "Code of Conduct",
        whistleblowingSystem: "Whistleblowing System",
        esgCommitment: "ESG Commitment",
        pressRelease: "Press Release",
        mediaCoverage: "Media Coverage",
        corporateActions: "Corporate Actions",
        organizationStructure: "Organization Structure",
        materialInformation: "Material Information",

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
        shareholdingStructure: "Shareholding Structure",
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
        /* ================= GOVERNANCE (POJK Pasal 6 ayat 3) ================= */
        boardCharter: "Board Charter",
        internalAudit: "Internal Audit Charter",
        ethicsCode: "Code of Conduct",
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

        annualReportsMenu: "Annual Reports",

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
          "PT Andalan Artha Primanusa Tbk. (AAP) was established in 2018 as a mining contractor committed to delivering the highest standards of safety, productivity, and sustainability. With extensive experience in the mining contracting sector, AAP has become a strategic partner for mining companies seeking strong, transparent, and results‑oriented operational solutions.We believe that project success is not measured solely by production, but also by the values we uphold:",
        overviewPoint1: "Integrated coal mining & trading operations",
        overviewPoint2: "Strong domestic & international market presence",
        overviewPoint3: "Committed to sustainable & responsible mining",
        overviewPoint4:
          "Social Commitment – contributing positively to surrounding communities",
        investorButton: "Investor Information",
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
        irMainTitle: "Elegant Exploration, Reliable Execution",
        irDate: "23 Feb 2026",

        irNews1: "AAP Secures Nickel Mining Contract at the Beginning of 2026",
        irNews2:
          "Additional Production Volume Awarded by Existing Bowheer at the End of 2025",
        irNews3: "AAP Secures Coking Coal Mining Contract in June 2025",
        irNews4: "Closing 2024, AAP Wins Tender at PTBA Site",

        irDetailTitle:
          "AAP Secures Nickel Ore Mining Contract at the Beginning of 2026",

        irDetailText:
          "PT Andalan Artha Primanusa marks the beginning of 2026 with a significant strategic achievement, securing a new nickel mining contract. This milestone reinforces the Company’s commitment to operational excellence and its proactive role in meeting the growing demand for minerals that support the global energy transition.",
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
          "Signed a contract with PT Bukit Asam Tbk on December 30, 2024 for production support services in Tanjung Enim, South Sumatra, strengthening recurring revenue and service diversification.",
        milestone4:
          "On December 1, 2025, AAP obtained a contract addendum from PT Bukit Asam Tbk, including additional production volume and material hauling scope. This reflects the client’s satisfaction and trust in AAP’s performance.",
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
              name: "Site PT Bukit Asam Tbk (SBS)",
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
        csrInformation: "Informasi CSR",
        csrInformationDesc:
          "PT Andalan Artha Primanusa berkomitmen menjalankan kegiatan usaha yang berkelanjutan melalui program Tanggung Jawab Sosial dan Lingkungan (CSR) yang terstruktur dan memberikan dampak nyata bagi masyarakat, karyawan, serta lingkungan sekitar.",

        csrEnvironment: "Lingkungan",
        csrEnvironmentDesc:
          "Program CSR lingkungan difokuskan pada pengelolaan limbah yang bertanggung jawab, reklamasi lahan, penghijauan, serta pengurangan emisi guna mendukung keberlanjutan operasional perusahaan.",
        csrEnvironmentBudget:
          "Realisasi anggaran program lingkungan tahun berjalan sebesar Rp 2.500.000.000.",

        csrLabor: "Ketenagakerjaan & K3",
        csrLaborDesc:
          "Perusahaan menjamin hak tenaga kerja, menciptakan lingkungan kerja yang aman dan sehat, serta menerapkan standar Keselamatan dan Kesehatan Kerja (K3) secara konsisten.",
        csrLaborBudget:
          "Realisasi anggaran program ketenagakerjaan dan K3 sebesar Rp 1.750.000.000.",

        csrSocial: "Sosial & Pemberdayaan Masyarakat",
        csrSocialDesc:
          "Program sosial meliputi bantuan pendidikan, kesehatan, pembangunan infrastruktur desa, serta pemberdayaan ekonomi masyarakat di sekitar wilayah operasional.",
        csrSocialBudget:
          "Realisasi anggaran program sosial dan pemberdayaan sebesar Rp 3.000.000.000.",

        csrProduct: "Tanggung Jawab Produk",
        csrProductDesc:
          "Perusahaan memastikan kualitas produk memenuhi standar industri, keamanan distribusi terjaga, serta transparansi informasi kepada seluruh pemangku kepentingan.",
        csrProductBudget:
          "Realisasi anggaran pengendalian mutu dan pengawasan produk sebesar Rp 1.200.000.000.",

        csrBudget: "Realisasi Anggaran",
        csrSupportingDocument: "Dokumen Pendukung",
        csrSupportingDocumentDesc:
          "Unduh laporan keberlanjutan perusahaan untuk informasi lengkap mengenai implementasi program CSR.",
        download: "Unduh",
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
          "PT Andalan Artha Primanusa Tbk. (AAP) berdiri sejak tahun 2018 sebagai kontraktor pertambangan yang berkomitmen menghadirkan standar tertinggi dalam keselamatan, produktivitas, dan keberlanjutan. Dengan pengalaman mendalam di sektor kontraktor pertambangan, AAP menjadi mitra strategis bagi perusahaan tambang yang membutuhkan solusi operasional yang kuat, transparan, dan berorientasi hasil.Kami percaya bahwa keberhasilan proyek tidak hanya diukur dari produksi, tetapi juga dari nilai-nilai yang kami junjung tinggi:",
        overviewPoint1:
          "Integritas – menjalankan operasional dengan kejujuran dan tanggung jawab",
        overviewPoint2:
          "Kepatuhan regulasi – memastikan setiap langkah sesuai aturan dan standar industri",
        overviewPoint3:
          "Tanggung jawab lingkungan – menjaga keberlanjutan sumber daya alam",
        overviewPoint4:
          "Komitmen sosial – berkontribusi positif bagi masyarakat sekitar",

        established: "Didirikan",
        operationalSites: "Lokasi Operasional",
        employees: "Karyawan",
        /* ================= FOOTER MENU ================= */
        footerAbout: "Tentang Kami",
        footerVision: "Visi & Misi",
        footerPhilosophy: "Filosofi Perusahaan",
        footerMilestones: "Milestone",
        footerManagement: "Manajemen",
        footerContactUs: "Hubungi Kami",
        quarterlyReports: "Laporan Triwulanan",
        publicExpose: "Public Expose",
        dividendInformation: "Informasi Dividen",
        auditCommittee: "Komite Audit",
        codeOfConduct: "Kode Etik",
        esgCommitment: "Komitmen ESG",
        pressRelease: "Siaran Pers",
        mediaCoverage: "Liputan Media",
        corporateActions: "Aksi Korporasi",
        businessActivities: "Kegiatan Usaha",
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
        annualReportsMenu: "Laporan Tahunan",
        /* ================= INVESTOR NEWS ================= */
        irLabel: "Hubungan Investor",
        irMainTitle: "Explorasi Elegan,Eksekusi Andal",
        irDate: "23 Februari 2026",

        irNews1: "AAP Raih Kontrak Kerja Penambangan Nikel di Awal Tahun 2026",
        irNews2:
          "Kepercayaan Tambahan Volume Produksi dari Bowheer Eksisting Di Akhir Tahun 2025",
        irNews3:
          "AAP Peroleh Kontak Kerja Penambangan Coking Coal di Juni 2025",
        irNews4: "Menutup Tahun 2024, AAP Memenangkan Tender di Site PTBA ",

        irDetailTitle:
          "AAP RAIH KONTRAK PENAMBANGAN BIJIH NIKEL DI AWAL TAHUN 2026",
        irDetailText:
          "PT Andalan Artha Primanusa memulai 2026 dengan pencapaian strategis: kontrak kerja baru di sektor nikel. Langkah ini menegaskan komitmen perusahaan untuk terus beradaptasi dengan kebutuhan industri mineral yang mendukung transisi energi global.",
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
        businessOverviewTitle: "Kegiatan Usaha Perseroan",
        businessOverviewText:
          "PT Andalan Artha Primanusa Tbk bergerak dalam jasa pertambangan terintegrasi, perdagangan batubara, dan pengembangan energi strategis dengan fokus pada keunggulan operasional dan keberlanjutan.",

        businessSegment1Title: "Jasa Pertambangan",
        businessSegment1Desc:
          "Layanan pengupasan lapisan tanah penutup, penambangan batubara, pengangkutan, dan jasa penunjang tambang di berbagai lokasi operasional di Indonesia.",

        businessSegment2Title: "Perdagangan Batubara",
        businessSegment2Desc:
          "Perdagangan batubara domestik dan internasional yang didukung infrastruktur logistik yang kuat dan kemitraan jangka panjang.",

        businessSegment3Title: "Logistik & Infrastruktur",
        businessSegment3Desc:
          "Pengelolaan jalan hauling, fasilitas pelabuhan, dan armada alat berat untuk memastikan rantai pasok yang efisien.",

        businessSegment4Title: "Pengembangan Energi",
        businessSegment4Desc:
          "Ekspansi strategis ke sektor energi dan mineral, termasuk pengembangan nikel dan peluang energi terbarukan.",

        operationalExcellence: "Keunggulan Operasional",
        operationalExcellenceDesc:
          "Kami berkomitmen pada keselamatan kerja, efisiensi, kepatuhan regulasi, dan pertumbuhan berkelanjutan di seluruh lini usaha.",
        companyProfile: "Profil Perusahaan",
        goodCorporateGovernance: "Tata Kelola Perusahaan",
        sustainability: "Keberlanjutan",
        newsDisclosure: "Berita & Keterbukaan Informasi",

        milestones: "Milestone",
        management: "Manajemen",

        financialStatements: "Laporan Keuangan",
        stockPerformance: "Performa Saham",

        policy: "Kebijakan Keberlanjutan",
        communityDevelopment: "Pengembangan Masyarakat",

        announcement: "Pengumuman",
        presentation: "Presentasi",
        addressLine1: "PT Andalan Artha Primanusa",
        addressLine2: "Jl. Plaju No.11",
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
          "Penandatanganan kontrak dengan PT Bukit Asam Tbk (SBS Project) pada 30 Desember 2024 untuk pengadaan jasa penunjang produksi di Tanjung Enim, Sumatera Selatan, memperkuat keberlanjutan pendapatan dan diversifikasi layanan.",

        milestone4:
          "Pada 1 Desember 2025, AAP menandatangani addendum kontrak dengan PT Bukit Asam Tbk yang mencakup tambahan volume produksi dan jasa angkutan material. Hal ini mencerminkan kepuasan serta kepercayaan berkelanjutan dari pemberi kerja terhadap kinerja AAP.",
        milestone5:
          "Perolehan Letter of Award dari PT Position tertanggal 22 Januari 2026 untuk pekerjaan pengembangan dan operasi penambangan nikel di Desa Maba, Halmahera Timur, Maluku Utara, menandai ekspansi strategis AAP ke sektor nikel.",

        presidentDirector: "Direktur Utama",
        financeDirector: "Direktur Keuangan",
        operationsDirector: "Direktur Operasional",

        commissionerPresident: "Komisaris Utama",
        commissioner: "Komisaris",
        independentCommissioner: "Komisaris Independen",
        operationalLocations: "Lokasi Proyek",
        operationalLocationsDesc:
          "Kami menjalankan operasi pertambangan di beberapa lokasi strategis di Indonesia, termasuk Lahat, Tanjung Enim, Murung Raya, dan Halmahera Timur, dengan fokus pada keselamatan, efisiensi, dan keberlanjutan.",
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
              name: "Site PT Budi Gema Gempita (BGG Project)",
              location: "Lahat, Sumatera Selatan – Indonesia",
            },
            sbs: {
              name: "Site PT Bukit Asam Tbk (SBS Project)",
              location: "Tanjung Enim, Sumatera Selatan – Indonesia",
            },
            dbk: {
              name: "Site PT Daya Bumindo Karunia (DBK Project)",
              location: "Murung Raya, Kalimantan Tengah – Indonesia",
            },
            pos: {
              name: "Site PT Position (POS Project)",
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
