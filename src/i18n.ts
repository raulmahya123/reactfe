import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        footer: {
          addressLine1: "Prudential Tower, 17th Floor",
          addressLine2: "Jl. Jendral Sudirman Kav 79, Jakarta 12910",
          addressCountry: "Indonesia",

          about: "About Us",
          project: "Projects",
          investor: "Investor Relations",
          governance: "Corporate Governance",
          sustainability: "Sustainability",
          media: "Media",
          contact: "Contact",

          phone: "Phone",
          fax: "Fax",
          rights: "All Rights Reserved",

          fraudWarning:
            "⚠️ Beware of fraud conducted under the name of PT Andalan Artha Primanusa Tbk. The Company never requests any form of payment outside official communication channels.",
        },
        csr: {
          title: "Corporate Social Responsibility",
          subtitle: "Corporate Social Responsibility",

          paragraph1:
            "Corporate Social Responsibility (“CSR”) reflects the Company’s commitment to actively contribute to improving community welfare and preserving the environment in areas surrounding its operational sites.",

          paragraph2:
            "One of the initiatives carried out was assistance in repairing drainage infrastructure in Muara Village affected by flooding. This support aimed to accelerate the restoration of public access and sustain economic and social activities.",

          paragraph3:
            "In addition, the Company provided support for religious activities through mosque renovation assistance and the construction of a prayer facility for the surrounding community.",

          focusTitle: "CSR Program Focus",
          focus1: "Post-Disaster Infrastructure Recovery",
          focus2: "Religious Facility Support",
          focus3: "Community Social Engagement Strengthening",
          focus4: "Sustainable Social Development",

          gallery1: "Drainage Repair in Muara Village",
          gallery2: "Mosque Renovation Assistance",
          gallery3: "Prayer Facility Construction",
        },
        ownership: {
          title: "Share Ownership Structure",
          total: "Total Ownership",
        },
        proyek: {
          title: "Business Activities",
          description:
            "PT Andalan Artha Primanusa Tbk operates various mining projects in strategic regions across Indonesia with professional standards and strong commitment to safety.",
          operationalProject: "Operational Project",
          bggDesc:
            "Coal mining operations focusing on production efficiency and sustainability management.",
          sbsDesc:
            "Strategic operational partnership with optimized hauling systems and mine management.",
          posDesc:
            "Mining infrastructure development project with high safety standards.",
          dbkDesc:
            "Integrated mining operations management with modern monitoring systems.",
        },
        support: {
          title: "Supporting Professionals",
          accountant: "Public Accountant",
          bae: "Share Registrar",
        },
        struktur: {
          title: "Organizational Structure",
          gms: "General Meeting of Shareholders",
          boc: "Board of Commissioners",
          audit: "Audit Committee",
          cs: "Corporate Secretary",
          bod: "Board of Directors",
          internalAudit: "Internal Audit",
          gmOperational: "General Manager Operational",

          op1: "Operational Supervisor",
          op2: "Operational Manager",
          op3: "Plant Manager",
          op4: "Asset Manager",
          op5: "Supply Chain Manager",
          op6: "SHE Manager",
          op7: "HRGA Manager",
          op8: "Finance & Accounting Manager",
        },
        strategy: {
          title: "Strategy & Competitive Advantages",
          description:
            "The Company implements strategies focused on strengthening fundamentals, business diversification, and enhancing operational competitiveness to maintain performance stability and capture growth opportunities.",

          s1Title: "Fundamental Strengthening & Operational Efficiency",
          s1Desc:
            "Optimizing heavy equipment utilization, cost control, and structured maintenance planning to maintain productivity and margins.",

          s2Title: "Customer & Commodity Diversification",
          s2Desc:
            "Expansion into nickel commodity to broaden customer base and strengthen revenue structure.",

          s3Title: "Human Capital Development",
          s3Desc:
            "Enhancing workforce technical and managerial capabilities with a safety-driven culture.",

          advantagesTitle: "Competitive Advantages",

          a1Title: "Multi-Commodity Capability",
          a1Desc: "Experienced in coal and nickel mining contracting services.",

          a2Title: "Track Record & Safety Standards",
          a2Desc:
            "Consistent production achievement with strong safety implementation.",

          a3Title: "Integrated Operational Services",
          a3Desc: "Providing overburden removal, mining, and hauling services.",

          a4Title: "Competitive Cost Structure",
          a4Desc:
            "Efficient cost control enabling competitive service pricing.",

          a5Title: "Revenue Diversification",
          a5Desc: "Reducing dependency on a single employer.",

          a6Title: "Compliance & Governance",
          a6Desc: "Adherence to regulatory and safety standards.",
        },
        resources: {
          title: "OUR RESOURCES",
          description:
            "The Company’s operational excellence is supported by competent human resources, modern equipment, and integrated management systems designed to ensure efficiency, safety, and sustainability.",

          humanTitle: "Professional Human Resources",
          humanDesc:
            "Supported by experienced and certified personnel with strong commitment to safety and operational standards.",

          equipmentTitle: "Modern Equipment & Infrastructure",
          equipmentDesc:
            "Utilizing modern mining fleet and integrated maintenance systems to ensure maximum productivity.",

          systemTitle: "Integrated Operational Systems",
          systemDesc:
            "Technology-based monitoring systems to enhance operational control and strategic decision-making accuracy.",

          stat1: "Professional Workforce",
          stat2: "Heavy Equipment Units",
          stat3: "Zero Fatality Commitment",
        },
        expose: {
          title: "Public Expose",
          description:
            "Public Expose information and materials of PT Andalan Artha Primanusa as part of transparency to investors and stakeholders.",
          download: "Download",
          view: "View",
          title2025: "Public Expose 2025",
          desc2025:
            "Presentation of company performance and business strategy to investors and the public.",
          title2024: "Public Expose 2024",
          desc2024:
            "Annual presentation on operational achievements and expansion plans.",
          title2023: "Public Expose 2023",
          desc2023:
            "Public presentation regarding financial performance and corporate governance.",
        },
        dividend: {
          title: "Dividend Information",
          description:
            "Dividend distribution information of PT Andalan Artha Primanusa as a commitment to shareholder value.",
          highlightTitle: "Total Dividend per Share 2024",
          paidOn: "Paid on",
          history: "Dividend History",
          year: "Year",
          amount: "Amount",
          paymentDate: "Payment Date",
          status: "Status",
          paid: "Paid",
        },
        stock: {
          title: "Stock Performance",
          description:
            "Stock performance information of PT Andalan Artha Primanusa as a reference for investors and shareholders.",
          marketCap: "Market Cap",
          volume: "Volume",
          high52: "52W High",
          low52: "52W Low",
          chartPlaceholder: "Stock price chart will be displayed here.",
        },
        quarterly: {
          title: "Quarterly Reports",
          description:
            "Quarterly financial performance reports of PT Andalan Artha Primanusa as a form of transparency to shareholders and investors.",
          latest: "Latest Quarter",
          interim: "Interim Financial Statement",
          downloadReport: "Download Report",
          download: "Download",
          q3Title: "Interim Financial Statement Q3 2025",
          q2Title: "Interim Financial Statement Q2 2025",
          q1Title: "Interim Financial Statement Q1 2025",
          q4Title: "Interim Financial Statement Q4 2024",
        },
        material: {
          title: "Material Information",
          description:
            "Material information and public disclosures of PT Andalan Artha Primanusa in compliance with regulations and transparency obligations to investors.",
          latest: "Latest Disclosure",
          download: "Download",
          downloadDocument: "Download Document",
          disclosure: "Disclosure",
          corporateAction: "Corporate Action",
          report: "Report",
          item1Title: "Disclosure of New Contract Signing",
          item2Title: "Changes in Board of Directors and Commissioners",
          item3Title: "Report on IPO Fund Utilization",
        },
        annual: {
          title: "Annual Reports",
          description:
            "The Company's annual reports as a form of transparency and accountability to stakeholders.",
          download: "Download",
          report2024Title: "Annual Report 2024",
          report2024Desc:
            "Annual report of PT Andalan Artha Primanusa for fiscal year 2024.",
          report2023Title: "Annual Report 2023",
          report2023Desc:
            "Annual report of PT Andalan Artha Primanusa for fiscal year 2023.",
          report2022Title: "Annual Report 2022",
          report2022Desc:
            "Annual report of PT Andalan Artha Primanusa for fiscal year 2022.",
        },
        corporateAction: "Corporate Action",

        corporateActionDesc:
          "Corporate Actions are strategic measures undertaken by the Company to enhance corporate value and provide benefits to shareholders and stakeholders.",

        dividendTitle: "Dividend Distribution",
        dividendDesc:
          "The Company may distribute dividends to shareholders based on the resolution of the General Meeting of Shareholders and financial performance.",

        rightsIssueTitle: "Rights Issue",
        rightsIssueDesc:
          "The Company may increase its capital through the issuance of new shares in accordance with capital market regulations.",

        mergerTitle: "Merger & Acquisition",
        mergerDesc:
          "The Company may conduct mergers or acquisitions to strengthen its business structure and expand market share.",
        gmsTitle: "General Meeting of Shareholders (GMS)",

        gmsDesc:
          "The General Meeting of Shareholders (GMS) is the highest governing body within the Company's corporate governance structure, holding authority not granted to the Board of Directors or the Board of Commissioners in accordance with the Articles of Association and applicable laws.",

        gmsTypesTitle: "Types of GMS",
        gmsTypesDesc:
          "The GMS consists of the Annual GMS and Extraordinary GMS. The Annual GMS is held at least once a year, while the Extraordinary GMS may be convened as needed by the Company.",

        gmsImplementationTitle: "Implementation of GMS",
        gmsImplementationDesc:
          "The GMS is conducted transparently and accountably in compliance with capital market regulations and applicable laws.",

        gmsAuthorityTitle: "Authority of GMS",
        gmsAuthorityDesc:
          "The GMS has authority to approve annual reports, appoint external auditors, and appoint or dismiss members of the Board of Directors and Board of Commissioners.",
        whistleblowingTitle: "Whistleblowing System Policy",

        whistleblowingDesc:
          "The Whistleblowing System is a mechanism provided by the Company for employees and stakeholders to report alleged violations of laws, ethics, or company regulations in a safe and confidential manner.",

        reportChannel: "Reporting Channel",

        reportConfidential:
          "The identity of the whistleblower will be kept confidential and protected from any form of retaliation.",

        reportProcedure: "Reporting Procedure",

        wbsStep1:
          "The whistleblower submits a written report through the official reporting channel provided by the Company.",

        wbsStep2:
          "The report will be verified and reviewed independently by the authorized team.",

        wbsStep3:
          "An investigation will be conducted if sufficient indications of violation are found.",
        governance: "Good Corporate Governance",

        governanceHeroDesc:
          "The Company is committed to consistently implementing Good Corporate Governance principles to enhance corporate value, maintain shareholders’ trust, and protect the interests of all stakeholders.",
        wbsStep4:
          "The investigation results will be reported to Management and/or the Board of Commissioners for further action in accordance with applicable regulations.",
        /* ================= CORPORATE ACTIONS ================= */
        corporateActionsSection: {
          title: "Corporate Actions",
          subtitle:
            "Information regarding the Company's latest corporate actions as part of its transparency and commitment to shareholders.",
          viewDetails: "View Details",

          status: {
            approved: "Approved",
            completed: "Completed",
          },

          items: {
            dividend2025: {
              title: "Dividend Distribution 2025",
              date: "March 2025",
              status: "approved",
              description:
                "The Company approved dividend distribution as part of its commitment to shareholders and enhancement of investment value.",
            },

            shareBuyback: {
              title: "Share Buyback Program",
              date: "January 2025",
              status: "completed",
              description:
                "Share buyback program implemented to maintain stock price stability and strengthen investor confidence.",
            },

            rightsIssue: {
              title: "Rights Issue",
              date: "September 2024",
              status: "completed",
              description:
                "Capital increase through rights issue to support business expansion and strategic project development.",
            },
          },
        },
        /* ================= MEDIA COVERAGE ================= */
        mediaCoverageSection: {
          title: "Media Coverage",
          subtitle:
            "Publications and media coverage highlighting the Company's developments and achievements at national and international levels.",
          readMore: "Read More",

          items: {
            nationalMagazine: {
              title: "Featured in National Business Magazine",
              source: "Business Today Indonesia",
              date: "February 2026",
              description:
                "National media coverage highlighting the Company’s ESG achievements and strategic project expansion in 2026.",
              image:
                "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200",
            },

            investorConfidence: {
              title: "Mining Expansion Gains Investor Confidence",
              source: "Indonesia Energy Review",
              date: "January 2026",
              description:
                "The Company is recognized for maintaining operational stability and sustainable revenue growth.",
              image:
                "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200",
            },

            sustainabilityHighlight: {
              title: "Sustainability Commitment Highlighted",
              source: "Global ESG Report",
              date: "December 2025",
              description:
                "The Company’s commitment to sustainable mining practices receives international recognition.",
              image:
                "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200",
            },
          },
        },
        /* ================= PRESS RELEASE ================= */
        press: {
          title: "Press Release",
          subtitle:
            "Official information and latest company announcements regarding business developments and strategic initiatives.",
          readMore: "Read Full Release",
          close: "Close",

          items: {
            expansion: {
              date: "March 2026",
              category: "Expansion",
              title: "PT Andalan Artha Primanusa Announces Strategic Expansion",
              description:
                "The Company announces a strategic expansion to strengthen its industry position and sustainable growth.",
              content: `
PT Andalan Artha Primanusa Tbk announces a strategic expansion as part of its long-term corporate strategy.

The expansion includes the development of new operational projects, asset optimization, and enhancement of operational capacity to meet growing market demand.

Management remains committed to implementing strong corporate governance principles while delivering sustainable value creation for shareholders and stakeholders.
      `,
            },

            financial: {
              date: "February 2026",
              category: "Financial",
              title: "Company Reports Strong Financial Performance FY2025",
              description:
                "Revenue and net profit recorded significant growth compared to the previous year.",
              content: `
The Company reported solid financial performance for fiscal year 2025, with significant growth in revenue and net profit.

This performance was supported by operational efficiency improvements, stable commodity prices, and disciplined cost management.

The Company remains optimistic about maintaining sustainable growth momentum in the coming years.
      `,
            },

            esg: {
              date: "January 2026",
              category: "ESG",
              title: "Commitment to ESG and Sustainable Mining Practices",
              description:
                "Strengthening ESG implementation across all operational activities.",
              content: `
The Company continues to strengthen its Environmental, Social, and Governance (ESG) implementation across all operational areas.

Key initiatives include responsible waste management, land reclamation, community development programs, and transparent governance practices.

The Company believes that long-term business sustainability must align with environmental responsibility and social contribution.
      `,
            },
          },
        },
        csrInformation: "CSR Information",
        supportingProfessionals: "Supporting Professionals",
        perusahaanKami: "Our Company",
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
        boardOfDirectorsDesc:
          "The Board of Directors is responsible for managing and overseeing the Company's operations in alignment with its vision, mission, corporate strategy, and long-term sustainability objectives.",

        presidentDirector: "President Director",
        presidentDirectorDesc:
          "As President Director, he leads the Company’s strategic direction, operational excellence, and value creation initiatives to ensure sustainable growth.",

        financeDirector: "Finance Director",
        operationsDirector: "Operations Director",
        csrProduct: "Product Responsibility",
        prospectusTitle: "Prospectus",

        prospectusDesc:
          "The Prospectus is an official document containing comprehensive information about the Company, including business activities, financial condition, risk factors, and the planned use of proceeds from the public offering.",

        prospectusOverviewTitle: "Company Overview",
        prospectusOverviewDesc:
          "Contains information regarding the company profile, organizational structure, business activities, and financial performance.",

        prospectusUseOfFundsTitle: "Use of Proceeds",
        prospectusUseOfFundsDesc:
          "Explains the planned allocation of funds from the public offering to support business expansion and capital strengthening.",

        prospectusDownloadTitle: "Download Prospectus Document",
        downloadProspectus: "Download Prospectus",
        csrProductDesc:
          "The Company ensures product quality meets industry standards, maintains secure distribution processes, and provides transparent information to stakeholders.",
        csrProductBudget:
          "The realized quality control and product supervision budget amounts to IDR 1,200,000,000.",

        csrBudget: "Budget Realization",
        csrSupportingDocument: "Supporting Document",
        csrSupportingDocumentDesc:
          "Download the Company's sustainability report for comprehensive information regarding CSR implementation.",
        download: "Download",
        prospectus: "Prospectus",
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
        corporateCommittees: "Corporate Committees",
        corporateCommitteesDesc:
          "The Corporate Committees are established to support the Board of Commissioners and the Board of Directors in overseeing governance, risk management, and compliance practices.",

        auditCommittee: "Audit Committee",
        nominationCommittee: "Nomination & Remuneration Committee",
        riskCommittee: "Risk Management Committee",
        operationalExcellence: "Operational Excellence",
        operationalExcellenceDesc:
          "We are committed to safety, efficiency, regulatory compliance, and sustainable growth across all operations.",
        quarterlyReports: "RUPS",
        publicExpose: "Public Expose",
        dividendInformation: "Dividend Information",
        boardOfDirectors: "Board of Directors",
        financial: {
          title: "Financial Statements",
          description:
            "Financial reports of PT Andalan Artha Primanusa as a form of transparency and accountability to shareholders and stakeholders.",
          latest: "Latest Audited Report",
          downloadReport: "Download Report",
          annual: "Annual",
          quarterly: "Quarterly",
          download: "Download",
          annual2024Title: "Audited Financial Statement 2024",
          annual2024Desc:
            "Annual financial report audited by a Public Accounting Firm.",
          annual2023Title: "Audited Financial Statement 2023",
          annual2023Desc:
            "Annual financial report audited by an independent auditor.",
          q3Title: "Interim Financial Statement Q3 2025",
          q2Title: "Interim Financial Statement Q2 2025",
          q1Title: "Interim Financial Statement Q1 2025",
        },
        codeOfEthics: "Code of Ethics",
        codeOfEthicsDesc:
          "The Company’s Code of Ethics serves as a guideline for the Board of Directors, Board of Commissioners, and all employees in conducting business activities in accordance with good corporate governance principles.",

        integrityTitle: "Integrity",
        integrityDesc:
          "Upholding honesty, transparency, and accountability in every business decision and action.",

        complianceTitle: "Compliance",
        complianceDesc:
          "Complying with all applicable laws, capital market regulations, and internal company policies.",

        professionalismTitle: "Professionalism",
        professionalismDesc:
          "Acting professionally and objectively while avoiding conflicts of interest in all corporate activities.",
        boardOfCommissioners: "Board of Commissioners",
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
        about: "About Us",
        investor: "Investor Relations",
        news: "News & Disclosure",
        strukturOrganisasi: "Organization Structure",
        contact: "Contact",
        welcome: "Reliable Energy Solutions",
        budgetDocument: "Articles of Association",
        budgetDocumentDesc:
          "The Articles of Association serve as the legal foundation governing the Company's structure, governance framework, and operational activities.",
        effectiveDate: "Effective Date",
        strukturKepemilikan: "Shareholding Structure",
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
        annualReport: "Annual & Sustainability Reports",
        financialInfo: "Financial Statements",
        generalMeeting: "General Meeting of Shareholders",
        stockInfo: "Stock Information",
        dividendPolicy: "Dividend Policy",
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
        csrHero: {
          title: "Social Commitment & Sustainability",
          introduction:
            "PT Andalan Artha Primanusa Tbk believes that sustainable business growth must go hand in hand with meaningful contributions to society and the environment. Through its Corporate Social and Environmental Responsibility programs, the Company is committed to creating sustainable added value, strengthening relationships with surrounding communities, and supporting inclusive and responsible social development.",
        },
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
        ProyekActivities: "Business Activities",
        media: "Media",
        newsPressTitle: "News & Press Release",
        newsLabel: "News",
        viewAll: "View All",

        newsItem1: "Public Expose 2025",
        newsItem2: "Annual Report 2024 Released",
        newsItem3: "Corporate Action Announcement",
        newsItem4: "Strategic Expansion Plan 2025",
        StrategiKeunggulan: "Strategi & Keunggulan",
        SumberDaya: "Our Resources",
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
        management: "Board of Management",
        governanceInformationDesc:
          "The Company is committed to implementing Good Corporate Governance (GCG) principles consistently and sustainably in accordance with applicable regulations.",
        governanceDocumentList: "Corporate Governance Documents",
        boardManual: "Board of Directors and Board of Commissioners Charter",
        corporateSecretaryAppointment:
          "Appointment, dismissal, and/or vacancy of the Corporate Secretary",
        internalAuditCharter: "Internal Audit Charter",
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
          csr: {
          title: "Tanggung Jawab Sosial Perusahaan",
          subtitle: "Corporate Social Responsibility",

          paragraph1:
            "Tanggung Jawab Sosial Perusahaan (“CSR”) merupakan wujud komitmen Perseroan untuk berperan aktif dalam meningkatkan kualitas hidup masyarakat serta menjaga kelestarian lingkungan di sekitar wilayah operasional Perseroan.",

          paragraph2:
            "Salah satu kegiatan yang dilaksanakan adalah bantuan perbaikan gorong-gorong di Desa Muara yang terdampak bencana banjir. Bantuan ini bertujuan untuk mempercepat pemulihan akses utama masyarakat dan mendukung keberlanjutan aktivitas ekonomi serta sosial.",

          paragraph3:
            "Selain itu, Perseroan juga memberikan dukungan terhadap kegiatan keagamaan melalui bantuan perbaikan masjid dan pembangunan mushola sebagai sarana ibadah masyarakat sekitar wilayah operasional.",

          focusTitle: "Fokus Program CSR",
          focus1: "Pemulihan Infrastruktur Pasca Bencana",
          focus2: "Dukungan Fasilitas Keagamaan",
          focus3: "Penguatan Hubungan Sosial Masyarakat",
          focus4: "Pembangunan Sosial Berkelanjutan",

          gallery1: "Perbaikan Gorong-gorong Desa Muara",
          gallery2: "Bantuan Renovasi Masjid",
          gallery3: "Pembangunan Mushola",
        },
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
        about: "Tentang Kami",
        investor: "Hubungan Investor",
        governance: "Tata Kelola Perusahaan",
        governanceHeroDesc:
          "Perseroan berkomitmen untuk menerapkan prinsip Tata Kelola Perusahaan yang Baik (Good Corporate Governance) secara konsisten dan berkelanjutan guna meningkatkan nilai perusahaan, menjaga kepercayaan pemegang saham, serta melindungi kepentingan seluruh pemangku kepentingan.",
        perusahaanKami: "Perusahaan Kami",
        news: "Media",
        contact: "Kontak",
        welcome: "Solusi Energi Terpercaya",
        SumberDaya: "Sumber Daya kami",
        gmsTitle: "Rapat Umum Pemegang Saham (RUPS)",

        gmsDesc:
          "Rapat Umum Pemegang Saham (RUPS) merupakan organ tertinggi dalam struktur tata kelola Perseroan yang memiliki kewenangan yang tidak diberikan kepada Direksi maupun Dewan Komisaris sesuai dengan Anggaran Dasar dan peraturan perundang-undangan yang berlaku.",

        gmsTypesTitle: "Jenis RUPS",
        gmsTypesDesc:
          "RUPS terdiri dari RUPS Tahunan dan RUPS Luar Biasa. RUPS Tahunan diselenggarakan paling sedikit satu kali dalam setahun, sedangkan RUPS Luar Biasa dapat diadakan sesuai kebutuhan Perseroan.",

        gmsImplementationTitle: "Pelaksanaan RUPS",
        gmsImplementationDesc:
          "Pelaksanaan RUPS dilakukan secara transparan dan akuntabel dengan memperhatikan ketentuan pasar modal dan peraturan yang berlaku.",

        gmsAuthorityTitle: "Kewenangan RUPS",
        gmsAuthorityDesc:
          "RUPS memiliki kewenangan antara lain mengesahkan laporan tahunan, menunjuk auditor eksternal, mengangkat dan memberhentikan Direksi serta Dewan Komisaris.",
        /* ================= COMPANY PROFILE ================= */
        companyOverview: "Sekilas Perusahaan",
        visionMission: "Visi & Misi",
        organizationStructure: "Struktur Organisasi",
        shareholdingStructure: "Struktur Kepemilikan Saham",
        boardOfDirectors: "Pedoman kerja Direksi & Dewan Komisaris",
        boardOfCommissioners: "Dewan Komisaris",
        committees: "Komite",
        corporateSecretary: "Sekretaris Perseroan",

        /* ================= INVESTOR (POJK Pasal 6 ayat 2) ================= */
        prospectus: "Prospektus Penawaran Umum",
        annualReport: "Laporan Tahunan & Keberlanjutan",
        financialInfo: "Laporan Keuangan",
        generalMeeting: "Rapat Umum Pemegang Saham",
        stockInfo: "Informasi Saham",
        dividendPolicy: "Kebijakan Dividen",
        corporateAction: "Aksi Korporasi",
        support: {
          title: "Profesional Pendukung",
          accountant: "Akuntan Publik",
          bae: "Biro Administrasi Efek (BAE)",
        },
        materialInformation: "Keterbukaan Informasi / Fakta Material",
        governanceInformation: "Informasi Tata Kelola Perusahaan",
        governanceInformationDesc:
          "Perseroan berkomitmen menerapkan prinsip Tata Kelola Perusahaan yang Baik (Good Corporate Governance) secara konsisten dan berkelanjutan sesuai dengan ketentuan peraturan yang berlaku.",
        governanceDocumentList: "Daftar Dokumen Tata Kelola",
        ownership: {
          title: "Struktur Kepemilikan Saham",
          total: "Total Kepemilikan",
        },
        struktur: {
          title: "Struktur Organisasi",
          gms: "Rapat Umum Pemegang Saham",
          boc: "Dewan Komisaris",
          audit: "Komite Audit",
          cs: "Sekretaris Perusahaan",
          bod: "Direksi",
          internalAudit: "Internal Audit",
          gmOperational: "General Manager Operational",

          op1: "Penanggung Jawab Operational",
          op2: "Operational Manager",
          op3: "Plant Manager",
          op4: "Asset Manager",
          op5: "Supply Chain Manager",
          op6: "SHE Manager",
          op7: "HRGA Manager",
          op8: "Finance & Accounting Manager",
        },
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
          "Kebijakan mekanisme sistem pelaporan pelanggaran",
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
        quarterly: {
          title: "Laporan Triwulanan",
          description:
            "Laporan kinerja keuangan triwulanan PT Andalan Artha Primanusa sebagai bentuk transparansi kepada pemegang saham dan investor.",
          latest: "Kuartal Terbaru",
          interim: "Laporan Keuangan Interim",
          downloadReport: "Unduh Laporan",
          download: "Unduh",
          q3Title: "Laporan Keuangan Interim Q3 2025",
          q2Title: "Laporan Keuangan Interim Q2 2025",
          q1Title: "Laporan Keuangan Interim Q1 2025",
          q4Title: "Laporan Keuangan Interim Q4 2024",
        },
        footer: {
          addressLine1: "Prudential Tower, 17th Floor",
          addressLine2: "Jl. Jendral Sudirman Kav 79, Jakarta 12910",
          addressCountry: "Indonesia",

          about: "Tentang Kami",
          project: "Proyek",
          investor: "Hubungan Investor",
          governance: "Tata Kelola Perusahaan",
          sustainability: "Keberlanjutan",
          media: "Media",
          contact: "Kontak",

          phone: "Telepon",
          fax: "Fax",
          rights: "Seluruh Hak Dilindungi",

          fraudWarning:
            "⚠️ Hati-hati terhadap penipuan yang mengatasnamakan PT Andalan Artha Primanusa Tbk. Perusahaan tidak pernah meminta pembayaran dalam bentuk apapun di luar komunikasi resmi.",
        },
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
        boardOfDirectorsDesc:
          "Direksi bertanggung jawab atas pengelolaan dan pengawasan operasional Perseroan sesuai dengan visi, misi, strategi perusahaan, serta tujuan keberlanjutan jangka panjang.",

        presidentDirector: "Direktur Utama",
        presidentDirectorDesc:
          "Sebagai Direktur Utama, beliau memimpin arah strategis Perseroan, memastikan keunggulan operasional, serta menciptakan nilai jangka panjang yang berkelanjutan.",

        financeDirector: "Direktur Keuangan",
        operationsDirector: "Direktur Operasional",
        investorAccessSubtitle:
          "Menyediakan informasi yang transparan dan tepat waktu bagi pemegang saham.",
        annualReportBtn: "Laporan Tahunan",
        financialReportBtn: "Laporan Keuangan",
        gmsBtn: "RUPS",
        disclosureBtn: "Keterbukaan Informasi",
        stockBtn: "Informasi Saham",
        newsTitle: "Media",
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
        ProyekActivities: "Kegiatan Usaha",
        established: "Didirikan",
        operationalSites: "Lokasi Operasional",
        employees: "Karyawan",
        /* ================= FOOTER MENU ================= */
        footerAbout: "Tentang Kami",
        footerVision: "Visi & Misi",
        footerPhilosophy: "Filosofi Perusahaan",
        footerMilestones: "Tonggak Pencapaian",
        footerManagement: "Manajemen",
        footerContactUs: "Hubungi Kami",
        quarterlyReports: "RUPS",
        corporateCommittees: "Komite Perseroan",
        corporateCommitteesDesc:
          "Komite Perseroan dibentuk untuk membantu Dewan Komisaris dan Direksi dalam menjalankan fungsi pengawasan, manajemen risiko, serta penerapan tata kelola perusahaan yang baik.",
        codeOfEthicsDesc:
          "Kode Etik Perseroan merupakan pedoman perilaku bagi Direksi, Dewan Komisaris, dan seluruh karyawan dalam menjalankan kegiatan usaha sesuai dengan prinsip tata kelola perusahaan yang baik.",

        integrityTitle: "Integritas",
        integrityDesc:
          "Menjunjung tinggi kejujuran, transparansi, dan tanggung jawab dalam setiap pengambilan keputusan dan tindakan bisnis.",

        complianceTitle: "Kepatuhan",
        complianceDesc:
          "Mematuhi seluruh peraturan perundang-undangan, ketentuan pasar modal, serta kebijakan internal Perseroan.",
        prospectusTitle: "Prospektus",

        prospectusDesc:
          "Prospektus merupakan dokumen resmi yang memuat informasi lengkap mengenai Perseroan, termasuk kegiatan usaha, kondisi keuangan, risiko usaha, serta rencana penggunaan dana hasil penawaran umum.",

        prospectusOverviewTitle: "Ringkasan Perseroan",
        prospectusOverviewDesc:
          "Memuat informasi mengenai profil perusahaan, struktur organisasi, kegiatan usaha, serta kinerja keuangan.",

        prospectusUseOfFundsTitle: "Penggunaan Dana",
        prospectusUseOfFundsDesc:
          "Menjelaskan rencana penggunaan dana hasil penawaran umum untuk mendukung ekspansi usaha dan penguatan struktur permodalan.",

        prospectusDownloadTitle: "Unduh Dokumen Prospektus",
        downloadProspectus: "Download Prospektus",
        corporateActionDesc:
          "Aksi Korporasi merupakan tindakan strategis yang dilakukan Perseroan untuk meningkatkan nilai perusahaan serta memberikan manfaat bagi pemegang saham dan pemangku kepentingan lainnya.",

        dividendTitle: "Pembagian Dividen",
        dividend: {
          title: "Informasi Dividen",
          description:
            "Informasi pembagian dividen PT Andalan Artha Primanusa kepada pemegang saham sebagai bentuk komitmen terhadap nilai pemegang saham.",
          highlightTitle: "Total Dividen per Saham 2024",
          paidOn: "Dibayarkan pada",
          history: "Riwayat Dividen",
          year: "Tahun",
          amount: "Jumlah",
          paymentDate: "Tanggal Pembayaran",
          status: "Status",
          paid: "Dibayarkan",
        },
        dividendDesc:
          "Perseroan dapat membagikan dividen kepada pemegang saham berdasarkan keputusan RUPS dan kinerja keuangan Perseroan.",
        material: {
          title: "Informasi Material",
          description:
            "Informasi material dan keterbukaan informasi PT Andalan Artha Primanusa sebagai bentuk kepatuhan terhadap regulasi dan transparansi kepada investor.",
          latest: "Keterbukaan Terbaru",
          download: "Unduh",
          downloadDocument: "Unduh Dokumen",
          disclosure: "Keterbukaan Informasi",
          corporateAction: "Aksi Korporasi",
          report: "Laporan",
          item1Title: "Keterbukaan Informasi Penandatanganan Kontrak Baru",
          item2Title: "Perubahan Susunan Direksi dan Komisaris",
          item3Title: "Laporan Realisasi Penggunaan Dana IPO",
        },
        rightsIssueTitle: "Penawaran Umum Terbatas (Right Issue)",
        rightsIssueDesc:
          "Perseroan dapat melakukan penambahan modal melalui penerbitan saham baru sesuai dengan ketentuan pasar modal.",
        proyek: {
          title: "Kegiatan Usaha",
          description:
            "PT Andalan Artha Primanusa Tbk menjalankan berbagai proyek operasional pertambangan di wilayah strategis Indonesia dengan standar profesional dan komitmen tinggi terhadap keselamatan kerja.",
          operationalProject: "Proyek Operasional",
          bggDesc:
            "Operasional pertambangan batubara dengan fokus pada efisiensi produksi dan manajemen keberlanjutan.",
          sbsDesc:
            "Kerja sama operasional strategis dengan optimalisasi sistem hauling dan manajemen tambang.",
          posDesc:
            "Proyek pengembangan infrastruktur pertambangan dengan standar keselamatan tinggi.",
          dbkDesc:
            "Pengelolaan operasional tambang terintegrasi dengan sistem monitoring modern.",
        },
        mergerTitle: "Merger & Akuisisi",
        mergerDesc:
          "Perseroan dapat melakukan penggabungan usaha atau akuisisi untuk memperkuat struktur bisnis dan memperluas pangsa pasar.",
        professionalismTitle: "Profesionalisme",
        professionalismDesc:
          "Bekerja secara profesional, objektif, dan menghindari benturan kepentingan dalam setiap aktivitas perusahaan.",
        riskCommittee: "Komite Manajemen Risiko",
        publicExpose: "Paparan Publik",
        dividendInformation: "Informasi Dividen",
        codeOfConduct: "Kode Etik",
        esgCommitment: "Komitmen ESG",
        pressRelease: "Siaran Pers",
        mediaCoverage: "Liputan Media",
        corporateActions: "Aksi Korporasi",
        businessActivities: "Kegiatan Usaha",
        footerInvestor: "Hubungan Investor",
        footerFinancial: "Laporan Keuangan",
        footerAnnual: "Laporan Tahunan",
        footerStock: "Informasi Saham",
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
        supportingProfessionals: "Profesional Pendukung",
        footerNews: "Berita & Siaran Pers",
        annualReportsMenu: "Laporan Tahunan",
        stock: {
          title: "Kinerja Saham",
          description:
            "Informasi kinerja saham PT Andalan Artha Primanusa sebagai referensi bagi investor dan pemegang saham.",
          marketCap: "Kapitalisasi Pasar",
          volume: "Volume",
          high52: "Tertinggi 52 Minggu",
          low52: "Terendah 52 Minggu",
          chartPlaceholder: "Grafik harga saham akan ditampilkan di sini.",
        },
        /* ================= INVESTOR NEWS ================= */
        irLabel: "Hubungan Investor",
        irMainTitle: "Explorasi Elegan,Eksekusi Andal",
        irDate: "23 Februari 2026",

        /* ================= LIPUTAN MEDIA ================= */
        mediaCoverageSection: {
          title: "Liputan Media",
          subtitle:
            "Publikasi dan liputan media terkait perkembangan serta pencapaian Perseroan di tingkat nasional maupun internasional.",
          readMore: "Baca Selengkapnya",

          items: {
            nationalMagazine: {
              title: "Tampil di Majalah Bisnis Nasional",
              source: "Business Today Indonesia",
              date: "Februari 2026",
              description:
                "Liputan media nasional mengenai pencapaian ESG Perseroan serta ekspansi proyek strategis di tahun 2026.",
              image:
                "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200",
            },

            investorConfidence: {
              title: "Ekspansi Tambang Tingkatkan Kepercayaan Investor",
              source: "Indonesia Energy Review",
              date: "Januari 2026",
              description:
                "Perseroan dinilai berhasil menjaga stabilitas operasional dan pertumbuhan pendapatan secara berkelanjutan.",
              image:
                "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200",
            },

            sustainabilityHighlight: {
              title: "Komitmen Keberlanjutan Mendapat Sorotan Internasional",
              source: "Global ESG Report",
              date: "Desember 2025",
              description:
                "Komitmen Perseroan terhadap praktik pertambangan berkelanjutan mendapatkan apresiasi internasional.",
              image:
                "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200",
            },
          },
        },
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
        strukturKepemilikan: "Struktur Kepemilikan Saham",
        businessSegment4Desc:
          "Ekspansi strategis ke sektor energi dan mineral, termasuk pengembangan nikel dan peluang energi terbarukan.",

        operationalExcellence: "Keunggulan Operasional",
        operationalExcellenceDesc:
          "Kami berkomitmen pada keselamatan kerja, efisiensi, kepatuhan regulasi, dan pertumbuhan berkelanjutan di seluruh lini usaha.",
        companyProfile: "Perusahaan Kami",
        goodCorporateGovernance: "Tata Kelola Perusahaan",
        sustainability: "Keberlanjutan",
        newsDisclosure: "Media",

        milestones: "Tonggak Pencapaian",
        management: "Susunan Pengurus",
        financial: {
          title: "Laporan Keuangan",
          description:
            "Laporan keuangan PT Andalan Artha Primanusa sebagai bentuk transparansi dan akuntabilitas kepada pemegang saham dan pemangku kepentingan.",
          latest: "Laporan Audit Terbaru",
          downloadReport: "Unduh Laporan",
          annual: "Tahunan",
          quarterly: "Triwulanan",
          download: "Unduh",
          annual2024Title: "Laporan Keuangan Audit 2024",
          annual2024Desc:
            "Laporan keuangan tahunan yang telah diaudit oleh Kantor Akuntan Publik.",
          annual2023Title: "Laporan Keuangan Audit 2023",
          annual2023Desc:
            "Laporan keuangan tahunan yang telah diaudit oleh auditor independen.",
          q3Title: "Laporan Keuangan Interim Q3 2025",
          q2Title: "Laporan Keuangan Interim Q2 2025",
          q1Title: "Laporan Keuangan Interim Q1 2025",
        },
        resources: {
          title: "SUMBER DAYA KAMI",
          description:
            "Keunggulan operasional Perseroan didukung oleh kombinasi sumber daya manusia yang kompeten, peralatan modern, serta sistem manajemen terintegrasi yang dirancang untuk menjamin efisiensi, keselamatan, dan keberlanjutan dalam setiap aktivitas pertambangan.",

          humanTitle: "Sumber Daya Manusia Profesional",
          humanDesc:
            "Didukung oleh tenaga kerja berpengalaman dan bersertifikasi dengan komitmen tinggi terhadap keselamatan dan standar operasional.",

          equipmentTitle: "Peralatan & Infrastruktur Modern",
          equipmentDesc:
            "Menggunakan armada dan peralatan pertambangan modern dengan sistem pemeliharaan terintegrasi untuk memastikan produktivitas maksimal.",

          systemTitle: "Sistem Operasional Terintegrasi",
          systemDesc:
            "Penerapan sistem monitoring berbasis teknologi untuk meningkatkan kontrol operasional dan akurasi pengambilan keputusan.",

          stat1: "Tenaga Kerja Profesional",
          stat2: "Unit Alat Berat",
          stat3: "Komitmen Zero Fatality",
        },
        annual: {
          title: "Laporan Tahunan",
          description:
            "Laporan tahunan perusahaan sebagai bentuk transparansi dan akuntabilitas kepada para pemangku kepentingan.",
          download: "Unduh",
          report2024Title: "Laporan Tahunan 2024",
          report2024Desc:
            "Laporan tahunan PT Andalan Artha Primanusa tahun buku 2024.",
          report2023Title: "Laporan Tahunan 2023",
          report2023Desc:
            "Laporan tahunan PT Andalan Artha Primanusa tahun buku 2023.",
          report2022Title: "Laporan Tahunan 2022",
          report2022Desc:
            "Laporan tahunan PT Andalan Artha Primanusa tahun buku 2022.",
        },
        financialStatements: "Laporan Keuangan",
        stockPerformance: "Informasi Saham",
        expose: {
          title: "Public Expose",
          description:
            "Informasi dan materi Public Expose PT Andalan Artha Primanusa sebagai bagian dari keterbukaan informasi kepada investor dan pemangku kepentingan.",
          download: "Unduh",
          view: "Lihat",
          title2025: "Public Expose 2025",
          desc2025:
            "Pemaparan kinerja perusahaan dan strategi bisnis kepada investor dan publik.",
          title2024: "Public Expose 2024",
          desc2024:
            "Presentasi tahunan mengenai pencapaian operasional dan rencana ekspansi.",
          title2023: "Public Expose 2023",
          desc2023:
            "Paparan publik terkait kinerja keuangan dan tata kelola perusahaan.",
        },
        policy: "Kebijakan Keberlanjutan",
        communityDevelopment: "Pengembangan Masyarakat",
        boardOfDirectorss: "Direksi",
        announcement: "Pengumuman",
        presentation: "Presentasi",
        addressLine1: "PT Andalan Artha Primanusa",
        addressLine2: "Jl. Plaju No.11",
        addressCountry: "Jakarta Pusat 10230 DKI Jakarta – Indonesia",
        telephone: "Telepon +62 21 6669 2917 | Fax: +62 21 6669 2918",
        allRightsReserved: "Seluruh Hak Cipta Dilindungi.",
        whistleblowingTitle: "Kebijakan Mekanisme Sistem Pelaporan Pelanggaran",

        whistleblowingDesc:
          "Sistem Pelaporan Pelanggaran (Whistleblowing System) merupakan mekanisme yang disediakan Perseroan bagi karyawan dan pemangku kepentingan untuk melaporkan dugaan pelanggaran hukum, etika, atau peraturan perusahaan secara aman dan rahasia.",

        reportChannel: "Saluran Pelaporan",

        reportConfidential:
          "Identitas pelapor akan dijaga kerahasiaannya dan dilindungi dari segala bentuk tekanan atau tindakan balasan.",

        reportProcedure: "Prosedur Pelaporan",

        wbsStep1:
          "Pelapor menyampaikan laporan secara tertulis melalui saluran resmi yang telah disediakan Perseroan.",

        wbsStep2:
          "Laporan akan diverifikasi dan dikaji oleh tim yang berwenang secara independen.",

        wbsStep3:
          "Dilakukan investigasi apabila ditemukan indikasi pelanggaran yang cukup.",

        wbsStep4:
          "Hasil investigasi dilaporkan kepada manajemen dan/atau Dewan Komisaris untuk ditindaklanjuti sesuai ketentuan yang berlaku.",
        csrHero: {
          title: "Komitmen Sosial & Keberlanjutan",
          introduction:
            "PT Andalan Artha Primanusa Tbk meyakini bahwa pertumbuhan usaha yang berkelanjutan harus berjalan seiring dengan kontribusi nyata terhadap masyarakat dan lingkungan. Melalui program Tanggung Jawab Sosial dan Lingkungan, Perseroan berkomitmen untuk menciptakan nilai tambah yang berkelanjutan, memperkuat hubungan dengan masyarakat sekitar, serta mendukung pembangunan sosial yang inklusif dan bertanggung jawab.",
        },
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
        /* ================= SIARAN PERS ================= */
      
        press: {
          title: "Siaran Pers",
          subtitle:
            "Informasi resmi dan pengumuman terbaru Perseroan terkait perkembangan usaha dan inisiatif strategis.",
          readMore: "Baca Selengkapnya",
          close: "Tutup",

          items: {
            expansion: {
              date: "Maret 2026",
              category: "Ekspansi",
              title: "PT Andalan Artha Primanusa Umumkan Ekspansi Strategis",
              description:
                "Perseroan mengumumkan langkah ekspansi strategis untuk memperkuat posisi industri dan pertumbuhan berkelanjutan.",
              content: `
PT Andalan Artha Primanusa Tbk mengumumkan langkah ekspansi strategis sebagai bagian dari strategi jangka panjang Perseroan.

Ekspansi ini mencakup pengembangan proyek operasional baru, optimalisasi aset, serta peningkatan kapasitas produksi guna menjawab permintaan pasar yang terus meningkat.

Manajemen berkomitmen untuk terus menerapkan prinsip tata kelola perusahaan yang baik serta menciptakan nilai berkelanjutan bagi pemegang saham dan seluruh pemangku kepentingan.
      `,
            },

            financial: {
              date: "Februari 2026",
              category: "Keuangan",
              title: "Kinerja Keuangan Tahun Buku 2025 Tumbuh Signifikan",
              description:
                "Pendapatan dan laba bersih mengalami pertumbuhan signifikan dibandingkan tahun sebelumnya.",
              content: `
Perseroan mencatatkan kinerja keuangan yang solid pada tahun buku 2025 dengan pertumbuhan signifikan pada pendapatan dan laba bersih.

Pencapaian ini didukung oleh peningkatan efisiensi operasional, stabilitas harga komoditas, serta pengelolaan biaya yang disiplin.

Perseroan optimis dapat mempertahankan momentum pertumbuhan yang berkelanjutan pada tahun-tahun mendatang.
      `,
            },

            esg: {
              date: "Januari 2026",
              category: "ESG",
              title:
                "Komitmen terhadap ESG dan Praktik Pertambangan Berkelanjutan",
              description:
                "Memperkuat implementasi ESG dalam seluruh aktivitas operasional.",
              content: `
Perseroan terus memperkuat penerapan prinsip Environmental, Social, and Governance (ESG) dalam seluruh kegiatan operasional.

Inisiatif utama meliputi pengelolaan limbah yang bertanggung jawab, reklamasi lahan, program pemberdayaan masyarakat, serta tata kelola yang transparan dan akuntabel.

Perseroan meyakini bahwa keberlanjutan usaha harus berjalan seiring dengan tanggung jawab lingkungan dan kontribusi sosial.
      `,
            },
          },
        },
        strategy: {
          title: "Strategi & Keunggulan",
          description:
            "Perseroan menerapkan strategi yang berfokus pada penguatan fundamental, diversifikasi usaha, serta peningkatan daya saing operasional guna menjaga stabilitas kinerja dan menangkap peluang pertumbuhan industri.",

          s1Title: "Penguatan Fundamental & Efisiensi Operasional",
          s1Desc:
            "Optimalisasi utilisasi alat berat, pengendalian biaya, serta pemeliharaan terstruktur untuk menjaga produktivitas dan margin usaha.",

          s2Title: "Diversifikasi Pelanggan dan Komoditas",
          s2Desc:
            "Ekspansi ke komoditas nikel sebagai langkah strategis memperluas basis pelanggan dan memperkuat struktur pendapatan.",

          s3Title: "Pengembangan Sumber Daya Manusia",
          s3Desc:
            "Peningkatan kapabilitas teknis dan manajerial tenaga kerja dengan budaya kerja berbasis keselamatan dan kinerja.",

          advantagesTitle: "Keunggulan Kompetitif",

          a1Title: "Kapabilitas Multi-Komoditas",
          a1Desc:
            "Berpengalaman dalam jasa kontraktor pertambangan batu bara dan nikel.",

          a2Title: "Rekam Jejak & Standar Keselamatan",
          a2Desc:
            "Pencapaian target produksi dengan standar keselamatan konsisten.",

          a3Title: "Layanan Operasional Terintegrasi",
          a3Desc:
            "Layanan overburden removal, penambangan, dan pengangkutan terintegrasi.",

          a4Title: "Struktur Biaya Kompetitif",
          a4Desc:
            "Pengendalian biaya yang memungkinkan penawaran harga jasa bersaing.",

          a5Title: "Diversifikasi Pendapatan",
          a5Desc: "Mengurangi ketergantungan pada satu pemberi kerja.",

          a6Title: "Kepatuhan & Tata Kelola",
          a6Desc: "Kepatuhan terhadap regulasi dan standar keselamatan kerja.",
        },
        commissionerPresident: "Komisaris Utama",
        commissioner: "Komisaris",
        independentCommissioner: "Komisaris Independen",
        operationalLocations: "Lokasi Proyek",
        strukturOrganisasi: "Struktur Organisasi",
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
