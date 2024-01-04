import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";

import { GeistMono } from "geist/font/mono";
import { Tweet } from "react-tweet";
import remarkGfm from "remark-gfm";
import { GeistSans } from "geist/font/sans";
import { Undo2 } from "lucide-react";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
};

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("content"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("content", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export async function generateMetadata({ params }: any) {
  const blog = getPost(params);

  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
  };
}

export default function Post({ params }: any) {
  const props = getPost(params);

  return (
    <main className='mt-12 font-sans'>
      <article className='text-slate-900/80 leading-8 prose prose-p:text-base prose-h1:text-2xl prose-sm md:prose-base lg:prose-lg mx-auto max-w-[650px]'>
        <Link
          href='/blog'
          className='flex gap-x-1 items-center w-fit text-sm text-slate-500 mb-5 hover:text-slate-700 no-underline'
        >
          <Undo2 className='h-4 w-4 mb-1' />
          Back
        </Link>

        <h1 className='title font-medium tracking-tighter max-w-[650px]'>
          {props.frontMatter.title}
        </h1>
        <div className='prose-img:m-0'>
          <MDXRemote
            source={props.content}
            components={{ Tweet }}
            options={options}
          />
        </div>
      </article>
    </main>
  );
}