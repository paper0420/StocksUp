import React from 'react'
import styles from './SearchBox.module.css'
import { useState, useEffect } from 'react'

export const SearchBox = ({onChange}) => {


    return (
        <div>

        <input className={styles.input}
            type="text"
            placeholder="Search stocks here..."
            onChange={onChange}
        />
            
        </div>
    )
}

export default SearchBox;
