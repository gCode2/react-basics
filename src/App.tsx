import { useState } from 'react'
// import FirstReminder from './components/FirstReminder.tsx';
// import SecondReminder from './components/SecondReminder.tsx';
// import ThirdReminder from './components/ThirdReminder.tsx';
// import FourthReminder from './components/FourthReminder.tsx';
// import FifthReminder from './components/FifthReminder'
import './App.css'
import NotesList from './components/MagesJournal/NotesList/NotesList'
import JournalSummary from './components/MagesJournal/JournalSummary/JournalSummary'
import AddNoteForm from './components/MagesJournal/AddNoteForm/AddNoteForm'
import SearchBar from './components/MagesJournal/SearchBar/SearchBar'

function App() {
  const [notes, setNotes] = useState([{
    id: 0,
    content: "Its my first note in this journal. Shall I be damned if I ever forget this I've made the decision to start this jouornal"
  },
  {
    id: 1,
    content: "Its my second note. Those filthy goblins tried to steal my potions - justice will find them for sure. Im going back to study ancient runes"
  },
  {
    id: 2,
    content: "hyhyh, stupid mage... we got his journal hehe, we good goblins, we good thieves, sneaky and fast hehe"
  },
  {
    id: 3,
    content: "Its a shame I let those goblins steal my journal. When I was creating it I didnt think anyone could outsmart me and steal it from me... Since its a magic journal, nothing can be erased from it. Previous note... it hurts... I bet it hurts like my fireballs hurt the goblins"
  }
])
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [isSearchActive, setSearchActive] = useState(false);


  function addNoteHandler(noteToAdd){
    setNotes([...notes, {id: Math.floor(Math.random()*1000+1), content: noteToAdd}]);
  }


  function searchNotes(str){
    console.log(str);
    if(str === ""){
      setSearchActive(false)
    }
    else{
      setSearchActive(true)
      setFilteredNotes(notes.filter(note=>note.content.includes(str)))
    }
    
    // return notes.filter(note=>note.content.includes(str));
  }
  return(
    <>
      <div className="app">
        <div className="">
          <h1>
            Mage's Journal
          </h1>
        </div>
        <div>
          <SearchBar searchNoteHandler={searchNotes}/>
        </div>
        <div>
           <NotesList notes={isSearchActive ? filteredNotes : notes}/>
        </div>
        <div>
          <AddNoteForm addNote={addNoteHandler}/>
        </div>
         <div>
            <JournalSummary/>
         </div>
      </div>
    </>
    // <FirstReminder/>
    // <SecondReminder/>
    // <ThirdReminder/>
    // <FourthReminder/>
    // <FifthReminder/>
  )
}

export default App
