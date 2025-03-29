import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { LogOut, SquareUser } from "lucide-react";

export const UserDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="w-full gap-2 justify-start px-2 outline-none"
        >
          <Avatar className="w-7 h-7 block">
            <AvatarImage src="https://github.com/hugofrot4.png" />
            <AvatarFallback>HF</AvatarFallback>
          </Avatar>
          <p>Hugo Frota</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="w-[--radix-dropdown-menu-trigger-width]"
      >
        <Link passHref href="/dashboard/account">
          <DropdownMenuItem className="gap-2">
            <SquareUser size={16} />
            <span>Configurações de Conta</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem className="gap-2 text-red-500">
          <LogOut size={16} />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
