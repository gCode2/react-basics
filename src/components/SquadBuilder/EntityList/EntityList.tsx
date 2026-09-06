import type { EntityListProps } from "../../../types/SquadBuilder/types";
import EntityCard from "./EntityCard/EntityCard";

function EntityList({entities, actionLabel, actionHandler}: EntityListProps){
    
    return(
    <>
        <div className="entityList">
            {
                entities.length > 0 ? 
                entities.map(entity=>(
                    <EntityCard 
                        key={entity.id} 
                        entity={entity} 
                        actionLabel={actionLabel} 
                        actionHandler={actionHandler}/>
                )) : "No entities found"
            }
        </div>
    </>
    )
}

export default EntityList;