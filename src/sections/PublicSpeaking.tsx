
import React from "react";
import VideoEmbed from "../components/VideoEmbed";

const PublicSpeaking = () => {
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

        <div className="space-y-12">
          <div>
            <h3 className="section-subtitle">Extempore Video</h3>
            <p className="text-gray-600 mb-4">
              Watch my extempore speech where I discuss an impromptu topic with minimal preparation.
            </p>
            <VideoEmbed 
              src="https://drive.google.com/file/d/1GvwQ_XG0a8yZCuLATPnshFv_XHAcKlr1/view?usp=drivesdk" 
              title="Extempore Speech"
            />
          </div>

          <div>
            <h3 className="section-subtitle">JAM Video</h3>
            <p className="text-gray-600 mb-4">
              Just A Minute (JAM) session where I speak continuously on a topic for one minute without hesitation.
            </p>
            <div className="bg-gray-200 rounded-lg p-8 flex items-center justify-center">
              <p className="text-gray-500 italic">Video will be uploaded soon</p>
            </div>
          </div>

          <div>
            <h3 className="section-subtitle">Project Presentation Video</h3>
            <p className="text-gray-600 mb-4">
              Watch me present one of my technical projects with detailed explanations.
            </p>
            <div className="bg-gray-200 rounded-lg p-8 flex items-center justify-center">
              <p className="text-gray-500 italic">Video will be uploaded soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicSpeaking;
