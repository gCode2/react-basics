function Note({note}){
    return (
        <>
            <div className="noteCard">
                <div>
                    {note.content}
                </div>
                <div>
                    <span style={{color:"#aaaaaa"}}>
                        #{note.id}
                    </span>
                </div>
            </div>
        </>
    )
}

export default Note