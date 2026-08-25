import MonsterCard from "./MonsterCard/MonsterCard"

function MonsterArena({monstersList, attackMonsterHandler}){
    return(
        <>
        <div className="monstersList">
            {
                // monstersList.map(monster=>(
                //     <MonsterCard key={monster.id} monster={monster} attackMonsterHandler={attackMonsterHandler}/>
                // ))
                // ^^^ leaving defeated monsters on the arena
                monstersList.filter(monster=>monster.hp > 0).map(monster=>(
                    <MonsterCard key={monster.id} monster={monster} attackMonsterHandler={attackMonsterHandler}/>
                ))
                // ^^^ removing defeated monsters from the arena
            }
        </div>
        
        </>
    )
}
export default MonsterArena