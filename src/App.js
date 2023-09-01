import logo from './logo.svg';
import './App.css';
import './Components/ToolCard/ToolCard.css'
import ToolCard from './Components/ToolCard/ToolCard';
import useMaxDescriptionLength from './Hooks/useMaxDescriptionLength';
import { useData } from './Hooks/DataProvider'; // Import useData hook
import React from 'react';

function App() {
  const placeholderToolData = useData();
  const maxDescriptionLength = useMaxDescriptionLength(placeholderToolData);
  return (
    <React.Fragment>
      <img src={logo} className="App-logo" alt="logo" />
      <div className="tool-card-box">
        {placeholderToolData.map((tool) => (<ToolCard key={tool.id} id={tool.id} title={tool.name} categories={tool.categories} description={tool.description} maxDescriptionLength={maxDescriptionLength} />))}
      </div>
    </React.Fragment>
  );
}

export default App;
