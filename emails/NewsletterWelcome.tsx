import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "@react-email/components";

export function NewsletterWelcome({ email }: { email: string }) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Qualytics insights</Preview>
      <Body style={{ backgroundColor: "#09090F", color: "#F8F9FA", fontFamily: "sans-serif" }}>
        <Container>
          <Heading style={{ color: "#FF6B35" }}>Welcome!</Heading>
          <Text>Thanks for subscribing, {email}.</Text>
          <Text>You&apos;ll receive the latest on data quality and AI governance.</Text>
        </Container>
      </Body>
    </Html>
  );
}
