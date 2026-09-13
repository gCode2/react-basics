function SearchBooksForm(){

    function submitHandler(){

    }
    
    return(
        <>
        <div>
            <form onSubmit={submitHandler}>
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