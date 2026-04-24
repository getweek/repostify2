import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Introduction",
      content: "Repostify (\"we\", \"our\", or \"us\") is committed to protecting your privacy. This Privacy Policy explains how our Android application collects, uses, stores, and safeguards your information when you use Repostify — a YouTube channel management and scheduling tool. Repostify operates entirely on your device with no external servers."
    },
    {
      title: "2. Information We Collect",
      items: [
        { label: "Google Account Information", desc: "When you sign in via Google OAuth 2.0, we access your email address and basic profile information (name, profile picture) solely to identify your account within the app." },
        { label: "YouTube Channel Data", desc: "With your explicit consent, we access your YouTube channel information (channel name, channel ID) and the ability to upload videos to your channel on your behalf." },
        { label: "Authentication Tokens", desc: "OAuth 2.0 access tokens are managed by Google Play Services on your device to maintain your authenticated session. We never see or store your Google password." },
      ]
    },
    {
      title: "3. How We Use Your Information",
      items: [
        { desc: "To authenticate your identity and connect to your YouTube channel" },
        { desc: "To upload videos to your own YouTube channel on your behalf" },
        { desc: "To set video metadata (title, description, tags, privacy status, scheduled publish time)" },
        { desc: "To display your channel name and basic information in the app dashboard" },
      ]
    },
    {
      title: "4. Google API Services User Data Policy",
      content: "Repostify's use and transfer of information received from Google APIs to any other app will adhere to the Google API Services User Data Policy, including the Limited Use requirements.",
      linkUrl: "https://developers.google.com/terms/api-services-user-data-policy",
      linkText: "Google API Services User Data Policy",
      isCritical: true
    },
    {
      title: "5. Data Storage & Security",
      items: [
        { desc: "All data is stored locally on your device — we do not operate any external servers or cloud storage" },
        { desc: "Authentication tokens are managed securely by Android's account management system" },
        { desc: "No user data is transmitted to any server owned or operated by Repostify" },
        { desc: "Your data never leaves your device except when communicating directly with official Google and YouTube APIs" },
      ]
    },
    {
      title: "6. Data Sharing & Third Parties",
      items: [
        { desc: "We do NOT sell, share, rent, or trade your personal data with any third parties" },
        { desc: "We do NOT use your data for advertising, marketing, or profiling purposes" },
        { desc: "We do NOT use your data to train machine learning or artificial intelligence models" },
        { desc: "Your data is used exclusively to provide the app's user-facing features directly to you" },
      ]
    },
    {
      title: "7. Data Retention & Deletion",
      items: [
        { desc: "Your data is stored on your device only while the app is installed" },
        { desc: "Uninstalling the app removes all locally stored data" },
        { desc: "You can revoke YouTube access at any time via your Google Account settings at myaccount.google.com → Security → Third-party apps with account access" },
        { desc: "You may contact us at any time to request guidance on data deletion" },
      ]
    },
    {
      title: "8. Your Rights",
      items: [
        { desc: "Access and review any data the app stores about you" },
        { desc: "Revoke OAuth permissions at any time via Google Account Settings" },
        { desc: "Delete all app data by uninstalling the application or clearing app data" },
        { desc: "Contact us for any data-related inquiries or concerns" },
      ]
    },
    {
      title: "9. Changes to This Policy",
      content: "If we make changes to how we access, use, or share your Google user data, we will update this Privacy Policy and notify users through the app before implementing any changes. Continued use of the app after updates constitutes acceptance of the revised policy."
    },
    {
      title: "10. Contact Us",
      content: "For questions or concerns about this Privacy Policy or our data practices:\n\nEmail: support@repostify.com\nResponse time: Within 24–48 hours"
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 pb-8 border-b border-white/10"
        >
          <h1 className="text-4xl md:text-5xl font-black mb-4">Privacy Policy</h1>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
             <span className="bg-blue-600/10 text-blue-400 px-3 py-1 rounded-full font-bold">Last Updated: April 2026</span>
             <span>•</span>
             <span>Repostify</span>
          </div>
        </motion.div>

        <div className="space-y-12">
          {sections.map((section, idx) => (
            <div key={idx} className={`space-y-6 ${section.isCritical ? 'p-8 bg-blue-600/5 border border-blue-600/20 rounded-3xl' : ''}`}>
              <h2 className="text-2xl font-bold">{section.title}</h2>
              {section.content && (
                <p className="text-gray-400 leading-relaxed whitespace-pre-wrap">{section.content}</p>
              )}
              {section.linkUrl && (
                <p className="text-gray-400 leading-relaxed">
                  Read the full{' '}
                  <a href={section.linkUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">
                    {section.linkText}
                  </a>.
                </p>
              )}
              {section.items && (
                <ul className="space-y-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <div className="text-gray-400 leading-relaxed">
                        {item.label && <span className="font-bold text-gray-300 mr-2">{item.label}:</span>}
                        {item.desc}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-[#111] border border-white/5 rounded-[40px] text-center">
          <h3 className="text-xl font-bold mb-4">Transparency Commitment</h3>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8 text-sm">
            Repostify processes all data entirely on your device. We do not operate servers, collect analytics, or track your usage. Your privacy is guaranteed by design — no data ever passes through our infrastructure.
          </p>
          <a href="mailto:support@repostify.com" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-xl shadow-blue-600/20">
            Contact Privacy Team
          </a>
        </div>
      </div>
    </div>
  );
}
