// Panel de administracion usuario
'use client'
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import '@/app/(dashboard)/onedash/page.css'
import { useState } from "react";

export default function OneDash(){
    const [section, setSection] = useState('home')
    return(
        <div className="dashboard">
            <Navbar onChange={setSection} activeSection={section}/>
            <MainContent section={section}/>
        </div>
    )
}