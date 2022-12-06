import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
      }
    };

    fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

    fetch(process.env.REACT_APP_API_URL).then(response => console.log(response));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
      </header>
    </div>
  );
}

export default App;
