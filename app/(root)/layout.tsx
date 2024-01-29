import Footer from "@/components/commons/Footer";
import Navbar from "@/components/commons/Navbar";

export default function RootLayout({ children} : {children : React.ReactNode}){
    return(
        <main>
            <Navbar/>
            {children}
            
            <Footer/>
        </main>
    )
}