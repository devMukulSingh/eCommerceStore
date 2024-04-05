import { getBillboard } from "@/actions/getBillboard";
import FeaturedSection from "@/app/(root)/[storeId]/(home)/components/FeaturedSection";
import HomeCarousel from "@/app/(root)/[storeId]/(home)/components/HomeCarousel";

const HomePage = async ({
  searchParams,
}: {
  searchParams: { brandId: string };
}) => {
  const { brandId } = searchParams;

  const billboard = await getBillboard("25628a9a-b840-4ba0-8690-2e3bde751d2a");

  return (
    <main className="py-4 space-y-10 lg:px-0 md:px-0 sm:px-0 px-5">
      <HomeCarousel billboard={billboard} />

      <FeaturedSection brandId={brandId} />
    </main>
  );
};

export default HomePage;
