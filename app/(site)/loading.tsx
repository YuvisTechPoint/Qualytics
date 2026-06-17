import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-base-bg container-padding py-24">
      <Skeleton className="h-12 w-2/3 max-w-lg" />
      <Skeleton className="mt-6 h-6 w-full max-w-xl" />
      <Skeleton className="mt-4 h-6 w-full max-w-lg" />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <Skeleton className="h-48" />
        <Skeleton className="h-48" />
        <Skeleton className="h-48" />
      </div>
    </div>
  );
}
