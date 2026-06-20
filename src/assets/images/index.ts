import type { ImageMetadata } from "astro";

import aboutPageHero from "./about-page-hero.webp";
import aluminiumFacadeCard from "./aluminium-facade-card.webp";
import aluminiumFacadeHero from "./aluminium-facade-hero.webp";
import awningWindowCard from "./awning-window-card.webp";
import awningWindowHero from "./awning-window-hero.webp";
import bifoldDoorCard from "./bifold-door-card.webp";
import bifoldDoorHero from "./bifold-door-hero.webp";
import bifoldWindowCard from "./bifold-window-card.webp";
import bifoldWindowHero from "./bifold-window-hero.webp";
import casementWindowCard from "./casement-window-card.webp";
import casementWindowHero from "./casement-window-hero.webp";
import commercialHero from "./commercial-hero.webp";
import commercialFrameDetail from "./commercial-frame-detail.webp";
import commercialFabrication from "./commercial-fabrication.webp";
import fabricMeshCard from "./fabric-mesh-card.webp";
import fabricMeshHero from "./fabric-mesh-hero.webp";
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
import screensPageHero from "./screens-page-hero.webp";
import slidingDoorCard from "./sliding-door-card.webp";
import slidingDoorHero from "./sliding-door-hero.webp";
import slidingWindowCard from "./sliding-window-card.webp";
import stainlessSteelMeshCard from "./stainless-steel-mesh-card.webp";
import stainlessSteelMeshHero from "./stainless-steel-mesh-hero.webp";
import slidingWindowHero from "./sliding-window-hero.webp";
import stackingDoorCard from "./stacking-door-card.webp";
import stackingDoorHero from "./stacking-door-hero.webp";
import windowsPageHero from "./windows-page-hero.webp";

import aGradeLogo from "./partners/a-grade.webp";
import alspecLogo from "./partners/alspec.webp";
import darleyLogo from "./partners/darley.webp";
import keelerLogo from "./partners/keeler.webp";
import pressMetalLogo from "./partners/press-metal.webp";
import whitcoLogo from "./partners/whitco.webp";

import configCommercialAwning from "./configurations/commercial-awning.webp";
import configFivePanelStackerDoor from "./configurations/five-panel-stacker-door.webp";
import configFourPanelStackerDoor from "./configurations/four-panel-stacker-door.webp";
import configFrenchDoor from "./configurations/french-door.webp";
import configFssfSlidingWindow from "./configurations/fssf-sliding-window.webp";
import configHighlightSlidingDoor from "./configurations/highlight-sliding-door.webp";
import configHighlightSlidingWindow from "./configurations/highlight-sliding-window.webp";
import configLouvres from "./configurations/louvres.webp";
import configSfSlidingWindow from "./configurations/sf-sliding-window.webp";
import configSfsSlidingWindow from "./configurations/sfs-sliding-window.webp";
import configSixPanelStackerDoor from "./configurations/six-panel-stacker-door.webp";
import configStackerDoor from "./configurations/stacker-door.webp";
import configStackerWindow from "./configurations/stacker-window.webp";
import configTopHungDoor from "./configurations/top-hung-door.webp";

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
    stainlessSteelMesh: {
        card: stainlessSteelMeshCard,
        hero: stainlessSteelMeshHero,
    },
    fabricMesh: {
        card: fabricMeshCard,
        hero: fabricMeshHero,
    },
    aluminiumFacades: {
        card: aluminiumFacadeCard,
        hero: aluminiumFacadeHero,
    },
} as const satisfies Record<string, ProductImageSet>;

export const pageImages = {
    aboutPageHero,
    commercialHero,
    commercialFrameDetail,
    commercialFabrication,
    doorsPageHero,
    quotePageHero,
    screensPageHero,
    windowsPageHero,
} as const;

export type PartnerLogo = {
    name: string;
    image: ImageMetadata;
    aspectHint: "wide" | "tall";
};

export const partnerLogos: PartnerLogo[] = [
    { name: "A Grade Aluminium & Glass", image: aGradeLogo, aspectHint: "wide" },
    { name: "Alspec", image: alspecLogo, aspectHint: "wide" },
    { name: "Press Metal", image: pressMetalLogo, aspectHint: "wide" },
    { name: "Darley", image: darleyLogo, aspectHint: "wide" },
    { name: "Keeler Hardware", image: keelerLogo, aspectHint: "wide" },
    { name: "Whitco", image: whitcoLogo, aspectHint: "wide" },
];

export type ProductConfiguration = {
    name: string;
    code?: string;
    image: ImageMetadata;
};

export const windowConfigurations: ProductConfiguration[] = [
    { name: "Sliding Window", code: "SF", image: configSfSlidingWindow },
    { name: "Sliding Window", code: "SFS", image: configSfsSlidingWindow },
    { name: "Sliding Window", code: "FSSF", image: configFssfSlidingWindow },
    { name: "Highlight Sliding Window", image: configHighlightSlidingWindow },
    { name: "Stacker Window", image: configStackerWindow },
    { name: "Commercial Awning", image: configCommercialAwning },
    { name: "Louvre Window", image: configLouvres },
];

export const doorConfigurations: ProductConfiguration[] = [
    { name: "Stacker Door", image: configStackerDoor },
    { name: "Stacker Door", code: "4-Panel", image: configFourPanelStackerDoor },
    { name: "Stacker Door", code: "5-Panel", image: configFivePanelStackerDoor },
    { name: "Stacker Door", code: "6-Panel", image: configSixPanelStackerDoor },
    { name: "Highlight Sliding Door", image: configHighlightSlidingDoor },
    { name: "French Door", image: configFrenchDoor },
    { name: "Top-Hung Door", image: configTopHungDoor },
];
