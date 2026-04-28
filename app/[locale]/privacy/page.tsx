import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Privacy Policy — Noetic",
  description: "Privacy Policy for Noetic",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen text-foreground">
      <Navbar />
      <section className="px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Last updated: April 2026</p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                Noetic ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application and website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">2. Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-3">We may collect information about you in a variety of ways, including:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Account information (name, email address)</li>
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (how you interact with our application)</li>
                <li>Voice and debate session data (only with your explicit consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">3. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Provide, improve, and maintain our services</li>
                <li>Send administrative information and updates</li>
                <li>Respond to your inquiries and requests</li>
                <li>Monitor and analyze usage trends and preferences</li>
                <li>Ensure compliance with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">4. Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">5. Third-Party Services</h2>
              <p className="text-gray-300 leading-relaxed">
                We may use third-party service providers to assist us in operating our website and conducting our business. These service providers are obligated to maintain the confidentiality of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">6. Your Rights</h2>
              <p className="text-gray-300 leading-relaxed">
                Depending on your location, you may have the right to access, correct, or delete your personal information. Please contact us at hello@noetic.app to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">7. Changes to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by updating the "last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">8. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
                <br />
                <a href="mailto:hello@noetic.app" className="text-white hover:text-gray-200">hello@noetic.app</a>
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-500">
                Noetic — hello@noetic.app
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
