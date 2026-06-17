import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CMS Studio",
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-base-bg container-padding text-center">
      <h1 className="font-display text-display-md text-neutral-50">Sanity Studio</h1>
      {projectId ? (
        <p className="mt-4 max-w-md text-body-md text-neutral-500">
          Configure Sanity Studio with your project ID. Run{" "}
          <code className="text-brand-400">npx sanity dev</code> for local editing, or deploy
          studio separately.
        </p>
      ) : (
        <p className="mt-4 max-w-md text-body-md text-neutral-500">
          Set <code className="text-brand-400">NEXT_PUBLIC_SANITY_PROJECT_ID</code> in your
          environment to enable CMS integration.
        </p>
      )}
      <Link href="/" className="mt-8 text-sm text-electric-400 hover:text-electric-300">
        ← Back to site
      </Link>
    </div>
  );
}
