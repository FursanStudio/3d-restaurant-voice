import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import VoiceTeaser from "@/components/VoiceTeaser";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";
import VoiceWidget from "@/components/VoiceWidget";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* Menu -- is a grid*/}
      <Menu />
      <About />
      
      {/*<MenuSection /> */}
      <VoiceTeaser />
      <Reservation />
      <Footer />
      <VoiceWidget />
    </main>
  );
}