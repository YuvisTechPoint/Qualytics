"use client";

import { createContext, useContext } from "react";
import Link from "next/link";

const AnnouncementContext = createContext({ visible: true });

export function useAnnouncement() {
  return useContext(AnnouncementContext);
}

export function AnnouncementProvider({ children }: { children: React.ReactNode }) {
  return (
    <AnnouncementContext.Provider value={{ visible: true }}>
      {children}
    </AnnouncementContext.Provider>
  );
}

export function AnnouncementBar() {
  return (
    <div className="fixed top-0 z-[60] w-full bg-brand-400">
      <div className="flex h-10 items-center justify-center px-4">
        <p className="text-center text-sm text-white">
          How mature is your data quality program?{" "}
          <Link
            href="https://dataqualitymaturity.qualytics.ai/?utm_source=website&utm_medium=banner&utm_campaign=dqma"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-90"
          >
            Find out in 5 minutes.
          </Link>
        </p>
      </div>
    </div>
  );
}
