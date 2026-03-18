import type { ImageMetadata } from "astro";

import aboutPageHero from "./about-page-hero.webp";
import awningWindowCard from "./awning-window-card.webp";
import awningWindowHero from "./awning-window-hero.webp";
import bifoldDoorCard from "./bifold-door-card.webp";
import bifoldDoorHero from "./bifold-door-hero.webp";
import bifoldWindowCard from "./bifold-window-card.webp";
import bifoldWindowHero from "./bifold-window-hero.webp";
import casementWindowCard from "./casement-window-card.webp";
import casementWindowHero from "./casement-window-hero.webp";
import contactPageHero from "./contact-page-hero.webp";
import doorsPageHero from "./doors-page-hero.webp";
import doubleGlazingCard from "./double-glazing-card.webp";
import doubleGlazingHero from "./double-glazing-hero.webp";
import doubleHungWindowCard from "./double-hung-window-card.webp";
import doubleHungWindowHero from "./double-hung-window-hero.webp";
import frenchDoorCard from "./french-door-card.webp";
import frenchDoorHero from "./french-door-hero.webp";
import hingedDoorCard from "./hinged-door-card.webp";
import hingedDoorHero from "./hinged-door-hero.webp";
import quotePageHero from "./quote-page-hero.webp";
import slidingDoorCard from "./sliding-door-card.webp";
import slidingDoorHero from "./sliding-door-hero.webp";
import slidingWindowCard from "./sliding-window-card.webp";
import slidingWindowHero from "./sliding-window-hero.webp";
import stackingDoorCard from "./stacking-door-card.webp";
import stackingDoorHero from "./stacking-door-hero.webp";
import windowsPageHero from "./windows-page-hero.webp";
import workshopPhoto from "./workshop-photo.webp";

type ProductImageSet = {
    card: ImageMetadata;
    hero: ImageMetadata;
};

export const productImages = {
    slidingWindows: {
        card: slidingWindowCard,
        hero: slidingWindowHero,
    },
    awningWindows: {
        card: awningWindowCard,
        hero: awningWindowHero,
    },
    casementWindows: {
        card: casementWindowCard,
        hero: casementWindowHero,
    },
    bifoldWindows: {
        card: bifoldWindowCard,
        hero: bifoldWindowHero,
    },
    doubleGlazingWindows: {
        card: doubleGlazingCard,
        hero: doubleGlazingHero,
    },
    doubleHungWindows: {
        card: doubleHungWindowCard,
        hero: doubleHungWindowHero,
    },
    slidingDoors: {
        card: slidingDoorCard,
        hero: slidingDoorHero,
    },
    bifoldDoors: {
        card: bifoldDoorCard,
        hero: bifoldDoorHero,
    },
    frenchDoors: {
        card: frenchDoorCard,
        hero: frenchDoorHero,
    },
    hingedDoors: {
        card: hingedDoorCard,
        hero: hingedDoorHero,
    },
    stackingDoors: {
        card: stackingDoorCard,
        hero: stackingDoorHero,
    },
} as const satisfies Record<string, ProductImageSet>;

export const pageImages = {
    aboutPageHero,
    contactPageHero,
    doorsPageHero,
    quotePageHero,
    windowsPageHero,
    workshopPhoto,
} as const;
