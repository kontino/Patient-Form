// ContactList.js
import React, { useState, useEffect } from 'react';
import './ContactList.css'
import ContactForm from './ContactForm';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
        try {
          const response = await fetch('http://127.0.0.1:8081/contacts', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
          }
      
          const data = await response.json();
          console.log("Printing data", data);
          // Handle the data as needed
          setContacts(data);

        } catch (error) {
          console.error('Error fetching contacts:', error);
        }
    };

    fetchContacts();
  }, []); // Empty dependency array means this effect runs once after the initial render

  console.log("printing contacts", contacts);
  return (
    <div className='contact-list'>
        <h1>Contact List</h1>
        <ul >
        {contacts.map((contact, index) => (
          <li key={index} className="contact-item">
            <div className="contact-info">
              <div>
                <strong>Name:</strong> {contact.name} {contact.surname}
              </div>
              <div>
                <strong>Phone:</strong> {contact.phone}
              </div>
              <div>
                <strong>Birthdate:</strong> {contact.birthDate}
              </div>
            </div>
            <div className="contact-text">
              <strong>Details:</strong> {contact.text}
            </div>
          </li>
        ))}
      </ul>
    </div>

  );
};

export default ContactList;