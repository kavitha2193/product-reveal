import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TopTabs from './TopTabs';
import VerticalTabs from './VerticalTabs';
import FeatureContent from './FeatureContent';
import FeatureVideo from './FeatureVideo';
import HeroSection from './HeroSection';
import { tabCategories, getVerticalTabs } from './demoData';

const ProductDemoPage = () => {
  const [activeTopTab, setActiveTopTab] = useState(0);
  const [activeVerticalTab, setActiveVerticalTab] = useState('');
  const [progress, setProgress] = useState(0);

  const currentCategory = tabCategories[activeTopTab];
  const verticalTabs = getVerticalTabs(currentCategory.features);
  
  // Set initial vertical tab when top tab changes
  useEffect(() => {
    if (currentCategory.features.length > 0) {
      setActiveVerticalTab(currentCategory.features[0].id);
      setProgress(0);
    }
  }, [activeTopTab, currentCategory.features]);

  // Auto-progress animation
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Move to next tab
          const currentIndex = currentCategory.features.findIndex(f => f.id === activeVerticalTab);
          if (currentIndex < currentCategory.features.length - 1) {
            setActiveVerticalTab(currentCategory.features[currentIndex + 1].id);
            return 0;
          }
          return 100;
        }
        return prev + 0.5;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [activeVerticalTab, currentCategory.features]);

  const currentFeature = currentCategory.features.find(f => f.id === activeVerticalTab) || currentCategory.features[0];

  const handleVerticalTabChange = (id: string) => {
    setActiveVerticalTab(id);
    setProgress(0);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Tabs Section */}
      <TopTabs
        tabs={tabCategories.map(t => t.label)}
        activeTab={activeTopTab}
        onTabChange={(index) => {
          setActiveTopTab(index);
          setProgress(0);
        }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Vertical Tabs - Left Column */}
          <div className="lg:hidden">
            {/* Mobile: Horizontal scrollable tabs */}
            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
              {verticalTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeVerticalTab === tab.id;
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => handleVerticalTabChange(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl whitespace-nowrap transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-primary to-proctorly-violet text-white shadow-lg' 
                        : 'bg-white text-muted-foreground border border-border'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{tab.title}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Desktop: Vertical tabs */}
          <div className="hidden lg:block">
            <VerticalTabs
              tabs={verticalTabs}
              activeTab={activeVerticalTab}
              onTabChange={handleVerticalTabChange}
              progress={progress}
            />
          </div>

          {/* Content Area - Right Column */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeVerticalTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="space-y-8"
              >
                {/* Feature Content */}
                <FeatureContent feature={currentFeature} />

                {/* Feature Video */}
                <FeatureVideo
                  title={`${currentFeature.title} Demo`}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="border-t border-border bg-white/50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to transform your exam governance?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 500+ institutions worldwide that trust Proctorly for policy-driven, audit-ready examination governance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                className="cta-button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Request Demo
              </motion.button>
              <motion.button
                className="cta-button-secondary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Sales
              </motion.button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDemoPage;
