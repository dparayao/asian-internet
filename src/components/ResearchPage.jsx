import React, { useState } from 'react';
import { researchContent } from '../content/researchContent';
import TwitterEmbed from './TwitterEmbed';
import LinkedInLink from './LinkedInLink';


// Create an object to map image paths to imported images
const images = {
  'score_comparison': 'score_comparison.png',
  'sentiment_comparison': 'sentiment_comparison.png',
  'azn_frequency': 'azn_frequency.png',
  'asian_frequency': 'asian_frequency.png',
  'asian': 'r_asianamerican_analysis.png',
  'azn': 'r_aznidentity_analysis.png',
  'asian_cirrus': 'asianamericancomments_abg_cirrus.png',
  'azn_cirrus': 'aznidentity_abg_cirrus.png',
  'tiktok': 'tiktok_abg_cirrus.png',
  't11': 'twitter20112017_abg_cirrus.png',
  't17': 'twitter20172023_abg_cirrus.png'
};

const components = {
  'twitter': TwitterEmbed
};

const ResearchPage = () => {
  const [selectedSection, setSelectedSection] = useState('research');
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const sections = Object.values(researchContent);

  const handleSectionClick = (sectionId) => {
    setSelectedSection(sectionId);
    setBackgroundIndex(prev => (prev === 0 ? 1 : 0));
  };

  // Helper function to render content
  const renderContent = (content, index) => {
    return (
      <div key={index} className="mb-6">
        {content.title && (
          <h3 className="text-xl font-serif mb-4 text-black text-left">
            {content.title}
          </h3>
        )}
        {content.image && (
          <div className="mb-6">
            <img 
              src={images[content.image]}
              alt={`Visualization for ${content.title}`}
              className="w-full rounded-lg shadow-md"
            />
          </div>
        )}
        {content.component === 'twitter' && (
          <div className="mb-6">
            <TwitterEmbed />
          </div>
        )}
        <div 
          className="border border-gray-200 p-6 bg-white/85 backdrop-blur-sm text-black text-left research-numbered-list rounded-lg" 
          style={{ whiteSpace: "pre-wrap" }}
        >
          {content.text}
          {content.title === 'About the Author' && (
            <>Connect with me on <LinkedInLink /></>
          )}
        </div>
      </div>
    );
  };

  return (
    <div 
      className="min-h-screen p-8 font-serif transition-all duration-500 ease-in-out bg-white"
      style={{
        backgroundImage: `url('background${backgroundIndex + 1}.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header with title and project credit */}
        <div className="flex justify-between items-start mb-12">
          <h1 className="text-3xl font-serif text-black text-left bg-white/85 backdrop-blur-sm p-4 rounded-lg">
            Digital Diaspora: Asian Internet Language & Identity
          </h1>
          <div className="text-sm bg-white/85 backdrop-blur-sm p-2 rounded-lg" style={{ color: '#DA85A1' }}>
            DH120 Project by Dagny Parayao
          </div>
        </div>

        {/* Two-column layout */}
        <div className="flex gap-12">
          {/* Left column - Navigation */}
          <nav className="w-64 space-y-4 text-left bg-white/85 backdrop-blur-sm p-4 rounded-lg h-fit">
            {sections.map((section) => (
              <a
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`block hover:text-[#DA85A1] cursor-pointer transition-colors duration-200 ${
                  selectedSection === section.id ? 'text-[#DA85A1]' : 'text-black'
                }`}
              >
                {section.title}
              </a>
            ))}
          </nav>

          {/* Right column - Content */}
          <main className="flex-1">
            <div className="max-h-[70vh] overflow-y-auto pr-4">
              {researchContent[selectedSection]?.content.map((content, index) => 
                renderContent(content, index)
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;