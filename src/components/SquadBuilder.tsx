import { useEffect, useState } from "react";
import { ENTITY_STATUSES, type Entity, type EntityStatus, type RawEntityApiResponse, type SortType } from "../types/SquadBuilder/types";
import SearchBar from "./SquadBuilder/SquadBuilderControls/SearchBar/SearchBar";
import SquadNameSort from "./SquadBuilder/SquadBuilderControls/SquadNameSort/SquadNameSort";
import SquadStatusFilter from "./SquadBuilder/SquadBuilderControls/SquadStatusFilter/SquadStatusFilter";
import EntityList from "./SquadBuilder/EntityList/EntityList";

const ENTITIES_URL = "https://rickandmortyapi.com/api/character"

function SquadBuilder(){
    const [entities, setEntities] = useState<Entity[]>([])
    const [squad, setSquad] = useState<Entity[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchText, setSearchText] = useState("");
    const [selectedEntityStatus, setSelectedEntityStatus] = useState<EntityStatus | "all">("all");

    const entityStatuses = ["all", ...ENTITY_STATUSES] as const;

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

            setEntities(mappedEntities);

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
        setSquad(prev=>[...prev, ...entities.filter(ent=>ent.id === id)])
        setEntities(prev=>[...prev.filter(p=>p.id !== id)]);
    }
    function dismissSquadMember(id: number){
        setSquad(prev=>[...prev.filter(p=>p.id !== id)]);
        setEntities(prev=>[...prev, ...squad.filter(ent=>ent.id === id)])
    }
    function handleChange(text: string){
        setSearchText(text);
    }

    function handleSort(sortOrder: SortType){
        const entitiesToSort: Entity[] = [...entities];
        // nie wiem czy to typowanie tu ma sens, ale chcialem miec pewnosc, ze ta zmienna bedzie przyjmowac tylko i wylacznie tablice z Entity
        switch(sortOrder){
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
        setEntities(entitiesToSort);
    }

    function handleFilter(status: EntityStatus | "all"){
        setSelectedEntityStatus(status)
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
                                entities={entities.filter(entity=>{
                                    const matchesSearch = entity.name.toLowerCase().includes(searchText.toLowerCase());
                                    const matchesStatus = selectedEntityStatus === "all" || !selectedEntityStatus || entity.status === selectedEntityStatus
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
                    {squad.length > 0 ? <EntityList entities={squad} actionLabel="dismiss" actionHandler={dismissSquadMember}/> : "No squad members to display"}
                    
                </div>

                
                
           </div>
        </>
    )
}
export default SquadBuilder;