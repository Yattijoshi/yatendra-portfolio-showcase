
import React from "react";
import DosDonts from "../components/DosDonts";

const InterviewSkills = () => {
  const interviewDos = [
    "Dress formally",
    "Research the company",
    "Practice common questions",
    "Maintain eye contact",
    "Ask intelligent questions"
  ];

  const interviewDonts = [
    "Don't be vague",
    "Don't lie about skills",
    "Avoid negative body language",
    "Don't speak ill of previous employers",
    "Don't interrupt the interviewer"
  ];

  return (
    <section id="interview" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Interview Skills</h2>
        
        <div className="card mb-8">
          <h3 className="section-subtitle">Today's Learning</h3>
          <p className="text-gray-700 leading-relaxed">
            I learned the STAR method for answering behavioral questions (Situation, Task, Action, Result) and how to 
            stay calm and confident during interviews. Preparation is the key to interview success, along with 
            authentic self-presentation. Understanding how to showcase skills and experiences effectively while 
            maintaining professionalism can significantly improve interview outcomes.
          </p>
        </div>

        <DosDonts dos={interviewDos} donts={interviewDonts} />

        <div className="mt-10">
          <h3 className="section-subtitle">Answering Interview Questions</h3>
          <p className="text-gray-600 mb-4">
            Watch me demonstrate effective techniques for answering common interview questions
          </p>
          <div className="bg-gray-200 rounded-lg p-8 flex items-center justify-center">
            <p className="text-gray-500 italic">Interview practice video will be added here</p>
          </div>
        </div>

        <div className="mt-10 card">
          <h3 className="text-xl font-medium mb-4">Technical Interview Tips</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Practice coding problems regularly on platforms like LeetCode</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Review fundamental concepts of data structures and algorithms</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Be prepared to explain your thought process while solving problems</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Research company-specific technologies and prepare accordingly</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Have examples ready of challenging projects and how you overcame obstacles</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InterviewSkills;
