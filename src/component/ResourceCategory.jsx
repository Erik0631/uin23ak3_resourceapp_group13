// ResourceCategory.jsx
import React from 'react';

const ResourceCategory = ({ category, text, sources }) => (
  <div className="resource-category">
    <h2>{category}</h2>
    <p>{text}</p>
    <ul>
      {sources.map((source, index) => (
        <li key={index}>
          <a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default ResourceCategory;
