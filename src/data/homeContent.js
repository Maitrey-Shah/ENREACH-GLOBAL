export const SECTION_IDS = ["home", "products", "about", "locations", "contact"];

export const HERO_IMAGES = [
  "/assets/hero-carousel/hero-banner-aluminium-zorba-v2.jpg",
  "/assets/hero-carousel/hero-banner-copper-wire-v2.jpg",
  "/assets/hero-carousel/hero-banner-aluminium-ubc-v2.jpg",
  "/assets/hero-carousel/hero-banner-copper-transformers-v2.jpg",
];

export const PRODUCT_GROUPS = [
  {
    id: "aluminium",
    label: "Aluminium Scrap",
    products: [
      {
        id: "6063-extrusion",
        title: "6063 Extrusion",
        image: "/assets/pdf-products/pdf-image-01.jpg",
        description:
          "Clean 6063 aluminium extrusion scrap from straight extruded sections and hollow profiles.",
        identification: [
          "Straight extruded sections",
          "Silver colour",
          "Lightweight hollow profiles",
          "Commonly from window and door frames",
        ],
        quality: ["No steel screws", "No rubber", "No plastic", "No paint"],
      },
      {
        id: "6061-structural-aluminum",
        title: "6061 Structural Aluminum",
        image: "/assets/pdf-products/pdf-image-11.jpg",
        description:
          "Structural aluminium scrap grade commonly identified by heavier extruded or fabricated aluminium sections.",
        identification: ["Structural sections", "Silver aluminium colour", "Heavier profiles"],
      },
      {
        id: "taint-tabor",
        title: "Taint/Tabor - Mixed Sheet Aluminum",
        image: "/assets/pdf-products/pdf-image-03.jpg",
        description:
          "Mixed sheet aluminium scrap prepared from sheet offcuts and light gauge aluminium material.",
        identification: ["Mixed sheet aluminium", "Flat and light gauge pieces", "Silver or painted sheet"],
      },
      {
        id: "cast-aluminum",
        title: "Cast Aluminum",
        image: "/assets/pdf-products/pdf-image-09.jpg",
        description:
          "Cast aluminium scrap from moulded aluminium components and recovered cast parts.",
        identification: ["Moulded cast pieces", "Thicker broken components", "Silver-grey aluminium surface"],
      },
      {
        id: "aluminum-wheels",
        title: "Aluminum Wheels",
        image: "/assets/pdf-products/pdf-image-12.jpg",
        description:
          "Aluminium wheel scrap sourced from used alloy wheels for downstream recycling.",
        identification: ["Used alloy wheels", "Round wheel form", "Automotive aluminium source"],
      },
      {
        id: "ubc",
        title: "Used Beverage Cans (UBC)",
        image: "/assets/pdf-products/pdf-image-16.jpg",
        description:
          "Used beverage can scrap supplied as compacted or loose aluminium can material.",
        identification: ["Used beverage cans", "Compressed cans or bales", "Printed aluminium can bodies"],
      },
      {
        id: "ec-aluminum-wire",
        title: "EC Aluminum Wire",
        image: "/assets/pdf-products/pdf-image-19.jpg",
        description:
          "Electrical conductor aluminium wire scrap, typically seen as clean silver wire bundles.",
        identification: ["Silver aluminium wire", "Cable or conductor form", "Lightweight wire bundles"],
      },
      {
        id: "aluminum-foil",
        title: "Aluminum Foil",
        image: "/assets/pdf-products/pdf-image-22.jpg",
        description:
          "Aluminium foil scrap identified by thin, flexible foil material and compacted foil fractions.",
        identification: ["Thin foil material", "Flexible aluminium sheets", "Lightweight compacted pieces"],
      },
      {
        id: "aluminum-turnings",
        title: "Aluminum Turnings",
        image: "/assets/pdf-products/pdf-image-25.jpg",
        description:
          "Aluminium machining turnings and shavings generated from cutting or machining operations.",
        identification: ["Machining shavings", "Small curled turnings", "Silver aluminium chips"],
      },
      {
        id: "zorba",
        title: "Zorba",
        image: "/assets/pdf-products/pdf-image-23.jpg",
        description:
          "Mixed non-ferrous shredder scrap containing aluminium-rich recovered fractions.",
        identification: ["Mixed non-ferrous pieces", "Shredded scrap fraction", "Aluminium-rich recovered material"],
      },
      {
        id: "zurik-scrap",
        title: "Zurik Scrap",
        image: "/assets/pdf-products/pdf-image-24.jpg",
        description:
          "Mixed shredded non-ferrous scrap fraction with stainless and non-ferrous recovered material.",
        identification: ["Mixed shredded pieces", "Non-ferrous recovery fraction", "Metallic mixed scrap"],
      },
    ],
  },
  {
    id: "copper",
    label: "Copper Scrap",
    products: [
      {
        id: "millberry",
        title: "Millberry - Bare Bright Copper Wire",
        image: "/assets/pdf-products/pdf-image-27.jpg",
        description:
          "Clean, uncoated bare bright copper wire identified by its bright copper colour and clean wire form.",
        identification: ["Clean bare copper wire", "Uncoated surface", "Bright copper colour"],
        quality: ["No insulation", "No coating", "No solder"],
      },
      {
        id: "birch-cliff",
        title: "Birch / Cliff - No. 1 Copper",
        image: "/assets/pdf-products/pdf-image-28.jpg",
        description:
          "No. 1 copper scrap grade supplied as clean copper wire or copper pieces suitable for trading.",
        identification: ["Clean copper wire or pieces", "Copper colour", "Prepared copper scrap"],
      },
      {
        id: "candy",
        title: "Candy - No. 2 Copper",
        image: "/assets/pdf-products/pdf-image-31.jpg",
        description:
          "No. 2 copper scrap grade identified by recovered copper pieces and mixed copper material.",
        identification: ["Recovered copper scrap", "Copper pieces or pipe sections", "Mixed copper appearance"],
      },
      {
        id: "berry",
        title: "Berry - Copper Wire",
        image: "/assets/pdf-products/pdf-image-35.jpg",
        description:
          "Copper wire scrap supplied in bundled or loose wire form for industrial recycling.",
        identification: ["Copper wire bundles", "Loose wire form", "Reddish copper colour"],
      },
      {
        id: "copper-chops",
        title: "Copper Chops",
        image: "/assets/pdf-products/pdf-image-39.jpg",
        description:
          "Chopped copper granules recovered from processed copper wire streams.",
        identification: ["Small copper chops", "Granular copper pieces", "Processed wire recovery material"],
      },
      {
        id: "copper-radiators",
        title: "Copper Radiators",
        image: "/assets/pdf-products/pdf-image-41.jpg",
        description:
          "Copper radiator scrap identified by radiator cores and copper-bearing heat exchange parts.",
        identification: ["Radiator cores", "Heat exchange parts", "Copper-bearing assemblies"],
      },
      {
        id: "copper-motors",
        title: "Copper Motors",
        image: "/assets/pdf-products/pdf-image-44.jpg",
        description:
          "Electric motor scrap containing copper windings and recovered motor assemblies.",
        identification: ["Electric motors", "Copper windings", "Motor assemblies"],
      },
      {
        id: "copper-transformers",
        title: "Copper Transformers",
        image: "/assets/pdf-products/pdf-image-48.jpg",
        description:
          "Transformer scrap identified by transformer units and copper-bearing electrical components.",
        identification: ["Transformer units", "Copper-bearing components", "Electrical recovery source"],
      },
      {
        id: "tinned-copper",
        title: "Tinned Copper",
        image: "/assets/pdf-products/pdf-image-50.jpg",
        description:
          "Copper scrap with a tinned silver-coloured coating over copper wire or cable material.",
        identification: ["Silver tinned coating", "Copper wire beneath coating", "Cable or wire scrap form"],
      },
    ],
  },
];

