import { useState } from "react";
import type { AddPotionFormErrors, AddPotionFormProps, PotionType } from "../../../types/PotionStorage/types";

function AddPotionForm({addPotionHandler, potionTypes}: AddPotionFormProps){
    const [inputs, setInputs] = useState({
        name: "",
        type: "",
        quantity: "",
        note: ""
    })
    const [errors, setErrors] = useState<AddPotionFormErrors>({
        name: "",
        type: "",
        quantity: "",
        note: ""
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>){
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>){
        e.preventDefault();
        const validationErrors = validateInputs();
        const hasErrors = Object.values(validationErrors).some(error => error !== "");

        if(hasErrors){
            setErrors(validationErrors);
        }else{
            setErrors({name: "", type: "", quantity: "", note: ""})
            setInputs({name: "", type: "", quantity: "", note: ""})
            
            addPotionHandler({
                name: inputs.name,
                type: inputs.type as PotionType,
                quantity: Number(inputs.quantity),
                note: inputs.note
            });
        }
    }
    function validateInputs(){
        const newErrors = {
            name: "",
            type: "",
            quantity: ""
        };
        if(!inputs.name.trim()){
            newErrors.name = "Potion name is required";
        }
        if(!inputs.type.trim()){
            newErrors.type = "Potion type is required";
        }
        if(!inputs.quantity.trim()){
            newErrors.quantity = "Potion quantity is required";
        }else if (!/^\d+$/.test(inputs.quantity)) {
            newErrors.quantity = "Potion quantity must be a whole number";
        } else if (Number(inputs.quantity) <= 0) {
            newErrors.quantity = "Potion quantity must be greater than 0";
        }

        return newErrors;
    }
    return (
        <>
        <div>
            <form onSubmit={handleSubmit} className="addPotionForm">
                <div>
                    <h2>Add potion</h2>
                </div>
                <div>
                    <input type="text" name="name" onChange={handleChange} placeholder="potion name" className={errors.name ? "formInputError" : ""} value={inputs.name}/>
                    {errors.name ? <span className="error">{errors.name}</span> : ""}
                </div>
                <div>
                    <select name="type" onChange={handleChange} className={errors.type ? "formInputError" : ""} value={inputs.type}>
                    <option value="" disabled hidden>
                        Choose a potion type
                    </option>
                    {potionTypes.map(potionType=>(
                        <option key={potionType}>
                            {potionType}
                        </option>
                    ))}
                    </select>
                    {errors.type ? <span className="error">{errors.type}</span> : ""}
                </div>
                <div>
                    <input type="text" name="quantity" onChange={handleChange} placeholder="potion quantity" className={errors.quantity ? "formInputError" : ""} value={inputs.quantity}/>
                    {errors.quantity ? <span className="error">{errors.quantity}</span> : ""}
                </div>
                <div>
                    <input type="text" name="note" placeholder="note" onChange={handleChange} value={inputs.note}/>
                </div>
                <div>
                    <button type="submit">
                        Add a potion!
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}

export default AddPotionForm;