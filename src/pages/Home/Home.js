import React from 'react'
import styles from "./Home.module.css"
import {Link} from "react-router-dom"

function Home() {
    return (
        <div className={styles.container}>
            <h1>GTX</h1>
            
            <Link to='/property1'>  
            <div className={styles.card}>           
            <h1>Property1</h1> 
            <h2> Click here</h2>
            </div>  
            </Link>
            
            <Link to='/property2'>  
            <div className={styles.card}>           
            <h1>Property2</h1> 
            <h2> Click here</h2>
            </div>  
            </Link>
        </div>
    )
}

export default Home
