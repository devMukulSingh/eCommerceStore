import { getStores } from "@/actions/getStores";
import Stores from "@/components/root/stores";
import { Istore } from "@/types";

export default async function RootPage() {

    const stores:Istore[] = await getStores();
    
    return (
        <>
            <main className="flex justify-center items-center w-screen h-screen">
                <section className="flex flex-col gap-5 py-5 px-5 pr-10 min-h-[20rem] border">
                    <h1 className="text-2xl font-semibold">Select Store</h1>
                    <div className="flex flex-col gap-3">

                        {
                            stores && stores.map((store) => (
                                <Stores store={store}/>
                            ))
                        }
                    </div>
                </section>
            </main>
        </>
    )
}