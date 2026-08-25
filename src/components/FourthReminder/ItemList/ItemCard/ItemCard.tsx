function ItemCard(props){
    const item = props.item;
    const itemBuyHandler = props.itemBuyHandler;
return(
    <>
    <div className="itemCard">
        <div className="itemName">
            {item.name}
        </div>
        <div className="itemType">
            {item.category}
        </div>
        <div className="itemPrice">
            Price: {item.price}
        </div>
        <div>
            <button type="button" onClick={()=>itemBuyHandler(item.price)}>
                Buy item
            </button>
        </div>
    </div>
    </>
)
}

export default ItemCard