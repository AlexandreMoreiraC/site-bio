import React from "react";

function VideoBackground() {
  return (
    <div className="video-background">
      <video autoPlay loop muted className="bg-video">
        <source 
          src="https://res.cloudinary.com/dliyfpqqu/video/upload/v1755447088/hgalkpnpuyipgzyvge8u.mp4" 
          type="video/mp4" 
        />
        Seu navegador não suporta vídeos.
      </video>
    </div>
  );
}

export default VideoBackground;
