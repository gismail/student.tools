import logo from './logo.svg';
import './App.css';
import './Components/ToolCard/ToolCard.css'
import ToolCard from './Components/ToolCard/ToolCard';
import useMaxDescriptionLength from './Hooks/useMaxDescriptionLength';
import { useData } from './Hooks/DataProvider'; // Import useData hook

function App() {
  const placeholderToolData = useData();
  const maxDescriptionLength = useMaxDescriptionLength(placeholderToolData);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div>
        {placeholderToolData.map((tool, index) => (
          <ToolCard
            key={index}
            title={tool.title}
            categories={tool.categories}
            description={tool.description}
            maxDescriptionLength={maxDescriptionLength}
          />
        ))}
      </div>
    </div>

  );
}

export default App;
