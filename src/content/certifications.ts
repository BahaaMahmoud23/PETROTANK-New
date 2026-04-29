export type CertCategory = "international" | "saudi" | "safety" | "licenses";

export interface Certification {
  id: string;
  title: string;
  subtitle: string;
  category: CertCategory;
  image: string;
  description: string;
  status?: string;
  isLicense?: boolean;
}

// ── URL-encoded folder paths (double spaces and special chars) ─
const INT = "/images/Certifications/International%20Standards%20and%20%20Marine%20Excellence";
const SAU = "/images/Certifications/Saudi%20Arabian%20Governmental%20and%20%20Regulatory%20Approvals";
const OSH = "/images/Certifications/Occupational%20Safety%20and%20%20Health%20Standards";
// Folder uses right single quotation mark U+2019 → %E2%80%99
const LIC = "/images/Certifications/PetroTank%E2%80%99s%20Key%20Licenses%20and%20Approval";

// Arabic word "صورة" (image) URL-encoded
const S = "%D8%B5%D9%88%D8%B1%D8%A9";

export const certifications: Certification[] = [
  // ── International Standards & Marine Excellence ───────────
  {
    id: "api",
    title: "API",
    subtitle: "American Petroleum Institute",
    category: "international",
    image: `${INT}/${S}1.png`,
    description:
      "Compliance with API recommended practices for the design, construction, operation, and maintenance of petroleum storage and handling facilities.",
    status: "Compliant",
  },
  {
    id: "ocimf",
    title: "OCIMF",
    subtitle: "Oil Companies International Marine Forum",
    category: "international",
    image: `${INT}/${S}2.png`,
    description:
      "Member of the Oil Companies International Marine Forum, ensuring marine terminal operations meet the highest global safety and environmental standards.",
    status: "Active",
  },
  {
    id: "iso9001",
    title: "ISO 9001:2015",
    subtitle: "International Organization for Standardization",
    category: "international",
    image: `${INT}/${S}3.png`,
    description:
      "Quality Management System certification supporting consistent service delivery, customer satisfaction, and continuous improvement across all terminal operations.",
    status: "Certified",
  },
  {
    id: "mtmsa",
    title: "MTMSA",
    subtitle: "Marine Terminal Management & Self Assessment",
    category: "international",
    image: `${INT}/${S}4.png`,
    description:
      "Marine Terminal Management and Self Assessment — the internationally recognized framework for safe and reliable marine terminal operations.",
    status: "Active",
  },
  {
    id: "iso45001",
    title: "ISO 45001",
    subtitle: "International Organization for Standardization",
    category: "international",
    image: `${INT}/${S}5.png`,
    description:
      "Occupational Health & Safety Management System standard supporting safe operations, risk management, and systematic safety performance improvement.",
    status: "Certified",
  },

  // ── Saudi Governmental & Regulatory Approvals ─────────────
  {
    id: "moe",
    title: "Ministry of Energy",
    subtitle: "وزارة الطاقة",
    category: "saudi",
    image: `${SAU}/${S}6.png`,
    description:
      "Saudi regulatory approval supporting PETROTANK's licensed energy logistics operations at King Fahd Industrial Port, Yanbu.",
    status: "Approved",
  },
  {
    id: "ncec",
    title: "National Center for Environmental Compliance",
    subtitle: "المركز الوطني للرقابة على الالتزام البيئي",
    category: "saudi",
    image: `${SAU}/${S}7.png`,
    description:
      "Environmental compliance certification covering hazardous material handling, spill prevention, and regulatory environmental standards.",
    status: "Approved",
  },
  {
    id: "saso",
    title: "SASO",
    subtitle: "Saudi Standards, Metrology & Quality Organization",
    category: "saudi",
    image: `${SAU}/${S}8.png`,
    description:
      "Conformity with Saudi standards and quality regulations governing the handling and storage of petroleum and petrochemical products.",
    status: "Approved",
  },
  {
    id: "zatca",
    title: "ZATCA",
    subtitle: "Zakat, Tax and Customs Authority",
    category: "saudi",
    image: `${SAU}/${S}9.png`,
    description:
      "Customs bonded storage license — the first in Yanbu — enabling duty-free product storage and streamlined trade logistics operations.",
    status: "Licensed",
  },
  {
    id: "rcjy",
    title: "Royal Commission for Jubail & Yanbu",
    subtitle: "الهيئة الملكية للجبيل وينبع",
    category: "saudi",
    image: `${SAU}/${S}10.png`,
    description:
      "Approval from the Royal Commission governing industrial operations within the Yanbu industrial zone and King Fahd Industrial Port.",
    status: "Approved",
  },
  {
    id: "mawani",
    title: "MAWANI",
    subtitle: "Saudi Ports Authority — الهيئة العامة للموانئ",
    category: "saudi",
    image: `${SAU}/${S}11.png`,
    description:
      "Saudi Ports Authority approval related to port and marine logistics operations at King Fahd Industrial Port, Yanbu.",
    status: "Approved",
  },
  {
    id: "mhrsd",
    title: "Ministry of Human Resources",
    subtitle: "وزارة الموارد البشرية والتنمية الاجتماعية",
    category: "saudi",
    image: `${SAU}/${S}12.png`,
    description:
      "Labor compliance approval covering workforce rights, employment standards, and social development obligations across all PETROTANK operations.",
    status: "Approved",
  },
  {
    id: "civil-defense",
    title: "Civil Defense",
    subtitle: "الدفاع المدني",
    category: "saudi",
    image: `${SAU}/${S}13.png`,
    description:
      "Safety and emergency compliance approval supporting secure terminal operations, fire safety, and hazardous materials handling.",
    status: "Approved",
  },

  // ── Occupational Safety & Health Standards ────────────────
  {
    id: "nebosh",
    title: "NEBOSH",
    subtitle: "National Examination Board in Occupational Safety and Health",
    category: "safety",
    image: `${OSH}/${S}14.png`,
    description:
      "International General Certificate in Occupational Health and Safety — awarded to PETROTANK safety professionals for advanced health and safety competency.",
    status: "Certified",
  },
  {
    id: "osha",
    title: "OSHA",
    subtitle: "Occupational Safety and Health Administration",
    category: "safety",
    image: `${OSH}/${S}15.png`,
    description:
      "OSHA certification covering industrial safety standards, hazard identification, and workplace safety management aligned with international benchmarks.",
    status: "Certified",
  },
  {
    id: "iosh",
    title: "IOSH",
    subtitle: "Institution of Occupational Safety and Health",
    category: "safety",
    image: `${OSH}/${S}16.png`,
    description:
      "Working Safely certification providing a foundation of safety awareness and hazard management throughout the organization for all personnel.",
    status: "Certified",
  },
  {
    id: "ilo",
    title: "ILO",
    subtitle: "International Labour Organization",
    category: "safety",
    image: `${OSH}/${S}17.png`,
    description:
      "Compliance with ILO conventions on workplace safety, worker rights, and occupational health — upholding international labor standards.",
    status: "Compliant",
  },

  // ── PetroTank's Key Licenses & Approval ──────────────────
  {
    id: "license-1",
    title: "PetroTank License",
    subtitle: "Operational License & Approval",
    category: "licenses",
    image: `${LIC}/${S}18.png`,
    description:
      "Official license and regulatory approval authorizing PETROTANK's petroleum and petrochemical storage and terminal operations at King Fahd Industrial Port.",
    isLicense: true,
  },
  {
    id: "license-2",
    title: "PetroTank Approval",
    subtitle: "Key Regulatory Approval",
    category: "licenses",
    image: `${LIC}/${S}19.png`,
    description:
      "Regulatory authorization supporting PETROTANK's continued operations, affirming compliance with Saudi industrial and port authority requirements.",
    isLicense: true,
  },
];

export const certCategories = [
  {
    id: "international" as CertCategory,
    label: "International Standards & Marine Excellence",
    shortLabel: "International",
  },
  {
    id: "saudi" as CertCategory,
    label: "Saudi Governmental & Regulatory Approvals",
    shortLabel: "Saudi Approvals",
  },
  {
    id: "safety" as CertCategory,
    label: "Occupational Safety & Health Standards",
    shortLabel: "Safety",
  },
  {
    id: "licenses" as CertCategory,
    label: "PetroTank’s Key Licenses & Approval",
    shortLabel: "Licenses",
  },
];
