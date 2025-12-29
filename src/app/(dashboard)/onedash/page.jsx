// Panel de administracion usuario
import Navbar from "./components/Navbar";
import '@/app/(dashboard)/onedash/page.css'

export default function OneDash({ children }){
    return(
        <div className="dash-layout">
            <Navbar/>
            <main className="dash-content">
                { children}
            </main>
        </div>
    )
}