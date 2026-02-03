import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

export interface VerticalTab {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

interface VerticalTabsProps {
  tabs: VerticalTab[];
  activeTab: string;
  onTabChange: (id: string) => void;
  progress?: number;
}

const VerticalTabs = ({ tabs, activeTab, onTabChange, progress }: VerticalTabsProps) => {
  return (
    <div className="w-full lg:w-80 flex-shrink-0">
      <div className="sticky top-24 space-y-2">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <motion.div
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`vtab ${isActive ? 'vtab-active' : 'vtab-inactive'}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ x: isActive ? 0 : 4 }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className={`p-2.5 rounded-xl transition-colors duration-300 ${
                    isActive
                      ? 'bg-gradient-to-br from-primary to-proctorly-violet text-white'
                      : 'bg-proctorly-indigo-light text-primary'
                  }`}
                  animate={{ scale: isActive ? 1.05 : 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold text-sm transition-colors duration-300 ${
                    isActive ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {tab.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                    {tab.subtitle}
                  </p>
                </div>
              </div>
              
              {/* Progress indicator */}
              {isActive && progress !== undefined && (
                <motion.div
                  className="mt-3 h-1 bg-secondary rounded-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-proctorly-violet rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default VerticalTabs;
