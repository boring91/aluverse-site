import type { ImageMetadata } from "astro";

import { siteUrl } from "../../site-config.mjs";
import { productImages } from "../assets/images";
import { company } from "../data/site";

type JsonLdValue =
    | string
    | number
    | boolean
    | null
    | JsonLdObject
    | JsonLdValue[];

export type JsonLdObject = {
    [key: string]: JsonLdValue;
};

type BreadcrumbEntry = {
    label: string;
    href?: string;
};

type FaqEntry = {
    question: string;
    answer: string;
};

type ListEntry = {
    name: string;
    href: string;
};

const siteOrigin = siteUrl;
const businessId = `${siteOrigin}#business`;
const websiteId = `${siteOrigin}#website`;
const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
] as const;

export const createAbsoluteUrl = (path: string) =>
    new URL(path, siteOrigin).toString();

export const createAbsoluteImageUrl = (image: ImageMetadata | string) =>
    typeof image === "string"
        ? createAbsoluteUrl(image)
        : createAbsoluteUrl(image.src);

const defaultImageUrl = createAbsoluteImageUrl(
    productImages.stackingDoors.hero
);

export const getBaseSchemas = ({
    title,
    description,
    canonicalUrl,
    imageUrl = defaultImageUrl,
}: {
    title: string;
    description: string;
    canonicalUrl: string;
    imageUrl?: string;
}) =>
    [
        {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": businessId,
            name: company.name,
            description: company.tagline,
            image: imageUrl,
            logo: createAbsoluteUrl("/logo-dark.svg"),
            url: siteOrigin,
            telephone: company.phoneHref.replace("tel:", ""),
            email: company.emailHref.replace("mailto:", ""),
            address: {
                "@type": "PostalAddress",
                addressLocality: "Sydney",
                addressRegion: "NSW",
                addressCountry: "AU",
            },
            areaServed: {
                "@type": "City",
                name: company.location,
            },
            openingHoursSpecification: dayNames.map(day => ({
                "@type": "OpeningHoursSpecification",
                dayOfWeek: day,
                opens: "06:00",
                closes: "18:00",
            })),
            sameAs: company.socials.map(social => social.href),
            serviceType: [
                "Custom aluminium windows",
                "Custom aluminium doors",
                "Custom aluminium screens",
                "Window replacement",
                "Door replacement",
                "Double glazing",
                "Security screens",
                "Fly screens",
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": websiteId,
            name: company.name,
            url: siteOrigin,
            description: company.tagline,
            publisher: {
                "@id": businessId,
            },
            inLanguage: "en-AU",
        },
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: {
                "@id": websiteId,
            },
            about: {
                "@id": businessId,
            },
            primaryImageOfPage: {
                "@type": "ImageObject",
                url: imageUrl,
            },
            inLanguage: "en-AU",
        },
    ] satisfies JsonLdObject[];

export const getBreadcrumbSchema = (
    items: BreadcrumbEntry[],
    currentPath: string
) =>
    ({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: createAbsoluteUrl(item.href ?? currentPath),
        })),
    } satisfies JsonLdObject);

export const getFaqSchema = (faqs: FaqEntry[]) =>
    ({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    } satisfies JsonLdObject);

export const getItemListSchema = (name: string, items: ListEntry[]) =>
    ({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name,
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            url: createAbsoluteUrl(item.href),
        })),
    } satisfies JsonLdObject);

type ServiceProperty = {
    name: string;
    value: string;
};

type ServiceSchemaConfig = {
    name: string;
    description: string;
    canonicalUrl: string;
    serviceType: string;
    category: string;
    imageUrl?: string;
    additionalProperties?: ServiceProperty[];
};

export const getServiceSchema = ({
    name,
    description,
    canonicalUrl,
    serviceType,
    category,
    imageUrl = defaultImageUrl,
    additionalProperties = [],
}: ServiceSchemaConfig) =>
    ({
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url: canonicalUrl,
        image: imageUrl,
        category,
        serviceType,
        areaServed: {
            "@type": "City",
            name: company.location,
        },
        provider: {
            "@id": businessId,
        },
        brand: {
            "@type": "Brand",
            name: company.name,
        },
        additionalProperty: additionalProperties.map(property => ({
            "@type": "PropertyValue",
            name: property.name,
            value: property.value,
        })),
    } satisfies JsonLdObject);
