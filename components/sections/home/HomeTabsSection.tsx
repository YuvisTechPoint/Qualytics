"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HOME_TAB_IMAGES } from "@/lib/assets";
import "./HomeTabsSection.css";

gsap.registerPlugin(ScrollTrigger);

const AUTOPLAY_MS = 5000;

const tabs = [
  {
    id: "tab1",
    label: "Augmented",
    title: "Augmented Data Quality",
    href: "/augmented-data-quality",
    body: "AI learns how your data behaves and generates rules automatically, adapting as data evolves. Your teams define what good looks like and guide governance. The result is broad, continuously improving coverage without the manual effort that limits most data quality programs.",
    image: HOME_TAB_IMAGES.augmented,
    imageAlt:
      "Dashboard showing anomaly and scan summary with 70.37K anomalies and check profiling with 10.47K active checks.",
  },
  {
    id: "tab2",
    label: "Governed",
    title: "Built for Humans and AI",
    href: "/built-for-humans-and-ai",
    body: "Business teams, data teams, and AI systems work on the same governed foundation for data quality. Teams investigate anomalies, define rules, and explore metadata through our low-code interface, while AgentQ makes governance accessible through natural language. Copilots and agents access the same governed context without requiring separate systems or parallel workflows.",
    image: HOME_TAB_IMAGES.governed,
    imageAlt:
      "Screens showing AI Agent and Copilot interfaces integrated with Qualytics MCP for customer data and quality checks.",
  },
  {
    id: "tab3",
    label: "Trusted",
    title: "Trusted Context at Use",
    href: "/trusted-context-at-use",
    body: [
      "Data quality is applied as real-time controls across analytics, applications, agents, and AI workflows, shaping how data is used. Copilots and agents are first-class citizens able to access quality signals through MCP, API, and real-time interfaces.",
      "This makes validate-at-use possible, moving data quality from downstream checks to a system that actively governs how insights are generated and actions are taken.",
    ],
    image: HOME_TAB_IMAGES.trusted,
    imageAlt:
      "Chat interface showing Agent Q assessing data quality for customer support AI readiness with a score of 69/100 not ready.",
  },
];

function ReadMoreArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15.6531 12.875H5V11.125H15.6531L10.7531 6.225L12 5L19 12L12 19L10.7531 17.775L15.6531 12.875Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HomeTabsSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const contentItems = Array.from(
      wrapper.querySelectorAll<HTMLElement>('[data-tabs="content-item"]')
    );
    const visualItems = Array.from(
      wrapper.querySelectorAll<HTMLElement>('[data-tabs="visual-item"]')
    );

    let activeContent: HTMLElement | null = null;
    let activeVisual: HTMLElement | null = null;
    let isAnimating = false;
    let progressBarTween: gsap.core.Tween | null = null;
    let isFirstLoad = true;
    let hasStarted = false;

    const startProgressBar = (index: number) => {
      progressBarTween?.kill();
      const bar = contentItems[index]?.querySelector<HTMLElement>(
        '[data-tabs="item-progress"]'
      );
      if (!bar) return;

      gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });
      progressBarTween = gsap.to(bar, {
        scaleX: 1,
        duration: AUTOPLAY_MS / 1000,
        ease: "power1.inOut",
        onComplete: () => {
          if (!isAnimating) {
            const nextIndex = (index + 1) % contentItems.length;
            switchTab(nextIndex);
          }
        },
      });
    };

    const switchTab = (index: number) => {
      if (isAnimating || contentItems[index] === activeContent) return;

      isAnimating = true;
      hasStarted = true;
      progressBarTween?.kill();

      const outgoingContent = activeContent;
      const outgoingVisual = activeVisual;
      const outgoingBar = outgoingContent?.querySelector<HTMLElement>(
        '[data-tabs="item-progress"]'
      );

      const incomingContent = contentItems[index];
      const incomingVisual = visualItems[index];
      const incomingBar = incomingContent.querySelector<HTMLElement>(
        '[data-tabs="item-progress"]'
      );

      outgoingContent?.classList.remove("active");
      outgoingVisual?.classList.remove("active");
      incomingContent.classList.add("active");
      incomingVisual.classList.add("active");

      const tl = gsap.timeline({
        defaults: { duration: 0.65, ease: "power3.out" },
        onComplete: () => {
          activeContent = incomingContent;
          activeVisual = incomingVisual;
          isAnimating = false;
          startProgressBar(index);
        },
      });

      if (outgoingContent && outgoingVisual && outgoingBar) {
        tl.set(outgoingBar, { transformOrigin: "right center" })
          .to(outgoingBar, { scaleX: 0, duration: 0.3 }, 0)
          .to(outgoingVisual, { autoAlpha: 0, yPercent: 3 }, 0);
      }

      if (isFirstLoad && index === 0) {
        gsap.set(incomingVisual, { autoAlpha: 1, yPercent: 0 });
        isFirstLoad = false;
      } else {
        tl.fromTo(
          incomingVisual,
          { autoAlpha: 0, yPercent: 3 },
          { autoAlpha: 1, yPercent: 0 },
          outgoingContent ? 0.3 : 0
        );
      }

      tl.set(incomingBar, { scaleX: 0, transformOrigin: "left center" }, 0);
    };

    const scrollTrigger = ScrollTrigger.create({
      trigger: wrapper,
      start: "top center",
      end: "bottom bottom",
      once: true,
      onEnter: () => switchTab(0),
    });

    const listeners = contentItems.map((item, index) => {
      const onClick = (event: Event) => {
        event.preventDefault();
        if (contentItems[index] !== activeContent) switchTab(index);
      };
      item.addEventListener("click", onClick);
      return { item, onClick };
    });

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      const rect = wrapper.getBoundingClientRect();
      const triggerY = window.innerHeight * 0.5;
      if (!hasStarted && rect.top <= triggerY && rect.bottom >= triggerY) {
        switchTab(0);
      }
    });

    return () => {
      progressBarTween?.kill();
      scrollTrigger.kill();
      listeners.forEach(({ item, onClick }) => item.removeEventListener("click", onClick));
    };
  }, []);

  return (
    <section className="bg-white text-black">
      <div className="border-b border-[#e3e0dd]">
        <div className="mx-auto max-w-[90rem] border-x border-[#e3e0dd]">
          <div className="home-tabs_wrapper">
            <div className="home-tabs_component">
              <div
                ref={wrapperRef}
                data-tabs="wrapper"
                data-tabs-autoplay="true"
                data-tabs-autoplay-duration={String(AUTOPLAY_MS)}
                className="home-tabs_layout"
              >
                <div role="tablist" className="home-tabs_links-list">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      data-tabs="content-item"
                      className="home-tabs_link"
                    >
                      <div className="home-tabs_link-content">
                        <h2 className="home-tabs_link-heading">{tab.label}</h2>
                      </div>
                      <div className="tab-content__item-bottom is-home-tabs">
                        <div
                          data-tabs="item-progress"
                          className="tab-progress is-home-tabs"
                        />
                      </div>
                    </button>
                  ))}
                </div>

                <div className="home-tabs_col">
                  <div className="home-tabs_visuals-list">
                    {tabs.map((tab) => (
                      <div
                        key={tab.id}
                        id={tab.id}
                        role="tabpanel"
                        data-tabs="visual-item"
                        className="home-tabs_visual-item"
                      >
                        <div className="home-tabs_visual-inner">
                          <div className="home-tabs_card">
                            <h3>{tab.title}</h3>
                            <div className="home-tabs_body">
                              {Array.isArray(tab.body) ? (
                                tab.body.map((paragraph) => (
                                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                                ))
                              ) : (
                                <p>{tab.body}</p>
                              )}
                            </div>
                            <Link href={tab.href} className="home-tabs_read-more">
                              Read More
                              <ReadMoreArrow />
                            </Link>
                          </div>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={tab.image}
                            alt={tab.imageAlt}
                            loading={tab.id === "tab1" ? "eager" : "lazy"}
                            className="home-tabs_image"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
