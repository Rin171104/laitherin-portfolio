import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "KIẾN TẠO TƯƠNG LAI VỚI TRÍ TUỆ NHÂN TẠO";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 relative"
        >
            <div className="absolute -inset-6 bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-primary/50 rounded-full blur-2xl animate-pulse opacity-60"></div>
            <div className="relative w-40 h-40 rounded-full border-2 border-cyber-primary/50 overflow-hidden shadow-[0_0_30px_rgba(0,243,255,0.4)] bg-gradient-to-br from-cyber-panel via-cyber-dark to-black">
                <img 
                    src="https://res.cloudinary.com/dske4oep6/image/upload/v1764243504/avt_yjtq8n.jpg"
                    alt="Lại Thế Rin"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-cyber-primary/20 to-transparent pointer-events-none"></div>
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="text-cyber-primary font-mono text-xl md:text-2xl tracking-[0.2em] uppercase">
            &lt; System.Online /&gt;
          </h2>
          
          <h1 className="font-orbitron font-black text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
            LẠI THẾ <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-secondary">RIN</span>
          </h1>

          <div className="h-16 flex items-center justify-center">
            <p className="font-rajdhani font-semibold text-xl md:text-3xl text-gray-300">
              {text}
              <span className="animate-blink">|</span>
            </p>
          </div>

          <p className="max-w-2xl mx-auto font-sans text-gray-400 text-lg leading-relaxed">
            Kỹ sư AI chuyên sâu về Machine Learning, Deep Learning và NLP. Xây dựng các mô hình thông minh giải quyết vấn đề thực tiễn từ dự báo thời tiết đến dự đoán tài chính.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex gap-6"
        >
          <a 
            href="#projects"
            className="group relative px-8 py-3 bg-cyber-primary/10 overflow-hidden rounded-sm border border-cyber-primary hover:bg-cyber-primary/20 transition-all duration-300 clip-corner"
          >
            <div className="absolute inset-0 w-1 bg-cyber-primary group-hover:w-full transition-all duration-300 opacity-10"></div>
            <span className="font-orbitron font-bold text-cyber-primary tracking-wider">XEM DỰ ÁN</span>
          </a>
          
          <a 
            href="#contact"
            className="px-8 py-3 bg-transparent border border-gray-600 hover:border-white text-gray-300 hover:text-white transition-all duration-300 rounded-sm font-orbitron font-bold tracking-wider"
          >
            LIÊN HỆ
          </a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-cyber-primary/50" />
      </motion.div>
    </section>
  );
};

export default Hero;