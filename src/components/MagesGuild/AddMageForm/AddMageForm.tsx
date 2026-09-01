import { useState } from "react";

function AddMageForm({addMageHandler}){
    const [formData, setFormData] = useState({name: "", specialization: "", level: ""})
    const [errors, setErrors] = useState({})

    function handleFormInputChange(e){
        setFormData(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    function validateInputs(){
        const newErrors = {};
        if(!formData.name){
            newErrors.name = "Mage name is required"
        }
        if(!formData.specialization){
            newErrors.specialization = "Mage specialization is required"
        }
        if(!formData.level){
            newErrors.level = "Mage level is required"
        }
        if(!Number(formData.level)){
            newErrors.level = "Mage level must be a number"
        }
        return newErrors;
    }

    function handleFormSubmit(e){
        e.preventDefault();
        const validationErrors = validateInputs();
        
        if(Object.keys(validationErrors).length > 0 ){
            setErrors(validationErrors);
        }else{
            setErrors({});
            setFormData({name:"", specialization:"", level:""});
            const finalData = {...formData, level: Number(formData.level)}
            addMageHandler(finalData);
        }
        // I didnt know how to send mage's level as a number so i did this ^
    }

    return (
        <>
        <div>
            <form onSubmit={handleFormSubmit} className="addMageForm">
                <h2>Add Mage Form</h2>
                <div>
                    <input type="text" name="name" value={formData.name} style={errors.name && {border:"1px solid red"}} placeholder="Mage Name" onChange={handleFormInputChange}/><br/>
                    {errors.name && <span style={{color:"red"}}>{errors.name}</span>}
                </div>
                <div>
                    <input type="text" name="specialization" value={formData.specialization} style={errors.specialization && {border:"1px solid red"}} placeholder="Mage Specialization" onChange={handleFormInputChange}/><br/>
                    {errors.specialization && <span style={{color:"red"}}>{errors.specialization}</span>}   
                </div>
                <div>
                    <input type="text" name="level" value={formData.level} style={errors.level && {border:"1px solid red"}} placeholder="Mage level" onChange={handleFormInputChange}/><br/>
                    {errors.level && <span style={{color:"red"}}>{errors.level}</span>}
                </div>
                
                <button>
                    Recruit a Mage!
                </button>
            </form>
        </div>
        </>
    )
}
export default AddMageForm