"use client";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { setOpenFilters } from "@/redux";
import { Plus } from "lucide-react";

const MobileFilterButton = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Button
        onClick={() => dispatch(setOpenFilters())}
        className="sm:hidden flex items-center gap-2 w-fit"
      >
        Filters
        <Plus />
      </Button>
    </>
  );
};

export default MobileFilterButton;
