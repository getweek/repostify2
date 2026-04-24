import { motion } from 'motion/react';
import { Mail, MessageSquare, Clock, User, AtSign, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form data:", data);
    await new Promise(resolve => setTimeout(resolve, 1500));
  };

  const faqs = [
    { q: "Is Repostify safe for my Google Account?", a: "Yes. We use Google's official OAuth 2.0 system. We never see or store your Google password. You can revoke access at any time from your Google Account settings." },
    { q: "Does Repostify use any external servers?", a: "No. Repostify runs entirely on your Android device. Your data never passes through any server owned by us. The app communicates directly with YouTube's official APIs." },
    { q: "How does scheduled uploading work?", a: "You configure daily time slots in the app settings. Repostify processes your upload queue and publishes videos at those scheduled times using YouTube's scheduled publishing feature." },
    { q: "What happens if YouTube's daily limit is reached?", a: "The app detects the quota limit, pauses uploads, and automatically resumes the next day when the quota resets. Your queue is preserved." },
    { q: "Can I manage multiple YouTube channels?", a: "Yes! You can connect multiple Google accounts and manage separate upload queues for each YouTube channel from within the same app." }
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen lg:flex lg:items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-black">Get in <span className="text-blue-500">Touch</span></h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                Have questions about Repostify or need help with your setup? We're here to help.
              </p>
            </motion.div>

            <div className="grid gap-8">
              <div className="flex gap-6 items-start">
                 <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-blue-500" />
                 </div>
                 <div>
                    <h3 className="font-bold text-lg mb-1">Email Support</h3>
                    <p className="text-gray-400 text-sm">support@repostify.com</p>
                    <p className="text-xs text-blue-500 font-bold mt-2">Response within 24–48 hours</p>
                 </div>
              </div>
              <div className="flex gap-6 items-start">
                 <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-blue-500" />
                 </div>
                 <div>
                    <h3 className="font-bold text-lg mb-1">Support Hours</h3>
                    <p className="text-gray-400 text-sm">Monday – Friday</p>
                    <p className="text-gray-400 text-sm">9:00 AM – 6:00 PM IST</p>
                 </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5 space-y-8">
               <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
               <div className="space-y-6">
                  {faqs.map((faq, i) => (
                    <div key={i} className="group cursor-default">
                       <h4 className="font-bold text-gray-200 mb-2 group-hover:text-blue-400 transition-colors">{faq.q}</h4>
                       <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full translate-x-1/4 translate-y-1/4 -z-10" />
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#111] border border-white/5 rounded-[48px] p-8 md:p-12 shadow-2xl relative z-10"
            >
              {isSubmitSuccessful ? (
                <div className="h-[500px] flex flex-col items-center justify-center text-center space-y-6">
                   <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center">
                      <Send className="w-10 h-10 text-green-500" />
                   </div>
                   <h2 className="text-3xl font-bold">Message Sent!</h2>
                   <p className="text-gray-400">Thanks for reaching out. We'll get back to you within 24–48 hours.</p>
                   <button 
                    onClick={() => window.location.reload()}
                    className="text-blue-500 font-bold hover:underline"
                   >
                     Send another message
                   </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 flex items-center gap-2">
                      <User className="w-3 h-3" /> Full Name
                    </label>
                    <input 
                      {...register("name")}
                      placeholder="Your name" 
                      className={`w-full bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all`}
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 flex items-center gap-2">
                      <AtSign className="w-3 h-3" /> Email Address
                    </label>
                    <input 
                      {...register("email")}
                      placeholder="you@example.com" 
                      className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all`}
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 flex items-center gap-2">
                      <MessageSquare className="w-3 h-3" /> Message
                    </label>
                    <textarea 
                      {...register("message")}
                      rows={6} 
                      placeholder="How can we help you?" 
                      className={`w-full bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all resize-none`}
                    />
                    {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>}
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-blue-600/25 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-gray-600 text-center uppercase tracking-widest font-bold">
                    Typically replies within 24–48 hours
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
