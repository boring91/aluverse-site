import type { ImageMetadata } from "astro";

import { productImages } from "../assets/images";

export type ProductCategory = "windows" | "doors" | "screens" | "shopfronts";

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
    hours: "6:00 AM - 6:00 PM, 6 Days a Week",
    shortHours: "6:00 AM - 6:00 PM",
    serviceArea: "Sydney & Surrounding Areas",
    location: "Sydney, NSW",
    compliance: [
        { label: "Director", value: "Ahmed Al-Matari" },
        { label: "ABN", value: "43 695 732 935" },
        { label: "Glazing Licence No.", value: "483635C" },
        { label: "Workers Compensation Policy No.", value: "260917801" },
        { label: "Public Liability Insurance", value: "Active" },
        { label: "Public Liability Policy No.", value: "GL-0009874" },
    ],
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
    { target: 6, label: "Days a Week Service" },
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
        metaTitle: "Aluminium Sliding Windows Sydney | Custom Made | Aluverse",
        metaDescription:
            "Custom aluminium sliding windows built for Sydney projects. Smooth horizontal operation, maximum ventilation and clean sightlines. Free quotes from Aluverse.",
        cardImage: productImages.slidingWindows.card,
        heroImage: productImages.slidingWindows.hero,
        imageAlt: "Sliding windows",
        detailDescription:
            "Sliding windows offer smooth horizontal operation along precision-engineered aluminium tracks, delivering reliable day-to-day ventilation without any outward projection into walkways or landscaping. Their streamlined profile maximises natural light and maintains clean sightlines across wide openings, making them one of the most versatile window types for Sydney properties. Because the sashes glide within the frame rather than swinging open, sliding windows are particularly well suited to bedrooms, living areas, kitchens, and any opening that sits beside a deck, path, or balcony. For larger residential and commercial projects, multiple sliding panels can be configured side by side to cover expansive openings while keeping operation simple and low-maintenance. Every sliding window from Aluverse is custom fabricated to the exact dimensions of the opening, with weather seals engineered for Sydney's coastal and suburban conditions and a full powder-coat colour range to match any exterior.",
        idealFor: [
            "Bedrooms, kitchens, and living rooms that need easy day-to-day ventilation. Sliding windows let occupants control airflow with one hand, and the horizontal action is intuitive for all ages and abilities.",
            "Openings beside decks, walkways, or landscaping where an outward-swinging sash would obstruct foot traffic or garden beds. The sashes stay within the frame at all times, keeping exterior clearances free.",
            "Large-scale residential and commercial projects that need wide glass areas with simple, low-maintenance operation. Multiple panels can span broad openings while maintaining a consistent, minimal profile across the building exterior.",
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
            { label: "Operation", value: "Horizontal Sliding" },
            { label: "Colours", value: "Full Powder Coat Range" },
        ],
        seoFaqs: [
            {
                question:
                    "Are aluminium sliding windows a good option for smaller rooms?",
                answer: "Yes. Because the sashes move within the frame, sliding windows do not project inward or outward, which makes them practical for bedrooms, hallways, patios, and other tighter spaces.",
            },
            {
                question: "Can sliding windows be ordered with double glazing?",
                answer: "Yes. Aluverse can supply sliding windows with single or double glazing depending on the thermal, acoustic, and budget requirements of the project.",
            },
            {
                question: "How wide can aluminium sliding windows be made?",
                answer: "Individual sliding window panels can be fabricated up to 3600 mm wide and 2400 mm high. For openings that exceed a single panel, multiple sashes can be configured on two or three track systems to cover the full width.",
            },
            {
                question:
                    "Are sliding windows suitable for multi-storey or commercial buildings?",
                answer: "Yes. Sliding windows are a common specification for apartment complexes, office fitouts, and other commercial projects because they are easy to operate, require no external swing clearance, and can be bulk-ordered in consistent sizes across multiple floors.",
            },
            {
                question:
                    "What colours are available for aluminium sliding windows?",
                answer: "Aluverse offers the full powder-coat colour range, so frames can be matched to virtually any exterior. Popular choices for Sydney projects include matt black, surfmist, monument, and a range of anodised-look finishes.",
            },
            {
                question:
                    "How do sliding windows handle Sydney weather conditions?",
                answer: "Each sliding window is fitted with weather seals designed for Sydney's mix of coastal humidity, wind-driven rain, and summer heat. Proper sealing and drainage channels help keep the interior dry and comfortable year-round.",
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
        metaTitle: "Aluminium Awning Windows Sydney | Custom Made | Aluverse",
        metaDescription:
            "Custom aluminium awning windows for Sydney projects. Ventilate even during rain with top-hinged outward design. Free quotes from Aluverse.",
        cardImage: productImages.awningWindows.card,
        heroImage: productImages.awningWindows.hero,
        imageAlt: "Awning windows",
        detailDescription:
            "Awning windows are hinged at the top and push outward from the bottom, creating a protective canopy effect that allows fresh air to flow into a room even during light rain. This makes them one of the most practical window types for Sydney's climate, where afternoon showers can arrive without warning and homeowners still want to keep rooms ventilated. The outward opening position also provides a natural layer of security, as the sash cannot be easily forced from outside when partially open. Awning windows pair exceptionally well with fixed glass panels, allowing designers to combine large areas of uninterrupted glass with smaller operable sections for airflow. For larger residential developments and commercial projects, rows of awning windows can be stacked or placed side by side to create a consistent ventilation strategy across multiple rooms or floors. Every awning window from Aluverse is custom fabricated to suit the opening, sealed for Sydney's coastal and suburban conditions, and available in the full powder-coat colour range.",
        idealFor: [
            "Bathrooms, laundries, and kitchens where secure everyday ventilation is essential. The partially open sash limits external access while still allowing moisture and cooking odours to escape.",
            "Openings that need fresh air even during light rain. The top-hinged canopy design deflects water away from the interior, so windows can stay open through passing Sydney showers.",
            "Pairing with fixed glass panels on larger openings to bring in more natural light without sacrificing operable ventilation sections. This combination is popular in multi-storey residential and commercial projects.",
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
                answer: "That is one of their main advantages. The top-hinged design creates a small protective cover, so you can often maintain ventilation during light rain while still helping shield the opening.",
            },
            {
                question: "Where do awning windows work best in a home?",
                answer: "Awning windows are commonly used in kitchens, bathrooms, and bedrooms where ventilation, privacy, and weather resistance all matter at the same time.",
            },
            {
                question:
                    "Can awning windows be combined with fixed glass panels?",
                answer: "Yes. One of the most popular configurations in Sydney projects is a large fixed glass panel paired with one or more awning windows. This maximises the glass area and natural light while still providing operable ventilation where it is needed.",
            },
            {
                question:
                    "Are awning windows a good choice for apartment buildings?",
                answer: "They are one of the most commonly specified window types for multi-storey residential buildings. Their compact outward projection, rain protection, and security when open make them well suited to apartments and units.",
            },
            {
                question:
                    "Do awning windows provide good security when partially open?",
                answer: "Yes. Because the sash pushes outward at the bottom while remaining hinged at the top, it is difficult for someone to reach through the opening from outside, which adds a practical layer of security to everyday ventilation.",
            },
            {
                question:
                    "What size range is available for aluminium awning windows?",
                answer: "Aluverse fabricates awning windows up to 1500 mm wide and 1800 mm high. Exact sizing depends on the opening and the chosen glazing option, and every unit is custom made to suit the project.",
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
        metaTitle: "Aluminium Casement Windows Sydney | Custom Made | Aluverse",
        metaDescription:
            "Custom aluminium casement windows for Sydney projects. Full 100% clear opening for maximum airflow and cross-ventilation. Free quotes from Aluverse.",
        cardImage: productImages.casementWindows.card,
        heroImage: productImages.casementWindows.hero,
        imageAlt: "Casement windows",
        detailDescription:
            "Casement windows are side-hinged and swing outward, providing a full 100 percent clear opening that delivers the strongest natural airflow of any standard window type. The outward sash acts like a scoop, catching side breezes and directing them into the room, which makes casement windows an excellent choice for cross-ventilation in bedrooms, living areas, and upper-storey spaces across Sydney. When closed, the sash compresses tightly against the frame through multi-point locking, creating a weather-tight seal that performs well against wind-driven rain and temperature extremes. This combination of generous airflow when open and strong sealing when closed makes casement windows popular on projects that prioritise both comfort and performance. For larger developments, casement windows can be ganged together or paired with fixed panels to create consistent ventilation strategies across a building exterior. Every casement window from Aluverse is custom fabricated to suit the opening size, glazing requirements, and colour preferences of the project.",
        idealFor: [
            "Rooms that need strong cross-ventilation and maximum airflow. The full clear opening catches breezes more effectively than sliding or awning alternatives, making casement windows ideal for bedrooms and living areas that rely on natural cooling.",
            "Projects where architects or builders want a clean opening without a central mullion blocking the breeze. Casement sashes swing clear of the frame, giving an uninterrupted path for air movement across the full width of the window.",
            "Modern homes and large-scale developments that need strong weather sealing when closed. The compression seal created by multi-point locking makes casement windows one of the tightest-closing options available in aluminium framing.",
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
                question: "Are casement windows the best choice for airflow?",
                answer: "Casement windows are one of the strongest options for natural ventilation because the sash opens fully and can catch side breezes effectively. They deliver more airflow per square metre of opening than most other window types.",
            },
            {
                question:
                    "Do casement windows suit modern energy-efficient homes?",
                answer: "Yes. Their compression seals and tight closure help deliver strong weather performance, especially when combined with quality glazing and careful installation.",
            },
            {
                question:
                    "Can casement windows be used on upper floors of apartment buildings?",
                answer: "Yes, with appropriate hardware and safety considerations. Casement windows are regularly specified for multi-storey residential projects where natural ventilation on upper levels is a design priority. Restrictors can be fitted to limit the opening angle where required.",
            },
            {
                question: "How do casement windows compare to sliding windows?",
                answer: "Casement windows offer a larger clear opening for airflow because the entire sash swings out, while sliding windows move within their frame and typically open to half the window area. Sliding windows are better where external clearance is limited, while casement windows are better where maximum ventilation is the priority.",
            },
            {
                question: "Are casement windows easy to clean?",
                answer: "Yes. Because the sash swings outward, both the interior and exterior glass surfaces can usually be reached from inside the room, which simplifies cleaning on upper floors.",
            },
            {
                question:
                    "What locking options are available on aluminium casement windows?",
                answer: "Aluverse fits casement windows with multi-point locking hardware as standard. This draws the sash tightly against the frame at multiple points for improved security and a stronger weather seal.",
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
        metaTitle: "Aluminium Bi-Fold Windows Sydney | Custom Made | Aluverse",
        metaDescription:
            "Custom aluminium bi-fold windows for Sydney projects. Wide servery-style openings for seamless indoor-outdoor entertaining. Free quotes from Aluverse.",
        cardImage: productImages.bifoldWindows.card,
        heroImage: productImages.bifoldWindows.hero,
        imageAlt: "Bi-fold windows",
        detailDescription:
            "Bi-fold windows feature multiple aluminium-framed panels that fold neatly to one side, creating a wide servery-style opening that transforms the relationship between indoor and outdoor spaces. They are one of the most popular window choices for Sydney homes designed around entertaining, allowing kitchens and living areas to open directly onto alfresco zones, pool decks, and garden courtyards. When fully open, bi-fold windows stack compactly to clear up to 90 percent of the opening width, giving a near-unobstructed connection to the outside. When closed, the panels lock together and seal tightly against weather. Panel configurations of two to seven sashes can be tailored to suit the width and layout of the opening, and both single and double glazing options are available depending on the thermal and acoustic requirements of the project. Every bi-fold window from Aluverse is custom fabricated to the exact opening dimensions, finished in the client's choice from the full powder-coat colour range.",
        idealFor: [
            "Kitchen serveries that open directly to alfresco or pool areas. Bi-fold windows create a wide countertop pass-through that makes outdoor entertaining seamless and keeps the cook connected to guests.",
            "Homes and developments designed around indoor-outdoor flow. When fully folded back, the panels clear the opening and remove the visual barrier between living spaces and the garden, deck, or courtyard.",
            "Wider openings where a standard sliding or awning window would feel restrictive. With up to seven panels available, bi-fold windows can span openings that other window types cannot cover in a single unit.",
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
                answer: "Bi-fold windows are especially popular for kitchen serveries and entertaining zones where homeowners want a wide opening to the outside. They are also used in cafes, restaurants, and commercial hospitality fitouts across Sydney.",
            },
            {
                question:
                    "Can aluminium bi-fold windows be supplied with double glazing?",
                answer: "Yes. Double glazing can be specified on bi-fold window systems when the project requires better thermal performance, noise reduction, or improved comfort.",
            },
            {
                question: "How many panels can a bi-fold window system have?",
                answer: "Aluverse can configure bi-fold windows with up to seven panels per unit. The number of panels depends on the width of the opening and how compactly the stack needs to fold when open.",
            },
            {
                question: "Are bi-fold windows secure when closed?",
                answer: "Yes. When closed, the panels lock together through multi-point hardware and the perimeter seals compress against the frame, providing both security and weather protection.",
            },
            {
                question: "Can bi-fold windows be used in commercial projects?",
                answer: "Absolutely. Bi-fold windows are a popular specification for cafes, restaurants, bars, and retail shopfronts in Sydney where a wide servery or open-front layout is part of the design.",
            },
            {
                question: "Do bi-fold windows take up space when open?",
                answer: "The folded panels stack to one side of the opening and typically occupy only about 10 to 15 percent of the total width. This keeps the bulk of the opening clear when the window is fully open.",
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
        metaTitle: "Double Glazed Aluminium Windows Sydney | Aluverse",
        metaDescription:
            "Custom double glazed aluminium windows for Sydney projects. Superior thermal and acoustic insulation for year-round comfort. Free quotes from Aluverse.",
        cardImage: productImages.doubleGlazingWindows.card,
        heroImage: productImages.doubleGlazingWindows.hero,
        imageAlt: "Double glazed windows",
        detailDescription:
            "Double glazed windows feature two panes of glass separated by an insulating gas-filled gap, delivering measurably better thermal and acoustic performance than single-pane alternatives. The sealed air space, typically filled with argon gas, slows heat transfer in both directions, helping keep interiors cooler in Sydney's summer and warmer through winter without relying as heavily on mechanical heating and cooling. At the same time, the dual-pane construction significantly reduces the transmission of external noise, which is particularly valuable for properties near busy roads, flight paths, schools, or commercial precincts. Low-E coatings on the glass can be specified to further improve performance by reflecting radiant heat while still allowing natural light through. Double glazing can be applied across virtually every aluminium window type Aluverse offers, including sliding, awning, casement, bi-fold, and double hung systems, so there is no need to compromise on window style to gain the performance benefits. For large-scale developments and multi-unit projects, double glazing is often specified across entire buildings to deliver consistent comfort and acoustic separation between units.",
        idealFor: [
            "Homes and developments near busy roads, schools, flight paths, or commercial areas where outside noise is an issue. The dual-pane construction creates a measurable reduction in sound transmission compared to single glazing.",
            "Projects focused on energy efficiency and year-round comfort. Double glazing limits heat gain in summer and heat loss in winter, reducing reliance on air conditioning and heating across the building.",
            "Bedrooms, living areas, and multi-unit apartments where reducing heat transfer and condensation matters. The insulating gap helps keep the inner pane closer to room temperature, which minimises moisture buildup on the glass.",
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
                question: "Is double glazing worth it for Sydney homes?",
                answer: "For many homes, yes. Double glazing can help reduce outside noise, improve indoor comfort, and limit heat gain or loss, especially in exposed rooms, west-facing elevations, and high-traffic areas.",
            },
            {
                question:
                    "Can double glazing be added to different window styles?",
                answer: "Yes. Double glazing is not limited to one frame style. It can be specified across sliding, awning, casement, bi-fold, and double hung aluminium window systems depending on the design and performance goals of the project.",
            },
            {
                question:
                    "What is the difference between standard and Low-E double glazing?",
                answer: "Standard double glazing uses two clear panes with an air or gas gap. Low-E double glazing adds a microscopically thin metallic coating to one pane that reflects radiant heat while still allowing visible light through, which further improves thermal performance.",
            },
            {
                question:
                    "How much noise reduction does double glazing provide?",
                answer: "The level of reduction depends on the glass thickness, gap size, and gas fill, but double glazed aluminium windows can achieve acoustic ratings up to STC 35. For most Sydney homes near roads or busy areas, this represents a noticeable and meaningful improvement over single glazing.",
            },
            {
                question:
                    "Is double glazing a good investment for apartment developments?",
                answer: "Yes. Double glazing is increasingly specified in multi-unit projects across Sydney because it improves acoustic separation between units, enhances occupant comfort, and can contribute to better energy performance ratings for the development.",
            },
            {
                question: "Does double glazing reduce condensation on windows?",
                answer: "It helps significantly. The insulating gas gap keeps the inner pane closer to room temperature, which reduces the likelihood of moisture condensing on the glass during cooler months. This is especially noticeable in bathrooms, kitchens, and bedrooms.",
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
        metaTitle: "Aluminium Double Hung Windows Sydney | Custom | Aluverse",
        metaDescription:
            "Custom aluminium double hung windows for Sydney projects. Dual-sash vertical sliding for versatile ventilation and a classic exterior look. Free quotes from Aluverse.",
        cardImage: productImages.doubleHungWindows.card,
        heroImage: productImages.doubleHungWindows.hero,
        imageAlt: "Double hung windows",
        detailDescription:
            "Double hung windows feature both an upper and lower sash that slide vertically within the frame, offering the most versatile ventilation control of any traditional window style. Opening the top sash releases warm air that has risen to ceiling height, while opening the bottom draws in cooler air at floor level. Running both sashes at once creates a natural stack effect that moves air through the room without any mechanical assistance. The vertical sliding action means no part of the window projects outward, keeping pathways, decks, and landscaping clear. Double hung windows are a natural fit for heritage-style homes, Federation homes, and Hamptons-inspired designs across Sydney, but their clean proportions also work well in contemporary projects that want a more structured window rhythm. Tilt-in sash options simplify cleaning on upper floors, and the full powder-coat colour range lets frames match any exterior palette. For larger developments, double hung windows provide a consistent, repeatable look across multiple storeys.",
        idealFor: [
            "Heritage-style homes and traditional exteriors that need a window with familiar vertical proportions. Double hung windows are one of the most heritage-sympathetic aluminium options available, making them a strong choice for renovations and restorations across Sydney's older suburbs.",
            "Rooms facing pathways, decks, or narrow side passages where an outward-opening sash would obstruct foot traffic. Both sashes slide within the frame, so there is no external projection at any point during operation.",
            "Homeowners and project managers who want precise control over top and bottom ventilation. The dual-sash design allows warm air to exhaust through the top while cooler air enters through the bottom, creating natural airflow without fans or mechanical systems.",
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
                    "Are double hung windows a good fit for traditional homes?",
                answer: "Yes. Double hung windows are often chosen for heritage and classic homes because they retain a familiar vertical sash look while still offering modern aluminium durability and weather sealing.",
            },
            {
                question: "How do double hung windows improve ventilation?",
                answer: "Because both sashes can operate, you can release warm air through the top opening while drawing cooler air through the bottom. This creates a natural stack effect that moves air through the room without mechanical assistance.",
            },
            {
                question:
                    "Can double hung windows be used in heritage renovation projects?",
                answer: "Yes. Double hung windows are one of the most heritage-sympathetic aluminium window types. Their vertical sliding proportions closely match the original timber windows found in Federation, Victorian, and Edwardian homes throughout Sydney.",
            },
            {
                question:
                    "Are double hung windows easy to clean on upper floors?",
                answer: "Yes. Many double hung systems include a tilt-in feature that lets the sashes pivot inward, so both the interior and exterior glass surfaces can be cleaned from inside the room. This is especially useful on multi-storey homes and apartments.",
            },
            {
                question: "Do double hung windows project outward when open?",
                answer: "No. Both sashes slide vertically within the frame, so no part of the window extends beyond the exterior wall. This makes them practical for openings beside walkways, balconies, and narrow side passages.",
            },
            {
                question:
                    "Can double hung windows be specified with double glazing?",
                answer: "Yes. Double hung windows can be fitted with single or double glazing depending on the thermal, acoustic, and budget requirements of the project. Double glazing is recommended for noise-affected and exposed locations.",
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
        metaTitle: "Aluminium Sliding Doors Sydney | Custom Made | Aluverse",
        metaDescription: `Custom aluminium sliding doors for Sydney projects. Smooth gliding operation, slim sightlines and maximum natural light. Free quotes. Call ${company.phoneDisplay}.`,
        cardImage: productImages.slidingDoors.card,
        heroImage: productImages.slidingDoors.hero,
        imageAlt: "Sliding doors",
        detailDescription:
            "Sliding doors feature large glass panels that glide smoothly along precision-engineered aluminium tracks, delivering effortless daily operation and expansive views with slim sightlines. Because the panels move within their own track rather than swinging into the room or onto a deck, sliding doors preserve valuable floor space on both sides of the opening, making them one of the most practical door types for Sydney homes and commercial properties. Two and three track configurations are available to suit different opening widths, and panels can be sized up to 1500 mm wide and 2700 mm high for a commanding floor-to-ceiling presence. Multi-point locking hardware secures the panels when closed, while quality weather seals protect against wind-driven rain and dust. For larger residential developments, apartment buildings, and commercial fitouts, sliding doors are frequently specified because of their simple operation, consistent sizing across multiple units, and low ongoing maintenance. Every sliding door from Aluverse is custom fabricated to the exact opening dimensions, with the full powder-coat colour range available to match any architectural palette.",
        idealFor: [
            "Patios, balconies, and backyards where everyday access needs to be simple and space-efficient. Sliding doors do not require swing clearance, so furniture, planters, and walkways can sit closer to the opening without obstruction.",
            "Openings that need large glass panels to maximise natural light and views without sacrificing usable floor space. The slim aluminium frames keep sightlines minimal while the panels slide quietly along their tracks.",
            "Large-scale residential developments, apartment complexes, and commercial projects that prioritise consistent sizing, simple operation, and low-maintenance door systems across multiple units or floors.",
        ],
        features: [
            "Panoramic unobstructed views",
            "Whisper-quiet smooth operation",
            "Space-efficient (no swing clearance needed)",
            "High-security multi-point locking",
            "Available in 3 to 5 track systems",
        ],
        specs: [
            { label: "Frame Material", value: "Aluminium" },
            { label: "Glazing", value: "Single or Double" },
            { label: "Max Panel Width", value: "1500mm" },
            { label: "Max Height", value: "2700mm" },
            { label: "Tracks", value: "3 to 5 Rails" },
            { label: "Colours", value: "Full Powder Coat Range" },
        ],
        seoFaqs: [
            {
                question:
                    "Do sliding doors save space compared with hinged doors?",
                answer: "Yes. Sliding doors move within their own track, so they do not need swing clearance and are often the most practical solution when furniture, walkways, or tight outdoor areas limit space.",
            },
            {
                question:
                    "Can aluminium sliding doors be supplied with double glazing?",
                answer: "Yes. Sliding door systems can be specified with single or double glazing to suit the project's thermal, acoustic, and budget requirements.",
            },
            {
                question: "How large can aluminium sliding door panels be?",
                answer: "Individual panels can be fabricated up to 1500 mm wide and 2700 mm high. For wider openings, two or three track systems allow multiple panels to slide past one another, covering openings well beyond what a single panel could span.",
            },
            {
                question:
                    "Are sliding doors suitable for apartment buildings and commercial projects?",
                answer: "Yes. Sliding doors are one of the most commonly specified door types for apartments, offices, and retail spaces in Sydney because they are space-efficient, easy to operate, and can be produced in consistent sizes across large orders.",
            },
            {
                question: "How secure are aluminium sliding doors?",
                answer: "Modern aluminium sliding doors are fitted with multi-point locking hardware that secures the panel at several points along the frame. This provides strong resistance against forced entry while keeping the locking mechanism discreet and easy to operate from inside.",
            },
            {
                question:
                    "What is the difference between a 2-track and 3-track sliding door?",
                answer: "A 2-track system has two panels that slide past one another, opening roughly half the total width. A 3-track system adds a third rail, allowing more panels and a wider effective opening. The right choice depends on the opening width and how much clear access is needed.",
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
        metaTitle: "Aluminium Bi-Fold Doors Sydney | Custom Made | Aluverse",
        metaDescription: `Custom aluminium bi-fold doors for Sydney projects. Wide-span openings up to 90% clear, indoor-outdoor living at its best. Free quotes. Call ${company.phoneDisplay}.`,
        cardImage: productImages.bifoldDoors.card,
        heroImage: productImages.bifoldDoors.hero,
        imageAlt: "Bi-fold doors",
        detailDescription:
            "Bi-fold doors are the premier solution for indoor-outdoor living in Sydney, with multiple aluminium-framed panels that fold and stack neatly to one side to create dramatic wide-span openings of up to 90 percent clear width. Whether opening onto a timber deck, pool area, garden courtyard, or commercial terrace, bi-fold doors dissolve the boundary between inside and out and transform how a space is used for entertaining, dining, and everyday living. Configurations from two to eight panels allow the system to span openings that would be impossible with conventional hinged or sliding doors, while a flush threshold option provides a seamless transition between floor levels when accessibility or clean aesthetics are priorities. When closed, the panels lock together through multi-point hardware and seal against weather, providing security and protection from Sydney's coastal conditions. For architects and builders working on large-scale homes, hospitality venues, and commercial fitouts, bi-fold doors make a strong visual and functional statement. Every system from Aluverse is custom fabricated to the exact opening dimensions, with the full powder-coat colour range available.",
        idealFor: [
            "Large entertaining areas that need the biggest possible opening to a deck, garden, or alfresco zone. Bi-fold doors can clear up to 90 percent of the opening width, giving the room a near-open-air feel when the panels are folded back.",
            "Homes, restaurants, and commercial venues that want a strong indoor-outdoor connection. The folding action creates a dramatic transition that is as much an architectural feature as it is a functional door system.",
            "Architectural and design-driven projects where the door system itself is part of the visual statement. With up to eight panels, full-height glazing, and slim aluminium frames, bi-fold doors create a commanding focal point on any exterior.",
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
                question: "When are bi-fold doors the best choice?",
                answer: "Bi-fold doors are ideal when the goal is to open up a room as much as possible for entertaining and to create a strong visual connection between inside and outside. They suit living areas, dining rooms, and commercial spaces that face outdoor zones.",
            },
            {
                question:
                    "Can bi-fold doors be installed with a flush threshold?",
                answer: "In many projects, yes. Flush threshold options are available where a smoother transition between indoor and outdoor floor levels is important, subject to the design, drainage, and site conditions.",
            },
            {
                question: "How many panels can a bi-fold door system have?",
                answer: "Aluverse can configure bi-fold door systems with two to eight panels. The number depends on the total opening width, the desired panel proportions, and whether the panels fold to one side or split to both sides.",
            },
            {
                question:
                    "Are bi-fold doors suitable for windy or coastal Sydney locations?",
                answer: "Yes, when correctly specified and installed. The panels lock together through multi-point hardware when closed, and perimeter weather seals help protect against wind-driven rain, salt air, and dust common in Sydney's coastal suburbs.",
            },
            {
                question:
                    "What is the difference between bi-fold doors and stacking doors?",
                answer: "Bi-fold doors fold and hinge into a compact stack at one or both sides of the opening. Stacking doors slide on parallel tracks and remain in a single plane when open. Bi-fold doors typically clear more of the opening width, while stacking doors offer a more streamlined look for very wide spans.",
            },
            {
                question:
                    "Can bi-fold doors be used in commercial and hospitality projects?",
                answer: "Absolutely. Bi-fold doors are a popular specification for restaurants, cafes, function venues, and retail spaces in Sydney where a wide-open frontage or terrace connection is part of the design and customer experience.",
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
        metaTitle: "Aluminium French Doors Sydney | Custom Made | Aluverse",
        metaDescription: `Custom aluminium French doors for Sydney projects. Classic double-door elegance with modern aluminium strength and durability. Free quotes. Call ${company.phoneDisplay}.`,
        cardImage: productImages.frenchDoors.card,
        heroImage: productImages.frenchDoors.hero,
        imageAlt: "French doors",
        detailDescription:
            "French doors bring timeless double-door elegance to any property, with a classic symmetrical design that swings open to create a wide, welcoming entry point. Aluminium framing delivers the strength, weather resistance, and dimensional stability that timber alternatives struggle to maintain in Sydney's climate, while slim profiles keep the focus on the glazing and the view beyond. French doors are a natural fit for balconies, patios, courtyards, and garden entries where a traditional door profile adds character and presence to the exterior. They are equally at home in heritage renovations, Hamptons-inspired builds, and contemporary projects that want a softer design accent alongside more modern elements. For larger residential developments and commercial heritage conversions, aluminium French doors provide a consistent, low-maintenance alternative to timber that retains the classic proportions architects and homeowners expect. Every pair from Aluverse is custom fabricated to the opening dimensions, fitted with multi-point locking hardware, and finished in the client's choice from the full powder-coat colour range.",
        idealFor: [
            "Classic, Hamptons-inspired, and heritage-style homes that want a traditional double-door profile. Aluminium French doors deliver the proportions and character of timber without the ongoing maintenance, swelling, or warping that can occur in Sydney's humid conditions.",
            "Balconies, patios, and feature openings where symmetry and visual impact matter. The twin-leaf design creates a balanced, inviting entry point that enhances both the interior room and the outdoor space it connects to.",
            "Projects that want the look and feel of French doors without the long-term upkeep of timber framing. Aluminium does not rot, warp, or require regular repainting, making it a practical choice for high-use entries on large homes and developments.",
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
                question: "Do French doors only suit traditional homes?",
                answer: "No. While French doors are popular in heritage, Federation, and Hamptons-style designs, aluminium framing also lets them work well in contemporary homes that want softer lines and a feature opening.",
            },
            {
                question: "Are aluminium French doors secure?",
                answer: "Yes. Modern aluminium French doors can be fitted with robust hardware and multi-point locking systems to improve security without losing their classic double-door appearance.",
            },
            {
                question:
                    "How do aluminium French doors compare to timber French doors?",
                answer: "Aluminium French doors offer the same classic proportions and visual character as timber but with significantly less maintenance. Aluminium does not swell, warp, or rot in Sydney's humid and coastal conditions, and the powder-coat finish does not require regular sanding or repainting.",
            },
            {
                question: "Can French doors be specified with double glazing?",
                answer: "Yes. Double glazing can be fitted to French door systems to improve thermal performance, reduce noise, and enhance overall comfort. This is especially worthwhile for doors that face busy streets or exposed elevations.",
            },
            {
                question:
                    "What width range is available for aluminium French doors?",
                answer: "Standard French door configurations from Aluverse range from 1200 mm to 2400 mm in total width. Custom widths can be discussed based on the opening dimensions and structural requirements of the project.",
            },
            {
                question:
                    "Are French doors suitable for heritage renovation projects?",
                answer: "Yes. Aluminium French doors are a popular choice for heritage conversions across Sydney because they can replicate traditional proportions while offering modern performance, hardware, and weather sealing that original timber doors often lack.",
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
        metaTitle: "Aluminium Hinged Doors Sydney | Custom Made | Aluverse",
        metaDescription: `Custom aluminium hinged doors for Sydney projects. Single or double-leaf swing, heavy-duty hardware and superior weather sealing. Free quotes. Call ${company.phoneDisplay}.`,
        cardImage: productImages.hingedDoors.card,
        heroImage: productImages.hingedDoors.hero,
        imageAlt: "Hinged doors",
        detailDescription:
            "Hinged doors offer classic swing operation paired with modern aluminium engineering, delivering reliable everyday performance for front entries, back doors, laundry exits, and utility access points. Available in single-leaf and double-leaf configurations, they can be set to swing inward or outward depending on the layout and traffic flow of the space. Heavy-duty hinges, multi-point locking hardware, and continuous weather seals ensure that each door stands up to the demands of high-use entry points in Sydney's variable climate. The aluminium frame resists corrosion, does not warp or swell with humidity changes, and holds its alignment over years of daily operation. For commercial fitouts, apartment common areas, and multi-unit developments, hinged doors provide a straightforward, cost-effective access solution that is easy to specify and install in volume. Every hinged door from Aluverse is custom fabricated to the exact opening dimensions, glazed with single or double-pane glass as required, and finished in any colour from the full powder-coat range.",
        idealFor: [
            "Front entries, side doors, laundries, and utility spaces that need a reliable, straightforward access door. Hinged doors are the most familiar and intuitive door type for everyday use by residents, tenants, and staff.",
            "Projects that need a durable, cost-effective door solution across multiple openings. For large homes and developments, hinged doors can be specified in bulk with consistent sizing, hardware, and finishes across the project.",
            "Homes and commercial properties wanting a custom single or double-leaf configuration to suit the width and traffic flow of the opening. Swing direction can be set to inward or outward depending on the layout.",
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
                answer: "Yes. Hinged door systems can be configured as single-leaf or double-leaf openings depending on how the space is used, the width of the opening, and the desired traffic flow.",
            },
            {
                question:
                    "Are hinged doors suitable for exposed weather conditions?",
                answer: "Yes. With quality seals, heavy-duty hardware, and correct installation, aluminium hinged doors are a dependable option for entry points that face prevailing weather in Sydney's coastal and suburban areas.",
            },
            {
                question: "Can hinged doors swing inward or outward?",
                answer: "Yes. The swing direction can be set during fabrication to suit the layout. Outward swing is common for front entries and fire exits, while inward swing is often preferred for internal access points and laundries.",
            },
            {
                question:
                    "Are aluminium hinged doors suitable for commercial buildings?",
                answer: "Yes. Aluminium hinged doors are frequently used in commercial fitouts, apartment common areas, office entries, and retail spaces because they are durable, low-maintenance, and easy to specify across multiple openings.",
            },
            {
                question:
                    "What glazing options are available for hinged doors?",
                answer: "Hinged doors can be supplied with single or double glazing depending on the project's requirements. Obscure or frosted glass is also available for locations where privacy is needed, such as bathrooms and side entries.",
            },
            {
                question:
                    "How durable are aluminium hinged doors compared to timber?",
                answer: "Aluminium hinged doors do not swell, warp, rot, or require regular repainting. They maintain their alignment and seal integrity over years of daily use, which makes them a lower-maintenance alternative to timber in Sydney's climate.",
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
        metaTitle: "Aluminium Stacking Doors Sydney | Custom Made | Aluverse",
        metaDescription: `Custom aluminium stacking doors for Sydney projects. Expansive openings with clean architectural lines and smooth-gliding panels. Free quotes. Call ${company.phoneDisplay}.`,
        cardImage: productImages.stackingDoors.card,
        heroImage: productImages.stackingDoors.hero,
        imageAlt: "Stacking doors",
        detailDescription:
            "Stacking doors feature multiple aluminium-framed glass panels that slide along parallel tracks and stack behind one another, creating expansive openings while maintaining clean architectural lines. Unlike bi-fold doors, all panels remain in a single plane when open, producing a more streamlined and contemporary appearance that suits modern Sydney homes and commercial properties. The multi-rail track system allows up to six panels to glide smoothly into a compact stack, clearing a generous portion of the opening width for unobstructed indoor-outdoor access. A flush track option is available for projects that need a seamless threshold transition between floor levels. Stacking doors are a popular choice for large living areas, resort-style pool surrounds, waterfront properties, and hospitality venues where panoramic glazing and clean sightlines are central to the design intent. For architects and builders working on large-scale projects, stacking doors offer an alternative to bi-fold systems that avoids the folding mechanism while still spanning wide openings. Every stacking door from Aluverse is custom fabricated to suit the opening, with single or double glazing and the full powder-coat colour range available.",
        idealFor: [
            "Large-format openings where homeowners or designers want wide access without folding panels. Stacking doors slide in a single plane, which creates a cleaner, more linear look than bi-fold alternatives and avoids panels projecting into the room or onto the deck.",
            "Projects that prioritise panoramic glass, slim sightlines, and clean architectural lines. The parallel track system keeps the visual profile minimal while allowing multiple panels to stack compactly when open.",
            "Waterfront homes, resort-style builds, and hospitality venues that need a commanding indoor-outdoor opening. Stacking doors are designed for the kind of wide-span glazing that defines contemporary coastal and entertaining architecture across Sydney.",
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
                answer: "Stacking doors slide and stack behind one another on parallel tracks, keeping all panels in a single plane. Bi-fold doors fold into a hinged stack that projects to one side. Stacking systems usually create a cleaner linear look for large glazed openings, while bi-fold doors can clear a greater percentage of the opening width.",
            },
            {
                question: "Are stacking doors a good option for wide openings?",
                answer: "Yes. They are specifically designed for larger openings where clients want multiple sliding panels, broad views, and a strong indoor-outdoor connection without the folding mechanism of a bi-fold system.",
            },
            {
                question:
                    "Can stacking doors be installed with a flush threshold?",
                answer: "Yes. A flush track option is available for projects where a seamless transition between indoor and outdoor floor levels is important. This is subject to drainage, site conditions, and the specific design of the opening.",
            },
            {
                question: "How many panels can a stacking door system have?",
                answer: "Aluverse can configure stacking door systems with up to six panels. The number of panels and tracks depends on the total opening width and the desired clear access when the doors are fully open.",
            },
            {
                question:
                    "Are stacking doors used in commercial and hospitality projects?",
                answer: "Yes. Stacking doors are a popular specification for restaurants, bars, function venues, and resort-style developments in Sydney where expansive glazing and wide openings are central to the design.",
            },
            {
                question:
                    "How do stacking doors handle Sydney's coastal weather?",
                answer: "The aluminium frames resist salt air corrosion, and each panel is fitted with weather seals designed to protect against wind-driven rain and dust. Powder-coat finishes provide an additional layer of protection for coastal environments.",
            },
        ],
        related: ["sliding-doors", "bifold-doors", "hinged-doors"],
    },
    {
        slug: "stainless-steel-mesh",
        category: "screens",
        title: "Stainless Steel Mesh Screens",
        summary:
            "Heavy-duty 316 marine-grade stainless steel mesh screens that combine superior security with unobstructed views and airflow.",
        metaTitle:
            "Stainless Steel Mesh Screens Sydney | Security Screens | Aluverse",
        metaDescription:
            "Custom stainless steel mesh screens for Sydney homes and businesses. 316 marine-grade mesh in aluminium frames for security, airflow, and clear views. Free quotes from Aluverse.",
        cardImage: productImages.stainlessSteelMesh.card,
        heroImage: productImages.stainlessSteelMesh.hero,
        imageAlt: "Stainless steel mesh security screen",
        detailDescription:
            "Stainless steel mesh screens use a tightly woven 316 marine-grade mesh tensioned within a custom aluminium frame, delivering a security barrier that does not compromise on visibility or ventilation. The mesh is strong enough to resist forced entry, yet fine enough to keep insects out and allow a clear view of the outside. This makes stainless steel mesh screens one of the most practical upgrades for Sydney properties that want to leave windows and doors open without worrying about break-ins or pests. The 316 grade stainless steel is specifically chosen for its resistance to salt air corrosion, making it well suited to coastal suburbs and exposed sites across the Sydney basin. Every screen from Aluverse is custom fabricated to fit the exact opening, whether it is a hinged door, sliding door, window, or stacking system, and is finished in the full aluminium powder-coat colour range to match the existing frames.",
        idealFor: [
            "Homes in coastal or salt-air environments where corrosion resistance is essential. The 316 marine-grade stainless steel withstands prolonged exposure to salt-laden air without rusting or degrading.",
            "Properties that need a physical security barrier across windows and doors without blocking views or restricting airflow. The fine mesh is virtually transparent from normal viewing distances.",
            "Families who want to keep doors and windows open for ventilation while preventing insect entry. The tight weave blocks mosquitoes, flies, and other pests reliably.",
        ],
        features: [
            "316 marine-grade stainless steel mesh",
            "High security with clear outward visibility",
            "Corrosion resistant for coastal environments",
            "Blocks insects while allowing full airflow",
            "Custom fabricated to any opening size",
        ],
        specs: [
            {
                label: "Mesh Material",
                value: "316 Marine-Grade Stainless Steel",
            },
            { label: "Frame Material", value: "Aluminium" },
            { label: "Mesh Aperture", value: "1.0mm x 1.0mm" },
            { label: "Wire Diameter", value: "0.8mm" },
            { label: "Mounting", value: "Hinged, Sliding, or Fixed" },
            { label: "Colours", value: "Full Powder Coat Range" },
        ],
        seoFaqs: [
            {
                question:
                    "Are stainless steel mesh screens strong enough for security?",
                answer: "Yes. 316 marine-grade stainless steel mesh is tested to resist cutting, impact, and forced entry. When properly tensioned and framed in aluminium, it provides a genuine physical barrier across the opening.",
            },
            {
                question:
                    "Can I still see through stainless steel mesh screens?",
                answer: "Yes. The fine weave is designed to be virtually transparent from normal viewing distances inside the home, maintaining clear outward views while providing security and insect protection from outside.",
            },
            {
                question:
                    "Do stainless steel mesh screens work in coastal areas?",
                answer: "They are specifically suited to coastal environments. The 316 grade stainless steel is highly resistant to salt air corrosion, which is why it is commonly specified for properties near the ocean across Sydney.",
            },
            {
                question:
                    "Can stainless steel mesh screens be fitted to existing windows and doors?",
                answer: "Yes. Aluverse fabricates each screen to suit the specific opening, whether it is a new installation or a retrofit to an existing aluminium window or door frame.",
            },
            {
                question:
                    "How do stainless steel mesh screens compare to fabric mesh screens?",
                answer: "Stainless steel mesh provides a higher level of physical security and longer lifespan in harsh conditions. Fabric mesh is lighter and more cost-effective for general insect protection where security is not the primary concern.",
            },
            {
                question:
                    "What maintenance do stainless steel mesh screens need?",
                answer: "Very little. An occasional wash with soapy water and a soft brush is usually enough to keep the mesh clean and free of salt or dust buildup. The stainless steel and powder-coated aluminium frame require no painting or special treatments.",
            },
        ],
        related: ["fabric-mesh"],
    },
    {
        slug: "fabric-mesh",
        category: "screens",
        title: "Fabric Mesh Screens",
        summary:
            "Lightweight fibreglass mesh screens that provide reliable insect protection and natural ventilation at an accessible price point.",
        metaTitle: "Fabric Mesh Fly Screens Sydney | Insect Screens | Aluverse",
        metaDescription:
            "Custom fabric mesh fly screens for Sydney homes. Lightweight fibreglass mesh in aluminium frames for insect protection and ventilation. Free quotes from Aluverse.",
        cardImage: productImages.fabricMesh.card,
        heroImage: productImages.fabricMesh.hero,
        imageAlt: "Fabric mesh fly screen",
        detailDescription:
            "Fabric mesh screens use a durable fibreglass mesh held within a custom aluminium frame to provide effective insect protection without restricting airflow or natural light. The lightweight mesh is easy to handle and allows generous ventilation when windows and doors are open, making it a practical everyday solution for Sydney homes that want to keep flies, mosquitoes, and other insects out. Fabric mesh screens are available in a range of configurations including hinged, sliding, retractable, and fixed panel options, so they can be matched to virtually any window or door type in the home. The aluminium frames are custom fabricated to the exact opening dimensions and finished in the full powder-coat colour range, ensuring a clean fit and consistent appearance with the existing window and door frames. For homeowners who want reliable insect protection without the higher cost of stainless steel security mesh, fabric mesh screens are the most popular and cost-effective option.",
        idealFor: [
            "Homes that need reliable insect protection across multiple windows and doors without a large overall outlay. Fabric mesh is the most cost-effective screening option for full-house coverage.",
            "Living areas, bedrooms, and kitchens where natural ventilation is a priority. The open weave allows generous airflow while keeping insects out of the home.",
            "Rental properties, granny flats, and new builds where practical fly screening is needed across many openings. The lightweight frames are easy to install and replace if damaged.",
        ],
        features: [
            "Lightweight fibreglass mesh",
            "Effective insect protection",
            "Generous airflow and light transmission",
            "Available in hinged, sliding, retractable, or fixed",
            "Cost-effective full-house screening",
        ],
        specs: [
            { label: "Mesh Material", value: "Fibreglass / Pet Mesh" },
            { label: "Frame Material", value: "Aluminium" },
            { label: "Mesh Aperture", value: "1.2mm x 1.2mm" },
            {
                label: "Configuration",
                value: "Hinged, Sliding, Retractable, Fixed",
            },
            { label: "Max Width", value: "2400mm" },
            { label: "Colours", value: "Full Powder Coat Range" },
        ],
        seoFaqs: [
            {
                question:
                    "Are fabric mesh screens effective against mosquitoes?",
                answer: "Yes. The fine fibreglass mesh blocks mosquitoes, flies, and other common household insects while still allowing air to pass through freely.",
            },
            {
                question: "How long do fabric mesh screens last?",
                answer: "With normal use, a quality fibreglass mesh screen will last several years. The mesh can be replaced if it becomes torn or worn without needing to replace the aluminium frame.",
            },
            {
                question: "Can fabric mesh screens be fitted to sliding doors?",
                answer: "Yes. Aluverse offers sliding mesh screen panels that run on their own track alongside the existing sliding door, making it easy to open and close the screen independently of the door.",
            },
            {
                question:
                    "What is the difference between fabric mesh and stainless steel mesh screens?",
                answer: "Fabric mesh is lighter, more affordable, and designed primarily for insect protection. Stainless steel mesh provides a higher level of physical security and greater durability in harsh coastal conditions, at a higher price point.",
            },
            {
                question: "Can fabric mesh screens be retractable?",
                answer: "Yes. Retractable fabric mesh screens roll into a discreet housing when not in use, which is a popular option for doors and windows where a permanent fixed screen is not wanted.",
            },
            {
                question: "Do fabric mesh screens restrict the view?",
                answer: "The mesh is designed to be as transparent as possible while still blocking insects. From inside the home, the view through a fabric mesh screen is largely unobstructed under normal lighting conditions.",
            },
        ],
        related: ["stainless-steel-mesh"],
    },
    {
        slug: "shop-fronts",
        category: "shopfronts",
        title: "Aluminium Shop Fronts",
        summary:
            "Custom aluminium shop fronts and commercial entrance systems for retail, hospitality, and ground-floor projects across Sydney.",
        metaTitle:
            "Aluminium Shop Fronts Sydney | Commercial Shopfront Glazing | Aluverse",
        metaDescription:
            "Custom aluminium shop fronts for Sydney retail and commercial projects. Slim-framed shopfront glazing, entrance doors, and toughened glass fabricated and installed by Aluverse.",
        cardImage: productImages.aluminiumShopFronts.card,
        heroImage: productImages.aluminiumShopFronts.hero,
        imageAlt: "Aluminium shop front",
        detailDescription:
            "Aluminium shop fronts give retail, hospitality, and commercial tenancies a clean, durable, and inviting street presence. Aluverse fabricates slim-framed shopfront glazing, framed and frameless entrance doors, and fixed display windows engineered for high-traffic ground-floor use across Sydney. Each shop front is detailed to suit the tenancy opening, with toughened or laminated safety glass, multi-point locking entrances, and powder-coat or anodised finishes specified to suit the brand and building. Because shopfront work has to balance security, accessibility, and kerb appeal, every installation is measured on site, fabricated to the exact opening, and installed by our own team with minimal disruption to trading. From single-shop refits through to multi-tenancy retail and commercial fitouts, we deliver a single point of accountability for design, fabrication, and installation.",
        idealFor: [
            "Retail and hospitality tenancies that need a slim-framed, glazed street frontage with a welcoming, secure entrance.",
            "Commercial fitouts and multi-tenancy developments requiring consistent shopfront glazing and entrance systems across multiple units.",
            "Refurbishments and re-fits where an existing shop front is being upgraded for security, accessibility, or a visual refresh.",
        ],
        features: [
            "Slim-framed aluminium shopfront glazing",
            "Framed and frameless entrance door options",
            "Toughened and laminated safety glass",
            "Multi-point locking and commercial hardware",
            "Powder-coat and anodised finish range",
        ],
        specs: [
            {
                label: "System Types",
                value: "Shopfront glazing & entrances",
            },
            { label: "Framing", value: "Slim aluminium, thermally broken options" },
            { label: "Glazing", value: "Toughened & laminated safety glass" },
            { label: "Hardware", value: "Multi-point locking entrances" },
            { label: "Finish", value: "Powder-coat or anodised" },
            { label: "Project Scale", value: "Retail & commercial" },
            {
                label: "Documentation",
                value: "Shop drawings & compliance data",
            },
            {
                label: "Lead Time",
                value: "Project specific; quoted on enquiry",
            },
        ],
        seoFaqs: [
            {
                question:
                    "What types of aluminium shop fronts does Aluverse supply?",
                answer: "Aluverse supplies slim-framed shopfront glazing, fixed display windows, and framed or frameless aluminium entrance doors. Each shop front is engineered to suit the tenancy opening, security needs, and the look of the business.",
            },
            {
                question:
                    "Are your shop fronts compliant with Australian standards?",
                answer: "Yes. Our shop fronts are glazed to AS 1288 with toughened or laminated safety glass, and aluminium framing is fabricated to AS 2047 where applicable. Compliance documentation is supplied with every project.",
            },
            {
                question:
                    "Can you handle the design and installation as a single package?",
                answer: "Yes. Aluverse provides a single point of accountability across design, shop drawing, fabrication, and on-site installation. We coordinate directly with the builder, shopfitter, and tenant throughout the project.",
            },
            {
                question:
                    "What project scale do shop fronts typically suit?",
                answer: "Aluminium shop fronts are most often specified for retail tenancies, hospitality venues, and commercial fitouts. We handle single-shop refits through to multi-tenancy developments, with capacity to suit the program.",
            },
            {
                question:
                    "Do you supply framed and frameless shopfront entrances?",
                answer: "Yes. Aluverse fabricates both framed aluminium entrance doors and frameless glass entrances, with commercial-grade hardware and multi-point locking specified to suit foot traffic and security requirements.",
            },
            {
                question: "How is pricing calculated for an aluminium shop front?",
                answer: "Shop front pricing is project specific and depends on opening size, glazing specification, entrance and hardware selection, finish, and site access. We quote on enquiry following a site measure or review of drawings.",
            },
        ],
        related: ["bifold-doors", "sliding-doors", "french-doors"],
    },
];

export const windowProducts = products.filter(
    product => product.category === "windows"
);
export const doorProducts = products.filter(
    product => product.category === "doors"
);
export const screenProducts = products.filter(
    product => product.category === "screens"
);
export const shopFrontProducts = products.filter(
    product => product.category === "shopfronts"
);

export const footerProductSlugs = [
    "sliding-windows",
    "awning-windows",
    "double-hung-windows",
    "bifold-doors",
    "french-doors",
    "sliding-doors",
    "stainless-steel-mesh",
    "fabric-mesh",
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
        id: "screens",
        label: "Screens",
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
