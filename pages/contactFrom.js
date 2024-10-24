import React, { useState } from 'react';
import styles from './contactForm.module.css';

const ContactForm = (props) => {
    const {onSave, onCancel} = props
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

   

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = { name, email, address, phone };
        onSave(newContact);
        setName('');
        setEmail('');
        setAddress('');
        setPhone('');
    };

    return (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h2>Add New Contact</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
            />
            <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default ContactForm;
