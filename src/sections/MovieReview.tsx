
import React from "react";

const MovieReview = () => {
  return (
    <section id="movie" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Movie Review</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img 
              src="https://m.media-amazon.com/images/M/MV5BMTM5NjY0NTI0OV5BMl5BanBnXkFtZTcwNzQyMzYwMw@@._V1_.jpg" 
              alt="The Pursuit of Happyness" 
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="section-subtitle">The Pursuit of Happyness</h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-blue-700 mb-2">Favorite Dialogue</h4>
              <blockquote className="italic border-l-4 border-primary pl-4 py-2 bg-blue-50 rounded-r-md">
                "Don't ever let somebody tell you... you can't do something. Not even me. All right?"
              </blockquote>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-blue-700 mb-2">Personal Review</h4>
              <p className="text-gray-700 leading-relaxed">
                It was an inspirational movie also depicting an unbroken bond between a father and a son. 
                The film portrays the struggles and determination of a single father facing homelessness 
                while trying to build a better future for his son.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-blue-700 mb-2">Learning from the Movie</h4>
              <p className="text-gray-700 leading-relaxed">
                My learning from the movie was to move to your goal and achieve it no matter whatever it takes. 
                The protagonist's persistence in the face of overwhelming obstacles demonstrates that with 
                determination and hard work, one can overcome almost any challenge.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-700 mb-2">Related Concept from Class</h4>
              <p className="text-gray-700 leading-relaxed">
                Whatever topic that is being covered in the class do that so we can achieve the goal, we are
                aiming for. This relates to the importance of focus and dedication in our studies, just as 
                Chris Gardner remained focused on his goal despite numerous setbacks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieReview;
