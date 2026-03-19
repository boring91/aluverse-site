import type { ImageMetadata } from "astro";

import { productImages } from "../assets/images";

export type ProductCategory = "windows" | "doors";

export type ProductSpec = {
    label: string;
    value: string;
};

export type ProductFaq = {
    question: string;
    answer: string;
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
    idealFor: string[];
    features: string[];
    specs: ProductSpec[];
    seoFaqs: ProductFaq[];
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
    { target: 500, label: "Projects Completed" },
    { target: 10, label: "Years Experience" },
    { target: 100, label: "Australian Standards" },
    { target: 7, label: "Days a Week Service" },
] as const;

export const testimonials = [
    {
        quote: "Ahmed and his team did an excellent job. They arrived on time, were very professional, and explained everything to me clearly. I would highly recommend them.",
        author: "Jessy",
        location: "Redfern, Sydney",
    },
    {
        quote: "Ahmed was great to deal with, stuck to his timeline and worked very hard to get the job done. We appreciate his work and would highly recommend Ahmed and team.",
        author: "Scott",
        location: "Collaroy, Sydney",
    },
    {
        quote: "He is a good communicator, hard working and listens carefully. Also very knowledgeable and professional. Did the job efficiently.",
        author: "Paul C",
        location: "Beecroft, Sydney",
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
        idealFor: [
            "Bedrooms, kitchens, and living rooms that need easy day-to-day ventilation.",
            "Openings beside decks, walkways, or landscaping where an outward sash would be impractical.",
            "Projects that want wide glass areas with simple, low-maintenance operation.",
        ],
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
        seoFaqs: [
            {
                question:
                    "Are aluminium sliding windows a good option for smaller rooms?",
                answer:
                    "Yes. Because the sashes move within the frame, sliding windows do not project inward or outward, which makes them practical for bedrooms, hallways, patios, and other tighter spaces.",
            },
            {
                question:
                    "Can sliding windows be ordered with double glazing?",
                answer:
                    "Yes. Aluverse can supply sliding windows with single or double glazing depending on the thermal, acoustic, and budget requirements of the project.",
            },
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
        idealFor: [
            "Bathrooms, laundries, and kitchens where secure everyday ventilation matters.",
            "Openings that need fresh air even during light rain.",
            "Pairing with fixed glass panels to bring in more light without giving up opening sections.",
        ],
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
        seoFaqs: [
            {
                question:
                    "Can awning windows stay open when it is raining lightly?",
                answer:
                    "That is one of their main advantages. The top-hinged design creates a small protective cover, so you can often maintain ventilation during light rain while still helping shield the opening.",
            },
            {
                question: "Where do awning windows work best in a home?",
                answer:
                    "Awning windows are commonly used in kitchens, bathrooms, and bedrooms where ventilation, privacy, and weather resistance all matter at the same time.",
            },
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
        idealFor: [
            "Rooms that need strong cross-ventilation and maximum airflow.",
            "Projects where clients want a clear opening without a central mullion blocking the breeze.",
            "Homes looking for a simple modern window with strong weather sealing when closed.",
        ],
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
        seoFaqs: [
            {
                question:
                    "Are casement windows the best choice for airflow?",
                answer:
                    "Casement windows are one of the strongest options for natural ventilation because the sash opens fully and can catch side breezes effectively.",
            },
            {
                question:
                    "Do casement windows suit modern energy-efficient homes?",
                answer:
                    "Yes. Their compression seals and tight closure help deliver strong weather performance, especially when combined with quality glazing and careful installation.",
            },
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
        idealFor: [
            "Kitchen serveries that open directly to alfresco or pool areas.",
            "Homes designed around entertaining and indoor-outdoor flow.",
            "Wider openings where a standard sliding or awning window would feel restrictive.",
        ],
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
        seoFaqs: [
            {
                question: "What are bi-fold windows best used for?",
                answer:
                    "Bi-fold windows are especially popular for kitchen serveries and entertaining zones where homeowners want a wide opening to the outside.",
            },
            {
                question:
                    "Can aluminium bi-fold windows be supplied with double glazing?",
                answer:
                    "Yes. Double glazing can be specified on bi-fold window systems when the project requires better thermal performance, noise reduction, or improved comfort.",
            },
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
        idealFor: [
            "Homes near roads, schools, or busy neighbourhoods where outside noise is an issue.",
            "Projects focused on energy efficiency and better year-round comfort.",
            "Bedrooms and living areas where reducing heat transfer and condensation matters.",
        ],
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
        seoFaqs: [
            {
                question:
                    "Is double glazing worth it for Sydney homes?",
                answer:
                    "For many homes, yes. Double glazing can help reduce outside noise, improve indoor comfort, and limit heat gain or loss, especially in exposed rooms and high-traffic areas.",
            },
            {
                question:
                    "Can double glazing be added to different window styles?",
                answer:
                    "Yes. Double glazing is not limited to one frame style. It can be specified across multiple aluminium window systems depending on the design and performance goals of the project.",
            },
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
        idealFor: [
            "Heritage-style homes that need a more traditional window appearance.",
            "Rooms facing pathways or decks where an outward opening sash would be inconvenient.",
            "Homeowners who want precise control over top and bottom ventilation.",
        ],
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
        seoFaqs: [
            {
                question:
                    "Are double hung windows a good fit for traditional facades?",
                answer:
                    "Yes. Double hung windows are often chosen for heritage and classic homes because they retain a familiar vertical sash look while still offering modern aluminium durability.",
            },
            {
                question:
                    "How do double hung windows improve ventilation?",
                answer:
                    "Because both sashes can operate, you can release warm air through the top opening while drawing cooler air through the bottom, which gives you more flexible airflow control.",
            },
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
        idealFor: [
            "Patios, balconies, and backyards where homeowners want easy everyday access.",
            "Openings that need large glass panels without sacrificing floor space to a swing door.",
            "Homes prioritising natural light, views, and simple low-maintenance operation.",
        ],
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
        seoFaqs: [
            {
                question:
                    "Do sliding doors save space compared with hinged doors?",
                answer:
                    "Yes. Sliding doors move within their own track, so they do not need swing clearance and are often the most practical solution when furniture, walkways, or tight outdoor areas limit space.",
            },
            {
                question:
                    "Can aluminium sliding doors be supplied with double glazing?",
                answer:
                    "Yes. Sliding door systems can be specified with single or double glazing to suit the project's thermal, acoustic, and budget requirements.",
            },
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
        idealFor: [
            "Large entertaining areas that need the biggest possible opening.",
            "Homes that want a strong indoor-outdoor connection to decks, gardens, or pool zones.",
            "Architectural projects where the door system itself is part of the visual statement.",
        ],
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
        seoFaqs: [
            {
                question:
                    "When are bi-fold doors the best choice?",
                answer:
                    "Bi-fold doors are ideal when the goal is to open up a room as much as possible for entertaining and to create a strong visual connection between inside and outside.",
            },
            {
                question:
                    "Can bi-fold doors be installed with a flush threshold?",
                answer:
                    "In many projects, yes. Flush threshold options are available where a smoother transition is important, subject to the design, drainage, and site conditions.",
            },
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
        idealFor: [
            "Classic or Hamptons-inspired homes that want a more traditional door profile.",
            "Balconies, patios, and feature openings where symmetry matters.",
            "Projects that want the look of French doors without the upkeep of timber.",
        ],
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
        seoFaqs: [
            {
                question:
                    "Do French doors only suit traditional homes?",
                answer:
                    "No. While French doors are popular in more classic designs, aluminium framing also lets them work well in contemporary homes that want softer lines and a feature opening.",
            },
            {
                question:
                    "Are aluminium French doors secure?",
                answer:
                    "Yes. Modern aluminium French doors can be fitted with robust hardware and multi-point locking systems to improve security without losing their classic appearance.",
            },
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
        idealFor: [
            "Front entries, side doors, laundries, and utility spaces.",
            "Projects that need a straightforward, durable everyday access door.",
            "Homes wanting a custom single or double-leaf configuration to suit the opening.",
        ],
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
        seoFaqs: [
            {
                question:
                    "Can aluminium hinged doors be made as single or double doors?",
                answer:
                    "Yes. Hinged door systems can be configured as single-leaf or double-leaf openings depending on how the space is used and the width available.",
            },
            {
                question:
                    "Are hinged doors suitable for exposed weather conditions?",
                answer:
                    "Yes. With quality seals, hardware, and correct installation, aluminium hinged doors are a dependable option for entry points that need strong daily weather performance.",
            },
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
        idealFor: [
            "Large-format openings where homeowners want wide access without folding panels.",
            "Projects that favour panoramic glass and clean architectural lines.",
            "Homes comparing bi-fold and sliding systems for a more streamlined multi-panel solution.",
        ],
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
        seoFaqs: [
            {
                question:
                    "What is the difference between stacking doors and bi-fold doors?",
                answer:
                    "Stacking doors slide and stack behind one another on parallel tracks, while bi-fold doors fold into a hinged stack. Stacking systems usually create a cleaner linear look for large glazed openings.",
            },
            {
                question:
                    "Are stacking doors a good option for wide openings?",
                answer:
                    "Yes. They are specifically designed for larger openings where clients want multiple sliding panels, broad views, and a strong indoor-outdoor connection.",
            },
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
