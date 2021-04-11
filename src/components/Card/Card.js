import React from 'react'
import styles from './Card.module.css'

export const Card = (props) => {


    return (
        <div className={styles.card}  >

            <h3>{props.name}</h3>
            <p>{props.symbol}</p>
            <p>{props.price}</p>
    </div>
    )
}

export default Card;
