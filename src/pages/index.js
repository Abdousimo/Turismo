import Header from "@/components/LandingPage/Header";

import ImageSlider from "@/components/LandingPage/ImageSlider";
import { useState } from "react";
import Contact from "@/components/LandingPage/Contact";
import Footer from "@/components/LandingPage/Footer";
import Presentation from "@/components/LandingPage/Presentation";
import Cerf from "@/components/LandingPage/Cerf";

export default function Home() {
  return (
    <main>
      <Header />
      <Presentation />
      <ImageSlider />
      <Contact />
      <Footer />
      
    </main>
  );
}
