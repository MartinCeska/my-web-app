import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

const IntroVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
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

  return (
    <div className="relative group">
      <div className="relative w-64 h-48 bg-card rounded-lg overflow-hidden shadow-sm border">
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
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6 ml-1" />
            )}
          </button>
        </div>
        
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