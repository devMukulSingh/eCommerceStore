import { getStores } from "@/actions/getStores";
import Stores from "@/app/(root)/components/Stores";
import { Istore } from "@/lib/types";

export default async function RootPage() {
  const stores: Istore[] = await getStores();

  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <section className="flex flex-col gap-5 py-5 px-5 pr-14 min-h-[20rem] shadow-neutral-400 shadow-inner rounded-md border">
          <h1 className="text-2xl font-semibold">Select Store</h1>
          <div className="flex flex-col gap-3">
            {stores?.map((store) => <Stores store={store} key={store.id} />)}
          </div>
        </section>
      </div>
    </>
  );
}
