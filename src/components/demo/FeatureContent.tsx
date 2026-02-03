import { motion, Variants } from 'framer-motion';
import { Check, ExternalLink, ArrowRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  heading: string;
  description: string;
  bullets: string[];
  demoLinks?: { label: string; url: string }[];
  ctaText?: string;
  ctaSecondary?: string;
}

interface FeatureContentProps {
  feature: FeatureItem;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
  },
};

const FeatureContent = ({ feature }: FeatureContentProps) => {
  const Icon = feature.icon;

  return (
    <motion.div
      key={feature.id}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="feature-card"
    >
      {/* Icon badge */}
      <motion.div variants={itemVariants} className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-proctorly-indigo-light text-primary text-sm font-medium">
          <Icon className="w-4 h-4" />
          {feature.subtitle}
        </div>
      </motion.div>

      {/* Heading */}
      <motion.h2
        variants={itemVariants}
        className="text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight"
      >
        {feature.heading}
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl"
      >
        {feature.description}
      </motion.p>

      {/* Bullet points */}
      <motion.ul variants={containerVariants} className="space-y-4 mb-8">
        {feature.bullets.map((bullet, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className="bullet-check"
          >
            <span className="bullet-check-icon">
              <Check className="w-3 h-3" strokeWidth={3} />
            </span>
            <span className="text-foreground/80">{bullet}</span>
          </motion.li>
        ))}
      </motion.ul>

      {/* Demo links */}
      {feature.demoLinks && feature.demoLinks.length > 0 && (
        <motion.div variants={containerVariants} className="mb-8">
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Explore Demos
          </h4>
          <div className="flex flex-wrap gap-3">
            {feature.demoLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                variants={itemVariants}
                className="demo-link text-sm"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <ExternalLink className="w-4 h-4" />
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}

      {/* CTA buttons */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
        {feature.ctaText && (
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {feature.ctaText}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        )}
        {feature.ctaSecondary && (
          <motion.button
            className="cta-button-secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {feature.ctaSecondary}
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
};

export default FeatureContent;
