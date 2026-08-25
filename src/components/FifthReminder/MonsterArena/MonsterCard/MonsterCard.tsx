function MonsterCard({monster}){
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
                    <button>
                        Kill
                    </button>
                </div>
            </div>
        </>
    )
}
export default MonsterCard