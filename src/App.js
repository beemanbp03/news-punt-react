import logo from './logo.svg';
import NewsCard from './componenets/NewsCard';
import Menu from './componenets/Menu';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
}

export default App;
