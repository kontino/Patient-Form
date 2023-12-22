import React, { useState, useRef, useEffect } from "react";
import ContactField from "./ContactField";
import './ContactForm.css'

const ContactForm = () => {
    // States to keep track of input and error values
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [surname, setSurname] = useState('');
    const [surnameError, setSurnameError] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [text, setText] = useState('');

    const formRef = useRef(null);

    const isValidPhone = (phone) => {
        const phoneRegex = /^\+3069\d{8}$/;
        return phoneRegex.test(phone);
    };
    
    const submitContact = async (newContact) => {
        try {
            const response = await fetch('http://127.0.0.1:8081/contacts', {
            method: 'POST',
            body: JSON.stringify({
                name: newContact.name,
                surname: newContact.surname,
                phone: newContact.phone,
                birthDate: newContact.birthDate,
                text: newContact.text
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            });
        
            if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
    };
   

    // Event handler to update state when input values change
    const handleInputChange = (value, setInputFunction) => {
        setInputFunction(value);
    };

    // Event handler to handle form submission
    const handleSubmit = (e) => {

        let isValidForm = true;
        e.preventDefault();
        console.log('Submitted values:', name);
        // Add logic for handling the form submission
        formRef.current.reset();
        setName('');
        setSurname('');
        setPhone('');
        setBirthDate('');
        setText('');
       
       // Do Field Validation
        if(!name){
            setNameError("Name is a required field.");
            isValidForm = false;
        } else {
            setNameError("");
        }
        if(!surname){
            setSurnameError("Surname is a required field.");
            isValidForm = false;
        } else {
            setSurnameError("");
        }
        if(!isValidPhone(phone)){
            setPhoneError("The phone you entered is not valid.");
            isValidForm = false;
        } else {
            setPhoneError("")
        }

        const contact = {
            name,
            surname,
            phone,
            birthDate,
            text,
        };
        
        if(isValidForm){
            submitContact(contact);
        }
    };

    return(
        <form ref={formRef} className="contactForm" onSubmit={handleSubmit}>
            <h1> Patient Contact Details</h1>
            <ContactField 
                fieldHead='Name' 
                fieldName='name' 
                placeholder='Name' 
                inputType='text'
                value={name} 
                onChange={(value) => handleInputChange(value, setName)}
            />
            {nameError && <span style={{ color: 'red' }}>{nameError}</span>}
            <ContactField 
                fieldHead='Surname' 
                fieldName='surname' 
                placeholder='Surname' 
                inputType='text'
                value={surname}
                onChange={(value) => handleInputChange(value, setSurname)}
            />
            {surnameError && <span style={{ color: 'red' }}>{surnameError}</span>}
            <ContactField 
                fieldHead='Phone Number' 
                fieldName='phone' 
                placeholder='Phone' 
                inputType='phone'
                value={phone}
                onChange={(value) => handleInputChange(value, setPhone)}
            />
            {phoneError && <span className="errorArea">{phoneError}</span>}
            <ContactField 
                fieldHead='Date of Birth' 
                fieldName='dateOfBirth' 
                inputType='date'
                value={birthDate}
                onChange={(value) => handleInputChange(value, setBirthDate)}
            />
            <ContactField 
                fieldHead='Details' 
                fieldName='text' 
                placeholder='Describe your issue.' 
                inputType='text'
                value={text}
                onChange={(value) => handleInputChange(value, setText)}
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default ContactForm;