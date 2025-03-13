import React from "react";
import HeroBanner from '../components/HeroBanner/HeroBanner'
import Statistics from '../components/Statistics/Statistics'
import ServicesGrid from '../components/ServicesGrid/ServicesGrid'
import CTAtoAboutUs from "../components/CTAtoAboutUs/CTAtoAboutUs";

const Home= ({ }) => {
    return (
        <section>
            <HeroBanner />
            <Statistics /> 
            <ServicesGrid />
            <CTAtoAboutUs />
        </section>
        
    )
}

export default Home;