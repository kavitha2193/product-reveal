import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Volume2, VolumeX, Maximize2 } from 'lucide-react';

interface FeatureVideoProps {
  videoUrl?: string;
  thumbnail?: string;
  title: string;
}

const FeatureVideo = ({ videoUrl, thumbnail, title }: FeatureVideoProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);

  // Placeholder gradient for demo
  const placeholderGradient = 'linear-gradient(135deg, hsl(238 84% 56% / 0.1) 0%, hsl(270 76% 60% / 0.1) 50%, hsl(172 66% 50% / 0.1) 100%)';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="video-container relative group"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Skeleton loader */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 skeleton-video rounded-2xl"
            style={{ background: placeholderGradient }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Play className="w-6 h-6 text-primary ml-1" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video placeholder/demo area */}
      <div 
        className="aspect-video w-full rounded-2xl overflow-hidden relative"
        style={{ 
          background: placeholderGradient,
          minHeight: '300px'
        }}
      >
        {videoUrl ? (
          <video
            src={videoUrl}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="w-full h-full object-cover"
            onLoadedData={() => setIsLoaded(true)}
          />
        ) : (
          <motion.div
            className="w-full h-full flex flex-col items-center justify-center p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onAnimationComplete={() => setIsLoaded(true)}
          >
            <motion.div
              className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-proctorly-violet flex items-center justify-center mb-6 shadow-glow"
              animate={{ 
                boxShadow: [
                  '0 0 20px -5px hsl(238 84% 56% / 0.3)',
                  '0 0 40px -5px hsl(238 84% 56% / 0.5)',
                  '0 0 20px -5px hsl(238 84% 56% / 0.3)',
                ]
              }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Play className="w-8 h-8 text-white ml-1" />
            </motion.div>
            <h3 className="text-xl font-semibold text-foreground mb-2 text-center">
              {title}
            </h3>
            <p className="text-muted-foreground text-center max-w-md">
              Interactive demo showcasing this feature in action
            </p>

            {/* Decorative elements */}
            <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-proctorly-teal/10 blur-2xl" />
            <div className="absolute bottom-8 right-8 w-32 h-32 rounded-full bg-proctorly-violet/10 blur-2xl" />
            <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-primary/10 blur-xl" />
          </motion.div>
        )}

        {/* Video controls overlay */}
        <AnimatePresence>
          {showControls && videoUrl && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent"
            >
              <div className="flex items-center justify-end gap-2">
                <motion.button
                  className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMuted(!isMuted)}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </motion.button>
                <motion.button
                  className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Maximize2 className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 via-proctorly-violet/20 to-proctorly-teal/20 -z-10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
      />
    </motion.div>
  );
};

export default FeatureVideo;
