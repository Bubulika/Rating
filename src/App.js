
import './App.css';
import FirstCard from './FirstCard'
import SecondCard from './SecondCard'
import { useState } from 'react';

function App() {
  const [switchCard, setSwitchCard] = useState(false)
  const [finalScore, setFinalScore] = useState([0])
  return (
    <div className="container">
        {!switchCard && <FirstCard setCard={setSwitchCard} card={switchCard} setFinalScore={setFinalScore} finalScore={finalScore}/>}
        {switchCard && <SecondCard finalScore={finalScore} />}
    </div>
  );
}

export default App;
