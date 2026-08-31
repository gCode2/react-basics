import MageCard from "./MageCard/MageCard"

function MagesList({mages, mageDismissHandler, selectedSpecialization}){
    return (
        <>
        <div className="magesListHolder">
        {mages.filter(mage=>mage.specialization === selectedSpecialization || selectedSpecialization === "all").map(mage=>(
            <MageCard key={mage.id} mage={mage} mageDismissHandler={mageDismissHandler}/>
        ))}
        </div>
        </>
    )
}
export default MagesList