import { cn } from "@/lib/utils";

interface Props {
  sectionMain: string;
  sectionSecond: string;
  className?: string;
  headingPosition?: "left" | "center";
}

const SectionHeader: React.FC<Props> = ({
  sectionMain = "text-section-title",
  sectionSecond = "text-section-title",
  className = "pb-0.5 mb-5 xl:mb-6",
  headingPosition = "center",
}) => {
  return (
    <div
      className={cn(`-mt-1.5 flex flex-row gap-2 ${className}`, {
        "text-center justify-center items-center w-full pb-2 lg:pb-3 xl:pb-4 3xl:pb-7 font-bigc":
          headingPosition === "center",
      })}
    >
      <span className="text-xl sm:2xl md:text-3xl font-semibold">
        {sectionMain}
      </span>
      <span className="text-xl sm:2xl md:text-3xl font-semibold text-primary">
        {sectionSecond}
      </span>
    </div>
  );
};

export default SectionHeader;
