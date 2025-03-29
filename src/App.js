import { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="app-container">
      <header>
        <h1>SummarAIze</h1>
        <p>Enter your query and get a clean summary instantly.</p>
      </header>

      <div className="card">
        <input
          type="text"
          placeholder="Type your query here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>

        {submitted && (
          <div className="response">
            Summarized data 4U
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
