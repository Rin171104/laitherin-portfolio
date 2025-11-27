import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'TRANG CHỦ', href: '#home' },
  { label: 'GIỚI THIỆU', href: '#about' },
  { label: 'KỸ NĂNG', href: '#skills' },
  { label: 'DỰ ÁN', href: '#projects' },
  { label: 'LIÊN HỆ', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section logic
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100; // Offset trigger point

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80; // Navbar height + buffer
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        scrolled
          ? 'bg-cyber-dark/80 backdrop-blur-md border-cyber-primary/20 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 group cursor-pointer"
            onClick={(e) => handleNavClick(e as any, '#home')}
          >
            <div className="p-2 border border-cyber-primary rounded-sm group-hover:bg-cyber-primary/10 transition-colors">
                <Terminal className="h-6 w-6 text-cyber-primary" />
            </div>
            <span className="font-orbitron font-bold text-xl tracking-wider text-white">
              AI<span className="text-cyber-primary">.NEXUS</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative font-rajdhani font-semibold text-lg transition-colors px-3 py-2 group ${
                      isActive ? 'text-cyber-primary' : 'text-gray-300 hover:text-cyber-primary'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-cyber-primary transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-cyber-panel focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyber-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cyber-panel/95 backdrop-blur-xl border-b border-cyber-primary/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-3 py-2 font-orbitron text-base font-medium rounded-md transition-colors ${
                    isActive 
                      ? 'text-cyber-primary bg-cyber-primary/10 border-l-2 border-cyber-primary' 
                      : 'text-gray-300 hover:text-white hover:bg-cyber-primary/20'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;