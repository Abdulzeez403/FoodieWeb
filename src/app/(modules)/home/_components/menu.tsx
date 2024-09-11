import ImageComponent from "@/app/components/images";
import StarIcon from "@/app/components/svg/svg/star";
import React from "react";
import HeaderComponents from "@/app/components/header";
import { MenuComponent } from "../../../menu/_components/menuCard";
import { useGetMenusQuery } from "@/lib/features/menu/menuApi";
import MenuCardSkeleton from "@/app/menu/_components/menuSkeleton";

const MenusSection = () => {
  const { data: menus, isLoading } = useGetMenusQuery({});

  const skeletonArray = new Array(5).fill(null);

  return (
    <div className="w-[80%] mx-auto py-4 ">
      <HeaderComponents
        title="Top Menus"
        description="Some of the best restaurant in town!"
      />

      <div className="w-70 overflow-auto">
        <div
          className=" 
            w-[90rem] overflow-auto flex py-4 gap-10
            lg:overflow-x-hidden
            xl:w-[90rem] xl:mx-auto xl:overflow-x-hidden"
        >
          {isLoading || !menus
            ? skeletonArray.map((_, index) => (
                <div key={index}>
                  <MenuCardSkeleton />
                </div>
              ))
            : menus.map((item: any) => (
                <div key={item?._id}>
                  <MenuComponent item={item} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default MenusSection;
