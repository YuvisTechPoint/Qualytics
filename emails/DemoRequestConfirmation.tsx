import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Link,
} from "@react-email/components";

export function DemoRequestConfirmation({ firstName }: { firstName: string }) {
  return (
    <Html>
      <Head />
      <Preview>Thanks for requesting a Qualytics demo</Preview>
      <Body style={{ backgroundColor: "#09090F", color: "#F8F9FA", fontFamily: "sans-serif" }}>
        <Container>
          <Heading style={{ color: "#FF6B35" }}>Thanks, {firstName}.</Heading>
          <Section>
            <Text>
              We&apos;ve received your demo request and a member of our team will be in touch
              within one business day.
            </Text>
            <Text>
              In the meantime, explore our{" "}
              <Link href="https://qualytics.ai/resources" style={{ color: "#38ABF0" }}>
                resources hub
              </Link>
              .
            </Text>
            <Text style={{ color: "#ADB5BD", fontSize: 12 }}>
              Qualytics Inc. · Data Control for Trusted Context
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
