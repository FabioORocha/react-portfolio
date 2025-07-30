import Image from "next/image";
import Fullbanner from "@/components/fullbanner"
import About from "@/components/about"
import Experience from "@/components/experience";

export default function Home() {
  return (
    <div>
      <Fullbanner/>
      <About/>
      <Experience/>
    </div>
  );
}
