"use client";
import qs from "query-string";
import { Ibrand } from "@/lib/types";
import { useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";
import { setOpenFilters } from "@/redux";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import useSWR from "swr";
import { API_BASE_URL_CLIENT } from "@/lib/base_url_client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
const MobileFilters: React.FC = ({}) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { data: brands } = useSWR(`${API_BASE_URL_CLIENT}/brand`);
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentParams = searchParams.get("brandId");
  const dispatch = useAppDispatch();

  const handleFilter = (id: string) => {
    let query = {
      ["brandId"]: id,
    };
    if (id === currentParams) {
      //@ts-ignore
      query["brandId"] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true },
    );

    router.push(url, { scroll: false });

    if (window.screen.width < 860) {
      dispatch(setOpenFilters());
    }
  };
  return (
    <div className="block sm:hidden">
      <Sheet open={openSidebar} onOpenChange={setOpenSidebar}>
        <SheetTrigger asChild>
          <Button variant="outline">
            <SlidersHorizontal className="flex-shrink-0" size={15} />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[15rem]" side="left">
          {brands &&
            brands.map((brand: Ibrand) => (
              <ul className="flex flex-col gap-4" key={brand.id}>
                <li
                  className={`${currentParams === brand.id ? "underline font-semibold" : ""} 
                    cursor-pointer 
                    hover:underline
                    text-sm
                    `}
                  onClick={() => {
                    handleFilter(brand.id);
                    setOpenSidebar(false);
                  }}
                >
                  {brand.name}
                </li>
                <hr className="mb-2" />
              </ul>
            ))}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileFilters;

//   className={cn(
//     `${openFilters ? "hidden" : ""}
//     shadow-neutral-300
//     shadow-inner
//     w-[15rem]
//     flex
//     flex-col
//     sm:hidden
//     gap-3
//     py-5
//     px-5
//     border
//     h-fit
//     mt-10`
//   )}
// >
//   <div className="flex justify-between w-full">
//     <h1 className="text-2xl font-semibold">Brands</h1>
//     <X
//       className="text-white flex "
//       onClick={() => dispatch(setOpenFilters())}
//     />
//   </div>
// </main>;
