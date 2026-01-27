// app/page.js
import AboutUs from "@/components/AboutUs";
import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSlider />
      <AboutUs />
      <Services />
      <Team />
    </>
  );
}
