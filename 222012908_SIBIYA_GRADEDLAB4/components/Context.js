import React, { createContext, useState } from 'react';

// Form Context
export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState({});
    const [addressDetails, setAddressDetails] = useState({});
    const [paymentDetails, setPaymentDetails] = useState({});

    return (
        <FormContext.Provider value={{ userDetails, setUserDetails, addressDetails, setAddressDetails, paymentDetails, setPaymentDetails }}>
            {children}
        </FormContext.Provider>
    );
};

// Theme Context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        textColor: '#000',
        backgroundColor: '#fff',
    });

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Cart Context (as a placeholder)
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};
