import Footer from "@/components/commons/Footer";
const MobileFilters = dynamic(
  () => import("@/components/commons/MobileFilters"),
  {},
);
import Navbar from "@/components/commons/Navbar";
import dynamic from "next/dynamic";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-5rem)]">{children}</div>
      {children && <Footer />}
    </div>
  );
}
