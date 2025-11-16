import React from "react";
import Hero from "../components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Highlights from "@/components/Highlights";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

function page() {
  return (
    <div className="min-h-screen bg-[#141414] text-[#fafafa]">
      <Hero />
      <About />
      <Capabilities />
      <Highlights />
      <Contact />
      <Footer />
    </div>
  );
}

export default page;
