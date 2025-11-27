import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-panel border-t border-gray-800 py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-gray-400 font-mono text-sm text-center md:text-left">
          <p>© 2024 AI.NEXUS. All systems operational.</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-400 hover:text-cyber-primary transition-colors transform hover:scale-110">
            <Github size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-cyber-primary transition-colors transform hover:scale-110">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-cyber-primary transition-colors transform hover:scale-110">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;