
import React from "react";

interface VideoEmbedProps {
  src: string;
  title: string;
  className?: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ src, title, className = "" }) => {
  // Convert Google Drive link to embed format if needed
  const getEmbedUrl = (url: string) => {
    if (url.includes("drive.google.com/file/d/")) {
      const fileId = url.match(/\/d\/([^\/]+)/)?.[1];
      if (fileId) {
        return `https://drive.google.com/file/d/${fileId}/preview`;
      }
    }
    return url;
  };

  const embedUrl = getEmbedUrl(src);

  return (
    <div className={`video-container my-6 ${className}`}>
      <iframe
        src={embedUrl}
        title={title}
        className="w-full rounded-lg shadow-md"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
