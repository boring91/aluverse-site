import type { ImageMetadata } from "astro";

import { productImages } from "../assets/images";

export type ProductCategory = "windows" | "doors";

export type ProductSpec = {
    label: string;
    value: string;
};

export type Product = {
    slug: string;
    category: ProductCategory;
    title: string;
    summary: string;
    metaTitle: string;
    metaDescription: string;
    cardImage: ImageMetadata;
    heroImage: ImageMetadata;
    imageAlt: string;
    detailDescription: string;
    features: string[];
    specs: ProductSpec[];
    related: string[];
};

export const company = {
    name: "Aluverse",
    tagline:
        "Sydney's premier custom aluminium doors and windows specialist. Over a decade of quality craftsmanship and superior service.",
    phoneDisplay: "0403 422 401",
    phoneHref: "tel:+61403422401",
    emailDisplay: "Info@aluverse.com.au",
    emailHref: "mailto:Info@aluverse.com.au",
    hours: "6:00 AM - 9:00 PM, 7 Days a Week",
    shortHours: "6:00 AM - 9:00 PM",
    serviceArea: "Sydney & Surrounding Areas",
    location: "Sydney, NSW",
    socials: [
        {
            id: "hipages",
            label: "hipages",
            subtitle: "View our profile",
            href: "https://hipages.com.au/connect/aluverse",
        },
        {
            id: "facebook",
            label: "Facebook",
            subtitle: "Follow our page",
            href: "https://www.facebook.com/profile.php?id=61588227004293",
        },
    ],
} as const;

export const stats = [
    { target: 1000, label: "Projects Completed" },
    { target: 10, label: "Years Experience" },
    { target: 100, label: "Australian Standards" },
    { target: 7, label: "Days a Week Service" },
] as const;

export const testimonials = [
    {
        quote: "Aluverse transformed our home with stunning bi-fold doors. The quality of workmanship is exceptional, and the team was professional from start to finish.",
        author: "James & Sarah Mitchell",
        location: "Bondi, Sydney",
    },
    {
        quote: "We had all the windows replaced in our commercial office. The double glazing has made an incredible difference to noise and temperature.",
        author: "David Chen",
        location: "Parramatta, Sydney",
    },
    {
        quote: "Fantastic experience from quote to completion. The security screens look amazing and we feel so much safer. Above and beyond.",
        author: "Maria Gonzalez",
        location: "Sutherland Shire, Sydney",
    },
] as const;

