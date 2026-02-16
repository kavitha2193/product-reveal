import { useState } from 'react';
import { Play } from 'lucide-react';

interface FeatureVideoProps {
  title: string;
  supaDemoUrl: string;
  thumbnail?: string;
  
}

const FeatureVideo = ({ title, supaDemoUrl, thumbnail }: FeatureVideoProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden border-0 bg-black/5">
      {open ? (
        <iframe
          src={`${supaDemoUrl}&embed=true`}
          className="w-full h-full border-0"
          allow="clipboard-write; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="relative w-full h-full flex items-center justify-center group"
        >
          {/* Thumbnail */}
          {thumbnail && (
            <img
              src={thumbnail}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Play button */}
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-md group-hover:scale-105 transition">
              <Play className="w-6 h-6 text-black ml-0.5" />
            </div>
            <span className="text-dark text-md font-semibold">
              {title}
            </span>
          </div>
        </button>
      )}
    </div>
  );
};

export default FeatureVideo;
