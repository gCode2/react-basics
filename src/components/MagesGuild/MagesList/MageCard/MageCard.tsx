function MageCard({mage, mageDismissHandler}){
    return (
        <>
        <div className="mageCard">
            <div>
                {mage.name}
            </div>
            <div>
                {mage.specialization} Mage
            </div>
            <div>
                Level: {mage.level}
            </div>
            <div>
                <button onClick={()=>{mageDismissHandler(mage.id)}}>
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