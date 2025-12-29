// Panel de administracion usuario
'use client'
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import '@/app/(dashboard)/onedash/page.css'

export default function OneDash({ children }){
    return(
        <div className="dashboard">
            <Navbar/>
            <MainContent/>
        </div>
    )
}