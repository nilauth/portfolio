import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

// mdx related imports
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { time } from "console";
import { extractYear } from "@/lib/utils";

const BlogPage = () => {
  // mdx related code

  // 1) Set blogs directory
  const blogDir = "content";

  // 2) Find all files in the blog directory
  const files = fs.readdirSync(path.join(blogDir));

  // 3) For each blog found
  const blogs = files.map((filename) => {
    // 4) Read the content of that blog
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    // 5) Extract the metadata from the blog's content
    const { data: frontMatter } = matter(fileContent);

    // 6) Return the metadata and page slug
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  let latestYears = {};

  return (
    <main className='w-1/2 mx-auto mt-12 max-w-[650px] font-sans'>
      <h1 className='text-2xl mb-8'>
        What I have to say about different type of stuff
      </h1>
      <Table>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Date</TableHead>

            <TableHead>Title</TableHead>
            <TableHead className='text-right'>Read time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* 1st row */}
          {/* {blogs
            .sort((a, b) => {
              // Assuming blog.meta.date is in the 'mm-dd-yyyy' format
              const dateA = new Date(a.meta.date);
              const dateB = new Date(b.meta.date);
              return dateB - dateA; // Sort in descending order (newest first)
            })
            .map((blog) => (
              <TableRow key={blog.slug}>
                <TableCell className='text-left text-muted-foreground w-fit'>
                  {extractYear(blog.meta.date)}
                </TableCell>
                <TableCell className='font-medium'>
                  <Link
                    href={"/blog/" + blog.slug}
                    passHref
                    key={blog.slug}
                    className='hover:underline'
                  >
                    {blog.meta.title}
                  </Link>
                </TableCell>
                <TableCell className='text-right text-muted-foreground w-fit'>
                  {blog.meta.readTime}
                </TableCell>
              </TableRow>
            ))} */}
          {blogs
            .sort((a, b) => {
              // Assuming blog.meta.date is in the 'mm-dd-yyyy' format
              const dateA = new Date(a.meta.date);
              const dateB = new Date(b.meta.date);
              return dateB - dateA; // Sort in descending order (newest first)
            })
            .map((blog) => {
              const blogYear = extractYear(blog.meta.date);

              // Determine whether to display the year or an empty string
              const yearToDisplay = latestYears[blogYear] ? "" : blogYear;

              // Update latestYears for the next iteration
              latestYears[blogYear] = true;

              return (
                <TableRow key={blog.slug}>
                  <TableCell className='text-left text-muted-foreground w-fit'>
                    {yearToDisplay}
                  </TableCell>
                  <TableCell className='font-medium'>
                    <Link
                      href={"/blog/" + blog.slug}
                      passHref
                      key={blog.slug}
                      className='hover:underline'
                    >
                      {blog.meta.title}
                    </Link>
                  </TableCell>
                  <TableCell className='text-right text-muted-foreground w-fit'>
                    {blog.meta.readTime}
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </main>
  );
};

export default BlogPage;
