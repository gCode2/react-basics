import { useEffect, useState } from 'react'
// import FirstReminder from './components/FirstReminder.tsx';
// import SecondReminder from './components/SecondReminder.tsx';
// import ThirdReminder from './components/ThirdReminder.tsx';
// import FourthReminder from './components/FourthReminder.tsx';
// import FifthReminder from './components/FifthReminder'
// import MagesJournal from './components/MagesJournal'
import './App.css'
import MagesList from './components/MagesGuild/MagesList/MagesList'
import SearchBar from './components/MagesGuild/MageControls/SearchBar/SearchBar';
import SpecializationFilter from './components/MagesGuild/MageControls/SpecializationFilter/SpecializationFilter';
import GuildSummary from './components/MagesGuild/GuildSummary/GuildSummary';
import AddMageForm from './components/MagesGuild/AddMageForm/AddMageForm';


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
  const [mages, setMages] = useState(localStorage.getItem("mages") ? JSON.parse(localStorage.getItem("mages")) : magesArray);

  const [selectedSpecialization, setSelectedSpecialization] = useState("all");

  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    
    localStorage.setItem("mages", JSON.stringify(mages));

  }, [mages])

  function handleSearchTextChange(text){
    setSearchText(text)
  }

  function handleMageDismiss(id){
    setMages(mages.filter(mage=>mage.id !== id))
  }

  let specializations = getSpecializations();
  function getSpecializations(){
    return new Array("all", ...new Set(mages.map(mage=>mage.specialization)))
  }
  function handleSpecializationChange(spec){
    setSelectedSpecialization(spec);
  }
  function addMage(data){
    console.log(data)
  }
  return(
    <>
    <div className="app">
      <h1>Welcome to the Mages Guild!</h1>
    </div>
    <div>
      <div>
        <SearchBar searchTextChangeHandler={handleSearchTextChange} searchText={searchText}/>
      </div>
      <div>
        <SpecializationFilter specializations={specializations} changeCategoryHandler={handleSpecializationChange}/>
      </div>
    </div>
    <div>
      <MagesList mages={searchText==="" ? mages : mages.filter(mage=>mage.name.includes(searchText))} mageDismissHandler={handleMageDismiss} selectedSpecialization={selectedSpecialization}/>
    </div>
    <div>
      <GuildSummary mages={mages}/>
    </div>
    <div>
      <AddMageForm addMageHandler={addMage}/>
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
