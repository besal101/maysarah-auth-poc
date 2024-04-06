"use client";
import BannerCard from "./banner-card";
import useWindowSize from "@/hooks/use-window-size";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HeroBanner } from "@/types/types";

interface BannerProps {
  data: HeroBanner[];
  className?: string;
  girdClassName?: string;
}

const BannerGridThree: React.FC<BannerProps> = ({
  data,
  className = "mb-3 md:mb-4 lg:mb-5 xl:mb-6",
  girdClassName = "2xl:gap-5",
}) => {
  const { width } = useWindowSize();
  return (
    <div className={className}>
      {width! < 768 ? (
        <Carousel>
          <CarouselContent>
            {data?.map((banner: HeroBanner) => (
              <CarouselItem
                key={`banner-key-${banner.id}`}
                style={{
                  flexShrink: "unset",
                }}
              >
                <BannerCard banner={banner} effectActive={true} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className={`absolute ml-10 overflow-visible border border-border h-6 w-6`}
          />
          <CarouselNext className="absolute mr-9 overflow-visible border border-border h-6 w-6" />
        </Carousel>
      ) : (
        <div
          className={`grid gap-3 grid-cols-1 sm:grid-cols-5 ${girdClassName}`}
        >
          <BannerCard
            banner={data[0]}
            effectActive={true}
            className="col-span-1"
          />
          <BannerCard
            banner={data[1]}
            effectActive={true}
            className="col-span-3"
          />
          <BannerCard
            banner={data[2]}
            effectActive={true}
            className="col-span-1"
          />
        </div>
      )}
    </div>
  );
};

export default BannerGridThree;
