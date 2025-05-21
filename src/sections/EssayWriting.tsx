
import React from "react";
import DosDonts from "../components/DosDonts";

const EssayWriting = () => {
  const essayDos = [
    "Keep structure: Introduction, Body, Conclusion",
    "Proofread for grammar",
    "Stay relevant to the topic",
    "Use formal language",
    "Include supporting evidence"
  ];

  const essayDonts = [
    "Avoid repetition",
    "Don't use casual language",
    "Don't exceed word limit unnecessarily",
    "Avoid confusing arguments",
    "Don't plagiarize content"
  ];

  return (
    <section id="essay" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Essay Writing</h2>
        
        <div className="card mb-8">
          <p className="text-gray-700 leading-relaxed">
            Essay Writing is a form of structured writing that involves presenting ideas, arguments, 
            or perspectives on a specific topic in a clear and organized manner. It typically includes 
            an introduction, body paragraphs, and a conclusion. Unlike extempore speaking, essay writing 
            allows for planning, research, and revision. This skill emphasizes logical flow, critical thinking, 
            and clarity of expression. Essay writing is commonly practiced in academic settings, writing 
            competitions, and examinations to assess a person's ability to articulate thoughts effectively 
            in written form.
          </p>
        </div>

        <DosDonts dos={essayDos} donts={essayDonts} />

        <div className="mt-12">
          <h3 className="section-subtitle">Sample Essay: PRO's and CON'S of Cloud Computing</h3>
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <p className="text-gray-700 mb-4 leading-relaxed">
              Cloud computing refers to virtually working on data and performing tasks over the internet. 
              "Cloud" means storing data online, while "computing" means carrying out operations using 
              internet-based resources. It offers various advantages, such as cost savings and remote data 
              access without relying on local systems. Users can access data from anywhere, reducing the 
              need for expensive physical storage. Services are flexible, providing on-demand resources based 
              on user requirements.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              However, there are some drawbacks. Security and privacy concerns arise as sensitive data is 
              stored online. Dependence on internet connectivity can disrupt access during network failures. 
              Additionally, long-term costs may increase with growing storage needs and service subscriptions. 
              Despite these challenges, cloud computing continues to evolve, offering modern solutions for 
              users worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EssayWriting;
