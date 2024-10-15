import React, { createContext, useState } from 'react';

export const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');

    const updateFirstName = (newValue) => {
        setFirstName(newValue);
    };

    const updateLastName = (newValue) => {
        setLastName(newValue);
    };

    const updateAge = (newValue) => {
        setAge(newValue);
    };

    return (
        <MyContext.Provider value={{ firstName, lastName, age, updateFirstName, updateLastName, updateAge }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
