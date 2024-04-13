import FeaturedSection from "@/app/(root)/[storeId]/(home)/components/FeaturedSection";
import dynamic from "next/dynamic";
import CarouselSkeleton from "./components/CarouselSkeleton";
const HomeCarousel = dynamic(
  () => import("@/app/(root)/[storeId]/(home)/components/HomeCarousel"),
  {
    loading: () => <CarouselSkeleton />,
  },
);

const HomePage = async ({
  searchParams,
}: {
  searchParams: { brandId: string };
}) => {
  const { brandId } = searchParams;

  return (
    <div className="py-4 space-y-10 lg:px-0 md:px-0 sm:px-0 px-5">
      <HomeCarousel />
      <FeaturedSection brandId={brandId} />
    </div>
  );
};

export default HomePage;
