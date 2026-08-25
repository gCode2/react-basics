import { useState } from "react";
function SecondReminder() {
  const [spells,setSpells] = useState([
    {
    id: 0,
    name: "fireball",
    cost: 10,
    damage: 15
    },
    {
    id: 1,
    name: "frostball",
    cost: 15,
    damage: 20
    },
    {
    id: 2,
    name: "wind punch",
    cost: 5,
    damage: 5
    },
  ])
  const [inputs,setInputs] = useState({
    spellName: "",
    spellCost: "",
    spellDamage: ""
  })
  
  function handleChange(e){
    const name = e.target.name;
    const value = e.target.value;

    setInputs({...inputs, [name]: value});

  }

  function handleSpellAdd(){

    setSpells([...spells, 
    {
      id: Math.floor(Math.random()*1000+1),
      name: inputs.spellName,
      cost: inputs.spellCost,
      damage: inputs.spellDamage
    }
  ]);

  }
  return(
    // vvv PIERWSZA LEKCJA PRZYPOMINAJKA
    // <FirstReminder/>
    // ^^^ PIERWSZA LEKCJA PRZYPOMINAJKA
    <>
    <section style={{display:"flex", flexDirection:"column", alignSelf: "center", textAlign:"center", alignItems:"center", gap:"10px"}}>
      <h1>The Mage Guild School</h1>
      <p>Practice your spell-making skills or study the olden magic runes</p>
      <div className="spellBook">
        {spells.map((spell)=>(
          <div key={spell.id} className="spellCard">
            <div>Spell Name: {spell.name}</div>
            <div>Spell Damage: {spell.damage}</div>
            <div>Spell Cost: {spell.cost}</div>
          </div>
        ))}
      </div>
      <div className="spellCreationTable">
        <p>Create your own spell!</p>
        <input type="text" placeholder="Spell Name" name="spellName" onChange={handleChange}/>
        <input type="text" placeholder="Spell Cost" name="spellCost" onChange={handleChange}/>
        <input type="text" placeholder="Spell Damage" name="spellDamage" onChange={handleChange}/>
        <button type="button" onClick={handleSpellAdd}>Create Spell</button>
      </div>
    </section>
    </>
  )
}

export default SecondReminder