export const LOCATION_CARDS = [
  {
    title: "Global Sourcing",
    text: "We collaborate with suppliers worldwide to maintain a strong and consistent scrap procurement network.",
  },
  {
    title: "Export Coordination",
    text: "We handle documentation, compliance, and shipment planning for seamless international trade.",
  },
  {
    title: "Industrial Buyers",
    text: "We supply refineries, smelters, and processors with reliable bulk scrap materials.",
  },
];

export const CONTACT_FEATURES = [
  "Aluminium and Copper supply",
  "Global sourcing support",
  "Fast quotation & shipment coordination",
];

export const CONTACT_FORM_TYPES = [
  { id: "buyer", label: "Buyer" },
  { id: "seller", label: "Seller" },
  { id: "enterprise", label: "Enterprise" },
];

export const CONTACT_FORM_FIELDS = {
  buyer: [
    {
      name: "materialRequired",
      label: "Material Required",
      placeholder: "Material Required",
      type: "select",
      options: ["Aluminium Scrap", "Copper Scrap"],
    },
    {
      name: "quantity",
      label: "Quantity (tons)",
      placeholder: "Quantity (tons)",
      type: "number",
      min: "0",
    },
    {
      name: "location",
      label: "Location",
      placeholder: "Location",
      type: "text",
    },
  ],
  seller: [
    {
      name: "scrapType",
      label: "Scrap Type",
      placeholder: "Scrap Type",
      type: "text",
    },
    {
      name: "availableQuantity",
      label: "Available Quantity",
      placeholder: "Available Quantity",
      type: "number",
      min: "0",
    },
    {
      name: "pickupLocation",
      label: "Pickup Location",
      placeholder: "Pickup Location",
      type: "text",
    },
  ],
  enterprise: [
    {
      name: "companyName",
      label: "Company Name",
      placeholder: "Company Name",
      type: "text",
    },
    {
      name: "businessType",
      label: "Business Type",
      placeholder: "Business Type",
      type: "select",
      options: ["Buyer", "Seller", "Both"],
    },
    {
      name: "monthlyVolume",
      label: "Monthly Volume",
      placeholder: "Monthly Volume",
      type: "text",
    },
    {
      name: "countriesOfOperation",
      label: "Countries of Operation",
      placeholder: "Countries of Operation",
      type: "text",
    },
  ],
};

