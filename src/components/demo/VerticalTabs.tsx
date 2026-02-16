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

const VerticalTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div
      className="h-full w-[64px] bg-white backdrop-blur-xl
                 border-r border-border rounded-2xl p-2
                 flex flex-col gap-2"
    >
      {tabs.map(tab => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <div key={tab.id} className="relative group">
            <button
              onClick={() => onTabChange(tab.id)}
              className={`w-full flex items-center justify-center
                          p-3 rounded-xl transition-all
                ${
                  isActive
                    ? 'bg-gradient-to-r from-primary to-proctorly-violet text-white shadow-md'
                    : 'text-muted-foreground hover:bg-muted'
                }`}
            >
              <Icon className="w-5 h-5" />
            </button>

            {/* Tooltip */}
            <div
              className="absolute left-full top-1/2 -translate-y-1/2 ml-3
                         px-3 py-1.5 rounded-lg text-sm font-medium
                         bg-foreground text-background
                         opacity-0 scale-95 pointer-events-none
                         group-hover:opacity-100 group-hover:scale-100
                         transition-all duration-200 whitespace-nowrap shadow-lg"
            >
              {tab.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};



export default VerticalTabs;
