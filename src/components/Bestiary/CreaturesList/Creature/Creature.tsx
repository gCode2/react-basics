import type { CreatureProps } from "../../../../types/Bestiary/types";

function Creature({creature}:CreatureProps){
    return (
        <>
            <div>
                {/* <div>
                    {/* <img src={`${creature.url}`}/> }
                </div> */}
                <div>
                    {creature.name}
                </div>
            </div>
        </>
    )
}
export default Creature;