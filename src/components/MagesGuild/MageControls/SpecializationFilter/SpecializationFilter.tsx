function SpecializationFilter({specializations, changeCategoryHandler}){
    return (
        <div className="specializationChips">
            {specializations.map(spec=>(
                <div className="chip" key={spec} onClick={()=>changeCategoryHandler(spec)}>
                    {spec}
                </div>
            ))}
        </div>
    )
}
export default SpecializationFilter