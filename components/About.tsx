import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Database, Network } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Kinh Nghiệm', value: '6 tháng', icon: Brain },
    { label: 'Dự Án AI', value: '3', icon: Code2 },
    { label: 'Độ Chính Xác (RF)', value: '90%+', icon: Database },
    { label: 'R² (LSTM)', value: '0.968', icon: Network },
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
              Sinh viên năm 4 - <span className="text-cyber-primary">Kỹ Sư Phần Mềm</span>
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Tôi là Lại Thế Rin, sinh viên năm 4 chuyên ngành Kỹ Sư Phần Mềm tại Đại Học Công Nghiệp Hà Nội. Trong 6 tháng gần đây, tôi đã tham gia các dự án nghiên cứu khoa học về AI, bao gồm dự báo thời tiết sử dụng Random Forest, dự đoán giá cổ phiếu với LSTM, và AI chơi game sử dụng NEAT.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Mục tiêu ngắn hạn của tôi là nâng cao kỹ năng qua các dự án AI thực tế, đặc biệt là LLMs, GenAI và Computer Vision. Về lâu dài, tôi mong muốn trở thành một AI Engineer năng lực, có khả năng xây dựng và tối ưu hóa các mô hình AI phục vụ cho các giải pháp thực tiễn.
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