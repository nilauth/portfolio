"use client";
import useMousePosition from "@/lib/useMousePosition";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 800 : 40;

  return (
    <main className='h-screen'>
      <motion.div
        className='flex h-[900px] cursor-default justify-center items-center text-[50px] leading-[66px] w-full absolute left-0'
        style={{
          maskImage: 'url("/mask.svg")',
          maskRepeat: "no-repeat",
          maskSize: "50px",
          background: "#ec4e39",
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
          A visual designer with skills that haven&apos;t been replaced by A.I
          (yet) making good shit only if the paycheck is equally good.
        </p>
      </motion.div>

      <div className='text-second flex cursor-default justify-center items-center text-[50px] leading-[66px] w-full h-[900px]'>
        <p className='w-[1000px] p-10 text-center'>
          I&apos;m a <span className='text-main'>selectively skilled</span>{" "}
          product designer with strong focus on producing high quality &
          impactful digital experience.
        </p>
      </div>
    </main>
  );
}
