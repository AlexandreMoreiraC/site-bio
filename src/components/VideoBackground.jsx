import React from "react";
import bgVideo from "../assets/background.mp4";

function VideoBackground() {
  return (
    <div className="video-background">
      <video autoPlay loop muted className="bg-video">
        <source src={bgVideo} type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
    </div>
  );
}

export default VideoBackground;
