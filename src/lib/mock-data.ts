export const mockStats = {
  totalVisitors: 12847,
  pageViews: 38521,
  contactMessages: 47,
  newLeads: 12,
  conversionRate: 3.8,
  bounceRate: 42.1,
};

export const mockTrafficData = [
  { date: "Apr 1", visitors: 320, pageViews: 960 },
  { date: "Apr 5", visitors: 410, pageViews: 1230 },
  { date: "Apr 10", visitors: 385, pageViews: 1155 },
  { date: "Apr 15", visitors: 520, pageViews: 1560 },
  { date: "Apr 20", visitors: 480, pageViews: 1440 },
  { date: "Apr 25", visitors: 610, pageViews: 1830 },
  { date: "Apr 28", visitors: 590, pageViews: 1770 },
];

export const mockDeviceData = [
  { name: "Desktop", value: 54, color: "#355486" },
  { name: "Mobile", value: 38, color: "#5EABB3" },
  { name: "Tablet", value: 8, color: "#94a3b8" },
];

export const mockTopPages = [
  { page: "/", views: 9820, label: "Home" },
  { page: "/services", views: 7210, label: "Services" },
  { page: "/about", views: 5430, label: "About Us" },
  { page: "/certifications", views: 3870, label: "Certifications" },
  { page: "/capabilities", views: 3120, label: "Capabilities" },
  { page: "/contact", views: 2870, label: "Contact" },
];

export const mockTrafficSources = [
  { source: "Organic Search", visitors: 5820, percentage: 45.3 },
  { source: "Direct", visitors: 3210, percentage: 25.0 },
  { source: "Referral", visitors: 2140, percentage: 16.6 },
  { source: "Social Media", visitors: 980, percentage: 7.6 },
  { source: "Email", visitors: 697, percentage: 5.4 },
];

export type Service = {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  category: string;
  icon: string;
  order: number;
  isActive: boolean;
  createdAt: string;
};

export const mockServices: Service[] = [
  {
    id: "1",
    title: "Bulk Liquid Storage",
    slug: "bulk-liquid-storage",
    shortDescription: "114,000 m³ capacity across segregated tanks for petroleum and petrochemical products.",
    category: "Storage",
    icon: "Droplets",
    order: 1,
    isActive: true,
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Marine Terminal Operations",
    slug: "marine-terminal-operations",
    shortDescription: "Deep-water jetty capable of handling vessels up to 60,000 DWT at King Fahd Industrial Port.",
    category: "Marine",
    icon: "Anchor",
    order: 2,
    isActive: true,
    createdAt: "2024-01-15",
  },
  {
    id: "3",
    title: "Land-Side Logistics",
    slug: "land-side-logistics",
    shortDescription: "Truck loading/unloading bays, pipeline connections, and rail access for full logistics coverage.",
    category: "Logistics",
    icon: "Truck",
    order: 3,
    isActive: true,
    createdAt: "2024-01-15",
  },
  {
    id: "4",
    title: "Blending & Additivation",
    slug: "blending-additivation",
    shortDescription: "In-tank and in-line blending services for customized product specifications.",
    category: "Processing",
    icon: "Layers",
    order: 4,
    isActive: true,
    createdAt: "2024-02-10",
  },
  {
    id: "5",
    title: "Bonded Storage",
    slug: "bonded-storage",
    shortDescription: "Saudi Arabia's first bonded storage license holder — duty-deferred storage for international trade.",
    category: "Storage",
    icon: "Shield",
    order: 5,
    isActive: false,
    createdAt: "2024-03-01",
  },
];

export type Certification = {
  id: string;
  title: string;
  category: string;
  organization: string;
  scope: string;
  status: "active" | "pending" | "expired";
  order: number;
  isActive: boolean;
  createdAt: string;
};

