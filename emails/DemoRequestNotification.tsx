import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface DemoRequestNotificationProps {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  challenge?: string | null;
}

export function DemoRequestNotification({
  firstName,
  lastName,
  email,
  company,
  jobTitle,
  challenge,
}: DemoRequestNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>New demo request from {firstName} {lastName}</Preview>
      <Body style={{ backgroundColor: "#09090F", color: "#F8F9FA", fontFamily: "sans-serif" }}>
        <Container>
          <Heading style={{ color: "#FF6B35" }}>New Demo Request</Heading>
          <Section>
            <Text>Name: {firstName} {lastName}</Text>
            <Text>Email: {email}</Text>
            <Text>Company: {company}</Text>
            <Text>Job Title: {jobTitle}</Text>
            {challenge && <Text>Challenge: {challenge}</Text>}
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
