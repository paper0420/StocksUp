import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/Link'     

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
        <div className={styles.item}>
        <Link href="/">
                Home
             </Link>
                </div>
           <div className={styles.item}>
           <Link href="/stocksNews">
                News
            </Link>

           </div>
            

        </div>
    )
}

export default Navbar;