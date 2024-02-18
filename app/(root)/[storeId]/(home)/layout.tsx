"use client"
import Footer from "@/components/commons/Footer";
import Navbar from "@/components/commons/Navbar";
import { useAppSelector } from "@/redux/hooks";
import Sidebar  from "@/components/commons/Sidebar";

export default function RootLayout({ children} : {children : React.ReactNode}){
    const openSidebar = useAppSelector( state => state.ecomm.openSidebar);
    const loading = useAppSelector( state => state.ecomm.loading);
    return(
        <main>
            <Navbar/>
            {
                openSidebar && 
                <Sidebar/> 
            }
            {children}
            {
              !loading &&  <Footer/>
            }
        </main>
    )
}