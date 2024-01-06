"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { ChangeEvent, DragEvent, useRef, useState } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloudUpload,
  AiOutlineEye,
} from "react-icons/ai";
import { Separator } from "@radix-ui/react-separator";

export function UploadFileDialog() {
  const ref = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const [dragover, setDragOver] = useState(0);

  const handleClick = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const newFiles = Array.from(event.target.files);
      setSelectedFiles([...selectedFiles, ...newFiles]);
    }
  };

  const clearSelectedFile = (index: number) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  const clearAllFiles = () => {
    setSelectedFiles([]);
  };

  const handleDragEnter = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver((prevDragOver) => prevDragOver + 1);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver((prevDragOver) => Math.max(0, prevDragOver - 1));
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const newFiles = Array.from(event.dataTransfer.files);
      setSelectedFiles([...selectedFiles, ...newFiles]);
    }
    setDragOver(0);
  };

  function truncateFileName(fileName: string, maxLength = 15) {
    if (fileName.length > maxLength) {
      return fileName.substr(0, maxLength) + "..." + fileName.substr(-5);
    }
    return fileName;
  }

  return (
    <main>
      <Dialog>
        <DialogTrigger asChild>
          <div>
            <Button>
              <AiOutlineCloudUpload className='mr-2 h-6 w-6' />{" "}
              <span className='font-sans font-semibold'>Upload file</span>
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[550px] p-10 font-sans'>
          <DialogHeader>
            <DialogTitle className='text-2xl text-blue-950 mb-2'>
              Upload File
            </DialogTitle>
            <DialogDescription>
              Upload files with ease &ndash; drag and drop or browse to select.
              <p>JPG, PNG, JPEG up to 10MB</p>
            </DialogDescription>
          </DialogHeader>
          <Separator />
          {/* upload area */}
          <div
            className='h-40 flex justify-center items-center'
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div
              className='flex flex-col items-center gap-y-6'
              onDrop={handleDrop}
            >
              {dragover === 0 && (
                <>
                  <Image
                    src='/file-upload.svg'
                    alt='file upload'
                    width={50}
                    height={50}
                  />
                  <div className='text-blue-950 flex flex-col'>
                    Drag & Drop your files here, or{" "}
                    <Button
                      variant={"link"}
                      onClick={handleClick}
                      className='px-1 pt-1'
                    >
                      Browse
                    </Button>
                  </div>
                </>
              )}

              {dragover > 0 && (
                <div
                  className='flex flex-col justify-center items-center'
                  onDrop={handleDrop}
                >
                  <Image
                    src='/upload.svg'
                    alt='drop file here'
                    width={50}
                    height={50}
                  />
                  <div className='text-blue-950'>Drop file here</div>
                </div>
              )}
            </div>
          </div>
          {selectedFiles.length > 0 && (
            <div>
              {selectedFiles.map((file, index) => {
                return (
                  <div
                    key={index}
                    className='flex items-center justify-between mt-4 group/upload'
                  >
                    <div className='flex items-center gap-4'>
                      <Image
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        width={60}
                        height={60}
                        loading='lazy'
                        className='rounded-sm'
                      />
                      <div className='flex flex-col'>
                        <div className='flex gap-2 items-center'>
                          <p>{truncateFileName(file.name)}</p>
                          <AiOutlineCheckCircle className='h-5 w-5 text-green-600 mt-1' />
                        </div>

                        <span className='text-sm text-gray-500'>
                          Size: {Math.round(file.size / 1024)} KB
                        </span>
                      </div>
                    </div>
                    <div className='hidden group-hover/upload:flex gap-3'>
                      <Dialog>
                        <DialogTrigger asChild>
                          <AiOutlineEye className='cursor-pointer ' />
                        </DialogTrigger>
                        <DialogContent>
                          <Image
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            width={1200}
                            height={800}
                            loading='lazy'
                            className='mt-4 rounded-md'
                          />
                          <p className='text-slate-500 text-sm'>
                            {file.name}{" "}
                            <span className='text-xs'>
                              {" "}
                              ({Math.round(file.size / 1024)}KB)
                            </span>
                          </p>
                        </DialogContent>
                      </Dialog>

                      <AiOutlineClose
                        className='cursor-pointer'
                        onClick={() => clearSelectedFile(index)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <input
            ref={ref}
            type='file'
            hidden
            multiple
            onChange={handleFileChange}
            accept='.jpg, .png, .jpeg'
          />
          {/* end of upload area */}
          <DialogFooter className='gap-x-4'>
            <Button variant={"outline"} onClick={clearAllFiles}>
              Clear all files
            </Button>
            <Button variant={"default"} disabled={selectedFiles.length === 0}>
              Next
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
