import { Link } from 'react-router-dom';
import { Youtube, Twitter, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-blue-600 p-1 rounded">
                <Youtube className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">Repostify</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Professional YouTube Channel Management Suite. 
              Built for creators, by creators.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-600 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-600 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-gray-600 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link to="/features" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">Features</Link></li>
              <li><Link to="/download" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">Download</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy-policy" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">Terms of Service</Link></li>
              <li><Link to="/dmca" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">DMCA/Copyright</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Support</h4>
            <div className="space-y-4">
              <p className="text-gray-500 text-sm flex items-center gap-2">
                <Mail className="w-4 h-4" />
                support@repostify.xyz
              </p>
              <p className="text-gray-500 text-sm">
                DMCA: dmca@repostify.xyz
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-xs text-gray-400 leading-relaxed italic">
                  "Manage all your channels from one powerful dashboard."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {currentYear} Repostify. All rights reserved. Not affiliated with Google or YouTube.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-gray-600 hover:text-white transition-colors text-xs">Privacy</Link>
            <Link to="/terms" className="text-gray-600 hover:text-white transition-colors text-xs">Terms</Link>
            <Link to="/dmca" className="text-gray-600 hover:text-white transition-colors text-xs">DMCA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