export const mockCertifications: Certification[] = [
  {
    id: "1",
    title: "ISO 9001:2015",
    category: "International Standards",
    organization: "Bureau Veritas",
    scope: "Quality Management System",
    status: "active",
    order: 1,
    isActive: true,
    createdAt: "2023-06-01",
  },
  {
    id: "2",
    title: "ISO 45001:2018",
    category: "Occupational Safety",
    organization: "Bureau Veritas",
    scope: "Occupational Health & Safety Management",
    status: "active",
    order: 2,
    isActive: true,
    createdAt: "2023-06-01",
  },
  {
    id: "3",
    title: "OCIMF MTMSA",
    category: "International Standards",
    organization: "OCIMF",
    scope: "Marine Terminal Management & Self Assessment",
    status: "active",
    order: 3,
    isActive: true,
    createdAt: "2023-09-15",
  },
  {
    id: "4",
    title: "Saudi Customs Bonded License",
    category: "Saudi Regulatory Approvals",
    organization: "Saudi Customs Authority",
    scope: "Bonded Storage Operations",
    status: "active",
    order: 4,
    isActive: true,
    createdAt: "2022-04-01",
  },
  {
    id: "5",
    title: "MISA Industrial License",
    category: "Saudi Regulatory Approvals",
    organization: "Ministry of Investment (MISA)",
    scope: "Industrial Terminal Operations",
    status: "active",
    order: 5,
    isActive: true,
    createdAt: "2021-11-20",
  },
  {
    id: "6",
    title: "ISO 14001:2015",
    category: "International Standards",
    organization: "Bureau Veritas",
    scope: "Environmental Management System",
    status: "pending",
    order: 6,
    isActive: false,
    createdAt: "2024-04-01",
  },
];

export type Message = {
  id: string;
  fullName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  status: "new" | "read" | "archived";
  createdAt: string;
};

export const mockMessages: Message[] = [
  {
    id: "1",
    fullName: "Ahmed Al-Rashidi",
    email: "a.rashidi@aramco.com",
    company: "Saudi Aramco",
    subject: "Storage Capacity Inquiry",
    message: "We are interested in long-term bulk liquid storage agreements. Please send your commercial proposal and available capacity details.",
    status: "new",
    createdAt: "2026-04-27T09:15:00Z",
  },
  {
    id: "2",
    fullName: "Mohammed Al-Ghamdi",
    email: "m.ghamdi@sabic.com",
    company: "SABIC",
    subject: "Marine Terminal Partnership",
    message: "SABIC is exploring marine logistics partnerships in Yanbu. We would like to schedule a facility tour.",
    status: "new",
    createdAt: "2026-04-26T14:30:00Z",
  },
  {
    id: "3",
    fullName: "Jean-Pierre Dubois",
    email: "jp.dubois@totalenergies.com",
    company: "TotalEnergies",
    subject: "Bonded Storage Requirements",
    message: "We need bonded storage for petrochemical intermediates. What are your current capacity and pricing structures?",
    status: "read",
    createdAt: "2026-04-24T11:00:00Z",
  },
  {
    id: "4",
    fullName: "Fatima Al-Zahrani",
    email: "f.zahrani@petrorabigh.com",
    company: "Petro Rabigh",
    subject: "Blending Services",
    message: "Interested in in-line blending services for fuel products. Can you provide technical specifications?",
    status: "read",
    createdAt: "2026-04-22T16:45:00Z",
  },
  {
    id: "5",
    fullName: "David Chen",
    email: "d.chen@vitol.com",
    company: "Vitol Group",
    subject: "Trading Inquiry",
    message: "Vitol is evaluating storage terminals in Yanbu for crude and refined products trading. Please share your commercial terms.",
    status: "archived",
    createdAt: "2026-04-18T08:20:00Z",
  },
];

export type MediaItem = {
  id: string;
  filename: string;
  url: string;
  type: "image" | "video" | "pdf";
  size: string;
  altText: string;
  tag: string;
  createdAt: string;
};

export const mockMedia: MediaItem[] = [
  {
    id: "1",
    filename: "CurrentFacilityAreial.webp",
    url: "/images/industry/CurrentFacilityAreial.webp",
    type: "image",
    size: "284 KB",
    altText: "PETROTANK facility aerial view",
    tag: "facility",
    createdAt: "2024-01-10",
  },
  {
    id: "2",
    filename: "ShipatBerth_cb8f1ea3.webp",
    url: "/images/industry/ShipatBerth_cb8f1ea3.webp",
    type: "image",
    size: "196 KB",
    altText: "Vessel at berth",
    tag: "marine",
    createdAt: "2024-01-10",
  },
  {
    id: "3",
    filename: "SCADARoom_e40117d5.webp",
    url: "/images/industry/SCADARoom_e40117d5.webp",
    type: "image",
    size: "156 KB",
    altText: "SCADA operations room",
    tag: "operations",
    createdAt: "2024-01-10",
  },
  {
    id: "4",
    filename: "Expansion_cce40571.webp",
    url: "/images/industry/Expansion_cce40571.webp",
    type: "image",
    size: "220 KB",
    altText: "Expansion project",
    tag: "facility",
    createdAt: "2024-02-15",
  },
];

