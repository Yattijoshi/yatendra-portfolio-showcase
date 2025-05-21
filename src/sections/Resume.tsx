
import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Resume Structuring</h2>
        
        <div className="card mb-8">
          <h3 className="section-subtitle">Today's Learning</h3>
          <p className="text-gray-700 leading-relaxed">
            I learned how to structure a resume using key sections like objective, education, skills, projects, and experience. 
            Keywords and formatting are essential for making a resume stand out. The proper placement of information and
            highlighting of relevant skills can significantly impact how recruiters perceive your profile. 
            Additionally, I learned about tailoring resumes for specific job applications and the importance of 
            quantifiable achievements.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium mb-2">My Resume</h3>
          </div>
          <div className="p-6">
            <img 
              src="/lovable-uploads/d78ffcdb-63a6-48fc-bf2e-ba32eb940ea5.png" 
              alt="Yatendra Joshi's Resume" 
              className="w-full max-w-3xl mx-auto rounded shadow-sm"
            />
          </div>
        </div>

        <div className="mt-10">
          <h3 className="section-subtitle">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h4 className="text-lg font-semibold mb-2 text-primary">Automated Facial Recognition System</h4>
              <p className="text-gray-600 mb-3"><span className="font-medium">Technology:</span> Machine Learning</p>
              <p className="text-gray-700">
                This project utilizes ML algorithms to detect and recognize faces with high accuracy, 
                enhancing security and authentication systems.
              </p>
            </div>
            <div className="card">
              <h4 className="text-lg font-semibold mb-2 text-primary">Library Management System</h4>
              <p className="text-gray-600 mb-3"><span className="font-medium">Technology:</span> C++</p>
              <p className="text-gray-700">
                A software application designed to manage book records, user details, and transactions 
                efficiently in a library.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="section-subtitle">Certifications</h3>
          <div className="card">
            <h4 className="text-lg font-semibold mb-2 text-primary">Software Engineering Certification</h4>
            <p className="text-gray-600 mb-3">Accenture UK, via Forage platform</p>
            <p className="text-gray-700">
              Completed comprehensive training in software engineering practices and methodologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
