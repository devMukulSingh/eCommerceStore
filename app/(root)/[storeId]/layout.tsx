import { getBrands } from "@/actions/getBrands";
import Footer from "@/components/commons/Footer";
import MobileFilters from "@/components/commons/MobileFilters";
import Navbar from "@/components/commons/Navbar";
import Sidebar  from "@/components/commons/Sidebar";

export default async function RootLayout({ children} : {children : React.ReactNode}){

    const brands =  await getBrands();

    return(
        <main>
            <Navbar/>
            <Sidebar/> 
            <MobileFilters brands={brands}/>
            {children}
            <Footer/>
        </main>
    )
}