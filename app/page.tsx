import { Metadata } from "next";
import Link from "next/link";

import { Inter, Great_Vibes } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Home",
    default: "Home",
  },
};

export default function Home() {
  return (
    <main>
      <h1 className='text-2xl font-bold my-5'>About</h1>
      <div className={inter.className}>
        <p className='leading-8 indent-10'>
          <span
            className={`${greatVibes.className} text-[50px] mr-1 font-bold`}
          >
            M
          </span>
          eet Nizar, a passionate computer science student with a love for
          unraveling the intricacies of the digital world. From tinkering with
          the basic elements of web development to diving into the sophisticated
          realms of Next.js, Nizar&apos;s journey into computer science has been
          nothing short of exhilarating. This early fascination paved the way
          for a deep exploration of web technologies. Currently pursuing a
          degree in computer science with a focus on web development at a
          renowned university, Nizar thrives on the challenges presented by the
          dynamic field. The academic journey is no walk in the park, but
          Nizar&apos;s determination and inquisitive nature turn every hurdle
          into an opportunity for learning and growth. Explore my{" "}
          <Link
            className='text-blue-600 underline dark:text-blue-500 hover:no-underline'
            href='/blog'
          >
            blog
          </Link>
          , where I share my discoveries in the world of web development.
          Alternatively, take a glimpse at my previous{" "}
          <Link
            className='text-blue-600 underline dark:text-blue-500 hover:no-underline'
            href='/projects'
          >
            projects
          </Link>
          , where Next.js takes center stage.
        </p>
      </div>
    </main>
  );
}
