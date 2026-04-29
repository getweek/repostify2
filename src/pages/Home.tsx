import { motion } from 'motion/react';
import { 
  Upload, 
  Calendar, 
  Layers, 
  Shield, 
  Smartphone, 
  Zap, 
  Download,
  CheckCircle2,
  Youtube
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      title: "Upload & Schedule",
      description: "Upload videos to your YouTube channel with scheduled publish times.",
      icon: <Upload className="w-5 h-5" />
    },
    {
      title: "Smart Scheduling",
      description: "Set optimal upload slots and let the app handle the timing.",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      title: "Multi-Account",
      description: "Connect and manage multiple YouTube accounts seamlessly.",
      icon: <Layers className="w-5 h-5" />
    },
    {
      title: "On-Device",
      description: "Everything runs locally. No servers, no data leaves your phone.",
      icon: <Smartphone className="w-5 h-5" />
    },
    {
      title: "Secure Auth",
      description: "Google OAuth 2.0 — we never see your password.",
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "Automation",
      description: "Background processing with progress tracking and retry logic.",
      icon: <Zap className="w-5 h-5" />
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Connect Your Channel",
      description: "Sign in with Google and grant YouTube access via secure OAuth 2.0 verification."
    },
    {
      number: "02",
      title: "Configure Sources",
      description: "Add source channels and set your preferred upload schedule and settings."
    },
    {
      number: "03",
      title: "Automate Uploads",
      description: "Start automation — the app handles downloading, processing, and uploading on schedule."
    }
  ];

  return (
    <div className="overflow-hidden bg-slate-950 min-h-screen relative flex flex-col">
      {/* Hero Section */}
      <section className="relative flex-1 flex items-center px-6 md:px-12 pt-40 lg:pt-20 min-h-[90vh] lg:min-h-screen">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-blue-600/10 blur-[150px] rounded-full translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-indigo-600/5 blur-[150px] rounded-full -translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-wider">
                v1.0.0 Now Available
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
                YouTube Content <br className="hidden sm:block" />
                <span className="text-blue-500">Scheduler.</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed max-w-md">
                Schedule and manage video uploads to your YouTube channel from your Android device. Your personal upload assistant — 100% on-device, completely private.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  to="/download" 
                  className="px-10 py-4 rounded-full bg-white text-black font-bold flex items-center justify-center gap-3 hover:bg-slate-200 transition-all text-sm uppercase tracking-widest"
                >
                  <span>Download APK</span>
                  <Download className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-2xl mx-auto lg:max-w-none"
            >
              <div className="bg-slate-900 rounded-3xl border border-white/5 shadow-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] relative">
                {/* Mockup Toolbar */}
                <div className="h-12 border-b border-white/5 bg-slate-950/20 flex items-center px-6 justify-between">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  <div className="bg-white/5 h-6 w-32 md:w-48 rounded-lg border border-white/5" />
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20" />
                </div>
                {/* Mockup Content */}
                <div className="flex h-[calc(100%-3rem)]">
                  <div className="hidden sm:flex w-16 border-r border-white/5 flex-col items-center py-6 gap-6">
                    <div className="w-8 h-8 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-500 flex items-center justify-center">
                      <Upload className="w-4 h-4" />
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-white/5" />
                    <div className="w-8 h-8 rounded-xl bg-white/5" />
                  </div>
                  <div className="flex-1 p-6 md:p-10 space-y-10">
                    <div className="flex justify-between items-end">
                      <div className="space-y-2">
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Uploaded</p>
                        <p className="text-3xl font-black text-white">148</p>
                      </div>
                      <div className="flex gap-1 items-end h-16">
                        <div className="w-4 h-[40%] bg-blue-600/20 rounded-t-sm" />
                        <div className="w-4 h-[60%] bg-blue-600/40 rounded-t-sm" />
                        <div className="w-4 h-[50%] bg-blue-600/30 rounded-t-sm" />
                        <div className="w-4 h-[100%] bg-blue-600 rounded-t-sm" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Channels</p>
                        <p className="text-2xl font-bold">3</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Queue</p>
                        <p className="text-2xl font-bold">12</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-600/10 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="w-full bg-slate-950 border-y border-white/5 px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Google OAuth Verified</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>100% On-Device</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>No Data Collection</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>Open Source</span>
          </div>
        </div>
      </div>

      {/* Feature Bar */}
      <div className="w-full bg-slate-900/40 backdrop-blur-sm border-t border-white/5 px-6 md:px-12 py-12 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                {f.icon}
              </div>
              <p className="text-white font-medium text-sm tracking-tight">{f.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-blue-500 text-xs font-bold uppercase tracking-[0.4em]">Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">Powerful tools. Zero clutter.</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-8 bg-slate-900/50 border border-white/5 rounded-[32px] hover:bg-slate-900 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 text-blue-500">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-blue-500 text-sm font-bold uppercase tracking-[0.3em]">The Workflow</h2>
                <h3 className="text-3xl md:text-4xl font-bold">How Repostify Works</h3>
                <p className="text-gray-400 leading-relaxed">
                  Three simple steps to automate your YouTube channel management. Everything runs on your device — private and secure.
                </p>
              </div>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="text-4xl font-black text-white/10 font-mono translate-y-[-8px]">
                      {step.number}
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold">{step.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-blue-600/5 rounded-full absolute inset-[-40px] blur-3xl" />
              <div className="relative bg-slate-900 border border-white/5 p-8 rounded-[40px] shadow-2xl overflow-hidden">
                <div className="space-y-6">
                   <div className="bg-white/5 p-6 rounded-2xl flex items-center gap-4">
                      <CheckCircle2 className="w-8 h-8 text-blue-500" />
                      <div>
                        <div className="font-bold">Channel Connected</div>
                        <div className="text-xs text-gray-500">YouTube account linked via OAuth 2.0</div>
                      </div>
                   </div>
                   <div className="bg-white/5 p-6 rounded-2xl flex items-center gap-4 opacity-50">
                      <Upload className="w-8 h-8 text-blue-500" />
                      <div>
                        <div className="font-bold">Uploading...</div>
                        <div className="text-xs text-gray-500">Processing video to your channel</div>
                      </div>
                   </div>
                   <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 p-8 rounded-3xl border border-blue-500/20 flex flex-col items-center justify-center text-center gap-4">
                      <Zap className="w-12 h-12 text-blue-500" />
                      <div className="text-lg font-bold">Scheduled & Published</div>
                      <p className="text-sm text-gray-400">Your video is live on your YouTube channel at the scheduled time.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-500 text-sm font-bold uppercase tracking-[0.3em] mb-4">FAQ</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is Repostify free?",
                a: "Yes, Repostify is completely free to use. There are no hidden charges, subscriptions, or in-app purchases. We believe in providing value to creators without barriers."
              },
              {
                q: "How does on-device processing work?",
                a: "Unlike cloud-based tools, Repostify processes everything directly on your phone. Your videos never leave your device until they're uploaded directly to YouTube. This means your data stays private and you maintain complete control."
              },
              {
                q: "Is my YouTube account safe?",
                a: "Absolutely. We use Google's official OAuth 2.0 authentication system - the same secure method used by thousands of apps. We never see or store your password. You can revoke access anytime from your Google Account settings."
              },
              {
                q: "What Android version do I need?",
                a: "Repostify requires Android 8.0 (API level 26) or higher. This covers most modern Android devices. For the best experience, we recommend Android 10 or later."
              },
              {
                q: "Can I schedule shorts and livestreams?",
                a: "Currently, Repostify supports scheduling regular video uploads. YouTube Shorts and livestream scheduling may be added in future updates based on user demand."
              },
              {
                q: "How do I report a bug or get support?",
                a: "You can reach our support team at support@repostify.xyz. We typically respond within 24-48 hours. You can also report issues on our GitHub repository."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:bg-slate-900/70 transition-all">
                <h4 className="text-lg font-bold text-white mb-3">{faq.q}</h4>
                <p className="text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-500">
              Still have questions?{' '}
              <Link to="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
                Contact our support team
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] md:rounded-[48px] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-600/30">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.4)_1px,transparent_0)] bg-[size:40px_40px]" />
          </div>
          
          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight">Focus on Creating. <br /> We'll handle the rest.</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link 
                to="/download" 
                className="w-full sm:w-auto bg-white text-black hover:bg-slate-100 px-12 py-5 rounded-full text-sm font-bold uppercase tracking-[0.2em] transition-all"
              >
                Get Repostify Now
              </Link>
            </div>
            <p className="text-xs text-blue-200/40 uppercase tracking-[0.3em]">Latest release v1.0.0 • Free • On-device only</p>
          </div>
        </div>
      </section>
    </div>
  );
}
