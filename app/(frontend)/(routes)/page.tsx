import Container from "@/components/ui/container";
import { bannerGridThree } from "@/lib/settings";
import React from "react";
import BannerGridThree from "../_components/Banner/grid-three";
import CategoryFeed from "../_components/Feed/category";
import StoreInfo from "../_components/Store";
import VideoFeed from "../_components/Feed/video";
import BridalFeed from "../_components/Feed/bridal-category";
import DesignerWeek from "../_components/Feed/designer-week";
import ShopCategory from "../_components/Feed/shop-category";
import BestFestiveWear from "../_components/Feed/best-festivewear";
import Lawnwear from "../_components/Feed/lawn-wear";
import ShopByStyle from "../_components/Feed/shop-bystyle";
import Jewellerywear from "../_components/Feed/jewellery-wear";
import Footwear from "../_components/Feed/footwear";
import OurBrands from "../_components/Feed/our-brands";
import JoinGuide from "../_components/Banner/join-guide";

const Homepage = async () => {
  return (
    <Container>
      <BannerGridThree
        data={bannerGridThree}
        className="py-3 md:py-4 lg:mt-0 lg:mb-5 xl:mb-6"
      />
      <CategoryFeed />
      <StoreInfo />
      <VideoFeed />
      <BridalFeed />
      {/* 
      TODO
      <DesignerWeek />
      */}
      <ShopCategory />
      <BestFestiveWear />
      <Lawnwear />
      <ShopByStyle />
      <Jewellerywear />
      <Footwear />
      <OurBrands />
      <JoinGuide />
      {/* 
      TODO
      ONSALE Block
      */}
    </Container>
  );
};

export default Homepage;
