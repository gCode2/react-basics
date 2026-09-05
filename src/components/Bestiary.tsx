import { useEffect, useState } from "react";
import type { Creature, RawCreatureApiResponse, SortType } from "../types/Bestiary/types";
import CreaturesList from "./Bestiary/CreaturesList/CreaturesList";
import SearchBar from "./Bestiary/BestiaryControls/SearchBar/SearchBar";
import SortHandler from "./Bestiary/BestiaryControls/SortHandler/SortHandler";

const CREATURES_URL = "https://pokeapi.co/api/v2/pokemon?limit=151";

function Bestiary(){

    const [creatures, setCreatures] = useState<Creature[]>([]);
    const [searchText, setSearchText] = useState("");

    // fetch combo
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    async function fetchCreatures(url: string): Promise<void>{
        try{
            setIsLoading(true);
            setError(null);

            const response = await fetch(url);
            
            if(!response.ok){
                throw new Error (`HTTP Error! Status: ${response.status}`)
            }

            const data: RawCreatureApiResponse = await response.json();
            setCreatures(data.results);

        } catch (error: unknown){
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
        fetchCreatures(CREATURES_URL);
    }, [])

    function refreshCreatures(){
        fetchCreatures(CREATURES_URL);
    }
    function handleSort(sort: SortType){
        const creaturesToSort = [...creatures];
        switch(sort){
            case "asc":
                creaturesToSort.sort((a, b)=>{
                    return a.name.localeCompare(b.name)
                })
            break;
            case "desc":
                creaturesToSort.sort((a, b)=>{
                    return b.name.localeCompare(a.name)
                })
            break;
            default:
                console.log("something went wrong")
        }
        setCreatures(creaturesToSort);
    }
    function handleSearch(text: string){
        setSearchText(text);
    }

    return (
        <>
            <div className="app">
                <div className="container">
                    <div>
                        <SearchBar searchText={searchText} searchHandler={handleSearch}/>
                    </div>
                    <div>
                        <SortHandler sortHandler={handleSort}/>
                    </div>
                </div>
                <div>
                    <button onClick={refreshCreatures}>
                        Refresh Creatures
                    </button>
                </div>
                <div>
                    {isLoading ? 
                    <p>Fetching creatures... ⏳</p> : 
                    <CreaturesList creatures={searchText==="" ? creatures : creatures.filter(creature=>creature.name.includes(searchText))}/>}

                    {error ? <p>{error}</p> : ""}
                </div>
            </div>
        </>
    )
}
export default Bestiary;