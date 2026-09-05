import { useEffect, useState } from "react";
import type { Entity, RawEntityApiResponse } from "../types/SquadBuilder/types";
import SearchBar from "./SquadBuilder/SquadBuilderControls/SearchBar/SearchBar";
import SquadNameSort from "./SquadBuilder/SquadBuilderControls/SquadNameSort/SquadNameSort";
import SquadStatusFilter from "./SquadBuilder/SquadBuilderControls/SquadStatusFilter/SquadStatusFilter";
import EntityList from "./SquadBuilder/EntityList/EntityList";

const ENTITIES_URL = "https://rickandmortyapi.com/api/character"

function SquadBuilder(){
    const [entities, setEntities] = useState<Entity[]>([])
    const [squad, setSquad] = useState<Entity[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)

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

    return (
        <>
           <div className="app">
                <div className="container">
                    <div>
                        <SearchBar/>
                    </div>
                    <div>
                        <SquadNameSort/>
                    </div>
                    <div>
                        <SquadStatusFilter/>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Entities in your Squad</h2>
                    </div>
                    <EntityList entities={squad} actionLabel="dismiss"/>
                </div>

                <div>
                    <div>
                        <h2>Entities to recruit</h2>
                    </div>
                    <EntityList entities={entities} actionLabel="recruit"/>
                </div>
                
           </div>
        </>
    )
}
export default SquadBuilder;