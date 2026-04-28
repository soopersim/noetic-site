import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ReviewsSection from "@/components/reviews-section";
import WaitlistForm from "@/components/waitlist-form";
import AppPreview from "@/components/app-preview";
import SocialDebateRooms from "@/components/social-debate-rooms";

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen text-foreground">
      <Navbar />
      <Hero />
      <AppPreview />
      <SocialDebateRooms />
      <ReviewsSection />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
