import { motion } from 'motion/react';

export default function Terms() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing or using the Repostify application and website, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services."
    },
    {
      title: "2. Service Description",
      content: "Repostify is an Android application that helps users manage and schedule video uploads to their own YouTube channel. The app operates entirely on the user's device and communicates directly with official Google and YouTube APIs to provide its features. We do not operate any backend servers."
    },
    {
      title: "3. User Responsibilities",
      items: [
        "You must comply with YouTube's Terms of Service and Community Guidelines at all times",
        "You are solely responsible for ensuring you have the legal right to upload any content to your YouTube channel",
        "You must have proper authorization, licenses, or ownership of any content you upload through Repostify",
        "You are responsible for all activity that occurs through your connected YouTube accounts"
      ]
    },
    {
      title: "4. Account Security",
      content: "Authentication is handled through Google's official OAuth 2.0 system. We never ask for, see, or store your Google password. Access is granted via secure tokens managed by Google Play Services on your device. You are responsible for maintaining the security of your device."
    },
    {
      title: "5. Prohibited Activities",
      items: [
        "Uploading content that you do not have rights to distribute",
        "Violating any applicable laws, regulations, or YouTube's policies",
        "Using the app for spam, deceptive practices, or channel abuse",
        "Attempting to reverse engineer, decompile, or modify the application",
        "Circumventing any security or access control measures"
      ]
    },
    {
      title: "6. Content Responsibility",
      content: "Repostify is a tool that facilitates uploading to YouTube. We do not review, endorse, or take responsibility for any content uploaded through the app. You are solely liable for ensuring your content complies with all applicable laws, YouTube's Terms of Service, and third-party intellectual property rights."
    },
    {
      title: "7. YouTube API Terms",
      content: "By using Repostify, you also agree to be bound by the YouTube Terms of Service (https://www.youtube.com/t/terms) and Google's Privacy Policy (https://policies.google.com/privacy). Repostify's use of YouTube API Services is subject to the Google API Services User Data Policy."
    },
    {
      title: "8. Limitation of Liability",
      content: "Repostify is provided \"as is\" without warranty of any kind, express or implied. We are not liable for any actions taken by YouTube or Google on your account, any data loss resulting from device issues, any content-related disputes or copyright claims, or any interruptions in YouTube API availability."
    },
    {
      title: "9. Termination",
      content: "You may stop using Repostify at any time by uninstalling the app and revoking OAuth access via your Google Account settings. We reserve the right to modify, suspend, or discontinue the application at any time."
    },
    {
      title: "10. Changes to Terms",
      content: "We may update these Terms of Service from time to time. Any changes will be reflected on this page with an updated effective date. Continued use of Repostify after changes constitutes acceptance of the modified terms."
    },
    {
      title: "11. Contact Information",
      content: "For questions regarding these terms, contact us at:\n\nEmail: support@repostify.com"
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
          <h1 className="text-4xl md:text-5xl font-black mb-4">Terms of Service</h1>
          <p className="text-gray-500">Effective Date: April 2026</p>
        </motion.div>

        <div className="space-y-12">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-2xl font-bold">{section.title}</h2>
              {section.content && (
                <p className="text-gray-400 leading-relaxed whitespace-pre-wrap">{section.content}</p>
              )}
              {section.items && (
                <ul className="grid md:grid-cols-2 gap-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl text-gray-300 text-sm border border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
