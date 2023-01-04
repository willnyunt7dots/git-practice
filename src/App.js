import './App.css';
import Card from './Element/Card';
import ImageCard from './Element/ImageCard';
import InfoCard from './Element/InfoCard';
import DataGridTable from './Element/DataGridTable';
import TestDateTimePicker from './Element/TestDateTimePicker';

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
        <InfoCard src='./kingston.jpeg' title='Kingston' content='This is a marketplace in Kingston' />
        <h3>Grid table example: </h3>
        <DataGridTable/>
        <h3>Date/Time field example:</h3>
        <TestDateTimePicker/>
      </header>
    </div>
  );
}

export default App;
