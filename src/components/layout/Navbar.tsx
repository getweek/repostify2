import { Link, useLocation } from 'react-router-dom';
import { Youtube, Download, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', path: '/features' },
    { name: 'Download', path: '/download' },
    { name: 'Contact', path: '/contact' },
    { name: 'Legal', path: '/privacy-policy' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Youtube className="w-6 h-6 text-blue-500 group-hover:text-blue-400 transition-colors" />
          <span className="text-xl font-bold tracking-tight text-white">Repostify</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-white ${
                location.pathname === link.path ? 'text-blue-500' : 'text-slate-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/download"
            className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-white text-black hover:bg-slate-200 transition-all"
          >
            Get App
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#111] border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${
                    location.pathname === link.path ? 'text-blue-500' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/download"
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white px-6 py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download App
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
