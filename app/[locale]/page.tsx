import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Intro from "@/components/intro";
import AssociationsSlider from "@/components/associations-slider";
import Navbar from "@/components/navbar";
import ReviewsSection from "@/components/reviews-section";
import WaitlistForm from "@/components/waitlist-form";
import AppPreview from "@/components/app-preview";

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen text-foreground">
      <Navbar />
      <Hero />
      <Intro />
      <HowItWorks />
      <AppPreview />
      <AssociationsSlider />
      <ReviewsSection />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
