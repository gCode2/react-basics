import { useEffect, useState } from 'react'
import NotesList from './MagesJournal/NotesList/NotesList'
import JournalSummary from './MagesJournal/JournalSummary/JournalSummary'
import AddNoteForm from './MagesJournal/AddNoteForm/AddNoteForm'
import SearchBar from './MagesJournal/SearchBar/SearchBar'

function MagesJournal() {

  const [notes, setNotes] = useState(localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [{
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

  const [searchText, setSearchText] = useState("");

  
  useEffect(()=>{
      localStorage.setItem("notes", JSON.stringify(notes));
  },[notes])


  function addNoteHandler(noteToAdd){
    setNotes([...notes, {id: Math.floor(Math.random()*1000+1), content: noteToAdd}]);

  }


  function searchNotes(str){
    setSearchText(str);
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
          <SearchBar searchNoteHandler={searchNotes} searchText={searchText}/>
        </div>
        <div>
           <NotesList notes={searchText === "" ? notes : notes.filter(note=>note.content.includes(searchText))}/>
        </div>
        <div>
          <AddNoteForm addNote={addNoteHandler}/>
        </div>
         <div>
            <JournalSummary/>
         </div>
      </div>
    </>
  )
}

export default MagesJournal
