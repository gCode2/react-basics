function SearchBooksForm(){
    return(
        <>
        <div>
            <form onSubmit={()=>console.log("XD")}>
                <input type="text"/>
                <button type="submit">
                    Search books!
                </button>
            </form>
        </div>
        </>
    )
}
export default SearchBooksForm;