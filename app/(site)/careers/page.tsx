import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { DemoCTA } from "@/components/sections/shared/DemoCTA";

const FALLBACK_JOBS = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    applyUrl: "mailto:careers@qualytics.ai",
  },
  {
    title: "Enterprise Account Executive",
    department: "Sales",
    location: "New York, NY",
    type: "Full-time",
    applyUrl: "mailto:careers@qualytics.ai",
  },
  {
    title: "Data Quality Solutions Architect",
    department: "Customer Success",
    location: "Remote",
    type: "Full-time",
    applyUrl: "mailto:careers@qualytics.ai",
  },
];

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Qualytics team and help enterprises operationalize trusted data.",
};

export default async function CareersPage() {
  let jobs = FALLBACK_JOBS;

  try {
    const dbJobs = await prisma.jobPosting.findMany({
      where: { isActive: true },
      orderBy: { publishedAt: "desc" },
    });
    if (dbJobs.length > 0) {
      jobs = dbJobs.map((j) => ({
        title: j.title,
        department: j.department,
        location: j.location,
        type: j.type,
        applyUrl: j.applyUrl,
      }));
    }
  } catch {
    /* use fallback */
  }

  return (
    <>
      <section className="section-padding bg-base-bg">
        <div className="mx-auto max-w-wide container-padding">
          <ScrollReveal>
            <h1 className="font-display text-display-xl text-neutral-50">Careers</h1>
            <p className="mt-4 max-w-2xl text-body-lg text-neutral-500">
              Join us in building the data control layer for trusted context.
            </p>
          </ScrollReveal>
          <div className="mt-12 space-y-4">
            {jobs.map((job) => (
              <ScrollReveal key={job.title}>
                <Card interactive className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-neutral-50">{job.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge variant="neutral">{job.department}</Badge>
                      <Badge variant="electric">{job.location}</Badge>
                      <Badge variant="brand">{job.type}</Badge>
                    </div>
                  </div>
                  <Link href={job.applyUrl} className="text-sm font-medium text-brand-400 hover:text-brand-300">
                    Apply →
                  </Link>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <DemoCTA headline="Don't see the right role?" subtext="Send us your resume at careers@qualytics.ai" ctaText="Get in touch" ctaHref="/contact" />
    </>
  );
}
