
import React from "react";
import VideoEmbed from "../components/VideoEmbed";
import DosDonts from "../components/DosDonts";

const PublicSpeaking = () => {
  const publicSpeakingDos = [
    "Practice before speaking",
    "Make eye contact",
    "Speak clearly and confidently",
    "Use natural gestures",
    "Stay within time"
  ];

  const publicSpeakingDonts = [
    "Don't memorize word-for-word",
    "Don't use filler words like \"um\" or \"like\"",
    "Don't rush or speak too slowly",
    "Don't turn your back to the audience",
    "Don't panic if you forget something"
  ];

  return (
    <section id="speaking" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Public Speaking</h2>
        
        <div className="card mb-8">
          <h3 className="section-subtitle">Today's Learning</h3>
          <p className="text-gray-700 leading-relaxed">
            I gained insight into voice modulation, stage presence, and the value of clear articulation while speaking in public.
            Effective public speaking requires not just good content but also confident delivery, appropriate body language,
            and connection with the audience. I learned techniques to overcome nervousness and how to structure a speech
            for maximum impact. Practicing regularly and seeking feedback are essential for improvement.
          </p>
        </div>

        <DosDonts dos={publicSpeakingDos} donts={publicSpeakingDonts} />

        <div className="space-y-12 mt-8">
          <div>
            <h3 className="section-subtitle">Extempore Video</h3>
            <p className="text-gray-600 mb-4">
              Watch my extempore speech where I discuss an impromptu topic with minimal preparation.
            </p>
            <VideoEmbed 
              src="https://drive.google.com/file/d/1AT7ptAanNQ0wTfYQ7H_DDMMDF-CF0tBG/view?usp=drivesdk" 
              title="Extempore Speech"
            />
          </div>

          <div>
            <h3 className="section-subtitle">JAM Video</h3>
            <p className="text-gray-600 mb-4">
              Just A Minute (JAM) session where I speak continuously on a topic for one minute without hesitation.
            </p>
            <VideoEmbed 
              src="https://drive.google.com/file/d/1m9FiSVeubpaeVrgdAH2DD9QqP4XFF0cZ/view?usp=drivesdk" 
              title="JAM Session"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicSpeaking;
