
import React from "react";
import DosDonts from "../components/DosDonts";

const GroupDiscussion = () => {
  const gdDos = [
    "Listen before you speak",
    "Respect other opinions",
    "Stay on topic",
    "Use facts and examples",
    "Give everyone a chance to speak"
  ];

  const gdDonts = [
    "Don't interrupt",
    "Avoid dominating the discussion",
    "Don't get emotional",
    "Don't be aggressive",
    "Don't use informal language"
  ];

  return (
    <section id="discussion" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Group Discussion</h2>
        
        <div className="card mb-8">
          <h3 className="section-subtitle">About Group Discussions</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Group discussions are a method of collaborative problem-solving and idea exchange where multiple participants 
            share their thoughts on a given topic. These discussions test communication skills, leadership qualities, 
            teamwork abilities, and knowledge depth.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Effective participation in group discussions requires active listening, clear articulation of ideas, 
            respect for diverse viewpoints, and the ability to steer the conversation productively. This skill is 
            valuable in academic settings, professional environments, and selection processes.
          </p>
        </div>

        <DosDonts dos={gdDos} donts={gdDonts} />
        
        <div className="mt-10 card">
          <h3 className="text-xl font-medium mb-4">My Group Discussion Experience</h3>
          <div className="bg-gray-200 rounded-lg p-8 flex items-center justify-center">
            <p className="text-gray-500 italic">Group discussion video will be added here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupDiscussion;
