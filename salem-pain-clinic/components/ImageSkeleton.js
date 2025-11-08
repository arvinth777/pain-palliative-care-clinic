export default function ImageSkeleton({ aspectRatio = 'square', className = '' }) {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[16/9]',
  };

  return (
    <div 
      className={`${aspectClasses[aspectRatio] || aspectClasses.square} ${className} animate-pulse bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_200%] rounded-lg`}
      style={{
        animation: 'shimmer 2s infinite',
      }}
    >
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
