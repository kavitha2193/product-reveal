import { motion, Variants } from 'framer-motion';
import { Check, ExternalLink, ArrowRight, LucideIcon } from 'lucide-react';
import { SubFeature } from './demoData';
import FeatureVideo from './FeatureVideo';
import FeatureImage from './FeatureImage';

interface FeatureContentProps {
  subFeature: SubFeature;
  sectionIcon: LucideIcon;
   sectionSubtitle?: string;
 
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

const FeatureContent = ({
  subFeature,
  sectionIcon: Icon,
  sectionSubtitle,
}: FeatureContentProps) => {
  return (
   <motion.div
  key={subFeature.id}
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  className="feature-card min-h-[85vh]"
>
  <div className="grid grid-cols-12 gap-12 items-start h-full">

    {/* ================= LEFT — TEXT + VIDEO (6 COLS) ================= */}
    <div className="col-span-6 flex flex-col justify-between min-w-0">

      {/* TEXT BLOCK */}
      <div>
        {/* Icon badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-xs font-semibold tracking-widest uppercase">
            <Icon className="w-4 h-4" />
            {sectionSubtitle}
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-semibold text-white mb-4 leading-tight"
        >
          {subFeature.heading}
        </motion.h2>

        {/* Description */}
        {subFeature.description && (
          <motion.p
            variants={itemVariants}
            className="text-lg text-white/90 mb-8 max-w-xl "
          >
            {subFeature.description}
          </motion.p>
          
        )}

         {/* subheading */}
        {subFeature.subheading && (
          <motion.p
            variants={itemVariants}
            className="text-lg text-white/90 mb-8  font-semibold "
          >
            {subFeature.subheading}
          </motion.p>
          
        )}

        
{/* Bullets */}
<motion.ul variants={containerVariants} className="space-y-6 mb-10 text-lg">
  {subFeature.bullets.map((bullet, index) => {
    const isHeading = bullet.content === '';

    return (
      <motion.li
        key={index}
        variants={itemVariants}
        className={`flex gap-3 ${isHeading ? 'pl-0' : 'bullet-check'}`}
      >
        {/* ✅ Show tick ONLY if not heading */}
        {!isHeading && (
          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15">
            <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
          </span>
        )}

        {/* Text */}
        <span className="text-white/90">
          {bullet.label && (
            <div
              className={`${
                isHeading
                  ? 'font-semibold text-white text-lg mt-4'
                  : 'font-semibold text-white'
              }`}
            >
              {bullet.label}
            </div>
          )}

          {!isHeading && <div>{bullet.content}</div>}
        </span>
      </motion.li>
    );
  })}
</motion.ul>


 {/* miniheading */}
        {subFeature.miniheading && (
          <motion.p
            variants={itemVariants}
            className="text-lg text-white/90 mb-8  font-semibold "
          >
            {subFeature.miniheading}
          </motion.p>
          
        )}






      </div>

      {/* VIDEO — ALWAYS BELOW TEXT */}
      {subFeature.demo && (
        <motion.div variants={itemVariants} className="mt-6">
          <FeatureVideo
            title={`${subFeature.title} Demo`}
            supaDemoUrl={subFeature.demo.supaDemoUrl}
            thumbnail={subFeature.demo.thumbnail}
            
          />
        </motion.div>
      )}
    </div>

    {/* ================= RIGHT — IMAGE (6 COLS FULL HEIGHT) ================= */}
  {subFeature.image && (
  <motion.div
    variants={itemVariants}
    className="col-span-6 flex-1 shrink-0"
  >
    <FeatureImage
      src={subFeature.image.src}
      alt={subFeature.image.alt}
      variant={subFeature.image.variant}
    />
  </motion.div>
)}
  </div>
</motion.div>

    
  );
};


export default FeatureContent;
