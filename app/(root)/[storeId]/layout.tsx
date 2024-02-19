import Footer from "@/components/commons/Footer";
import Navbar from "@/components/commons/Navbar";
import Sidebar  from "@/components/commons/Sidebar";

export default function RootLayout({ children} : {children : React.ReactNode}){
    return(
        <main>
            <Navbar/>
            <Sidebar/> 
            {children}
            <Footer/>
        </main>
    )
}