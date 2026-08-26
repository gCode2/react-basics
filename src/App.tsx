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
  return(
    <>
      <div className="app">
        <div className="">
          <h1>
            Mage's Journal
          </h1>
        </div>
        <div>
           <NotesList notes={notes}/>
        </div>
        <div>
          <AddNoteForm/>
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
