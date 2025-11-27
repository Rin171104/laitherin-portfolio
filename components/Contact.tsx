import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Terminal, Loader2, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    
    // Simulate API network request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form status after delay
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-4 mb-16 justify-center">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white">
            04. <span className="text-cyber-secondary">KẾT NỐI</span>
            </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-cyber-panel border border-gray-800 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Terminal size={100} />
                </div>
                <h3 className="font-rajdhani font-bold text-2xl text-white mb-6">Thông Tin Liên Hệ</h3>
                <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-cyber-dark border border-cyber-primary/30 flex items-center justify-center group-hover:border-cyber-primary transition-colors">
                            <Mail className="text-cyber-primary" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 font-mono">Email</p>
                            <p className="text-white font-medium">laitherin1711@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-cyber-dark border border-cyber-primary/30 flex items-center justify-center group-hover:border-cyber-primary transition-colors">
                            <Phone className="text-cyber-primary" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 font-mono">Điện Thoại</p>
                            <p className="text-white font-medium">0392581150</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-cyber-dark border border-cyber-primary/30 flex items-center justify-center group-hover:border-cyber-primary transition-colors">
                            <MapPin className="text-cyber-primary" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 font-mono">Địa Điểm</p>
                            <p className="text-white font-medium">Đi Trạch - Hoài Đức - Hà Nội</p>
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Terminal Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black/80 border border-cyber-primary/30 p-1 rounded-sm shadow-[0_0_20px_rgba(0,243,255,0.1)]"
          >
            <div className="bg-cyber-dark p-6 h-full font-mono text-sm relative">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-6 border-b border-gray-800 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-4 text-gray-500">root@ainexus:~/contact-form</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-cyber-primary mb-1">&gt; input_name:</label>
                        <input 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            type="text" 
                            required
                            className="w-full bg-transparent border-b border-gray-700 focus:border-cyber-primary outline-none text-white py-2 transition-colors placeholder-gray-700"
                            placeholder="Nhập tên của bạn_"
                        />
                    </div>
                    <div>
                        <label className="block text-cyber-primary mb-1">&gt; input_email:</label>
                        <input 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email" 
                            required
                            className="w-full bg-transparent border-b border-gray-700 focus:border-cyber-primary outline-none text-white py-2 transition-colors placeholder-gray-700"
                            placeholder="Nhập email_"
                        />
                    </div>
                    <div>
                        <label className="block text-cyber-primary mb-1">&gt; input_message:</label>
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full bg-transparent border-b border-gray-700 focus:border-cyber-primary outline-none text-white py-2 transition-colors placeholder-gray-700 resize-none"
                            placeholder="Nội dung tin nhắn..._"
                        ></textarea>
                    </div>

                    <button 
                        type="submit"
                        disabled={status !== 'idle'}
                        className={`mt-4 w-full group relative overflow-hidden py-3 border font-bold transition-all duration-300 ${
                            status === 'success' 
                            ? 'bg-green-500/20 border-green-500 text-green-500' 
                            : 'bg-cyber-primary/10 border-cyber-primary text-cyber-primary hover:bg-cyber-primary hover:text-black'
                        } disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                        <span className="flex items-center justify-center gap-2">
                            {status === 'submitting' ? (
                                <>
                                    <Loader2 size={18} className="animate-spin" />
                                    SENDING_DATA...
                                </>
                            ) : status === 'success' ? (
                                <>
                                    <Check size={18} />
                                    TRANSMISSION_COMPLETE
                                </>
                            ) : (
                                <>
                                    <Send size={18} />
                                    EXECUTE_SEND()
                                </>
                            )}
                        </span>
                    </button>
                </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;