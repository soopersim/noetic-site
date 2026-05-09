import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import IllustrationBlock from "@/components/illustration-block";
import Universities from "@/components/universities";
import HowItWorks from "@/components/how-it-works";
import WhyNoetic from "@/components/why-noetic";
import ReviewsSection from "@/components/reviews-section";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen text-foreground">
      <Navbar />
      <Hero />
      <IllustrationBlock />
      <Universities />
      <HowItWorks />
      <WhyNoetic />
      <ReviewsSection />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
