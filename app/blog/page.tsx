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

const BlogPage = () => {
  return (
    <main>
      <h1 className='text-2xl font-bold my-5'>
        What I have to say about different type of stuff
      </h1>
      <Table>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='ml-5'>Title</TableHead>

            <TableHead className='text-right'></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* 1st row */}
          <TableRow>
            <TableCell className='font-medium'>
              <Link href='/blog/article1' className='hover:underline'>
                Unveiling the Secrets of Python: A Beginner&apos;s Guide
              </Link>
            </TableCell>
            <TableCell className='text-right text-muted-foreground'>
              5,685 views
            </TableCell>
          </TableRow>
          {/* 2nd row */}
          <TableRow>
            <TableCell className='font-medium'>
              <Link href='#' className='hover:underline'>
                The Future of Artificial Intelligence: Trends and Breakthroughs
              </Link>
            </TableCell>
            <TableCell className='text-right text-muted-foreground'>
              21,249 views
            </TableCell>
          </TableRow>
          {/* 3rd row */}
          <TableRow>
            <TableCell className='font-medium'>
              <Link href='#' className='hover:underline'>
                The Evolution of Mobile Apps: Trends Shaping the App Development
                Landscape
              </Link>
            </TableCell>
            <TableCell className='text-right text-muted-foreground'>
              8,602 views
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
};

export default BlogPage;
