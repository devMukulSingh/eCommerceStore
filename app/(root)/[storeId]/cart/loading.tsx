import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <main className="flex justify-center w-full mt-10">
      <Loader size={40} className="animate-spin" />
    </main>
  );
}