export type SeoPage = {
  pageSlug: string;
  label: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  robotsIndex: boolean;
  robotsFollow: boolean;
  updatedAt: string;
};

export const mockSeoPages: SeoPage[] = [
  {
    pageSlug: "/",
    label: "Home",
    metaTitle: "PETROTANK | Leading Energy Logistics Hub in Yanbu",
    metaDescription: "Saudi Arabia's first bonded storage license holder in Yanbu — 114,000 m³ bulk liquid storage at King Fahd Industrial Port.",
    keywords: "PETROTANK, petroleum storage, Yanbu, energy logistics, bulk liquid",
    robotsIndex: true,
    robotsFollow: true,
    updatedAt: "2026-04-01",
  },
  {
    pageSlug: "/about",
    label: "About Us",
    metaTitle: "About PETROTANK | Our Story & Mission",
    metaDescription: "Learn about PETROTANK's journey as Saudi Arabia's premier petroleum terminal operator since 2009.",
    keywords: "PETROTANK about, Saudi Arabia terminal, petrochemical history",
    robotsIndex: true,
    robotsFollow: true,
    updatedAt: "2026-03-15",
  },
  {
    pageSlug: "/services",
    label: "Services",
    metaTitle: "Services | PETROTANK Bulk Liquid Storage & Marine Operations",
    metaDescription: "Comprehensive energy logistics: bulk liquid storage, marine terminal operations, land-side logistics, and blending services.",
    keywords: "bulk storage services, marine terminal, blending, petroleum logistics",
    robotsIndex: true,
    robotsFollow: true,
    updatedAt: "2026-03-20",
  },
  {
    pageSlug: "/capabilities",
    label: "Capabilities",
    metaTitle: "Capabilities | PETROTANK Infrastructure & Technology",
    metaDescription: "World-class infrastructure including deep-water jetty, SCADA automation, and 114,000 m³ storage tanks.",
    keywords: "PETROTANK capabilities, infrastructure, SCADA, storage tanks",
    robotsIndex: true,
    robotsFollow: true,
    updatedAt: "2026-03-20",
  },
  {
    pageSlug: "/certifications",
    label: "Certifications",
    metaTitle: "Certifications | ISO 9001, OCIMF MTMSA | PETROTANK",
    metaDescription: "PETROTANK holds ISO 9001:2015, ISO 45001, OCIMF MTMSA, and Saudi regulatory certifications.",
    keywords: "ISO 9001, OCIMF MTMSA, certifications, safety standards",
    robotsIndex: true,
    robotsFollow: true,
    updatedAt: "2026-02-28",
  },
  {
    pageSlug: "/contact",
    label: "Contact",
    metaTitle: "Contact PETROTANK | Get in Touch",
    metaDescription: "Contact PETROTANK's team in Yanbu, Saudi Arabia for storage, marine, and logistics inquiries.",
    keywords: "PETROTANK contact, Yanbu Saudi Arabia, inquiry",
    robotsIndex: true,
    robotsFollow: true,
    updatedAt: "2026-02-10",
  },
];

export const mockSiteSettings = {
  siteName: "PETROTANK",
  companyName: "National Petroleum & Petrochemical Tank & Pipeline Co.",
  email: "info@petrotank.com.sa",
  phone: "+966 14 390 7000",
  address: "King Fahd Industrial Port, Yanbu Industrial City, Saudi Arabia",
  businessHours: "Sunday – Thursday: 8:00 AM – 5:00 PM (AST)",
  googleMapEmbed: "https://maps.google.com/maps?q=King+Fahd+Industrial+Port+Yanbu&output=embed",
  socialLinkedIn: "https://linkedin.com/company/petrotank",
  socialTwitter: "",
  footerText: "© 2026 PETROTANK. All rights reserved.",
  defaultSeoTitle: "PETROTANK | National Petroleum & Petrochemical Tank & Pipeline Co.",
  defaultSeoDescription: "Saudi Arabia's first bonded storage license holder in Yanbu. 114,000 m³ bulk liquid storage at King Fahd Industrial Port.",
};
