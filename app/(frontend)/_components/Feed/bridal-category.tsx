import ProductsCarousel from "@/components/product/product-carousel";
import { Product } from "@/types/types";
import React from "react";

const BridalFeed = () => {
  const product: Product[] = [
    {
      id: 1,
      title: "Gubadan Bridal Couture - Formal",
      price: 7496,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "RED, RAW SILK",
      image:
        "https://maysarabucket.s3.eu-north-1.amazonaws.com/bridalwear-1.png",
    },
    {
      id: 2,
      title: "Bano Bridal Couture - Formal",
      price: 3259,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "GREEN, RAW SILK",
      image:
        "https://maysarabucket.s3.eu-north-1.amazonaws.com/bridalwear-1.png",
    },
    {
      id: 3,
      title: "Bahar - Bridal Couture - Formal",
      price: 4888,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "PINK, RAW SILK",
      image:
        "https://maysarabucket.s3.eu-north-1.amazonaws.com/bridalwear-1.png",
    },
    {
      id: 4,
      title: "Jana Bridal Couture - Formal",
      price: 7821,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "RED, VELVET",
      image:
        "https://maysarabucket.s3.eu-north-1.amazonaws.com/bridalwear-1.png",
    },
    {
      id: 5,
      title: "Bano Bridal Couture - Formal",
      price: 4325,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "RED, RAW SILK",
      image:
        "https://maysarabucket.s3.eu-north-1.amazonaws.com/bridalwear-1.png",
    },
  ];
  const isLoading = false;
  const error = {
    message: "",
  };

  return (
    <ProductsCarousel
      sectionMain="Eastern"
      sectionSecond="Bridal Wear"
      categorySlug={"/"}
      products={product}
      loading={isLoading}
      error={error?.message}
      uniqueKey="best-sellers"
      cardtype="cardtwo"
    />
  );
};

export default BridalFeed;
