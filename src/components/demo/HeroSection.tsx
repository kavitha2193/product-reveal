import { motion } from 'framer-motion';
import { Shield, Award, Users, Lock } from 'lucide-react';

const HeroSection = () => {
 

  return (
    <section className="relative overflow-hidden py-2 lg:py-3">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-proctorly-indigo-light blur-3xl opacity-60" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-proctorly-teal-light blur-3xl opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-proctorly-violet-light blur-3xl opacity-30" />
      </div>

      {/* Logo */}
<div className="container mx-auto px-4 mb-6 flex gap-4 items-center">
  <img 
    src="/logo.png" 
    alt="Proctorly Logo" 
    className="h-20 w-auto object-contain"
  />
   <span className="text-3xl font-bold text-foreground">Proctorly</span>
</div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-card border border-border/50 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-proctorly-emerald animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Enterprise-grade Exam Governance Platform
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-foreground">Policy-Driven</span>
            <br />
            <span className="text-gradient-hero">Exam Governance</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Audit-Ready by Design. Human Accountability.
            <br />
            <span className="text-foreground/80">The future of high-stakes online examinations.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <motion.button
              className="cta-button text-base"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Request Demo
            </motion.button>
            <motion.button
              className="cta-button-secondary text-base"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View Documentation
            </motion.button>
          </motion.div>

        
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
