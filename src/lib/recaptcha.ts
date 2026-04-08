import {
    RECAPTCHA_API_KEY,
    RECAPTCHA_PROJECT_ID,
    RECAPTCHA_SITE_KEY,
} from "astro:env/server";

type VerifyRecaptchaInput = {
    expectedAction: string;
    token: string;
    userAgent: string;
    userIpAddress: string;
    expectedHostname: string;
};

type RecaptchaAssessment = {
    riskAnalysis?: {
        reasons?: string[];
        score?: number;
    };
    tokenProperties?: {
        action?: string;
        hostname?: string;
        invalidReason?: string;
        valid?: boolean;
    };
};

const defaultMinScore = Number.parseFloat(
    process.env.RECAPTCHA_MIN_SCORE ?? "0.3"
);

const recaptchaMinScore = Number.isFinite(defaultMinScore)
    ? defaultMinScore
    : 0.3;

const normalizeHostname = (value: string) => value.split(":")[0].toLowerCase();

export async function verifyRecaptcha({
    expectedAction,
    expectedHostname,
    token,
    userAgent,
    userIpAddress,
}: VerifyRecaptchaInput) {
    const response = await fetch(
        `https://recaptchaenterprise.googleapis.com/v1/projects/${RECAPTCHA_PROJECT_ID}/assessments?key=${RECAPTCHA_API_KEY}`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify({
                event: {
                    expectedAction,
                    siteKey: RECAPTCHA_SITE_KEY,
                    token,
                    userAgent,
                    userIpAddress,
                },
            }),
        }
    );

    if (!response.ok) {
        return false;
    }

    const data = (await response.json()) as RecaptchaAssessment;
    const isValidToken = data.tokenProperties?.valid === true;
    const actionMatches = data.tokenProperties?.action === expectedAction;
    const hostnameMatches =
        normalizeHostname(data.tokenProperties?.hostname ?? "") ===
        normalizeHostname(expectedHostname);
    const score = data.riskAnalysis?.score ?? 0;

    return (
        isValidToken &&
        actionMatches &&
        hostnameMatches &&
        score >= recaptchaMinScore
    );
}
