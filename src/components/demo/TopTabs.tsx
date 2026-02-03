import { motion } from 'framer-motion';

interface TopTabsProps {
  tabs: string[];
  activeTab: number;
  onTabChange: (index: number) => void;
}

const TopTabs = ({ tabs, activeTab, onTabChange }: TopTabsProps) => {
  return (
    <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab}
              onClick={() => onTabChange(index)}
              className={`tab-pill relative ${
                activeTab === index ? 'tab-pill-active' : 'tab-pill-inactive'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              {tab}
              {activeTab === index && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-proctorly-violet -z-10"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopTabs;
