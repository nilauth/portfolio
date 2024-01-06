"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const GoBack = ({ url }: { url: string }) => {
  const iconVariants = {
    default: { x: 0 },
    hover: { x: -2 },
  };
  return (
    <motion.div whileHover='hover' initial='default' className='w-fit'>
      <Link
        href={url}
        className='flex gap-x-[2px] items-center w-fit text-sm text-slate-400 mb-5 hover:text-gray-600 no-underline'
      >
        <motion.div variants={iconVariants}>
          <ArrowLeft className='h-4 w-4' />
        </motion.div>
        <span className='font-normal'>Back</span>
      </Link>
    </motion.div>
  );
};

export default GoBack;
