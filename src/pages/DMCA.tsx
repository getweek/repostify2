import { motion } from 'motion/react';
import { Copyright, Mail, Shield, FileText, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DMCA() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Legal Compliance
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              DMCA & Copyright Policy
            </h1>
            <p className="text-slate-400 text-lg max-2xl mx-auto">
              Our commitment to respecting intellectual property rights and copyright law
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">Our Stance on Copyright</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong className="text-white">Repostify is a scheduling tool, not a content redistribution platform.</strong> We do not host, store, or distribute any video content. Users are solely responsible for the content they upload through our application.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Repostify simply provides a scheduling interface that connects directly to YouTube's API. All video content remains on the user's device until uploaded directly to their own YouTube channel via YouTube's official API.
                </p>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <section className="bg-slate-900/50 border border-white/5 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-blue-500" />
                <h2 className="text-2xl font-bold text-white">No Content Hosting</h2>
              </div>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Repostify does not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Host, store, or cache any video content on our servers</li>
                  <li>Redistribute or share user content with third parties</li>
                  <li>Display user videos within our application</li>
                  <li>Process videos on our infrastructure</li>
                </ul>
                <p className="mt-4">
                  All video processing occurs entirely on the user's device. Videos are uploaded directly from the user's phone to YouTube via YouTube's official API, bypassing our servers completely.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-slate-900/50 border border-white/5 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Copyright className="w-6 h-6 text-blue-500" />
                <h2 className="text-2xl font-bold text-white">Copyright Infringement Notification</h2>
              </div>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  If you believe that content uploaded through Repostify infringes your copyright, please send a DMCA takedown notice to:
                </p>
                <div className="bg-slate-950/50 border border-white/10 rounded-xl p-6 my-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <span className="text-white font-semibold">DMCA Contact</span>
                  </div>
                  <p className="text-lg text-white">dmca@repostify.xyz</p>
                </div>
                <p>
                  Your notification must include:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4 mt-4">
                  <li>Your physical or electronic signature</li>
                  <li>Identification of the copyrighted work claimed to be infringed</li>
                  <li>Identification of the infringing material and information to locate it</li>
                  <li>Your contact information (address, phone, email)</li>
                  <li>A statement that you have a good faith belief that the use is not authorized</li>
                  <li>A statement that the information is accurate and you are authorized to act on behalf of the copyright owner</li>
                </ol>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-slate-900/50 border border-white/5 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-6 h-6 text-blue-500" />
                <h2 className="text-2xl font-bold text-white">Counter-Notification Procedure</h2>
              </div>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  If you believe that content you uploaded was removed in error, you may submit a counter-notification containing:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your physical or electronic signature</li>
                  <li>Identification of the removed material and its location</li>
                  <li>A statement under penalty of perjury that you have a good faith belief the material was removed by mistake</li>
                  <li>Your contact information and consent to jurisdiction</li>
                </ul>
                <p className="mt-4">
                  Send counter-notifications to the same DMCA email address above.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="bg-slate-900/50 border border-white/5 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-blue-500" />
                <h2 className="text-2xl font-bold text-white">Repeat Infringer Policy</h2>
              </div>
              <div className="text-slate-300 leading-relaxed">
                <p>
                  Repostify maintains a strict repeat infringer policy. Users who are found to repeatedly upload infringing content through our application will have their access terminated. We reserve the right to suspend or terminate any user's account for violations of copyright law.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="bg-slate-900/50 border border-white/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">User Responsibility</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  By using Repostify, you agree that:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You own or have proper authorization to upload all content</li>
                  <li>Your uploads do not infringe any third-party rights</li>
                  <li>You will not use Repostify to upload unauthorized copyrighted material</li>
                  <li>You are solely responsible for any copyright violations resulting from your uploads</li>
                </ul>
                <p className="mt-4 text-red-400">
                  Repostify is a tool provider only. We do not monitor, review, or approve content uploaded by users. Users bear full legal responsibility for their uploads.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-slate-300 mb-4">
                For DMCA-related inquiries or copyright questions, please contact us at:
              </p>
              <p className="text-xl text-white font-semibold">dmca@repostify.xyz</p>
              <p className="text-sm text-slate-400 mt-4">
                We aim to respond to all DMCA notices within 48 hours.
              </p>
            </section>
          </div>

          {/* Last Updated */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-slate-500">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <div className="flex items-center justify-center gap-6 mt-6">
              <Link to="/privacy-policy" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
