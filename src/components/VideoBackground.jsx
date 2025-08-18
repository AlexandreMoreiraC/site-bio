import React, { useEffect, useState } from "react";

function VideoBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // breakpoint para mobile
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="video-background">
      {isMobile ? (
        <img
          src="https://res.cloudinary.com/dliyfpqqu/image/upload/v1755533439/vrgkb4jt8o2gvh3swpel.jpg"
          alt="Background"
          className="bg-image"
        />
      ) : (
        <video autoPlay loop muted className="bg-video">
          <source
            src="https://res.cloudinary.com/dliyfpqqu/video/upload/v1755447088/hgalkpnpuyipgzyvge8u.mp4"
            type="video/mp4"
          />
          Seu navegador não suporta vídeos.
        </video>
      )}
    </div>
  );
}

export default VideoBackground;
