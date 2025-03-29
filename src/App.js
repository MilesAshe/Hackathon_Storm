import { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log('User query:', query); // Optional: log the query
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Hello from my React App!</h1>

      <input
        type="text"
        placeholder="Enter your query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginRight: '1rem', padding: '0.5rem', width: '300px' }}
      />
      <button onClick={handleSubmit} style={{ padding: '0.5rem 1rem' }}>
        Submit
      </button>

      {submitted && (
        <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>
          Summarized data 4U
        </div>
      )}
    </div>
  );
}

export default App;
