"use client";
import Filter from "./Filter";
import { API_BASE_URL_CLIENT } from "@/lib/base_url_client";
import useSWR from "swr";

const FilterSection = async () => {
  const { data: brands} = useSWR(`${API_BASE_URL_CLIENT}/brand`);

  return (
    <>
      <Filter filter={brands} heading="Brands" valueKey="brandId" />
    </>
  );
};

export default FilterSection;
