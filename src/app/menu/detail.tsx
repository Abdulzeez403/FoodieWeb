"use client";

import React from "react";
import ButtonComponent from "@/app/components/button";
import { useGetMenusQuery } from "@/lib/features/menu/menuApi";
import { MenuComponent } from "./_components/menuCard";
import { Spin } from "antd";

const MenusList = () => {
  const { data: menus, isLoading } = useGetMenusQuery({});
  const filterText = [
    "Snack",
    "Bakery",
    "Chicken",
    "handBurger",
    "Rice",
    "Nigerian Jollof Rice",
    "Chicken Rick",
  ];

  return (
    <div className="w-[90%] mx-auto ">
      <div className="  overflow-auto">
        <div
          className=" 
            w-[90rem] overflow-auto flex py-4  px-0
            md:overflow-x-hidden md:w-full
            lg:overflow-x-hidden lg:w-full"
        >
          {filterText.map((item, index) => (
            <div key={index} className="mr-6">
              <ButtonComponent size="large" type="primary" htmlType="button">
                {item}
              </ButtonComponent>
            </div>
          ))}
        </div>
      </div>

      {isLoading && (
        <div className="flex justify-center m-0 align-center">
          <Spin />
        </div>
      )}

      <div
        className="flex justify-center align-center  
            md:justify-start md:align-left 
            lg:align-center lg:justify-start lg:flex "
      >
        <div className="block sm:block md:flex lg:flex">
          {menus?.map((item: any) => (
            <div
              key={item?._id}
              className=" justify-center align-center  py-2 mr-3 "
            >
              <MenuComponent item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenusList;
