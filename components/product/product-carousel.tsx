"use client";
import { FormError } from "@/components/shared/form-error";
import SectionHeader from "@/components/shared/section-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useWindowSize from "@/hooks/use-window-size";
import { Product } from "@/types/types";
// import ProductCardLoader from "@components/ui/loaders/product-card-loader";
import { cn } from "@/lib/utils";
import ProductCardOne from "./product-card-one";
import ProductCardTwo from "./product-card-two";
import ProductCardThree from "./product-card-three";
import ProductCardFour from "./product-card-four";
import { Button } from "../ui/button";
import ProductCardFive from "./product-card-five";
import ProductCardSix from "./product-card-six";

type cardtype =
  | "cardone"
  | "cardtwo"
  | "cardthree"
  | "cardfour"
  | "cardfive"
  | "cardsix";

interface ProductsCarouselProps {
  sectionMain: string;
  sectionSecond: string;
  categorySlug?: string;
  className?: string;
  products?: Product[];
  loading: boolean;
  error?: string;
  limit?: number;
  uniqueKey?: string;
  cardtype?: cardtype;
  viewallbutton?: boolean;
}

const ProductsCarousel: React.FC<ProductsCarouselProps> = ({
  sectionMain,
  sectionSecond,
  className = "mb-8 lg:mb-10 xl:mb-12",
  products,
  loading,
  error,
  limit,
  uniqueKey,
  cardtype = "cardone",
  viewallbutton = false,
}) => {
  const { width } = useWindowSize();

  return (
    <div
      className={cn(
        "max-w-[1920px] overflow-hidden 4xl:overflow-visible px-4 md:px-6 lg:px-8 2xl:pl-10 2xl:pr-0 4xl:pr-10 mx-auto relative",
        className
      )}
    >
      <div className="flex flex-wrap items-center justify-between mb-5 md:mb-6">
        <SectionHeader
          sectionMain={sectionMain}
          sectionSecond={sectionSecond}
          className="mb-0"
          headingPosition="center"
        />
      </div>
      {error ? (
        <div className="2xl:ltr:pr-10 2xl:rtl:pl-10">
          <FormError message={error} />
        </div>
      ) : (
        <div className="relative after-item-opacity">
          <Carousel className="pr-6s">
            <CarouselContent>
              {loading && !products?.length ? (
                Array.from({ length: limit! }).map((_, idx) => (
                  <CarouselItem key={`${uniqueKey}-${idx}`} className="">
                    {/* <ProductCardLoader uniqueKey={`${uniqueKey}-${idx}`} /> */}
                  </CarouselItem>
                ))
              ) : (
                <>
                  {products?.map((product: any, idx) => (
                    <CarouselItem
                      key={`${uniqueKey}-${idx}`}
                      className="basis-1/3 md:basic-1/3 lg:basis-1/5"
                    >
                      {cardtype === "cardone" && (
                        <ProductCardOne product={product} />
                      )}
                      {cardtype === "cardtwo" && (
                        <ProductCardTwo product={product} />
                      )}
                      {cardtype === "cardthree" && (
                        <ProductCardThree product={product} />
                      )}
                      {cardtype === "cardfour" && (
                        <ProductCardFour product={product} />
                      )}
                      {cardtype === "cardfive" && (
                        <ProductCardFive product={product} />
                      )}
                      {cardtype === "cardsix" && (
                        <ProductCardSix product={product} />
                      )}
                    </CarouselItem>
                  ))}
                </>
              )}
            </CarouselContent>
            <CarouselPrevious
              className={`absolute ml-8 overflow-visible border border-border ${
                cardtype === "cardtwo" && "-mt-14"
              }`}
            />
            <CarouselNext
              className={`absolute mr-6 overflow-visible border border-border ${
                cardtype === "cardtwo" && "-mt-14"
              }`}
            />
          </Carousel>
        </div>
      )}
      {viewallbutton && (
        <div className="flex justify-center items-center mt-5 font-jakarta">
          <Button className="bg-black rounded-full text-sm">View All</Button>
        </div>
      )}
    </div>
  );
};

export default ProductsCarousel;