export const products: Product[] = [
    {
        slug: "sliding-windows",
        category: "windows",
        title: "Sliding Windows",
        summary:
            "Smooth horizontal sliding panels that glide effortlessly along tracks. Perfect for maximising ventilation and natural light.",
        metaTitle: "Sliding Windows - Aluverse | Sydney",
        metaDescription:
            "Premium aluminium sliding windows for Sydney homes. Smooth horizontal operation, maximum ventilation and natural light. Free quotes from Aluverse.",
        cardImage: productImages.slidingWindows.card,
        heroImage: productImages.slidingWindows.hero,
        imageAlt: "Sliding windows",
        detailDescription:
            "Sliding windows offer smooth horizontal operation along precision-engineered tracks. Their streamlined design maximises ventilation and natural light while maintaining clean sightlines. Ideal for bedrooms, living areas, and kitchens where ease of use and unobstructed views are paramount.",
        features: [
            "Easy single-hand operation",
            "Maximum ventilation and natural light",
            "Low-profile tracks for clean aesthetics",
            "Weather-sealed for Sydney's climate",
            "Available in single or double glazing",
        ],
        specs: [
            { label: "Frame Material", value: "Aluminium" },
            { label: "Glazing", value: "Single or Double" },
            { label: "Max Width", value: "3600mm" },
            { label: "Max Height", value: "2400mm" },
            { label: "Operation", value: "Horizontal Sliding" },
            { label: "Colours", value: "Full Powder Coat Range" },
        ],
        related: ["awning-windows", "casement-windows", "double-hung-windows"],
    },
    {
        slug: "awning-windows",
        category: "windows",
        title: "Awning Windows",
        summary:
            "Hinged at the top, awning windows push outward from the bottom, allowing ventilation even during light rain.",
        metaTitle: "Awning Windows - Aluverse | Sydney",
        metaDescription:
            "Premium aluminium awning windows for Sydney homes. Ventilation even during rain with top-hinged outward design. Free quotes from Aluverse.",
        cardImage: productImages.awningWindows.card,
        heroImage: productImages.awningWindows.hero,
        imageAlt: "Awning windows",
        detailDescription:
            "Awning windows are hinged at the top and push outward from the bottom, creating a canopy effect that allows fresh air to flow even during light rain. They're a favourite for Sydney homes, offering excellent weather protection without sacrificing ventilation.",
        features: [
            "Ventilation during rain",
            "Excellent security when open",
            "Pairs well with fixed windows",
            "Superior weather sealing",
            "Ideal for bathrooms and kitchens",
        ],
        specs: [
            { label: "Frame Material", value: "Aluminium" },
            { label: "Glazing", value: "Single or Double" },
            { label: "Max Width", value: "1500mm" },
            { label: "Max Height", value: "1800mm" },
            { label: "Operation", value: "Top-Hinged Outward" },
            { label: "Colours", value: "Full Powder Coat Range" },
        ],
        related: [
            "casement-windows",
            "sliding-windows",
            "double-glazing-windows",
        ],
    },
    {
        slug: "casement-windows",
        category: "windows",
        title: "Casement Windows",
        summary:
            "Side-hinged windows that swing outward, providing 100% clear opening for maximum airflow.",
        metaTitle: "Casement Windows - Aluverse | Sydney",
        metaDescription:
            "Premium aluminium casement windows for Sydney homes. 100% clear opening for maximum airflow with side-hinged design. Free quotes from Aluverse.",
        cardImage: productImages.casementWindows.card,
        heroImage: productImages.casementWindows.hero,
        imageAlt: "Casement windows",
        detailDescription:
            "Casement windows are side-hinged and swing outward, providing a full 100% clear opening for maximum airflow. Their design catches side breezes effectively, making them one of the best choices for natural ventilation in any room.",
        features: [
            "100% clear opening for maximum airflow",
            "Side-hinged for catching breezes",
            "Multi-point locking for security",
            "Easy to clean from inside",
            "Excellent energy efficiency when closed",
        ],
        specs: [
            { label: "Frame Material", value: "Aluminium" },
            { label: "Glazing", value: "Single or Double" },
            { label: "Max Width", value: "900mm per sash" },
            { label: "Max Height", value: "2100mm" },
            { label: "Operation", value: "Side-Hinged Outward" },
            { label: "Colours", value: "Full Powder Coat Range" },
        ],
        related: ["awning-windows", "bifold-windows", "double-hung-windows"],
    },
    {
        slug: "bifold-windows",
        category: "windows",
        title: "Bi-Fold Windows",
        summary:
            "Multiple panels that fold neatly to one side, creating a wide servery-style opening.",
        metaTitle: "Bi-Fold Windows - Aluverse | Sydney",
        metaDescription:
            "Premium aluminium bi-fold windows for Sydney homes. Wide servery-style openings for seamless indoor-outdoor connection. Free quotes from Aluverse.",
        cardImage: productImages.bifoldWindows.card,
        heroImage: productImages.bifoldWindows.hero,
        imageAlt: "Bi-fold windows",
        detailDescription:
            "Bi-fold windows feature multiple panels that fold neatly to one side, creating a wide servery-style opening. Perfect for connecting kitchens to outdoor entertaining areas, they transform the relationship between your indoor and outdoor spaces.",
        features: [
            "Wide servery-style openings",
            "Seamless indoor-outdoor connection",
            "Customisable panel configurations",
            "Smooth folding operation",
            "Space-efficient when open",
        ],
        specs: [
            { label: "Frame Material", value: "Aluminium" },
            { label: "Glazing", value: "Single or Double" },
            { label: "Max Panels", value: "7" },
            { label: "Max Height", value: "2400mm" },
            { label: "Operation", value: "Bi-Fold" },
            { label: "Colours", value: "Full Powder Coat Range" },
        ],
        related: [
            "casement-windows",
            "sliding-windows",
            "double-glazing-windows",
        ],
    },
    {
        slug: "double-glazing-windows",
        category: "windows",
        title: "Double Glazing",
        summary:
            "Two panes of glass with an insulating gas-filled gap for superior thermal and acoustic insulation.",
        metaTitle: "Double Glazing Windows - Aluverse | Sydney",
        metaDescription:
            "Premium double glazed aluminium windows for Sydney homes. Superior thermal and acoustic insulation for year-round comfort. Free quotes from Aluverse.",
        cardImage: productImages.doubleGlazingWindows.card,
        heroImage: productImages.doubleGlazingWindows.hero,
        imageAlt: "Double glazed windows",
        detailDescription:
            "Double glazed windows feature two panes of glass separated by an insulating gas-filled gap, delivering superior thermal and acoustic performance. They significantly reduce heat transfer and outside noise, creating a more comfortable and energy-efficient home year-round.",
        features: [
            "Superior thermal insulation",
            "Significant noise reduction",
            "Reduced energy costs",
            "Minimises condensation",
            "Available on all window types",
        ],
        specs: [
            { label: "Frame Material", value: "Aluminium" },
            { label: "Glass", value: "Low-E Double Glazed" },
            { label: "Gap", value: "12-20mm Argon Filled" },
            { label: "U-Value", value: "As Low as 1.8" },
            { label: "Acoustic Rating", value: "Up to STC 35" },
            { label: "Colours", value: "Full Powder Coat Range" },
        ],
        related: ["sliding-windows", "awning-windows", "double-hung-windows"],
    },
    {
        slug: "double-hung-windows",
        category: "windows",
        title: "Double Hung",
        summary:
            "Classic vertical sliding design with both upper and lower sashes operable for versatile ventilation.",
        metaTitle: "Double Hung Windows - Aluverse | Sydney",
        metaDescription:
            "Premium aluminium double hung windows for Sydney homes. Dual sash vertical sliding for versatile ventilation control. Free quotes from Aluverse.",
        cardImage: productImages.doubleHungWindows.card,
        heroImage: productImages.doubleHungWindows.hero,
        imageAlt: "Double hung windows",
        detailDescription:
            "Double hung windows feature both an upper and lower sash that slide vertically, offering versatile ventilation control. Open the top for warm air exhaust, the bottom for fresh air intake, or both for maximum airflow. A timeless design updated with modern aluminium engineering.",
        features: [
            "Dual sash ventilation control",
            "Classic timeless design",
            "Tilt-in sashes for easy cleaning",
            "Excellent for heritage homes",
            "Tight seal when closed",
        ],
        specs: [
            { label: "Frame Material", value: "Aluminium" },
            { label: "Glazing", value: "Single or Double" },
            { label: "Max Width", value: "1500mm" },
            { label: "Max Height", value: "2400mm" },
            { label: "Operation", value: "Vertical Sliding" },
            { label: "Colours", value: "Full Powder Coat Range" },
        ],
        related: [
            "sliding-windows",
            "casement-windows",
            "double-glazing-windows",
        ],
    },
    {
        slug: "sliding-doors",
        category: "doors",
        title: "Sliding Doors",
        summary:
            "Large glass panels that glide smoothly along tracks, offering effortless operation with slim sightlines.",
        metaTitle: "Sliding Doors - Aluverse | Sydney",
        metaDescription:
            "Premium aluminium sliding doors for Sydney homes. Smooth gliding operation, slim sightlines, maximum natural light. Free quotes. Call 0403 422 401.",
        cardImage: productImages.slidingDoors.card,
        heroImage: productImages.slidingDoors.hero,
        imageAlt: "Sliding doors",
        detailDescription:
            "Sliding doors feature large glass panels that glide smoothly along precision-engineered tracks. With their slim aluminium frames and expansive glazing, they flood your home with natural light while creating a seamless visual connection to the outdoors. Available in 2 or 3 track configurations for flexible opening widths.",
        features: [
            "Panoramic unobstructed views",
            "Whisper-quiet smooth operation",
            "Space-efficient (no swing clearance needed)",
            "High-security multi-point locking",
            "Available in 2 or 3 track systems",
        ],
        specs: [
            { label: "Frame Material", value: "Aluminium" },
            { label: "Glazing", value: "Single or Double" },
            { label: "Max Panel Width", value: "2000mm" },
            { label: "Max Height", value: "2700mm" },
            { label: "Tracks", value: "2 or 3 Rail" },
            { label: "Colours", value: "Full Powder Coat Range" },
        ],
        related: ["bifold-doors", "stacking-doors", "french-doors"],
    },
    {
        slug: "bifold-doors",
        category: "doors",
        title: "Bi-Fold Doors",
        summary:
            "Multiple panels fold and stack neatly to one side, creating dramatic wide-span openings.",
        metaTitle: "Bi-Fold Doors - Aluverse | Sydney",
        metaDescription:
            "Premium aluminium bi-fold doors for Sydney homes. Wide-span openings, indoor-outdoor living, flexible panel configurations. Free quotes. Call 0403 422 401.",
        cardImage: productImages.bifoldDoors.card,
        heroImage: productImages.bifoldDoors.hero,
        imageAlt: "Bi-fold doors",
        detailDescription:
            "Bi-fold doors are the ultimate solution for indoor-outdoor living. Multiple panels fold and stack neatly to one side, creating a dramatic wide-span opening that transforms your living space. Whether opening onto a deck, pool area, or garden, bi-fold doors blur the boundary between inside and out.",
        features: [
            "Maximum opening width up to 90%",
            "Dramatic architectural impact",
            "Flexible panel configurations (2-8 panels)",
            "Smooth folding operation on premium tracks",
            "Flush threshold option available",
        ],
        specs: [
            { label: "Frame Material", value: "Aluminium" },
            { label: "Glazing", value: "Single or Double" },
            { label: "Max Panels", value: "8" },
            { label: "Max Height", value: "2700mm" },
            { label: "Operation", value: "Bi-Fold" },
            { label: "Colours", value: "Full Powder Coat Range" },
        ],
        related: ["sliding-doors", "stacking-doors", "french-doors"],
    },
    {
        slug: "french-doors",
        category: "doors",
        title: "French Doors",
        summary:
            "Timeless double-door elegance paired with modern aluminium strength and security.",
        metaTitle: "French Doors - Aluverse | Sydney",
        metaDescription:
            "Premium aluminium French doors for Sydney homes. Timeless double-door elegance, modern aluminium strength. Free quotes. Call 0403 422 401.",
        cardImage: productImages.frenchDoors.card,
        heroImage: productImages.frenchDoors.hero,
        imageAlt: "French doors",
        detailDescription:
            "French doors bring timeless elegance to any home. The classic double-door design swings open to create a wide, welcoming entry point while aluminium frames provide the strength and weather resistance that timber can't match. Perfect for balconies, patios, and as feature entry points.",
        features: [
            "Timeless double-door elegance",
            "Wide entry point for entertaining",
            "Modern aluminium strength and durability",
            "Multi-point security locking",
            "Heritage-sympathetic design options",
        ],
        specs: [
            { label: "Frame Material", value: "Aluminium" },
            { label: "Glazing", value: "Single or Double" },
            { label: "Standard Widths", value: "1200-2400mm" },
            { label: "Max Height", value: "2400mm" },
            { label: "Operation", value: "Double Swing" },
            { label: "Colours", value: "Full Powder Coat Range" },
        ],
        related: ["hinged-doors", "bifold-doors", "sliding-doors"],
    },
    {
        slug: "hinged-doors",
        category: "doors",
        title: "Hinged Doors",
        summary:
            "Classic single or double swing doors with robust hardware for reliable daily use.",
        metaTitle: "Hinged Doors - Aluverse | Sydney",
        metaDescription:
            "Premium aluminium hinged doors for Sydney homes. Classic swing operation, heavy-duty hardware, superior weather sealing. Free quotes. Call 0403 422 401.",
        cardImage: productImages.hingedDoors.card,
        heroImage: productImages.hingedDoors.hero,
        imageAlt: "Hinged doors",
        detailDescription:
            "Hinged doors offer classic swing operation paired with modern aluminium engineering. Available as single or double-leaf configurations, they're ideal for front entries, back doors, and laundry exits. Robust hardware and weather seals ensure reliable performance day after day.",
        features: [
            "Classic reliable operation",
            "Single or double-leaf options",
            "Heavy-duty hinges and hardware",
            "Superior weather sealing",
            "Custom sizing to your opening",
        ],
        specs: [
            { label: "Frame Material", value: "Aluminium" },
            { label: "Glazing", value: "Single or Double" },
            { label: "Max Width", value: "1200mm per leaf" },
            { label: "Max Height", value: "2400mm" },
            { label: "Operation", value: "Inward or Outward Swing" },
            { label: "Colours", value: "Full Powder Coat Range" },
        ],
        related: ["french-doors", "sliding-doors", "bifold-doors"],
    },
    {
        slug: "stacking-doors",
        category: "doors",
        title: "Stacking Doors",
        summary:
            "Multiple panels slide and stack behind one another, creating expansive openings with clean lines.",
        metaTitle: "Stacking Doors - Aluverse | Sydney",
        metaDescription:
            "Premium aluminium stacking doors for Sydney homes. Expansive openings, clean architectural lines, smooth-gliding hardware. Free quotes. Call 0403 422 401.",
        cardImage: productImages.stackingDoors.card,
        heroImage: productImages.stackingDoors.hero,
        imageAlt: "Stacking doors",
        detailDescription:
            "Stacking doors feature multiple panels that slide and stack behind one another, creating expansive openings while maintaining clean architectural lines. Unlike bi-fold doors, all panels remain in a single plane when open, providing a more streamlined look for large openings.",
        features: [
            "Expansive openings with clean lines",
            "All panels stack in a single plane",
            "Flush track option for seamless threshold",
            "Premium smooth-gliding hardware",
            "Ideal for large format openings",
        ],
        specs: [
            { label: "Frame Material", value: "Aluminium" },
            { label: "Glazing", value: "Single or Double" },
            { label: "Max Panels", value: "6" },
            { label: "Max Height", value: "2700mm" },
            { label: "Track", value: "Multi-Rail Stacking" },
            { label: "Colours", value: "Full Powder Coat Range" },
        ],
        related: ["sliding-doors", "bifold-doors", "hinged-doors"],
    },
];

