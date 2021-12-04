import React from 'react'
import styles from "./ResidentList.module.css"
import {useParams} from "react-router-dom"
import {connect} from "react-redux"
import {setForm} from "../../redux/actions"
import ResidentCard from '../../components/ResidentCard/ResidentCard'
import Form from "../../components/Form/Form"

function ResidentList({residents,showForm,setForm}) {
const params=useParams();

residents=residents.filter(element => {
    return element.property===params.propertyname
});

    return (
        <div className={styles.container}>
            
            <div className={styles.heading}>
            <h1>Residents List</h1>
            <button onClick={()=>{setForm(true)}}>Add resident</button>
            </div>
            
            {residents.map((element)=>{return( 
           <ResidentCard key={element.id} resident={element}/> )})}

            {showForm?<Form/>:null}
        </div>
    )
}

const mapStateToProps=(state)=>({
residents:state.residents,
showForm:state.showForm
})

const mapDispatchToProps=(dispatch)=>{
return{
    setForm:(value)=>dispatch(setForm(value))
}
}

export default connect(mapStateToProps,mapDispatchToProps)(ResidentList)
