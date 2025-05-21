
import React from "react";
import Navbar from "../components/Navbar";
import BackToTop from "../components/BackToTop";
import Home from "../sections/Home";
import Introduction from "../sections/Introduction";
import Resume from "../sections/Resume";
import MovieReview from "../sections/MovieReview";
import PublicSpeaking from "../sections/PublicSpeaking";
import EssayWriting from "../sections/EssayWriting";
import GroupDiscussion from "../sections/GroupDiscussion";
import InterviewSkills from "../sections/InterviewSkills";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Home />
      <Introduction />
      <Resume />
      <MovieReview />
      <PublicSpeaking />
      <EssayWriting />
      <GroupDiscussion />
      <InterviewSkills />
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Yatendra Joshi</h3>
              <p className="text-gray-300">B.Tech Computer Science</p>
            </div>
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Yatendra Joshi. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      <BackToTop />
    </div>
  );
};

export default Index;
