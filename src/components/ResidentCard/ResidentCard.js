import React from 'react'
import {removeResident,setForm,setCurrentResident} from "../../redux/actions"
import {connect} from "react-redux"
import styles from "./ResidentCard.module.css"

function ResidentCard({resident,remove,edit,setForm,setCurrentResident}) {

const editHandler=()=>{
    setCurrentResident(resident)
    setForm(true)
}

    return (
        <div className={styles.card}>
            <h1>{resident.name}</h1>  
            <h1>{resident.age}</h1> 
            <button onClick={()=>{remove(resident.id)}} >Delete</button>
            <button onClick={editHandler} >Edit</button>
        </div>
    )
}




const mapDispatchToProps=(dispatch)=>{
    return{
        remove:(id)=>dispatch(removeResident(id)),
        setForm:(value)=>dispatch(setForm(value)),
        setCurrentResident:(resident)=>dispatch(setCurrentResident(resident))
    }
    }

export default connect(null,mapDispatchToProps)(ResidentCard)
