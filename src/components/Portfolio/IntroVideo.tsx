import { Play, Pause, X, Video } from "lucide-react";
import { useState, useRef } from "react";

const IntroVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-6 right-6 p-3 bg-portfolio-teal hover:bg-portfolio-teal/80 text-white rounded-full shadow-lg transition-all z-50"
        aria-label="Show introduction video"
      >
        <Video className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <div className="relative w-80 h-60 bg-card rounded-2xl overflow-hidden shadow-lg border">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          playsInline
          onEnded={() => setIsPlaying(false)}
        >
          <source src="/intro-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Play/Pause Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={togglePlay}
            className="p-3 bg-portfolio-teal/80 hover:bg-portfolio-teal text-white rounded-full transition-colors"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6 ml-1" />
            )}
          </button>
        </div>
        
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 p-1.5 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors"
          aria-label="Hide video"
        >
          <X className="w-4 h-4" />
        </button>
        
        {/* Video Label */}
        <div className="absolute bottom-2 left-2 right-2">
          <div className="bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
            Introduction Video
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroVideo;