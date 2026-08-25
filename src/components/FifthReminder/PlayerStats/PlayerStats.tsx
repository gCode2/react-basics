function PlayerStats({playerStats, playerHealHandler}){
    return(
        <>
        <div className="playerName">
            Player: {playerStats.name}
        </div>
        <div style={{display:"flex", flexDirection:"column"}}>
            <div>
                ❤️ HP: {playerStats.hp} / {playerStats.maxHP}
            </div>
            {playerStats.hp < playerStats.maxHP ? 
            <>
                <div>
                <button onClick={playerHealHandler}>
                    Heal ( -20 gold )
                </button>
            </div>
            </> : <></>}
            
        </div>
        <div>
            ⚔️ Damage: {playerStats.attack}
        </div>
        <div>
            💰 Gold: {playerStats.gold}
        </div>
        </>
    )
}
export default PlayerStats