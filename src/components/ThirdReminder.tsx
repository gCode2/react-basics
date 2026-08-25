import { useState } from 'react'

function ThirdReminder() {
  const [initialQuests, setInitialQuests] = useState([
  {
    id: 1,
    title: "Rat Hunt",
    difficulty: "easy",
    reward: 20,
    completed: false
  },
  {
    id: 2,
    title: "Escort the Merchant",
    difficulty: "medium",
    reward: 50,
    completed: false
  },
  {
    id: 3,
    title: "Slay the Dragon",
    difficulty: "hard",
    reward: 500,
    completed: false
  },
  {
    id: 4,
    title: "Gather Herbs",
    difficulty: "easy",
    reward: 30,
    completed: false
  }
  ]);
  const [chosenDifficulty, setChosenDifficulty] = useState("all");
  const [inputs, setInputs] = useState({
    questTitle: "",
    questReward: "",
    questDifficulty: ""
  })

  // let difficulties = []; 
  // for(let i = 0; i<initialQuests.length; i++){
  //   difficulties.push(initialQuests[i].difficulty);
  // }
  // difficulties = new Set(difficulties); //próba zrobienia Setu - jest nawet ok ale wersja z pierwszego projektu bardziej mi sie podobała

  const difficulties = [...new Set(initialQuests.map(quest=>quest.difficulty))];
  function handleDifficultyChange(diff){
    setChosenDifficulty(diff);
  }
  function handleQuestComplete(questToComplete){
    // let updatedQuests = [...initialQuests]
    // updatedQuests.map(quest=>{
    //   if(quest.id === questToComplete.id){
    //     quest.completed = true;
    //   }
    // });


    // questToComplete = {...questToComplete, completed: true}
    // let updatedQuests = [];

    // initialQuests.map(quest => {
    //   updatedQuests.push(quest)
    // })
    
    let updatedQuests = initialQuests.map(quest => {
      if(quest.id === questToComplete.id){
        return {...quest, completed: true}
      }
      return quest;
    });

    setInitialQuests(updatedQuests);
    getCompletedQuestsCount();
  }
  function handleQuestCompleteUndo(questToUndoCompletion){
    let updatedQuests = [...initialQuests]
    
    updatedQuests.map(quest=>{
      if(quest.id === questToUndoCompletion.id){
        quest.completed = false;
      }
    });
    setInitialQuests(updatedQuests);
    getCompletedQuestsCount();
  }
  function handleQuestRemove(questToRemove){
    let updatedQuests = [...initialQuests.filter(quest => quest.id !== questToRemove.id)];
    setInitialQuests(updatedQuests);
    getCompletedQuestsCount();
  }
  function getCompletedQuestsCount(){
    return initialQuests.reduce((acc, item)=>{
      if(item.completed === true){
        acc++
      }
      return acc;
    },0);
  }
  function checkPotentialRewards(){
    return initialQuests.reduce((acc, item)=>{
      if(item.completed === false){
        acc += item.reward
      }
      return acc;
    },0);
  }
  function handleChange(e){
    const name = e.target.name;
    const value = e.target.value;

    setInputs({...inputs, [name]: value});

  }
  function handleQuestAdd(){
    setInitialQuests([...initialQuests, {id: Math.floor(Math.random()*10000)+1, title: inputs.questTitle, difficulty: inputs.questDifficulty, reward: parseInt(inputs.questReward), completed: false}]);
    setInputs({
      questTitle: "",
      questReward: "",
      questDifficulty: ""
    })
  }
  function handleSort(sort){
    let questsToSort = [...initialQuests];
    
    
    switch(sort){
      case "asc":
        questsToSort.sort((a, b)=>{
          return a.reward - b.reward;
        });
      break;
      case "desc":
        questsToSort.sort((a, b)=>{
          return b.reward - a.reward;
        });
      break;
      default:
        console.log("something went wrong");
      break;
    }
    setInitialQuests(questsToSort);

  }
  return(
    <>
      <div>
        <h1>GUILD QUEST BOARD</h1>
        <div className="questSummary">
          <div>
            Quests Available: {initialQuests.length}  
          </div> 
          <div>
            Quests Completed: {getCompletedQuestsCount()}
          </div>
          <div>
            Potential Rewards:  {checkPotentialRewards()}
          </div>
        </div>
        <div className="sortingBox">
          <div>
            Sort by rewards:
          </div>
          <div className="chip" onClick={()=>handleSort("asc")}>Low - High</div>
          <div className="chip" onClick={()=>handleSort("desc")}>High - Low</div>
        </div>
        <div className="difficultyChips">
          <div className="chip" onClick={()=>handleDifficultyChange("all")}>all</div>
          {difficulties.map(difficulty=>(
            <div key={difficulty} className="chip" onClick={()=>handleDifficultyChange(difficulty.toString())}>
            {difficulty}
            </div>
          ))}
        </div>
        <div className="questDashboard">
          {
            initialQuests.filter(quest=> quest.difficulty === chosenDifficulty || chosenDifficulty === "all").map(quest => (
              <div className="questCard" key={quest.id}>
                  <div className="questTitle">
                    {quest.title}
                  </div>
                  <div className="questDifficulty">
                    {quest.difficulty}
                  </div>
                  <div className="questReward">
                    Reward: {quest.reward}
                  </div>
                  <div className="questOperationsHolder">
                    <div className="questOperation">
                      {quest.completed === true ? 
                      <>
                        <div>
                          <span>✓ Completed!</span>
                          <div className="chip" onClick={()=>handleQuestCompleteUndo(quest)}> undo </div>
                        </div>
                      </>
                      :
                      <>
                        <div className="chip complete" onClick={()=>handleQuestComplete(quest)}>
                          Complete
                        </div>
                        <div className="chip remove" onClick={()=>handleQuestRemove(quest)}>
                          Remove
                        </div>
                      </>
                      }
                      
                    </div>
                  </div>
              </div>
            ))
          }
        </div>
        <div className="questMakingBox">
          <div>
            <h3>
              Create your own quest!
            </h3>
          </div>
          <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
            <div>
              <input type="text" name="questTitle" value={inputs.questTitle} placeholder="Quest Title" onChange={(e)=>handleChange(e)}/>
            </div>
            <div>
              <input type="text" name="questReward" value={inputs.questReward} placeholder="Quest Reward" onChange={(e)=>handleChange(e)}/>
            </div>
            <div>
              <input type="text" name="questDifficulty" value={inputs.questDifficulty} placeholder="Quest Difficulty" onChange={(e)=>handleChange(e)}/>
            </div>
          </div>
          <div style={{marginTop:"10px"}}>
            <button type="button" onClick={handleQuestAdd}>
              Add Quest
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ThirdReminder
