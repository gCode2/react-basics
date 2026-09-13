import React, { useState } from "react";
import type { SearchBooksFormProps } from "../../../types/BookWishlist/types";

function SearchBooksForm({submitHandler}: SearchBooksFormProps){
    const [input, setInput] = useState("");

    function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>){
        e.preventDefault();
        submitHandler(input);
    }
    function inputChangeHandler(e: React.ChangeEvent<HTMLInputElement>){
        setInput(e.target.value)
    }

    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={inputChangeHandler}/>
                <button type="submit">
                    Search books!
                </button>
            </form>
        </div>
        </>
    )
}
export default SearchBooksForm;