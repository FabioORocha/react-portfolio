import Image from "next/image";
import Fullbanner from "@/components/fullbanner"
import About from "@/components/about"
import Experience from "@/components/experience";
import ContactForm from "@/components/contact";

export default function Home() {
  return (
    <div>
      <Fullbanner/>
      <About/>
      <Experience/>
      <ContactForm/>
    </div>
  );
}
