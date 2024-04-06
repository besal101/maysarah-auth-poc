import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteSettings } from "@/lib/settings";

const Logo: React.FC<React.AnchorHTMLAttributes<{}>> = ({
  className,
  href = siteSettings.logo.href,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={cn("inline-flex focus:outline-none", className)}
      {...props}
    >
      <Image
        src={siteSettings.logo.url}
        alt={siteSettings.logo.alt}
        height={siteSettings.logo.height}
        width={siteSettings.logo.width}
        loading="eager"
      />
    </Link>
  );
};

export default Logo;
