import React from 'react';
import styles from './Navbar.module.css';

const Navbar = props => {
    const {onAddClick} = props
    
    return (
        <nav className={styles.navbar}>
            <div className={styles.left}>
                <h1>Contact Management</h1>
            </div>
            <div className={styles.right}>
                <input
                    type="text"
                    placeholder="Search contact"
                    className={styles.searchInput}
                />
                <button className={styles.button} onClick={onAddClick}>Add Contact</button>
                <button className={styles.button}>Delete Contact</button>
            </div>
        </nav>
    );
};

export default Navbar;
