import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Database, Network } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Kinh Nghiệm', value: 'Nghiên cứu khoa học', icon: Brain },
    { label: 'Dự Án', value: '3', icon: Code2 },
    { label: 'Models Trained', value: '20+', icon: Database },
    { label: 'Độ Chính Xác', value: '90%', icon: Network },
  ];

  return (
    <section id="about" className="py-24 relative bg-cyber-panel/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px bg-cyber-primary w-12"></div>
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white">
            01. <span className="text-cyber-primary">THÔNG TIN</span>
          </h2>
          <div className="h-px bg-gray-700 flex-grow"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="font-mono text-cyber-primary mb-2">
              // INITIALIZING_PROFILE...
            </div>
            <h3 className="font-rajdhani font-bold text-3xl text-white">
              Sự kết hợp giữa <span className="text-cyber-secondary">Logic</span> và <span className="text-cyber-primary">Sáng tạo</span>
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Xin chào! Tôi là một Kỹ sư AI với niềm đam mê sâu sắc về việc xây dựng các hệ thống thông minh có khả năng giải quyết các vấn đề thực tế. Hành trình của tôi bắt đầu từ việc tò mò về cách máy tính "học", và giờ đây tôi đang phát triển các mô hình Deep Learning tiên tiến.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Tôi chuyên sâu về Xử lý Ngôn ngữ Tự nhiên (NLP) và Thị giác Máy tính (Computer Vision). Mục tiêu của tôi không chỉ là tạo ra code chạy được, mà là tạo ra các giải pháp tối ưu, có khả năng mở rộng và mang lại giá trị thực tiễn.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-cyber-dark border border-cyber-primary/20 p-6 rounded-sm hover:border-cyber-primary/60 transition-colors group relative overflow-hidden clip-corner-inverse"
              >
                <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                    <stat.icon className="w-8 h-8 text-cyber-primary" />
                </div>
                <h4 className="font-orbitron font-bold text-3xl text-white mb-1 group-hover:text-cyber-primary transition-colors">
                  {stat.value}
                </h4>
                <p className="font-mono text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;