import { z } from "zod";

export const demoRequestSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().min(1, "Company is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  phone: z.string().optional(),
  challenge: z.string().optional(),
  companySize: z.enum(["UNDER_500", "SIZE_500_2000", "SIZE_2000_10000", "OVER_10000"]).optional(),
  website: z.string().max(0).optional(),
});

export const trialRequestSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  company: z.string().min(1),
  website: z.string().max(0).optional(),
});

export const contactSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  jobTitle: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  website: z.string().max(0).optional(),
});

export const newsletterSchema = z.object({
  email: z.string().email(),
  firstName: z.string().optional(),
  source: z.string().optional(),
  website: z.string().max(0).optional(),
});
