import React from 'react';
import styles from './ContactTable.module.css';

const ContactTable = ({ contacts }) => {
    return (
        <table className={styles.contactTable}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact, index) => (
                    <tr key={index}>
                        <td style={{color: "white"}}>{contact.name}</td>
                        <td style={{color: "white"}}>{contact.email}</td>
                        <td style={{color: "white"}}>{contact.address}</td>
                        <td style={{color: "white"}}>{contact.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ContactTable;
