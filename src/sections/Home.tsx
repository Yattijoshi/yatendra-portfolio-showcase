
import React from "react";

const Home = () => {
  return (
    <section id="home" className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="section-container flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-blue-900">
            Yatendra Joshi
          </h1>
          <p className="text-xl md:text-2xl text-blue-800 mb-4">
            B.Tech in Computer Science
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Graphic Era Hill University
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="italic text-gray-700">
              "Aspiring to be a successful software developer, turning ideas into reality through code."
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center">
              <span className="font-medium w-24">Email:</span>
              <a href="mailto:joshi.yatendra0834@gmail.com" className="text-blue-600 hover:underline">
                joshi.yatendra0834@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <span className="font-medium w-24">Phone:</span>
              <span>+91 6377024341</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium w-24">LinkedIn:</span>
              <a href="https://linkedin.com/in/yatendrajoshi" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                linkedin.com/in/yatendrajoshi
              </a>
            </div>
            <div className="flex items-center">
              <span className="font-medium w-24">Location:</span>
              <span>Jaipur, Rajasthan</span>
            </div>
          </div>
        </div>

        <div className="md:w-2/5">
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="/lovable-uploads/4fc221f3-8f05-4b93-b483-bd13416484ab.png"
              alt="Yatendra Joshi"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
