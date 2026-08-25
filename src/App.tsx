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
    hp: 10,
    maxHP: 100,
    attack: 20,
    gold: 100
  })
  const [monsters, setMonsters] = useState([
    { id: 1, name: "Goblin", hp: 30, reward: 20 },
    { id: 2, name: "Wolf", hp: 50, reward: 35 },
    { id: 3, name: "Troll", hp: 100, reward: 80 }
  ]);

  const [monsterTypes, setMonsterTypes] = useState([
    { name: "Goblin", hp: 30, reward: 20 },
    { name: "Black Goblin", hp: 40, reward: 25 },
    { name: "Wolf", hp: 50, reward: 35 },
    { name: "Troll", hp: 100, reward: 80 },
    { name: "Ghost", hp: 150, reward: 100},
    { name: "Orc", hp: 250, reward: 150}
  ])

  const [monstersDefeated, setMonstersDefeated] = useState([]);

  function handleAttackMonster(monsterToAttack){
    const updatedMonsters = monsters.map(monster=>{
      if(monster.id === monsterToAttack.id){
        let monsterToUpdate = {...monster, hp: (monsterToAttack.hp - player.attack) > 0 ? monsterToAttack.hp - player.attack : 0}

        if(monsterToUpdate.hp <= 0) {
          monstersDefeated.push(monsterToUpdate);
          setPlayer({...player, gold: player.gold + monsterToUpdate.reward})
        }

        return monsterToUpdate;
      }else{
        return monster;
      }
    })
    setMonsters(updatedMonsters);
  }
  function handlePlayerHeal(){
    if(player.gold < 20){
      // alert("not enough gold");
      console.log("not enough gold");
      return
    }
    setPlayer({...player, hp: (player.hp + 20) > player.maxHP ? player.maxHP : (player.hp + 20), gold: player.gold-20})
  }
  function handleMonsterSummon(){
    let x = Math.floor(Math.random()*monsterTypes.length);
    setMonsters([...monsters, {...monsterTypes[x], id: Math.floor(Math.random()*10000+1)}]);
  }
  function calculateTotalPossibleRewards(){
    return monsters.reduce((acc, item)=>{
      if(item.hp > 0){
        return acc + item.reward
      }
      return acc;
    }, 0)
  }
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
        <PlayerStats playerStats={player} playerHealHandler={handlePlayerHeal}/>
      </div>
      <div className="monsterArenaHolder">
        <MonsterArena monstersList={monsters} attackMonsterHandler={handleAttackMonster}/>
      </div>
      <div className="gameSummaryHolder">
        <GameSummary monstersDefeated={monstersDefeated} calculateRewards={calculateTotalPossibleRewards}/>
      </div>
      <div className="monsterSummonButton">
        <button onClick={handleMonsterSummon}>
          Summon random monster!
        </button>
      </div>
    </div>
    </>
  )
}

export default App
