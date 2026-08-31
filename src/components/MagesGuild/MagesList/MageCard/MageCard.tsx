function MageCard({mage}){
    return (
        <>
        <div className="mageCard">
            <div>
                Name: {mage.name}
            </div>
            <div>
                {mage.specialization} Mage
            </div>
            <div>
                Level: {mage.level}
            </div>
            <div>
                <button>
                    Dismiss
                </button>
            </div>
            <div>
                <span style={{color:"#aaaaaa"}}>
                    #{mage.id}
                </span>
            </div>
        </div>
        </>
    )
}
export default MageCard