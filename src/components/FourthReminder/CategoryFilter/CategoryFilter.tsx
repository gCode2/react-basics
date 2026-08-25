function CategoryFilter({categoryList, categoryChangeHandler}){
    // const categories = props.categoryList;
    // console.log(categories)
    // const categoryChangeHandler = props.categoryChangeHandler;
return(
    <>
    <div className="categoryChips">
        {categoryList.map(category => (
            <div key={category} className="chip" onClick={()=>categoryChangeHandler(category)}>
                {category}
            </div>
        ))}
    </div>
    </>
)
}

export default CategoryFilter