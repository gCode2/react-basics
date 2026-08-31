import MageCard from "./MageCard/MageCard"

function MagesList({mages, mageDismissHandler}){
    return (
        <>
        <div className="magesListHolder">
        {mages.map(mage=>(
            <MageCard key={mage.id} mage={mage} mageDismissHandler={mageDismissHandler}/>
        ))}
        </div>
        </>
    )
}
export default MagesList