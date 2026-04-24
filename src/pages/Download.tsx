import { motion } from 'motion/react';
import { Download, Smartphone, CheckCircle, ShieldCheck } from 'lucide-react';

export default function DownloadPage() {
  const changelog = [
    { version: "v1.0.0", date: "April 2026", features: ["Initial launch", "Multi-channel support", "Smart scheduling", "Basic analytics"] },
    { version: "v0.9.8", date: "March 2026", features: ["Beta testing phase", "Bug fixes", "Security enhancements"] },
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">Simple Downloading.</h1>
          <p className="text-lg text-gray-400 max-xl mx-auto">
            Get the latest version of Repostify for your Android device and start managing your content on the go.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Main Download Section */}
          <div className="lg:col-span-12">
            <div className="bg-slate-900/40 border border-white/5 rounded-[48px] overflow-hidden p-8 md:p-20">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="space-y-10 flex-1 text-center lg:text-left">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Repostify Mobile</h2>
                    <p className="text-slate-400">Current version 1.0.0 • Size 15.4MB</p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                    <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-2xl text-lg font-bold transition-all flex items-center justify-center gap-3">
                      <Download className="w-5 h-5" />
                      Download APK
                    </button>
                    <div className="w-full sm:w-auto opacity-30 grayscale pointer-events-none">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-40 grayscale">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><ShieldCheck className="w-4 h-4" /> Secure</div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><CheckCircle className="w-4 h-4" /> Verified</div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><Smartphone className="w-4 h-4" /> Android 8+</div>
                  </div>
                </div>
                
                <div className="flex-1 w-full max-w-md">
                   <div className="bg-slate-950/50 border border-white/5 rounded-[32px] p-8 space-y-6">
                      <h3 className="font-bold text-lg">What's Inside</h3>
                      <ul className="space-y-4">
                        {changelog[0].features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-slate-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
