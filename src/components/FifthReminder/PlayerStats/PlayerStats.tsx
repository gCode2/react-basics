function PlayerStats({playerStats}){
    return(
        <>
        <div className="playerName">
            Player: {playerStats.name}
        </div>
        <div>
            ❤️ HP: {playerStats.hp}
        </div>
        <div>
            ⚔️ HP: {playerStats.attack}
        </div>
        <div>
            💰 Gold: {playerStats.gold}
        </div>
        </>
    )
}
export default PlayerStats