export const windowProducts = products.filter(
    product => product.category === "windows"
);
export const doorProducts = products.filter(
    product => product.category === "doors"
);

export const footerProductSlugs = [
    "sliding-windows",
    "awning-windows",
    "double-hung-windows",
    "bifold-doors",
    "french-doors",
    "sliding-doors",
] as const;

export const getProductHref = (slug: string) => `/products/${slug}`;

export const getProductBySlug = (slug: string) =>
    products.find(product => product.slug === slug);

export const services = [
    {
        id: "windows",
        label: "Windows",
    },
    {
        id: "doors",
        label: "Doors",
    },
    {
        id: "both",
        label: "Both Windows & Doors",
    },
    {
        id: "fly-screens",
        label: "Fly Screens",
    },
    {
        id: "repair",
        label: "Repair",
    },
    {
        id: "other",
        label: "Other",
    },
] as const;

export const propertyTypes = [
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "strata", label: "Strata" },
] as const;

export const contactPreferences = [
    { id: "phone", label: "Phone" },
    { id: "email", label: "Email" },
    { id: "either", label: "Either" },
] as const;

export const timeframes = [
    { id: "asap", label: "ASAP" },
    { id: "one-three-months", label: "1-3 Months" },
    { id: "three-six-months", label: "3-6 Months" },
    { id: "exploring", label: "Just Exploring" },
] as const;

export const socialMedia = [
    { id: "google", label: "Google" },
    { id: "social-media", label: "Social Media" },
    { id: "hipages", label: "hipages" },
    { id: "referral", label: "Referral" },
    { id: "other", label: "Other" },
] as const;
