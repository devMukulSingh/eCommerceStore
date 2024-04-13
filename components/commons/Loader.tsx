"use client";
import {  Loader2Icon } from "lucide-react";

const Loader = () => {
  return (
    <div className="w-[100vw] flex justify-center">
      <Loader2Icon className="animate-spin mt-10" size={40} />
    </div>
  );
};

export default Loader;
