"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const Header = () => {
  const path = usePathname();
  return (
    <header className='h-16 flex justify-end'>
      <ul className='flex items-center max-w-2xl gap-12 h-full'>
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
              underline: path == "/blog",
            })}
          >
            <Link href='/blog'>Blog</Link>
          </Button>
        </li>
        <li>
          <Button
            asChild
            variant={"link"}
            className={cn({
              underline: path == "/about",
            })}
          >
            <Link href='/about'>about</Link>
          </Button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
