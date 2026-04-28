import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Terms & Conditions — Noetic",
  description: "Terms & Conditions for Noetic",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen text-foreground">
      <Navbar />
      <section className="px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Last updated: April 2026</p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">1. Agreement to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using the Noetic application and website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">2. Use License</h2>
              <p className="text-gray-300 leading-relaxed mb-3">Permission is granted to temporarily download one copy of the materials (information or software) on Noetic for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Modify or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the platform</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">3. Disclaimer</h2>
              <p className="text-gray-300 leading-relaxed">
                The materials on Noetic are provided on an 'as is' basis. Noetic makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">4. Limitations</h2>
              <p className="text-gray-300 leading-relaxed">
                In no event shall Noetic or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Noetic's application or website, even if Noetic or a Noetic authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">5. Accuracy of Materials</h2>
              <p className="text-gray-300 leading-relaxed">
                The materials appearing on Noetic could include technical, typographical, or photographic errors. Noetic does not warrant that any of the materials on our platform are accurate, complete, or current. Noetic may make changes to the materials contained on our platform at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">6. Links</h2>
              <p className="text-gray-300 leading-relaxed">
                Noetic has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Noetic of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">7. Modifications</h2>
              <p className="text-gray-300 leading-relaxed">
                Noetic may revise these terms of service for our website and application at any time without notice. By using this platform, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">8. Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">9. Contact</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms & Conditions, please contact us at:
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
