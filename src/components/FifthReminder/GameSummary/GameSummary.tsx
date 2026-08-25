function GameSummary({monstersDefeated}){

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
            </div>
        </>
    )
}
export default GameSummary