import { useState } from "react";

function AddNoteForm({addNote}){
    const [noteText, setNoteText] = useState("");
    function handleAddNote(){
        addNote(noteText);
        setNoteText("");
    }
    return (
        <>
            <div className="addNoteFormHolder">
                <form>
                    <input type="text" className="mageNote" value={noteText} onChange={(e)=>setNoteText(e.target.value)}/>
                    <button type="button" onClick={handleAddNote}>
                        Add a note!
                    </button>
                </form>
            </div>
        </>
    )
}

export default AddNoteForm;