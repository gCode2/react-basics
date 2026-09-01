function GuildSummary({mages}){
    function getAllMagesLevelSum(){
        return mages.reduce((acc, item) => {
            return acc += item.level
        }, 0)
    }
    return (
        <>
        <div>
            <div>
                Mages in Guild Count: {mages.length}
            </div>
            <div>
                Average Mage level in guild: {(getAllMagesLevelSum()/mages.length).toFixed(2)}
            </div>
        </div>
        </>
    )
}
export default GuildSummary