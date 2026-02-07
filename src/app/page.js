// app/page.js
import AboutUs from "@/components/AboutUs";
import ContactSection from "@/components/ContactSection";
import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Faleye Surveys | Premier Survey Solutions in Lagos, Nigeria",
  description:
    "Leading general survey firm in Lagos delivering cutting-edge topographical, engineering, cadastral, and geospatial solutions with proven excellence.",
  openGraph: {
    title: "Faleye Surveys | Premier Survey Solutions in Lagos, Nigeria",
    description:
      "Leading general survey firm in Lagos delivering cutting-edge topographical, engineering, cadastral, and geospatial solutions with proven excellence.",
    url: "https://www.faleyesurveys.com",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSlider />
      <AboutUs />
      <Services />
      <Team />
      <Testimonials />
      <ContactSection />

      {/* Structured Data for the entire page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Faleye Surveys - Home",
            description: "Premier survey solutions in Lagos, Nigeria",
            url: "https://www.faleyesurveys.com",
            mainEntity: {
              "@type": "ProfessionalService",
              name: "Faleye Surveys",
              url: "https://www.faleyesurveys.com",
            },
          }),
        }}
      />
    </>
  );
}
