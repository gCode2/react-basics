import { useState } from 'react'
// import FirstReminder from './components/FirstReminder.tsx';
// import SecondReminder from './components/SecondReminder.tsx';
// import ThirdReminder from './components/ThirdReminder.tsx';
import './App.css'
import CategoryFilter from './components/FourthReminder/CategoryFilter/CategoryFilter.tsx';
import ShopSummary from './components/FourthReminder/ShopSummary/ShopSummary.tsx';
import ItemList from './components/FourthReminder/ItemList/ItemList.tsx';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Fire Sword", category: "weapon", price: 100 },
    { id: 2, name: "Ice Shield", category: "armor", price: 80 },
    { id: 3, name: "Health Potion", category: "potion", price: 30 },
    { id: 4, name: "Lightning Staff", category: "weapon", price: 150 },
  ])
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [spentGold, setSpentGold] = useState(0);
  const [itemsBoughtCount, setItemsBoughtCount] = useState(0);
  // czy to mozna bylo zrobic inaczej iz state?

  let categories = getCategories();
  function getCategories(){
    return new Array("all", ...new Set(items.map(item=>item.category)));
  }
  function handleCategoryChange(cat){
    setSelectedCategory(cat);
  }
  function handleItemBuy(price){
    setSpentGold(prev=>prev+price);
    setItemsBoughtCount(prev=>prev+1);
  }
  // function handleItemAdd(args){
  //   setItems([...items, args])
  // }
  return(
    // <FirstReminder/>
    // <SecondReminder/>
    // <ThirdReminder/>
    <>
    <div className="app">
    <h1>Magic Items Shop</h1>
      <CategoryFilter categoryList={categories} categoryChangeHandler={handleCategoryChange}/>
      <ItemList items={items} itemBuyHandler={handleItemBuy} selectedCategory={selectedCategory}/>
      <ShopSummary spentGold={spentGold} itemsBought={itemsBoughtCount}/>
      {/* <button onClick={()=>{
        handleItemAdd({
          id: Math.floor(Math.random()*1000)+1,
          name: "XD",
          category: "xadd",
          price: 15
        })}
        }>
          d
        </button> */}
        {/* testowałem czy dodanie itemu powoduje automatyczną aktualizacje kategorii i - tak! */}
    </div>
    </>
  )
}

export default App
