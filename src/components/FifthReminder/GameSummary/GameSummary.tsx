function GameSummary({monstersDefeated, calculateRewards}){

    function calculateMoneyEarned(){
        let moneyEarned = 0;
            monstersDefeated.map(monster=>{
            moneyEarned += monster.reward
            })
        return moneyEarned;
    }
    
    return(
        <>
            <div className="gameSummary">
                <div>Monsters Killed: {monstersDefeated.length}</div>
                <div>Gold Earned: {calculateMoneyEarned()}</div>
                <div>Total possible reward: {calculateRewards()}</div>
            </div>
        </>
    )
}
export default GameSummary