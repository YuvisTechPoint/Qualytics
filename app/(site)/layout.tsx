import { AnnouncementBar, AnnouncementProvider } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/animations/PageTransition";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <AnnouncementProvider>
      <AnnouncementBar />
      <Header />
      <main className="pt-[6.5rem]">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </AnnouncementProvider>
  );
}
