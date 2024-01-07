import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import React from "react";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <main className='lg:w-1/2 mx-auto px-2 mt-16 font-sans max-w-[650px]'>
      <div className='flex flex-col items-center gap-4'>
        <Link
          href='/projects/project-management-app'
          className={cn(
            "pointer-events-none w-full flex flex-col items-start gap-2 rounded-lg border py-3 px-5 text-left text-sm transition-all opacity-50"
          )}
        >
          <div className='flex w-full flex-col gap-1'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2 justify-between'>
                <div className='text-2xl font-semibold mb-2'>
                  Multi-tenant Project Management Web App (WIP)
                </div>
              </div>
            </div>
            <div className='font-sm text-muted-foreground prose'>
              An end-to-end Next.js 14 full-stack application, featuring
              workspaces, boards, lists, cards, audit logs, and member roles—a
              versatile solution for streamlined project management.
            </div>
          </div>
          {/* <div className='flex gap-x-2 mt-4'>
            <Badge variant='default'>full-stack</Badge>
            <Badge variant='default'>Next.js 14</Badge>
            <Badge variant='default'>ShadcnUI</Badge>
            <Badge variant='default'>component</Badge>
          </div> */}
        </Link>

        {/* 2nd card */}
        <Link
          href='/projects/file-upload-component'
          className={cn(
            "w-full flex flex-col items-start gap-2 rounded-lg border py-3 px-5 text-left text-sm transition-all hover:bg-accent"
          )}
        >
          <div className='flex w-full flex-col gap-1'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2 justify-between'>
                <div className='text-2xl font-semibold mb-2'>
                  File Upload Component
                </div>
              </div>
            </div>
            <div className='font-sm text-muted-foreground prose'>
              A Next.js 14 component with shadcnUI and TailwindCSS integration
              for elegant and efficient file uploads.
            </div>
          </div>
          <div className='flex gap-2 mt-4 flex-wrap'>
            <Badge variant='default'>full-stack</Badge>
            <Badge variant='default'>Next.js 14</Badge>
            <Badge variant='default'>ShadcnUI</Badge>
            <Badge variant='default'>component</Badge>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default ProjectsPage;
