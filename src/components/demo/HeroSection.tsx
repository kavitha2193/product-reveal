import { motion } from 'framer-motion';
import { Shield, Award, Users, Lock } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { icon: Shield, label: 'Enterprise Security', value: '99.9%' },
    { icon: Award, label: 'Audit Compliance', value: '100%' },
    { icon: Users, label: 'Institutions Trust', value: '500+' },
    { icon: Lock, label: 'Exams Secured', value: '2M+' },
  ];

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-proctorly-indigo-light blur-3xl opacity-60" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-proctorly-teal-light blur-3xl opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-proctorly-violet-light blur-3xl opacity-30" />
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

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-card hover:shadow-card-hover transition-shadow duration-300"
                >
                  <Icon className="w-6 h-6 text-primary mb-3 mx-auto" />
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
