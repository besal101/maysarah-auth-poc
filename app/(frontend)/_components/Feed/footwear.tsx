import ProductsCarousel from "@/components/product/product-carousel";
import { Product } from "@/types/types";
import React from "react";

const Footwear = () => {
  const product: Product[] = [
    {
      id: 1,
      title: "Maria B",
      price: 50,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://maysarabucket.s3.eu-north-1.amazonaws.com/maria-d.jpg",
    },
    {
      id: 2,
      title: "Mushq Stardust",
      price: 100,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image: "https://maysarabucket.s3.eu-north-1.amazonaws.com/maria-c.jpg",
    },
    {
      id: 3,
      title: "Sana Safinaz",
      price: 500,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://maysarabucket.s3.eu-north-1.amazonaws.com/maria-b.jpg",
    },
    {
      id: 4,
      title: "Asim Jofa",
      price: 70,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://maysarabucket.s3.eu-north-1.amazonaws.com/maria-a.jpg",
    },
    {
      id: 5,
      title: "Mushq Stardust",
      price: 30,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image: "https://maysarabucket.s3.eu-north-1.amazonaws.com/maria-d.jpg",
    },
    {
      id: 6,
      title: "Mushq Stardust",
      price: 30,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image: "https://maysarabucket.s3.eu-north-1.amazonaws.com/maria-d.jpg",
    },
  ];
  const isLoading = false;
  const error = {
    message: "",
  };

  return (
    <ProductsCarousel
      sectionMain="Foot"
      sectionSecond="wear"
      categorySlug={"/"}
      products={product}
      loading={isLoading}
      error={error?.message}
      uniqueKey="best-sellers"
      cardtype="cardfive"
    />
  );
};

export default Footwear;
