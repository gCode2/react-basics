import { useEffect, useState } from "react";
import type { Creature, CreatureApiResponse } from "../types/Bestiary/types";
import CreaturesList from "./Bestiary/CreaturesList/CreaturesList";
import SearchBar from "./Bestiary/BestiaryControls/SearchBar/SearchBar";
import SortHandler from "./Bestiary/BestiaryControls/SortHandler/SortHandler";

function Bestiary(){

    const [creatures, setCreatures] = useState<Creature[]>([]);
    const [searchText, setSearchText] = useState("");

    // fetch combo
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // function fetchCreatures(url: string){
    //     fetch(url).then((response) => {
    //         if(!response.ok){
    //             throw new Error (`HTTP Error! status: ${response.status}`);
    //         }
    //         return response.json();
    //     }).then((data: Creature[])=>{
    //         setCreatures(data);
    //         console.log(data)
    //         setIsLoading(false);
    //     }).catch((err)=>{
    //         setError(err.message);
    //         setIsLoading(false)
    //     })
    // }

    async function fetchCreatures(url: string){
        try{
            setIsLoading(true);
            setError(null);

            const response = await fetch(url);

            if(!response.ok){
                throw new Error (`HTTP Error! Status: ${response.status}`)
            }

            const data: CreatureApiResponse = await response.json();

            setCreatures(data.results);

        } catch (error){
            if(error instanceof Error){
                setError(error.message);
            } else{
                setError("Uknown error occured");
            }
            
        } finally{
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        fetchCreatures("https://pokeapi.co/api/v2/pokemon?limit=151");
    }, [])

    function consoleLogCreatures(){
        console.log(creatures);
    }

    return (
        <>
            <div className="app">
                <div>
                    <div>
                        <SearchBar/>
                    </div>
                    <div>
                        <SortHandler/>
                    </div>
                </div>
                <div>
                    {isLoading ? <p>Fetching creatures... ⏳</p> : <CreaturesList creatures={creatures}/>}
                    
                </div>
            </div>
        </>
    )
}
export default Bestiary;