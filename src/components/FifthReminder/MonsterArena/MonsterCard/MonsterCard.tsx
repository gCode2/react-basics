function MonsterCard({monster, attackMonsterHandler}){
    return(
        <>
            <div className="monsterCard">
                <div>
                    {monster.name}
                </div>
                <div>
                    HP: {monster.hp}
                </div>
                <div>
                    Reward: {monster.reward}
                </div>
                <div>
                    {monster.hp > 0 ? <>
                        <button onClick={()=>{attackMonsterHandler(monster)}}>
                            Attack
                        </button>
                    </> : <>
                    <div>
                        DEFEATED!
                    </div>
                    </>}
                    
                </div>
            </div>
        </>
    )
}
export default MonsterCard