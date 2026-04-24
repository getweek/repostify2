import { motion } from 'motion/react';
import { 
  Upload, 
  Calendar, 
  Layers, 
  Shield, 
  Smartphone, 
  Zap,
  Lock,
  Bell,
  HardDrive,
  RefreshCw
} from 'lucide-react';

export default function Features() {
  const detailedFeatures = [
    {
      title: "Scheduled Uploads",
      description: "Set specific upload times for your videos. Repostify handles the publishing automatically at fixed daily time slots, so your content goes live exactly when your audience is most active.",
      icon: <Calendar className="w-8 h-8 text-blue-500" />,
      features: ["Daily Time Slots", "Auto-Publishing", "Queue Management"]
    },
    {
      title: "Multi-Account Support",
      description: "Connect multiple YouTube accounts and manage them all from one app. Switch between channels seamlessly and keep your upload queues organized per account.",
      icon: <Layers className="w-8 h-8 text-blue-500" />,
      features: ["Multiple Channels", "Per-Account Queues", "Easy Switching"]
    },
    {
      title: "Background Automation",
      description: "Start the automation and let it run in the background. Repostify processes videos one by one — downloading, preparing, and uploading — even when the app is minimized.",
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      features: ["Background Service", "Auto-Resume", "Progress Tracking"]
    },
    {
      title: "Smart Retry Logic",
      description: "Network issues? API limits? Repostify automatically retries failed uploads with exponential backoff. It handles YouTube's daily quota limits gracefully and resumes the next day.",
      icon: <RefreshCw className="w-8 h-8 text-blue-500" />,
      features: ["Exponential Backoff", "Quota Handling", "Error Recovery"]
    },
    {
      title: "100% On-Device",
      description: "Your data never leaves your phone. There are no servers, no cloud storage, no tracking. Everything — from authentication to video processing — happens locally on your Android device.",
      icon: <HardDrive className="w-8 h-8 text-blue-500" />,
      features: ["Zero Servers", "Local Storage", "Full Privacy"]
    },
    {
      title: "Secure Authentication",
      description: "Sign in with Google's native OAuth 2.0 system. We never see your password. Tokens are managed by Google Play Services — the same security used by Gmail and YouTube.",
      icon: <Lock className="w-8 h-8 text-blue-500" />,
      features: ["Google OAuth 2.0", "No Password Access", "Token Auto-Refresh"]
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-slate-950 text-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black tracking-tight text-white font-sans"
          >
            Built for <span className="text-blue-500">Creators.</span>
          </motion.h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Everything you need to automate YouTube uploads from your Android device.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {detailedFeatures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/40 border border-white/5 rounded-[40px] p-10 md:p-16 space-y-10 group hover:bg-slate-900 transition-all duration-500"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500">
                  {f.icon}
                </div>
                <div className="space-y-3">
                   <h2 className="text-3xl font-bold text-white tracking-tight">{f.title}</h2>
                   <p className="text-slate-400 leading-relaxed text-sm">{f.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                 {f.features.map((tag, j) => (
                   <span key={j} className="bg-white/5 px-3 py-1.5 rounded-lg">
                     {tag}
                   </span>
                 ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Capabilities */}
        <div className="mt-24 md:mt-32">
           <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] md:rounded-[56px] p-8 md:p-20 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay opacity-30" />
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
                 <div className="text-center space-y-4">
                    <HardDrive className="w-10 h-10 text-white opacity-50 mx-auto" />
                    <h3 className="font-bold text-white">On-Device</h3>
                    <p className="text-sm text-blue-100/60">No servers. All processing happens locally on your phone.</p>
                 </div>
                 <div className="text-center space-y-4">
                    <Lock className="w-10 h-10 text-white opacity-50 mx-auto" />
                    <h3 className="font-bold text-white">Secure Auth</h3>
                    <p className="text-sm text-blue-100/60">Google OAuth 2.0 — industry standard security.</p>
                 </div>
                 <div className="text-center space-y-4">
                    <Smartphone className="w-10 h-10 text-white opacity-50 mx-auto" />
                    <h3 className="font-bold text-white">Android Native</h3>
                    <p className="text-sm text-blue-100/60">Built with Kotlin and Jetpack Compose for smooth performance.</p>
                 </div>
                 <div className="text-center space-y-4">
                    <Bell className="w-10 h-10 text-white opacity-50 mx-auto" />
                    <h3 className="font-bold text-white">Notifications</h3>
                    <p className="text-sm text-blue-100/60">Real-time progress updates and upload status alerts.</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
