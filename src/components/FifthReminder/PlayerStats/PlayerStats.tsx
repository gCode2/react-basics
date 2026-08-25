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
            {/* i was wondering if i should display the heal button if the player has less than 20 gold  - easy to implement but i'll leave it that way, at least for now*/}
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