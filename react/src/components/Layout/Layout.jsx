import React from "react";
import { Outlet} from "react-router-dom";
import Navbar from '../Navbar/Navbar'
import ContactFormWithImage from '../ContactForm/ContactFormWithImage'
import Footer from '../Footer/Footer'
import teamPohoto from './india_team.jpg'

const Layout = ({ formRef }) => {
    console.log("Layout: Received formRef:", formRef); // ✅ Debug log
    return (
        <section>
            <Navbar />
            <Outlet />
            <Footer formRef={formRef}/>
        </section>
    )
}

export default Layout;