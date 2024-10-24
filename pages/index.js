import React, { useState } from 'react';
import Navbar from './navbar';
import ContactForm from './contactFrom';
import ContactTable from './contactTable';
import styles from './index.module.css';


const Home = () => {
    const [contacts, setContacts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const addContact = (newContact) => {
        setContacts([...contacts, newContact]);
        setShowForm(false);
    };

    const onAddClick = () => {
        setShowForm(true)
    }

    const onClickCancel = () => {
        setShowForm(false)
    }

    const onDelete = (indices) => {
        setContacts((prevContacts) => prevContacts.filter((_, index) => !indices.includes(index)));
    };

    return (
        <div className={styles.home}>
            <Navbar onAddClick={onAddClick} />
            {showForm && <ContactForm onSave={addContact} onCancel={onClickCancel}/>}
            <ContactTable contacts={contacts} onDelete={onDelete}/>
        </div>
    );
};

export default Home;
