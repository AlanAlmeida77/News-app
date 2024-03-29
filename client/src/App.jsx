import { useState, useEffect } from 'react';
import NewsList from './components/NewsList';
import Header from "./components/Header";
import NewsContainer from './components/NewsContainer';
import "./app.css";

function App() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/news/general') 
      .then((response) => response.json())
      .then((data) => setNewsData(data.articles));
  }, []);

  return (
    <div className="app">
      <Header />
      <NewsList news={newsData} />
      <NewsContainer />
    </div>
  );
}

export default App;
