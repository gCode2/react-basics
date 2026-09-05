import type { CreaturesListProps } from "../../../types/Bestiary/types";
import Creature from "./Creature/Creature";

function CreaturesList({creatures}:CreaturesListProps){
    return (
        <>
            <div className="creatureListHolder">
                {
                    creatures.map(creature=>(
                        <Creature key={creature.name} creature={creature}/>
                    ))
                }
            </div>
        </>
    )
}
export default CreaturesList;