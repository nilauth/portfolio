"use client";
import GoBack from "@/components/GoBack";
import { UploadFileDialog } from "@/components/PROJECTS/UploadFileDialog";

const FileUploadProjectPage = () => {
  return (
    <div className='font-sans flex flex-col items-center lg:h-5/6'>
      <div className='w-3/4 h-1/2 lg:h-fit lg:self-center lg:w-[600px] py-20'>
        <GoBack url='/projects' />
      </div>
      <div className='lg:h-2/3 lg:flex lg:items-center'>
        <UploadFileDialog />
      </div>
    </div>
  );
};

export default FileUploadProjectPage;
