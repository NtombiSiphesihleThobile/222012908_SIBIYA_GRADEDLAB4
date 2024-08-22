import React, { useContext } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { FormContext } from '../components/Context'; 

const Form2Screen = ({ navigation }) => {
    const { addressDetails, setAddressDetails } = useContext(FormContext);

    const handleNext = () => {
        if (addressDetails.address && addressDetails.city && addressDetails.state && addressDetails.zip) {
            navigation.navigate('Form3');
        } else {
            Alert.alert('Invalid Input', 'Please fill out all fields correctly.');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="Address" 
                value={addressDetails.address}
                onChangeText={(text) => setAddressDetails({ ...addressDetails, address: text })}
                style={styles.input}
            />
            <TextInput 
                placeholder="City" 
                value={addressDetails.city}
                onChangeText={(text) => setAddressDetails({ ...addressDetails, city: text })}
                style={styles.input}
            />
            <TextInput 
                placeholder="State" 
                value={addressDetails.state}
                onChangeText={(text) => setAddressDetails({ ...addressDetails, state: text })}
                style={styles.input}
            />
            <TextInput 
                placeholder="Zip Code" 
                value={addressDetails.zip}
                onChangeText={(text) => setAddressDetails({ ...addressDetails, zip: text })}
                keyboardType="numeric"
                style={styles.input}
            />
            <Button title="Next" onPress={handleNext} />
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

export default Form2Screen;
