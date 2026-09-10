import { useEffect, useReducer, useState } from "react";
import { ENTITY_STATUSES, type Entity, type EntityStatus, type RawEntityApiResponse, type SortType, type SquadAction, type SquadState } from "../types/SquadBuilder/types";
import SearchBar from "./SquadBuilder/SquadBuilderControls/SearchBar/SearchBar";
import SquadNameSort from "./SquadBuilder/SquadBuilderControls/SquadNameSort/SquadNameSort";
import SquadStatusFilter from "./SquadBuilder/SquadBuilderControls/SquadStatusFilter/SquadStatusFilter";
import EntityList from "./SquadBuilder/EntityList/EntityList";

const ENTITIES_URL = "https://rickandmortyapi.com/api/character"

function SquadBuilder(){
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchText, setSearchText] = useState("");

    const entityStatuses = ["all", ...ENTITY_STATUSES] as const;

    function squadReducer(state: SquadState, action: SquadAction): SquadState{
        switch(action.type){
            case "FETCH_SUCCESS":
                return {...state, entities: action.entities}
            case "RECRUIT":{
                const recruited = state.entities.find(e=>e.id === action.id);
                if(recruited){
                    return {...state,
                        entities: state.entities.filter(e=>e.id !== action.id),
                        squad: [...state.squad, recruited]
                    }
                }else{
                    return state
                }
            }
            case "DISMISS":{
                const dismissed = state.squad.find(e=>e.id === action.id);
                if(dismissed){
                    return {
                        ...state,
                        entities: sortEntities([...state.entities, dismissed], state.sortOrder),
                        squad: state.squad.filter(e=>e.id !== action.id)
                    }
                }
                else{
                    return state
                }
            }
            case "SET_SORT":{
                return {
                    ...state, 
                    entities: sortEntities(state.entities, action.order),
                    sortOrder: action.order}
            }
            case "SET_FILTER":{
                return {
                    ...state,
                    selectedEntityStatus: action.status
                }
            }
            default:
            throw Error('Unknown action');
        }
    }

    const [state, dispatch] = useReducer(squadReducer, {entities: [], squad: [], sortOrder: null, selectedEntityStatus: "all"});



    async function fetchEntities(url: string): Promise<void>{
        try{
            setLoading(true);
            setError(null);

            const response = await fetch(url);

            if(!response.ok){
                throw new Error(`HTTP Error occured. Status: ${response.status}`)
            }

            const data: RawEntityApiResponse = await response.json();

            const mappedEntities: Entity[] = data.results.map(rawEntity=>({
                id: rawEntity.id,
                name: rawEntity.name,
                gender: rawEntity.gender,
                image: rawEntity.image,
                species: rawEntity.species,
                status: rawEntity.status
            }))

            dispatch({
                type:"FETCH_SUCCESS",
                entities: mappedEntities
            })

        }catch(error: unknown){
            if(error instanceof Error){
                setError(error.message);
            }else{
                setError("Unknown error occured")
            }
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchEntities(ENTITIES_URL);
    }, []);

    function recruitSquadMember(id: number){
        dispatch({
            type: "RECRUIT",
            id: id
        })
    }
    function dismissSquadMember(id: number){
        dispatch({
            type: "DISMISS",
            id: id
        })
    }
    function handleChange(text: string){
        setSearchText(text);
    }

    function sortEntities(list: Entity[], order: SortType | null): Entity[]{
        if(!order) return list;
        const entitiesToSort = [...list];
        switch(order){
            case "asc":
                entitiesToSort.sort((a,b) => {
                    return a.name.localeCompare(b.name)
                })
            break;
            case "desc":
                entitiesToSort.sort((a,b) => {
                    return b.name.localeCompare(a.name)
                })
            break;
            default:
                console.error("Unknown error occured")
        }
        return entitiesToSort;
    }

    function handleSort(order: SortType | null){
        dispatch({
            type: "SET_SORT",
            order: order
        })
        
    }

    function handleFilter(status: EntityStatus | "all"){
        dispatch({
            type:"SET_FILTER",
            status: status
        })
    }

    return (
        <>
           <div className="app">
                <div className="container">
                    <div>
                        <SearchBar searchText={searchText} changeHandler={handleChange}/>
                    </div>
                    <div>
                        <SquadNameSort sortHandler={handleSort}/>
                    </div>
                    <div>
                        <SquadStatusFilter entityStatuses={entityStatuses} filterHandler={handleFilter}/>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Entities to recruit</h2>
                    </div>
                    {
                        isLoading ? (
                            <p>Loading entities...</p>
                        ) : (
                            <EntityList
                                entities={state.entities.filter(entity=>{
                                    const matchesSearch = entity.name.toLowerCase().includes(searchText.toLowerCase());
                                    const matchesStatus = state.selectedEntityStatus === "all" || !state.selectedEntityStatus || entity.status === state.selectedEntityStatus
                                    return matchesSearch && matchesStatus
                                })}
                                actionLabel="recruit"
                                actionHandler={recruitSquadMember}
                            />
                        )
                    }
                    {error ? <p>{error}</p> : ""}
                </div>
                <div>
                    <div>
                        <h2>Entities in your Squad</h2>
                    </div>
                    {state.squad.length > 0 ? <EntityList entities={state.squad} actionLabel="dismiss" actionHandler={dismissSquadMember}/> : "No squad members to display"}
                    
                </div>

                
                
           </div>
        </>
    )
}
export default SquadBuilder;