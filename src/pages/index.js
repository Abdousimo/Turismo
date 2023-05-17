import Header from "@/components/LandingPage/Header";
import Navbar from "@/components/LandingPage/Navbar";
import Slider from "@/components/LandingPage/ImageSlider";
import { useState } from "react";
import Contact from "@/components/LandingPage/Contact";
import Footer from "@/components/LandingPage/Footer";
import Presentation from "@/components/LandingPage/Presentation";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main>
      <Header />
      <Slider />
      <Presentation />
      <Contact />
      <Footer />
    </main>
  );
}
