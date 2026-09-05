import type { EntityListProps } from "../../../types/SquadBuilder/types";
import EntityCard from "./EntityCard/EntityCard";

function EntityList({entities, actionLabel, actionHandler}: EntityListProps){
    return(
    <>
        <div className="entityList">
            {
                entities.map(entity=>(
                    <EntityCard key={entity.id} entity={entity} actionLabel={actionLabel} actionHandler={actionHandler}/>
                ))
            }
        </div>
    </>
    )
}

export default EntityList;