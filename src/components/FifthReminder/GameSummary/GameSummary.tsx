function GameSummary({goldEarned, monstersDefeated}){
    return(
        <>
            <div className="gameSummary">
                <div>Monsters Killed: {monstersDefeated}</div>
                <div>Gold Earned: {goldEarned}</div>
            </div>
        </>
    )
}
export default GameSummary