import React from 'react'
import styles from './NewsCard.module.css'

export const NewsCard = (props) => {
    return (

        <div className={styles.card}  >

            <h3>{props.title}</h3>
            <p dangerouslySetInnerHTML={{__html: props.summary}}/>
    

        </div>

    )
}

export default NewsCard;
