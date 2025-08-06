import Image from "next/image";
import Fullbanner from "@/components/fullbanner"
import About from "@/components/about"
import Experience from "@/components/experience";
import ContactForm from "@/components/contact";
import Header from "@/components/header";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="bg-[#212529]">
      <Header/>
      <Fullbanner/>
      <About/>
      <Experience/>
      <Projects/>
      <ContactForm/>
    </div>
  );
}
