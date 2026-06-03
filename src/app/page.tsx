import Navbar from "./components/Navbar";
import ColorVisualizer from "./components/sections/ColorVisualizer";
import Hero from "./components/sections/Hero";
// import FeaturedProducts from "./components/sections/Products";
import Stats from "./components/sections/Stats";
import WhyChooseUs from "./components/sections/WhyChoosus";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <ColorVisualizer />
      <WhyChooseUs />
      
    </main>
  );
}
