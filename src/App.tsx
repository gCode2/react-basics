import { useState } from 'react'
// import FirstReminder from './components/FirstReminder.tsx';
// import SecondReminder from './components/SecondReminder.tsx';
// import ThirdReminder from './components/ThirdReminder.tsx';
// import FourthReminder from './components/FourthReminder.tsx';
import './App.css'
import PlayerStats from './components/FifthReminder/PlayerStats/PlayerStats'
import MonsterArena from './components/FifthReminder/MonsterArena/MonsterArena';
import GameSummary from './components/FifthReminder/GameSummary/GameSummary';

function App() {
  const [player,setPlayer] = useState({
    name: "Gregor",
    hp: 100,
    attack: 20,
    gold: 100
  })
  const [monsters, setMonsters] = useState([
    { id: 1, name: "Goblin", hp: 30, reward: 20 },
    { id: 2, name: "Wolf", hp: 50, reward: 35 },
    { id: 3, name: "Troll", hp: 100, reward: 80 }
  ]);
  const [monstersDefeated, setMonstersDefeated] = useState([]);
  const [goldEarned, setGoldEarned] = useState(0);


  return(
    // <FirstReminder/>
    // <SecondReminder/>
    // <ThirdReminder/>
    // <FourthReminder/>
    <>
    <div className="app">
      <div className="gameTitle">
        <h1>Monster Hunter Arena</h1>
      </div>
      <div className="playerStatsHolder">
        <PlayerStats playerStats={player}/>
      </div>
      <div className="monsterArenaHolder">
        <MonsterArena monstersList={monsters}/>
      </div>
      <div className="gameSummaryHolder">
        <GameSummary goldEarned={goldEarned} monstersDefeated={monstersDefeated.length}/>
      </div>

    </div>
    </>
  )
}

export default App
