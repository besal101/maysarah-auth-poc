import { Favourite } from "@/components/icons/favourite-icon";
import { Support } from "@/components/icons/support-icon";
import Container from "@/components/ui/container";
import Logo from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import React from "react";
import Currency from "../shared/currency";

import CartSheet from "@/features/Cart/CartSheet";
import { Searchbox } from "@/features/Search/Searchbox";
import Account from "../shared/account";

type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const Header = () => {
  return (
    <header
      id="siteHeader"
      className={cn(
        "sticky top-0 z-20 lg:relative w-full h-16 lg:h-auto shadow-sm bg-[#FBFBFB]"
      )}
    >
      <div className="z-20 w-screen transition-all duration-200 ease-in-out innerSticky lg:w-full body-font bg-fill-secondary">
        <div className="hidden navbar bg-brand-light lg:block">
          <Container className="flex items-center justify-between h-16 py-3">
            <div></div>
            <Logo className="transition-all duration-200 ease-in-out navbar-logo w-auto opacity-100" />
            <div className="flex flex-col gap-3 mr-4">
              <div className="flex justify-end">
                <Currency />
              </div>
              <div className="flex items-center gap-6">
                <div className="cursor-pointer">
                  <Support className="w-4 h-4" />
                </div>
                <div className="relative cursor-pointer">
                  <Favourite className="w-4 h-4" />
                  <div className="w-2.5 h-2.5 bg-red-500 absolute -top-0.5 -right-0 rounded-full" />
                </div>
                <div className="cursor-pointer">
                  <Account />
                </div>
                <div className="relative cursor-pointer">
                  <CartSheet />
                  <div className="w-2.5 h-2.5 bg-red-500 absolute -top-0.5 -right-0 rounded-full" />
                </div>
              </div>
            </div>
          </Container>
          <Container className="flex bg-[#FBFBFB]">
            <div className="flex w-full h-16 lg:h-auto px-4 py-2 items-center justify-between">
              <nav className="flex gap-6 text-sm font-medium font-jakarta">
                <a href="#">Eastern wear</a>
                <a href="#">Bridalwear</a>
                <a href="#">Designer wear</a>
                <a href="#">Formal wear</a>
                <a href="#">Day-to-Day wear</a>
                <a href="#">Jewellery</a>
                <a href="#">Footwear</a>
              </nav>
              <Searchbox />
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
};

export default Header;
