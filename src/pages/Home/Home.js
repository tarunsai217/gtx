import React from 'react'
import styles from "./Home.module.css"
import {Link} from "react-router-dom"
import {connect} from "react-redux"

function Home({properties}) {
    console.log(properties)
    return (
        <div className={styles.container}>

            <h1 classname={styles.heading}>GTX</h1>

            {properties.map((property)=>{return <Card key={property} property={property}/>})}
           
        </div>
    )
}
const mapStateToProps=(state)=>({
    properties:state.properties
    })

export default connect(mapStateToProps,null)(Home)

function Card({property}){
    return(
        <div className={styles.card}>           
        <h1>{property.name.toUpperCase()}</h1> 
        <Link to={`${property.name}`} >  
        <h2> View Residents</h2>
        </Link>
        </div>
    )
}