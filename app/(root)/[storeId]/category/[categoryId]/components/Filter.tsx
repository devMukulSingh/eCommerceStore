"use client";
import qs from "query-string";
import { Ibrand } from "@/lib/types";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { FolderClosed, SidebarClose, X } from "lucide-react";
import { setOpenFilters } from "@/redux";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export interface FilterProps {
  filter: Ibrand[] | null;
  heading: string;
  valueKey: string;
  className?: string;
}

const Filter: React.FC<FilterProps> = ({
  filter,
  heading,
  valueKey,
  className,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentParams = searchParams.get(valueKey);
  const dispatch = useAppDispatch();

  const handleFilter = (id: string) => {
    let query = {
      [valueKey]: id,
    };
    if (id === currentParams) {
      //@ts-ignore
      query[valueKey] = null;
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
  const openFilters = useAppSelector((state) => state.ecomm.openFilters);
  return (
    <main
      className={cn(
        `${!openFilters ? "hidden" : ""} hidden sm:flex sm:flex-col gap-3 py-5 pl-5 pr-15 pr-20 border h-fit mt-10`,
        className,
      )}
    >
      <h1 className="text-2xl font-semibold">{heading}</h1>
      <X
        className="sm:hidden flex ml-auto absolute top-[20px] right-5"
        onClick={() => dispatch(setOpenFilters())}
      />
      <section className="flex flex-col gap-2 sm:mt-0 mt-5">
        {filter &&
          filter.map((f) => (
            <ul key={f.id}>
              <li
                className={`${currentParams === f.id ? "underline font-semibold" : ""} cursor-pointer hover:underline`}
                onClick={() => handleFilter(f.id)}
              >
                {f.name}
              </li>
            </ul>
          ))}
      </section>
    </main>
  );
};

export default Filter;
