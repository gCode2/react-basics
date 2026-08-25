function ShopSummary(props){
    const goldSpent = props.spentGold;
    const itemsBought = props.itemsBought;
return(
    <>
    <div>
        <p>Gold spent: {goldSpent}</p>
        <p>Items bought: {itemsBought}</p>
    </div>
    </>
)
}

export default ShopSummary