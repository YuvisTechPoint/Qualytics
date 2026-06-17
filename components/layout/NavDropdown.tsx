"use client";

import Link from "next/link";
import Image from "next/image";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import type { NavConfig } from "@/lib/constants";
import { getNavDropdownIcon } from "@/components/layout/nav/NavDropdownIcons";
import { cn } from "@/lib/utils";

function NavCaret({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-4 w-4", className)} aria-hidden>
      <path
        d="M9 11L12 14L15 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DropdownLink({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group flex min-w-[200px] flex-col gap-2.5 border border-dashed border-neutral-800 bg-neutral-900 p-4 text-white transition-[color,background-color,border-color] duration-300 hover:border-neutral-600 hover:bg-transparent hover:text-brand-400"
    >
      <div className="flex items-center gap-2">
        {getNavDropdownIcon(href)}
        <span className="text-base font-medium leading-snug">{title}</span>
      </div>
      <p className="max-w-[50ch] text-sm leading-snug text-neutral-500 transition-colors duration-300 group-hover:text-neutral-400">
        {description}
      </p>
    </Link>
  );
}

function FeaturedCard({ title, href, image }: { title: string; href: string; image: string }) {
  return (
    <Link
      href={href}
      className="group flex h-full w-[18.75rem] max-w-full flex-none flex-col gap-3 border border-dashed border-neutral-800 bg-neutral-900 p-4 text-white transition-[color,background-color,border-color] duration-300 hover:border-neutral-600 hover:bg-transparent hover:text-brand-400"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={image} alt="" fill className="object-cover" sizes="300px" />
      </div>
      <div className="text-base font-medium leading-snug">{title}</div>
    </Link>
  );
}

function DropdownPanel({ config }: { config: NavConfig }) {
  const { layout, items, featured } = config;

  const contentClass =
    layout === "single"
      ? "grid grid-cols-1 gap-3"
      : layout === "company"
        ? "grid grid-cols-[1fr_auto] gap-3"
        : "grid grid-cols-[1fr_1fr_auto] gap-3";

  return (
    <div className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-[90rem] gap-16 p-6 text-white lg:gap-28 lg:p-8">
      <span className="shrink-0 whitespace-nowrap font-sans text-xl font-medium leading-tight text-white">
        {config.label}
      </span>

      <div className={cn("w-full min-w-0", contentClass)}>
        {layout === "single" ? (
          <div className="flex flex-col gap-3">
            {items.map((item) => (
              <DropdownLink key={item.href} {...item} />
            ))}
          </div>
        ) : layout === "company" ? (
          <>
            <div className="flex flex-col gap-3">
              {items.map((item) => (
                <DropdownLink key={item.href} {...item} />
              ))}
            </div>
            {featured && <FeaturedCard {...featured} />}
          </>
        ) : (
          <>
            <div className="flex flex-col gap-3">
              {items.slice(0, 3).map((item) => (
                <DropdownLink key={item.href} {...item} />
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {items.slice(3).map((item) => (
                <DropdownLink key={item.href} {...item} />
              ))}
            </div>
            {featured && <FeaturedCard {...featured} />}
          </>
        )}
      </div>
      </div>
    </div>
  );
}

export function NavDropdown({ config }: { config: NavConfig }) {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Trigger
        className={cn(
          "group flex items-center gap-1 rounded-md px-3 py-2 font-sans text-sm font-medium text-white/80 transition-colors duration-300",
          "hover:text-white data-[state=open]:text-brand-400"
        )}
      >
        {config.label}
        <NavCaret className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
      </NavigationMenu.Trigger>
      <NavigationMenu.Content className="w-full">
        <DropdownPanel config={config} />
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
}
