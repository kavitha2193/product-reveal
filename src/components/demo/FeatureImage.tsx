interface FeatureImageProps {
  src: string;
  alt?: string;
  variant?: 'plain' | 'framed' ;
}

const imageVariants: Record<string, string> = {
  plain: '',
  framed: 'rounded-2xl border border-border bg-gradient-to-br from-indigo-50 to-violet-50 p-2 shadow-sm',
 
};

const FeatureImage = ({ src,alt, variant = 'plain' }: FeatureImageProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* Image frame */}
      <div className={`w-[85%] h-[85%] ${imageVariants[variant]}`}>
        <img
          src={src}
          alt={alt || ''}
          className="w-full h-full object-contain rounded-xl"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default FeatureImage;
