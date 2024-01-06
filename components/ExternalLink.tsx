import Link from "next/link";
import { ReactNode } from "react";

const ExternalLinkComponent = ({
  children,
  url,
}: {
  children: ReactNode;
  url: string;
}) => {
  return (
    <Link
      href={url}
      target='_blank'
      className='w-fit no-underline font-normal text-gray-500 justify-center items-center inline-flex gap-[2px] '
    >
      <span className='border-b hover:border-b-gray-400 -pb-4 -mb-4 h-5'>
        {children}
      </span>
    </Link>
  );
};

export default ExternalLinkComponent;
