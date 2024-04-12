"use client";
import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <main className="w-[100vw] flex justify-center">
      <Loader2 className="animate-spin mt-10" size={40} />
    </main>
  );
};

export default Loader;