export const ABOUT_STATS = [
  ["12+", "Active trade relationships"],
  ["2", "Core metal categories"],
  ["Global", "Sourcing and buyer network"],
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    title: "Disciplined Material Grading",
    text: "We focus on clearer sorting, practical quality expectations, and commercially accurate scrap category alignment.",
  },
  {
    title: "Export-Ready Coordination",
    text: "Documentation, shipment planning, and buyer communication are handled with the consistency industrial trade demands.",
  },
  {
    title: "Responsive Commercial Support",
    text: "We help buyers and suppliers move from enquiry to execution with faster quoting and clearer deal communication.",
  },
];

export const COMPANY_STATISTICS = [
  {
    value: "12+",
    label: "Trade relationships supported",
  },
  {
    value: "2",
    label: "Core metal categories managed",
  },
  {
    value: "Global",
    label: "Sourcing and buyer market reach",
  },
  {
    value: "End-to-End",
    label: "Coordination from enquiry to shipment",
  },
];

export const INDUSTRY_EXPERTISE = [
  "Secondary Metal Manufacturers",
  "Refineries & Smelters",
  "Foundries & Engineering Buyers",
  "Scrap Processors",
  "Export-Focused Industrial Traders",
];

export const GLOBAL_PRESENCE_INDICATORS = [
  "North America trade coordination",
  "Cross-border documentation support",
  "Industrial buyer sourcing alignment",
];

export const SERVICE_OFFERINGS = [
  {
    title: "Global Scrap Sourcing",
    text: "Material sourcing support across aluminium and copper categories.",
  },
  {
    title: "Export Documentation",
    text: "Shipment paperwork and compliance coordination built for cross-border industrial trade.",
  },
  {
    title: "Industrial Buyer Matching",
    text: "Commercial alignment between feedstock quality and downstream manufacturing requirements.",
  },
];

export const INDUSTRY_FOCUS = [
  {
    title: "Refineries & Smelters",
    text: "Buyers seeking dependable bulk scrap inputs with clearer sorting expectations.",
  },
  {
    title: "Recycling Processors",
    text: "Processors focused on recovery efficiency and lower contamination risk.",
  },
  {
    title: "Engineering Manufacturers",
    text: "Manufacturers sourcing copper scrap for controlled secondary production.",
  },
];
