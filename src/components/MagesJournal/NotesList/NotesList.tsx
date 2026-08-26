import Note from "./Note/Note"

function NotesList({notes}){
    
    return (
        <>
        <div className="notesListHolder">
            {notes.map(note=>(
                <Note key={note.id} note={note}/>
            ))}
        </div>
        </>
    )
}

export default NotesList