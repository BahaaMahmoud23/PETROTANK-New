import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/Providers";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <Header />
      <main>{children}</main>
      <Footer />
    </Providers>
  );
}
