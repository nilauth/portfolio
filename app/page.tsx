"use client";
import useMousePosition from "@/lib/useMousePosition";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y }: { x: number; y: number } = useMousePosition();
  const size = isHovered ? 1200 : 40;

  return (
    <main className='h-screen font-mono'>
      <motion.div
        className='hidden lg:flex h-full cursor-default justify-center items-center text-[50px] leading-[66px] w-full absolute left-0 top-0 bg-main'
        style={{
          maskImage: 'url("/mask.svg")',
          maskRepeat: "no-repeat",
          maskSize: "50px",
          position: "absolute",
          color: "black",
        }}
        animate={{
          WebkitMaskPosition: `${x - size * 0.5}px ${y - size * 0.4}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          className='w-[1000px] p-10 text-center'
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <span className='block'>I&apos;m Nizar</span> A creatively-driven
          developer with skills that haven&apos;t been replaced by A.I (yet),
          dedicated to producing expressive work.
        </p>
      </motion.div>

      <div className='text-second flex cursor-default justify-center items-center text-lg lg:text-[50px] lg:leading-[66px] w-full py-48 lg:py-0 lg:h-full'>
        <p className='w-[1000px] p-10 text-center'>
          <span className='block'>I&apos;m Nizar</span>A{" "}
          <span className='text-main'>full-stack developer</span> dedicated to
          crafting high-quality and impactful digital experiences that also
          align with business goals.
        </p>
      </div>
    </main>
  );
}
