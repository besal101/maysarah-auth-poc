import logo from "@/assets/logo.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { currentUser } from "@/lib/auth";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import DropdownContent from "./dropdown";

const Navbar = async () => {
  const user = await currentUser();

  return (
    <nav className="shadow-md w-full bg-white">
      <div className="xl:container px-6 flex justify-between py-3 items-center">
        <Image
          src={logo}
          height={12}
          width={20}
          className="h-10 w-auto"
          alt="Maysara Logo"
        />
        <div className="flex flex-row font-nunito items-center gap-4">
          <span>Hi, {user?.name}</span>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="shadow-md h-8 w-8">
                <AvatarImage src={user?.image || ""} />
                <AvatarFallback className="bg-sky-500">
                  <FaUser className="text-white" />
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownContent />
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
