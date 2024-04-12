import Footer from "@/components/commons/Footer";
import MobileFilters from "@/components/commons/MobileFilters";
import Navbar from "@/components/commons/Navbar";
import Sidebar from "@/components/commons/Sidebar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div>
      <Navbar />
      <Sidebar />
      <MobileFilters/>
      <div className="min-h-[calc(100vh-5rem)]">{children}</div>
      {children && <Footer />}
    </div>
  );
}
