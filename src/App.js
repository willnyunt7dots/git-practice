import './App.css';
import Card from './Element/Card';
import ImageCard from './Element/ImageCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card/>
        <h3>Image Card example: </h3>
        <div className="App-card__holder">
          <ImageCard src='./montery.jpeg' title='Montery' />
          <ImageCard src='./kingston.jpeg' title='Kingston' />
        </div>
        <h3>Image Stat Card example: </h3>
      </header>
    </div>
  );
}

export default App;
