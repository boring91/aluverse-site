import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Row,
    Section,
    Text,
} from "@react-email/components";
import { company } from "../data/site";

export type Props = {
    name: string;
    propertyTypeLabel: string;
    interestLabel: string;
    timeframeLabel: string;
    details: string;
};

const colors = {
    page: "#f2f3f4",
    card: "#ffffff",
    border: "#e0e2e4",
    dark: "#0a0a0a",
    text: "#2d2c2c",
    textSecondary: "#555555",
    textMuted: "#667085",
    accent: "#b5b9bd",
};

const fontDisplay = "'DM Serif Text', Georgia, 'Times New Roman', Times, serif";
const fontBody =
    "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

export function QuoteConfirmationEmail({
    name,
    propertyTypeLabel,
    interestLabel,
    timeframeLabel,
    details,
}: Props) {
    const previewText = `Thanks ${name} — we've received your quote request and will be in touch soon.`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Body
                style={{
                    margin: 0,
                    padding: 0,
                    backgroundColor: colors.page,
                    fontFamily: fontBody,
                    color: colors.text,
                }}
            >
                <Container
                    style={{
                        maxWidth: "560px",
                        margin: "0 auto",
                        padding: "32px 16px",
                    }}
                >
                    <Section
                        style={{
                            backgroundColor: colors.dark,
                            padding: "28px 32px",
                            borderTopLeftRadius: "8px",
                            borderTopRightRadius: "8px",
                        }}
                    >
                        <Heading
                            as="h1"
                            style={{
                                margin: 0,
                                fontFamily: fontDisplay,
                                fontWeight: 400,
                                fontSize: "28px",
                                letterSpacing: "0.02em",
                                color: "#ffffff",
                            }}
                        >
                            {company.name}
                        </Heading>
                        <Text
                            style={{
                                margin: "4px 0 0",
                                fontSize: "12px",
                                letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                color: colors.accent,
                            }}
                        >
                            {company.location}
                        </Text>
                    </Section>

                    <Section
                        style={{
                            backgroundColor: colors.card,
                            padding: "32px",
                            border: `1px solid ${colors.border}`,
                            borderTop: "none",
                            borderBottomLeftRadius: "8px",
                            borderBottomRightRadius: "8px",
                        }}
                    >
                        <Heading
                            as="h2"
                            style={{
                                margin: "0 0 16px",
                                fontFamily: fontDisplay,
                                fontWeight: 400,
                                fontSize: "22px",
                                color: colors.text,
                            }}
                        >
                            Thanks, {name}.
                        </Heading>

                        <Text
                            style={{
                                margin: "0 0 16px",
                                fontSize: "15px",
                                lineHeight: "24px",
                                color: colors.textSecondary,
                            }}
                        >
                            We've received your quote request and a member of
                            our team will be in touch shortly to discuss your
                            project.
                        </Text>

                        <Text
                            style={{
                                margin: "0 0 12px",
                                fontSize: "15px",
                                lineHeight: "24px",
                                color: colors.textSecondary,
                            }}
                        >
                            For your records, here is a summary of what you sent
                            us:
                        </Text>

                        <Section
                            style={{
                                backgroundColor: colors.page,
                                border: `1px solid ${colors.border}`,
                                borderRadius: "6px",
                                padding: "16px 20px",
                                margin: "0 0 24px",
                            }}
                        >
                            <SummaryRow
                                label="Property type"
                                value={propertyTypeLabel}
                            />
                            <SummaryRow
                                label="Interest"
                                value={interestLabel}
                            />
                            <SummaryRow
                                label="Timeframe"
                                value={timeframeLabel}
                                last={!details}
                            />
                            {details ? (
                                <SummaryRow
                                    label="Details"
                                    value={details}
                                    last
                                />
                            ) : null}
                        </Section>

                        <Text
                            style={{
                                margin: "0 0 8px",
                                fontSize: "15px",
                                lineHeight: "24px",
                                color: colors.textSecondary,
                            }}
                        >
                            If you need to reach us in the meantime, call{" "}
                            <Link
                                href={company.phoneHref}
                                style={{
                                    color: colors.text,
                                    fontWeight: 600,
                                    textDecoration: "none",
                                }}
                            >
                                {company.phoneDisplay}
                            </Link>.
                        </Text>

                        <Hr
                            style={{
                                margin: "28px 0 20px",
                                border: "none",
                                borderTop: `1px solid ${colors.border}`,
                            }}
                        />

                        <Text
                            style={{
                                margin: 0,
                                fontSize: "13px",
                                lineHeight: "20px",
                                color: colors.textMuted,
                            }}
                        >
                            {company.name} — {company.serviceArea}
                            <br />
                            {company.shortHours}, 6 days a week
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

type SummaryRowProps = {
    label: string;
    value: string;
    last?: boolean;
};

function SummaryRow({ label, value, last }: SummaryRowProps) {
    return (
        <Row
            style={{
                borderBottom: last ? "none" : `1px solid ${colors.border}`,
                padding: "10px 0",
            }}
        >
            <Text
                style={{
                    margin: 0,
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: colors.textMuted,
                }}
            >
                {label}
            </Text>
            <Text
                style={{
                    margin: "2px 0 0",
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: colors.text,
                    whiteSpace: "pre-wrap",
                }}
            >
                {value}
            </Text>
        </Row>
    );
}

export default QuoteConfirmationEmail;
