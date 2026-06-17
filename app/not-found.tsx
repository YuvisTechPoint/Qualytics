import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-base-bg container-padding text-center">
      <h1 className="font-display text-display-lg text-neutral-50">404</h1>
      <p className="mt-4 text-body-lg text-neutral-500">Page not found.</p>
      <Button className="mt-8" asChild>
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
