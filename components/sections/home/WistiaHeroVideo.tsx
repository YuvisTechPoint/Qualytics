"use client";

import Script from "next/script";

export function WistiaHeroVideo() {
  return (
    <div className="w-full overflow-hidden rounded-sm border border-white/10 bg-black">
      <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
      <Script
        src="https://fast.wistia.com/embed/m1nd1pym0e.js"
        strategy="afterInteractive"
        type="module"
      />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error Wistia web component */}
      <wistia-player media-id="m1nd1pym0e" aspect="1.7777777777777777" className="block w-full" />
    </div>
  );
}
