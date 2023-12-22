import React, { useState, useEffect } from "react";
import './ContactField.css'

const ContactField = (props) => {
    const {fieldHead, fieldName, placeholder, inputType, value, onChange} = props;
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        setInputText(value); // Update the internal state when the external value changes
    }, [value]);

    const handleChange = (e) => {
        const newText = e.target.value;
        setInputText(newText);
        onChange(newText);
    };

    if (fieldName !== 'text'){
        return(
            <div className="contactField">
                <h2> {fieldHead} </h2>
                <input 
                type={inputType} 
                className={fieldName} 
                value={inputText}
                placeholder={placeholder}
                onChange={handleChange}
                style={{ color: inputText ? '#000' : '#333' }}
                />
            </div>
        )
    } else {
        return(
            <div className="contactField">
                <h2> {fieldHead} </h2>
                <textarea 
                className='textArea' 
                placeholder={placeholder} 
                rows={4}
                value={inputText}
                onChange={handleChange}
                style={{ color: inputText ? '#000' : '#333' }}
                />
            </div>
        )
    }
}

export default ContactField;