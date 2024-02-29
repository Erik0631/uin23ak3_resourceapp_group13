import React from 'react';
import './App.css';
import ResourceCategory from './component/ResourceCategory';

const resources = [
  {
    category: "HTML",
    text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
    sources: [
      {
        title: "W3Schools",
        url: "https://www.w3schools.com/html/"
      },
      {
        title: "HTML Living standard",
        url: "https://html.spec.whatwg.org/multipage/"
      },
      {
        title: "HTML.com Tutorials",
        url: "https://html.com/"
      },
    ]
  },
  {
    category: "CSS",
    text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
    sources: [
      {
        title: "W3Schools",
        url: "https://www.w3schools.com/css/"
      },
      {
        title: "W3C HTML & CSS Standards",
        url: "https://www.w3.org/standards/webdesign/htmlcss.html"
      },
      {
        title: "W3C CSS Validator",
        url: "https://jigsaw.w3.org/css-validator/"
      },
      {
        title: "CSS Tricks",
        url: "https://css-tricks.com/"
      },
    ]
  },

];

function App() {
  return (
    <div className="App">
      <h1>Resources</h1>
      {resources.map((resource, index) => (
        <ResourceCategory key={index} {...resource} />
      ))}
    </div>
  );
}

export default App;
