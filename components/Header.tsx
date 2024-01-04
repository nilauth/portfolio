"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import path from "path";

const Header = () => {
  const path = usePathname();
  return (
    <header
      className={cn("h-16 flex justify-center w-full z-10 top-0 font-mono", {
        absolute: path == "/",
      })}
    >
      <ul className='flex items-center max-w-2xl gap-8 h-full'>
        <li>
          <Button
            asChild
            variant={"link"}
            className={cn({
              underline: path == "/",
            })}
          >
            <Link href='/'>Home</Link>
          </Button>
        </li>
        <li>
          <Button
            asChild
            variant={"link"}
            className={cn({
              underline: path == "/projects",
            })}
          >
            <Link href='/projects'>Projects</Link>
          </Button>
        </li>
        <li>
          <Button
            asChild
            variant={"link"}
            className={cn({
              underline: path.startsWith("/blog"),
            })}
          >
            <Link href='/blog'>Blog</Link>
          </Button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
