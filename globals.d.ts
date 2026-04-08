type DataLayerEvent = { event: string } & Record<string, string>;

declare global {
    var dataLayer: DataLayerEvent[] | undefined;
}

export {};
