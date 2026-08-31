import { useEffect, useState } from 'react'
// import FirstReminder from './components/FirstReminder.tsx';
// import SecondReminder from './components/SecondReminder.tsx';
// import ThirdReminder from './components/ThirdReminder.tsx';
// import FourthReminder from './components/FourthReminder.tsx';
// import FifthReminder from './components/FifthReminder'
// import MagesJournal from './components/MagesJournal'
import './App.css'
import MagesList from './components/MagesGuild/MagesList/MagesList'


function App() {
  const magesArray = [
    {
      id: 0,
      name: "Gandalf",
      specialization: "Mind",
      level: 100,
    },
    {
      id: 1,
      name: "Gargamel",
      specialization: "Smurf",
      level: 78,
    },
    {
      id: 2,
      name: "Merlin",
      specialization: "Arcane",
      level: 105,
    },
    {
      id: 3,
      name: "Xardas",
      specialization: "Necromancy",
      level: 72,
    },
    {
      id: 4,
      name: "Vatras",
      specialization: "Water",
      level: 66,
    },
    {
      id: 5,
      name: "Pyrokar",
      specialization: "Fire",
      level: 53,
    },

  ];
  const [mages, setMages] = useState(localStorage.getItem("mages") ? JSON.parse(localStorage.getItem("mages")) : magesArray)

  useEffect(()=>{
    
    localStorage.setItem("mages", JSON.stringify(mages));

  }, [mages])

  function handleMageDismiss(id){
    setMages(mages.filter(mage=>mage.id !== id))
  }

  return(
    <>
    <div className="app">
      <h1>Welcome to the Mages Guild!</h1>
    </div>
    <div>
      <MagesList mages={mages} mageDismissHandler={handleMageDismiss}/>
    </div>
    </>
    // <FirstReminder/>
    // <SecondReminder/>
    // <ThirdReminder/>
    // <FourthReminder/>
    // <FifthReminder/>
    // <MagesJournal/>
  )
}

export default App
