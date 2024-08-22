import React, { useContext } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { FormContext } from '../components/Context';

const Form1Screen = () => {
    const { userDetails, setUserDetails } = useContext(FormContext);

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validatePhone = (phone) => {
        const re = /^\d{10}$/;
        return re.test(phone);
    };

    const handleNext = () => {
        // Validate inputs
        if (userDetails.name && validateEmail(userDetails.email) && validatePhone(userDetails.phone)) {
            // No need to navigate manually in tab navigation
        } else {
            Alert.alert('Invalid Input', 'Please fill out all fields correctly.');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="Name: " 
                value={userDetails.name}
                onChangeText={(text) => setUserDetails({ ...userDetails, name: text })}
                style={styles.input}
            />
            <TextInput 
                placeholder=" Email: " 
                value={userDetails.email}
                onChangeText={(text) => setUserDetails({ ...userDetails, email: text })}
                keyboardType="email-address"
                style={styles.input}
            />
            <TextInput 
                placeholder="Phone Number: " 
                value={userDetails.phone}
                onChangeText={(text) => setUserDetails({ ...userDetails, phone: text })}
                keyboardType="phone-pad"
                style={styles.input}
            />
            <Button title="Next" onPress={handleNext} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default Form1Screen;
