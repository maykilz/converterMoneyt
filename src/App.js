import logo from './logo.svg';
import './App.css';
import { Converter } from './components/converter/Converter';
import { useEffect, useState } from 'react';

function App() {
  const [courseMoney, setCourseMoney] = useState('');

  useEffect(()=> {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js').then((rsp)=> { return rsp.json()})
    .then((rsp)=> setCourseMoney(rsp.Valute));
  }, []);
  return (
    <div className="App">
      
      <Converter valutes={courseMoney}/> 

    </div>
  );
}

export default App;
