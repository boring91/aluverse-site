type GrecaptchaEnterprise = {
    execute: (siteKey: string, options: { action: string }) => Promise<string>;
    ready: (callback: () => void) => void;
};

type GrecaptchaWindow = Window &
    typeof globalThis & {
        grecaptcha?: {
            enterprise?: GrecaptchaEnterprise;
        };
    };

const recaptchaScriptId = "google-recaptcha-enterprise";
let recaptchaPromise: Promise<GrecaptchaEnterprise> | null = null;

const getGrecaptchaEnterprise = () =>
    (window as GrecaptchaWindow).grecaptcha?.enterprise;

export function loadRecaptchaEnterprise(siteKey: string) {
    if (recaptchaPromise) {
        return recaptchaPromise;
    }

    recaptchaPromise = new Promise((resolve, reject) => {
        const resolveWhenReady = () => {
            const enterprise = getGrecaptchaEnterprise();

            if (!enterprise) {
                recaptchaPromise = null;
                reject(new Error("reCAPTCHA enterprise failed to load"));
                return;
            }

            enterprise.ready(() => resolve(enterprise));
        };

        const existingScript = document.getElementById(recaptchaScriptId);
        if (existingScript) {
            resolveWhenReady();
            return;
        }

        const script = document.createElement("script");
        script.id = recaptchaScriptId;
        script.src = `https://www.google.com/recaptcha/enterprise.js?render=${encodeURIComponent(
            siteKey
        )}`;
        script.async = true;
        script.defer = true;
        script.addEventListener("load", resolveWhenReady, { once: true });
        script.addEventListener(
            "error",
            () => {
                recaptchaPromise = null;
                reject(new Error("reCAPTCHA enterprise script failed to load"));
            },
            { once: true }
        );

        document.head.appendChild(script);
    });

    return recaptchaPromise;
}

export async function executeRecaptcha(siteKey: string, action: string) {
    const enterprise = await loadRecaptchaEnterprise(siteKey);
    return enterprise.execute(siteKey, { action });
}
