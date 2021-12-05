import React from 'react'
import {useState,useEffect} from "react"
import {connect} from "react-redux"
import {useParams} from "react-router-dom"
import {addResident,editResident,setCurrentResident,setForm} from "../../redux/actions"
import styles from "./Form.module.css"

function Form({add,edit,currentResident,setCurrentResident,setForm}) {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
   const params=useParams();
  let property=params.propertyname;

  useEffect(() => {
      if(currentResident){
          setName(currentResident.name)
          setAge(currentResident.age)
      }      
  }, [currentResident])

  
  
  const submitHandler=(e)=>{
    e.preventDefault();

    if(currentResident){
       edit({id:currentResident.id,name,age,property})
    }
    else{
     add({name,age,property,id:Math.floor(Math.random() * 1001)})
    }

    setCurrentResident(null)
    setName("")
    setAge("")
    setForm(false);
}

    return (
        <form className={styles.form}  onSubmit={(e)=>submitHandler(e)}>
           <button onClick={()=>{setForm(false)}} className={styles.close}>Close</button> 
          <h2>Add resident</h2>
          <label>Name</label>
          <input 
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
          />
          <label>Age</label>
          <input type="number"
           value={age}
           onChange={(e)=>{setAge(e.target.value)}}
          />
          <button type="submit">{currentResident?"Submit":"Add"}</button>
        </form>
    )
}

const mapStateToProps=(state)=>({
    currentResident:state.currentResident
})

const mapDispatchToProps=(dispatch)=>{
    return{
        add:(resident)=>dispatch(addResident(resident)),
        edit:(resident)=>dispatch(editResident(resident)),
        setCurrentResident:(resident)=>dispatch(setCurrentResident(resident)),
        setForm:(value)=>dispatch(setForm(value))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form)
