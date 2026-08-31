import MageCard from "./MageCard/MageCard"

function MagesList({mages}){
    return (
        <>
        <div className="magesListHolder">
        {mages.map(mage=>(
            <MageCard key={mage.id} mage={mage}/>
        ))}
        </div>
        </>
    )
}
export default MagesList