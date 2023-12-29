import CurrentPath from "@/components/CurrentPath";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Home",
    default: "Home",
  },
};

export default function Home() {
  return <CurrentPath />;
}
