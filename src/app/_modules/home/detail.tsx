
import React from "react";
import HeroSection from "./_components/hero";
import CardComponents from "./_components/card";
import CategoriesSection from "./_components/cateogories";
import RestaurantSection from "./_components/restaurant";
import FooterSection from "./_components/footer";
import MenusSection from "./_components/menu";
const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <CardComponents />
            <CategoriesSection />
            <MenusSection />

            <RestaurantSection />
            <FooterSection />
        </div>
    )
}
export default HomePage