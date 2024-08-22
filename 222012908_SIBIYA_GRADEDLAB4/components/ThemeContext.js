import React, { createContext, useState } from 'react';

export const FormContext = createContext();
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        textColor: '#000000',
        backgroundColor: '#ffffff'
    });

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};


export const FormProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState({});
    const [addressDetails, setAddressDetails] = useState({});
    const [paymentDetails, setPaymentDetails] = useState({});

    return (
        <FormContext.Provider value={{ userDetails, addressDetails, paymentDetails }}>
            {children}
        </FormContext.Provider>
    );
};
