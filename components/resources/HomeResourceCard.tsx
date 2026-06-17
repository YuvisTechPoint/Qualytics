import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { ResourceItem } from "@/lib/content";

export function HomeResourceCard({
  title,
  excerpt,
  date,
  href,
  image,
}: Pick<ResourceItem, "title" | "excerpt" | "date" | "href" | "image">) {
  return (
    <article className="flex h-full flex-col">
      <Link href={href} className="group block">
        <div className="relative overflow-hidden rounded-sm bg-neutral-900">
          <div className="absolute left-3 top-3 z-10 rounded-sm bg-black/70 px-2 py-1">
            <time className="font-mono text-xs text-[#ffffff]">{formatDate(date)}</time>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden">
            {image ? (
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="h-full w-full bg-neutral-800" />
            )}
          </div>
        </div>
      </Link>

      <div className="mt-4 flex flex-1 flex-col">
        <Link href={href} className="group">
          <h3 className="font-sans text-lg font-semibold leading-snug text-[#ffffff] transition-opacity group-hover:opacity-80">
            {title}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-neutral-500">
          {excerpt}
        </p>
      </div>
    </article>
  );
}
