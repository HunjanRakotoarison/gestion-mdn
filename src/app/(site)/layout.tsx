import Navbar from "@/ui/components/Navbar/Navbar";
import Footer from "@/ui/components/Footer/Footer";
import Map from "@/ui/components/Footer/Map";
import ScrollToHash from "@/ui/components/ScrollToHash";
import GoogleTranslate from "@/ui/components/GoogleTranslate";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GoogleTranslate />
      <Navbar />
      <ScrollToHash />
      <main className="flex-1">{children}</main>
      <Map />
      <Footer />
    </>
  );
}