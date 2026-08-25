import MonsterCard from "./MonsterCard/MonsterCard"

function MonsterArena({monstersList, attackMonsterHandler}){
    return(
        <>
        <div className="monstersList">
            {
                monstersList.map(monster=>(
                    <MonsterCard key={monster.id} monster={monster} attackMonsterHandler={attackMonsterHandler}/>
                ))
            }
        </div>
        
        </>
    )
}
export default MonsterArena