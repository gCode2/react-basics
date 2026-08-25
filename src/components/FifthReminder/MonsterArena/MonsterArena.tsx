import MonsterCard from "./MonsterCard/MonsterCard"

function MonsterArena({monstersList}){
    return(
        <>
        <div className="monstersList">
            {
                monstersList.map(monster=>(
                    <MonsterCard key={monster.id} monster={monster}/>
                ))
            }
        </div>
        
        </>
    )
}
export default MonsterArena