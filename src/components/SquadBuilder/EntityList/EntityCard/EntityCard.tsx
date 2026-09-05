import type { EntityCardProps } from "../../../../types/SquadBuilder/types"

function EntityCard({entity, actionLabel, actionHandler}: EntityCardProps){
    return(
        <>
            <div className="entityCard">
                <div className="imgHolder">
                    <img src={`${entity.image}`} className="entityImage"/>
                    <div className="actionButtonHolder">
                        <div className={`actionChip chip ${actionLabel}`} onClick={()=>actionHandler(entity.id)}>
                            {actionLabel}
                        </div>
                    </div>
                </div>
                
                    <div>
                        Name: {entity.name}
                    </div>           
                    <div>
                        Gender: {entity.gender}
                    </div>
                    <div>
                        Spiece: {entity.species}
                    </div>           
                    <div>
                        Status: {entity.status}
                    </div>
                    <div className="entityHolder">
                        <div className="entityId">
                            #{entity.id}
                        </div>
                    </div>
            </div>
        </>
    )
}
export default EntityCard