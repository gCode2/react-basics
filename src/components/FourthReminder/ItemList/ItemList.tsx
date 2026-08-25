import ItemCard from "./ItemCard/ItemCard";

function ItemList(props){
    const items = props.items;
    const itemBuyHandler = props.itemBuyHandler;
    const selectedCategory = props.selectedCategory;
return(
    <>
    <div className="itemsRow">
        {items.filter(item=>item.category === selectedCategory || selectedCategory === "all").map(item=>(
            <ItemCard key={item.id} item={item} itemBuyHandler={itemBuyHandler}/>
        ))}
    </div>
    </>
)
}

export default ItemList