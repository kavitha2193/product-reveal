import { motion } from 'framer-motion';
import { SubFeature } from './demoData';

interface SubFeatureTabsProps {
  subFeatures: SubFeature[];
  activeSubFeature: string;
  onSubFeatureChange: (id: string) => void;
}

const SubFeatureTabs = ({ subFeatures, activeSubFeature, onSubFeatureChange }: SubFeatureTabsProps) => {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2">
        {subFeatures.map((subFeature, index) => {
          const isActive = activeSubFeature === subFeature.id;
          return (
            <motion.button
              key={subFeature.id}
              onClick={() => onSubFeatureChange(subFeature.id)}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay:  0.04, duration: 0.1 }}
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.98 }}
            >
              {subFeature.title}
              {isActive && (
                <motion.div
                  layoutId="activeSubFeatureIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-proctorly-violet rounded-full"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
      <div className="h-px bg-border mt-1" />
    </div>
  );
};

export default SubFeatureTabs;
