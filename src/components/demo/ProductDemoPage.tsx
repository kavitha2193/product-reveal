import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VerticalTabs from './VerticalTabs';
import SubFeatureTabs from './SubFeatureTabs';
import FeatureContent from './FeatureContent';
import PersonaSelector from './PersonaSelector';
import { Persona, personaOrder, tabCategories } from './demoData';

const ProductDemoPage = () => {
  const [activeSectionId, setActiveSectionId] = useState('');
  const [activeSubFeatureId, setActiveSubFeatureId] = useState('');
  const [persona, setPersona] = useState<Persona>('all');


  // ✅ Flatten all sections ONCE
const sections = useMemo(() => {
  const allSections = tabCategories.flatMap(c => c.sections);

  return personaOrder[persona]
    .map(id => allSections.find(s => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
}, [persona]);


useEffect(() => {
  if (sections.length > 0) {
    setActiveSectionId(sections[0].id);
    setActiveSubFeatureId(sections[0].subFeatures[0]?.id || '');
  }
}, [persona, sections]);



  // ✅ Initialise first section only once
  useEffect(() => {
    if (!activeSectionId && sections.length > 0) {
      setActiveSectionId(sections[0].id);
      setActiveSubFeatureId(sections[0].subFeatures[0]?.id || '');
    }
  }, [sections, activeSectionId]);

  // ✅ Reset sub-feature when section changes
  useEffect(() => {
    const currentSection = sections.find(s => s.id === activeSectionId);
    if (currentSection && currentSection.subFeatures.length > 0) {
      setActiveSubFeatureId(currentSection.subFeatures[0].id);
    }
  }, [activeSectionId, sections]);

  const currentSection =
    sections.find(s => s.id === activeSectionId) || sections[0];

  const currentSubFeature =
    currentSection?.subFeatures.find(f => f.id === activeSubFeatureId) ||
    currentSection?.subFeatures[0];

  const handleSectionChange = (id: string) => {
    setActiveSectionId(id);
  };

  const handleSubFeatureChange = (id: string) => {
    setActiveSubFeatureId(id);
  };

  const verticalTabs = sections.map(section => ({
    id: section.id,
    title: section.title,
    subtitle: section.subtitle,
    icon: section.icon,
  }));

  return (
    <div className="min-h-screen  bg-gradient-to-b from-blue-50 via-violet-50 to-indigo-50">
      {/* Hero * bg-background/ }
      {/* <HeroSection /> */}
      {/* Logo */}

      <div className="container-fluid mx-auto px-4 flex gap-5 items-center justify-between">
<div className='flex items-center gap-3'>
  <img 
    src="/logo.png" 
    alt="Proctorly Logo" 
    className="h-16 w-auto object-contain "
  />
   <span className="text-3xl font-bold text-foreground">Proctorly</span>
</div>

<div>
 <PersonaSelector
  value={persona}
  onChange={setPersona}
/>
</div>
 </div>
     

      {/* Main Content */}
      <div className="container-fluid mx-auto px-4 py-3 lg:py-5">
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-3">

          {/* Mobile horizontal tabs */}
          <div className="lg:hidden">
            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
              {verticalTabs.map(tab => {
                const Icon = tab.icon;
                const isActive = activeSectionId === tab.id;

                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => handleSectionChange(tab.id)}
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

          {/* Desktop vertical tabs */}
          <div className="hidden lg:block ">
            <VerticalTabs
              tabs={verticalTabs}
              activeTab={activeSectionId}
              onTabChange={handleSectionChange}
            />
          </div>

          {/* Content Area */}
          <div className="flex-1 min-w-0 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeSectionId}-${activeSubFeatureId}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.1, ease: 'easeInOut' }}
                className="space-y-8"
              >
                {/* Sub-feature tabs */}
                {currentSection?.subFeatures.length > 1 && (
                  <SubFeatureTabs
                    subFeatures={currentSection.subFeatures}
                    activeSubFeature={activeSubFeatureId}
                    onSubFeatureChange={handleSubFeatureChange}
                  />
                )}

                {/* Feature Content */}
                {currentSubFeature && currentSection && (
                  <FeatureContent
                    subFeature={currentSubFeature}
    sectionIcon={currentSection.icon}
    sectionSubtitle={currentSection.subtitle}
   
                  />
                )}

                {/* Feature Video */}
               {/* {currentSubFeature && currentSection?.showVideo !== false && (
                  <FeatureVideo title={`${currentSubFeature.title} Demo`} />
                )} */}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

     
       
    </div>
    
  );
};

export default ProductDemoPage;
