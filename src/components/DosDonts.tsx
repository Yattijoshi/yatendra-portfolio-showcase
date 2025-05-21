
import React from "react";

interface DosDontsProps {
  dos: string[];
  donts: string[];
}

const DosDonts: React.FC<DosDontsProps> = ({ dos, donts }) => {
  return (
    <div className="dos-donts-grid my-8">
      <div className="dos-card">
        <h3 className="text-lg font-semibold mb-4 text-green-700">Do's</h3>
        <ul className="space-y-3">
          {dos.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-600 mr-2 mt-1">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="donts-card">
        <h3 className="text-lg font-semibold mb-4 text-red-700">Don'ts</h3>
        <ul className="space-y-3">
          {donts.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-red-600 mr-2 mt-1">✗</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DosDonts;
