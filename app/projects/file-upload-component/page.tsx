"use client";
import GoBack from "@/components/GoBack";
import { UploadFileDialog } from "@/components/PROJECTS/UploadFileDialog";

const FileUploadProjectPage = () => {
  return (
    <div className='font-sans flex flex-col items-center h-5/6'>
      <div className='bg-red-50 h-1/2 lg:w-[600px] py-20'>
        <GoBack url='/projects' />
      </div>
      <div>
        <UploadFileDialog />
      </div>
    </div>
  );
};

export default FileUploadProjectPage;
