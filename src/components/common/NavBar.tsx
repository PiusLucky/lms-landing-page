"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import MainButton from "./MainButton";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

function NavBar() {
  const ourProducts: {
    title: string;
    href: string;
    description: string;
    iconUrl: string;
  }[] = [
    {
      title: "Loan Facility",
      href: "/landing-page/loan-facility",
      description: "The latest industry news, updates and info.",
      iconUrl: "/images/book_icon.svg",
    },
    {
      title: "Medical Equipment",
      href: "/landing-page/medical-equipment",
      description: "Learn how our customers are making big changes.",
      iconUrl: "/images/zap_icon.svg",
    },
    {
      title: "Loan management software",
      href: "/landing-page/loan-management-software",
      description: "Short courses to become a master of advanced features.",
      iconUrl: "/images/book_open_icon.svg",
    },
  ];

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0   md:shadow-none z-20 ">
      {/* DESKTOP */}
      <div className=" hidden lg:block hero-section p-4">
        <div className="flex justify-between mx-[41px] items-center">
          <Link href="/">
            <div>
              <img src="/images/logo.png" alt="logo" />
            </div>
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <Link href="/">
                <p
                  className={`hover:text-primary cursor-pointer flex items-center gap-2 text-[18px]  font-medium text-textPrimary mr-4`}
                >
                  Home
                </p>
              </Link>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <p
                    className={`hover:text-primary cursor-pointer flex items-center gap-2 text-[18px]  font-medium text-textPrimary`}
                  >
                    Our Products
                  </p>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[372px] gap-[20px] p-4 md:grid-cols-1">
                    {ourProducts.map((product) => (
                      <ListItem
                        key={product.title}
                        title={product.title}
                        href={product.href}
                        description={product.description}
                        iconUrl={product.iconUrl}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-[40px] select-none">
            <Link
              href="/auth/login"
              className="hover:text-primary cursor-pointer flex text-[18px] font-medium items-center gap-2 text-textPrimary"
            >
              Login
            </Link>

            <div>
              <MainButton text="Get Started - It's free" width="221px" />
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in  ${
          menu ? " bg-primary py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img src="/images/logo.png" alt="logo" className="w-[7rem]" />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/images/hamburger.svg"
                alt="logo"
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              <NavigationMenu>
                <NavigationMenuList className="flex flex-col gap-4 items-start">
                  <p
                    className={`hover:text-primary cursor-pointer flex items-center gap-2 text-[18px]  font-medium text-textPrimary mr-4`}
                  >
                    Home
                  </p>
                  <div>
                    <NavigationMenuItem className=" hover:bg-white">
                      <NavigationMenuTrigger>
                        <p
                          className={`hover:text-primary  cursor-pointer flex items-center gap-2 text-[18px]  font-medium text-textPrimary`}
                        >
                          Our Products
                        </p>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-white hover:bg-white">
                        <ul className="grid w-[300px] gap-[20px] p-4 md:grid-cols-1">
                          {ourProducts.map((product) => (
                            <ListItem
                              key={product.title}
                              title={product.title}
                              href={product.href}
                              description={product.description}
                              iconUrl={product.iconUrl}
                            />
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </div>
                </NavigationMenuList>
              </NavigationMenu>
              <div className="flex gap-4 flex-col items-start select-none">
                <Link
                  href="/auth/login"
                  className="hover:text-primary cursor-pointer flex text-[18px] font-medium items-center gap-2 text-textPrimary"
                >
                  Login
                </Link>

                <div>
                  <MainButton text="Get Started - It's free" width="221px" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

const ListItem = ({
  title,
  description,
  iconUrl,
  href,
}: {
  title: string;
  description: string;
  iconUrl: string;
  href: string;
}) => {
  return (
    <Link href={href} className="hover:bg-gray-100 p-4 rounded-lg">
      <div className="flex gap-4">
        <div>
          <img src={iconUrl} alt={title} width={30} height={30} />
        </div>
        <div className="flex flex-col gap-2 -mt-1">
          <p className="text-[18px] font-medium text-textPrimary">{title}</p>
          <p className="text-[14px] text-[#475467]">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default NavBar;
