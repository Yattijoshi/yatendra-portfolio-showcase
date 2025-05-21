
import React from "react";
import DosDonts from "../components/DosDonts";
import VideoEmbed from "../components/VideoEmbed";

const Introduction = () => {
  const introductionDos = [
    "Smile confidently",
    "Maintain eye contact",
    "Keep it short and relevant",
    "Use positive body language",
    "Highlight key achievements"
  ];

  const introductionDonts = [
    "Don't speak too fast",
    "Avoid filler words",
    "Don't forget to mention your skills",
    "Don't speak in monotone",
    "Avoid being too casual"
  ];

  return (
    <section id="intro" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Self Introduction</h2>
        
        <div className="card mb-8">
          <h3 className="section-subtitle">Today's Learning</h3>
          <p className="text-gray-700 leading-relaxed">
            Today I learned the importance of confidence, body language, and clarity while introducing myself. 
            A structured and positive introduction leaves a lasting impression. Maintaining professional 
            demeanor while being authentic helps create meaningful connections. I understand now that a good 
            introduction should be concise yet comprehensive, highlighting relevant skills and experiences.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="section-subtitle">Self Introduction Video</h3>
          <p className="text-gray-600 mb-4">
            Watch my self introduction video where I present myself and my background.
          </p>
          <VideoEmbed 
            src="https://drive.google.com/file/d/1GvwQ_XG0a8yZCuLATPnshFv_XHAcKlr1/view?usp=drivesdk" 
            title="Self Introduction"
          />
        </div>

        <DosDonts dos={introductionDos} donts={introductionDonts} />
      </div>
    </section>
  );
};

export default Introduction;
