import { useState } from 'react'
function FirstReminder(){
const [currentItem, setCurrentItem] = useState({});
  const [currentCategory, setCurrentCategory] = useState("all");

  const initialItems = [
  { id: 1, name: "Miecz", type: "weapon", power: 15 },
  { id: 2, name: "Tarcza", type: "armor", power: 10 },
  { id: 3, name: "Mikstura", type: "potion", power: 25 },
  { id: 4, name: "Łuk", type: "weapon", power: 12 },
  ];
  // const categories = new Set(initialItems.map(item => item.type));
 const categories = [...new Set(initialItems.map(item => item.type))];
  // console.log(categories)
  function handleCategoryChange(category){
    setCurrentCategory(category);
  }
  console.log(initialItems);
  console.log(...initialItems);
  function ItemCard({itemData}){
    return (
      <div className="itemCard">
        <div className="itemName">
          {itemData.name}
        </div>
        <div className="itemType">
        type: {itemData.type}
        </div>
        <div className="itemPower">
         power: {itemData.power}
        </div>
        <div>
          <button onClick={()=>setCurrentItem(itemData)}>
            Equip
          </button>
        </div>
      </div>
    )
  }
  
  return (
    <>
      <section className="main">
        <h2> EKWIPUNEK </h2>
        <div className="currentPower">
          Current Power: {currentItem.power ? currentItem.power : "0 - no item equipped"}
        </div>
        <section className="typeSection">
          <button type="button" className="typeButton" onClick={()=>setCurrentCategory("all")}> all </button>
          {/* {console.log(initialItems.filter((item)=>item.type))} */}
          {/* {initialItems.filter((item)=>item.type !== "weapon").map((categoryButton)=>(
            // <button type="button" key={categoryButton.name} className="typeButton" onClick={()=>setCurrentCategory(categoryButton.type)}>
            //   {categoryButton.type}
            // </button>
            // dwa sposoby zrobiłem.
            <button type="button" key={categoryButton.name} className="typeButton" onClick={()=>{
              handleCategoryChange(categoryButton.type);
            }}>
              {categoryButton.type}
            </button> próba 1 z filter...
          ))} */}
          {/* {
            
            categories.forEach((category)=>(
              
              <button type="button" key={category} onClick={()=>setCurrentCategory(category)}>
                {category}
              </button>
            )) 
          } */}
          {

            categories.map((category)=>(
                <button type="button" key={category} onClick={()=>setCurrentCategory(category)} className="typeButton">
                {category}
              </button>
            ))

          }
          
        </section>
        <section className="itemsRow">
          {

          // initialItems.map((item)=>(
          //   (currentCategory == item.type || currentCategory == "all") && <ItemCard key={item.id} itemData={item}/>
          // ))
          
          initialItems.filter(item=>item.type === currentCategory || currentCategory === "all").map((item)=>(
              <ItemCard key={item.id} itemData={item}/>
          ))

          }
        </section>
        <section className="equipment">
          {/* {currentCategory} */}
            Equipped: {currentItem.id ? currentItem.name : "nothing"}
        </section>
      </section>
      
    </>
  )
}
export default FirstReminder