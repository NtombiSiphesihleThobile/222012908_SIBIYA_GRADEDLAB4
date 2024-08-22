import React, { useContext, useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Button, Alert } from 'react-native';
import { FormContext } from '../components/Context'; 

const ProfileScreen = () => {
    const { userDetails, setUserDetails, addressDetails, setAddressDetails, paymentDetails, setPaymentDetails } = useContext(FormContext);

    const [step, setStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const handleNext = () => {
        if (step === 1) {
            if (!userDetails.name || !userDetails.email || !userDetails.phone) {
                Alert.alert("Error", "Please fill out all user details.");
            } else {
                setStep(step + 1);
            }
        } else if (step === 2) {
            if (!addressDetails.address || !addressDetails.city || !addressDetails.state || !addressDetails.zip) {
                Alert.alert("Error", "Please fill out all address details.");
            } else {
                setStep(step + 1);
            }
        } else if (step === 3) {
            if (!paymentDetails.cardNumber || !paymentDetails.expiration || !paymentDetails.cvv) {
                Alert.alert("Error", "Please fill out all payment details.");
            } else {
                handleSubmit();
            }
        }
    };

    const handlePrevious = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleSubmit = () => {
        // Log the details (or handle submission, e.g., send to a server)
        console.log("User Details:", userDetails);
        console.log("Address Details:", addressDetails);
        console.log("Payment Details:", paymentDetails);

        // Show confirmation
        Alert.alert("Success", "Successfully Paid", [{ text: "OK" }]);
        
        // Set submission state
        setIsSubmitted(true);
    };

    const handleSave = () => {
        // Save the form data
        console.log("Saving Data...");
        console.log("User Details:", userDetails);
        console.log("Address Details:", addressDetails);
        console.log("Payment Details:", paymentDetails);

        // Show confirmation
        Alert.alert("Saved", "Your details have been saved.");
        
        // Update saved state
        setIsSaved(true);
    };

    return (
        <ScrollView style={styles.container}>
            {!isSubmitted ? (
                <>
                    {step === 1 && (
                        <View style={styles.card}>
                            <TextInput
                                style={styles.input}
                                value={userDetails.name}
                                placeholder="Enter your Name: "
                                onChangeText={(text) => setUserDetails({ ...userDetails, name: text })}
                            />
                            <TextInput
                                style={styles.input}
                                value={userDetails.email}
                                placeholder="Enter your Email:"
                                onChangeText={(text) => setUserDetails({ ...userDetails, email: text })}
                            />
                            <TextInput
                                style={styles.input}
                                value={userDetails.phone}
                                placeholder="Enter your Phone: "
                                onChangeText={(text) => setUserDetails({ ...userDetails, phone: text })}
                            />
                        </View>
                    )}
                    {step === 2 && (
                        <View style={styles.card}>
                            <TextInput
                                style={styles.input}
                                value={addressDetails.address}
                                placeholder="Address"
                                onChangeText={(text) => setAddressDetails({ ...addressDetails, address: text })}
                            />
                            <TextInput
                                style={styles.input}
                                value={addressDetails.city}
                                placeholder="City"
                                onChangeText={(text) => setAddressDetails({ ...addressDetails, city: text })}
                            />
                            <TextInput
                                style={styles.input}
                                value={addressDetails.state}
                                placeholder="State"
                                onChangeText={(text) => setAddressDetails({ ...addressDetails, state: text })}
                            />
                            <TextInput
                                style={styles.input}
                                value={addressDetails.zip}
                                placeholder="Zip"
                                onChangeText={(text) => setAddressDetails({ ...addressDetails, zip: text })}
                            />
                        </View>
                    )}
                    {step === 3 && (
                        <View style={styles.card}>
                            <TextInput
                                style={styles.input}
                                value={paymentDetails.cardNumber}
                                placeholder="Card Number"
                                onChangeText={(text) => setPaymentDetails({ ...paymentDetails, cardNumber: text })}
                            />
                            <TextInput
                                style={styles.input}
                                value={paymentDetails.expiration}
                                placeholder="Expiration Date"
                                onChangeText={(text) => setPaymentDetails({ ...paymentDetails, expiration: text })}
                            />
                            <TextInput
                                style={styles.input}
                                value={paymentDetails.cvv}
                                placeholder="CVV"
                                onChangeText={(text) => setPaymentDetails({ ...paymentDetails, cvv: text })}
                            />
                        </View>
                    )}
                    {/* Navigation Buttons */}
                    <View style={styles.buttonContainer}>
                        {step > 1 && <Button title="Previous" onPress={handlePrevious} />}
                        <Button title={step === 3 ? "Submit" : "Next"} onPress={handleNext} />
                    </View>
                </>
            ) : (
                <View style={styles.card}>
                    <Text>User Details:</Text>
                    <Text>Name: {userDetails.name}</Text>
                    <Text>Email: {userDetails.email}</Text>
                    <Text>Phone: {userDetails.phone}</Text>
                    <Text>Address Details:</Text>
                    <Text>Address: {addressDetails.address}</Text>
                    <Text>City: {addressDetails.city}</Text>
                    <Text>State: {addressDetails.state}</Text>
                    <Text>Zip: {addressDetails.zip}</Text>
                    <Text>Payment Details:</Text>
                    <Text>Card Number: {paymentDetails.cardNumber}</Text>
                    <Text>Expiration Date: {paymentDetails.expiration}</Text>
                    <Text>CVV: {paymentDetails.cvv}</Text>
                    <View style={styles.buttonContainer}>
                        <Button title="Save" onPress={handleSave} />
                        {isSaved && <Text style={styles.savedText}>Your details have been saved.</Text>}
                    </View>
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    card: {
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    input: {
        borderBottomWidth: 3,
        borderBottomColor: 'darkblue',
        marginBottom: 12,
        padding: 8,
        fontSize: 16,
    },
    buttonContainer: {
        marginTop: 20,
        backgroundcolor:'darkblue',
        
    },
    
    savedText: {
        marginTop: 10,
        color: 'green',
        fontSize: 16,
    },
});

export default ProfileScreen;




