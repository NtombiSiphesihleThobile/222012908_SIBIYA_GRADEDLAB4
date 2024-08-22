import React, { useContext } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { FormContext } from '../components/Context'; 

const Form3Screen = () => {
    const { paymentDetails, setPaymentDetails } = useContext(FormContext);

    const handleSubmit = () => {
        if (validateCardNumber(paymentDetails.cardNumber) && validateExpiration(paymentDetails.expiration) && validateCVV(paymentDetails.cvv)) {
            Alert.alert('Success', 'Your details have been submitted.');
        } else {
            Alert.alert('Invalid Input', 'Please fill out all fields correctly.');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="Card Number" 
                value={paymentDetails.cardNumber}
                onChangeText={(text) => setPaymentDetails({ ...paymentDetails, cardNumber: text })}
                keyboardType="numeric"
                style={styles.input}
            />
            <TextInput 
                placeholder="Expiration Date (MM/YY)" 
                value={paymentDetails.expiration}
                onChangeText={(text) => setPaymentDetails({ ...paymentDetails, expiration: text })}
                style={styles.input}
            />
            <TextInput 
                placeholder="CVV" 
                value={paymentDetails.cvv}
                onChangeText={(text) => setPaymentDetails({ ...paymentDetails, cvv: text })}
                keyboardType="numeric"
                style={styles.input}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default Form3Screen;
