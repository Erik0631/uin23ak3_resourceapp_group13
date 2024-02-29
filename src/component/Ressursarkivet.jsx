import React, { useState } from 'react';

const ResourceArchive = ({ resources }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const showResourceInfo = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="resource-archive">
      <div id="resources-container">
        {resources.map((resource, index) => (
          <div
            key={index}
            className={`resource-box ${activeIndex === index ? 'active' : ''}`}
            onClick={() => showResourceInfo(index)}
          >
            <h2>{resource.category}</h2>
          </div>
        ))}
      </div>
      <div id="info-container">
        {activeIndex !== null && (
          <div className="resource-info">
            <h2>{resources[activeIndex].category}</h2>
            <div className="info-content">
              <p>{resources[activeIndex].text}</p>
              <ul>
                {resources[activeIndex].sources.map((source, index) => (
                  <li key={index}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer">
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceArchive;
