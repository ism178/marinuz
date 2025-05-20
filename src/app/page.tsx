
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimationProvider from "../contexts/AnimationContext";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <AnimationProvider>
      <AnimatePresence>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <Services />
            <About />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </div>
      </AnimatePresence>
    </AnimationProvider>
  );
}
