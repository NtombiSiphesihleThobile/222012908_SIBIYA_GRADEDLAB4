import React, { useContext } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { CartContext } from '../components/CartContext'; // Correct path

const MenuScreen = () => {
    const { addToCart } = useContext(CartContext);

    const menuItems = [
        { id: '1', name: 'Braai', description: 'ribs, chicken and boerewors', price: 99.99, image: require('../assets/Braai.jpg') },
    { id: '2', name: 'BeefStew', description: 'Tender chunks of beef, slow-cooked to perfection. This classic comfort dish is seasoned with fresh herbs and a hint of red wine, creating a warm and satisfying meal that’s perfect for any occasion. Served alone but you can add phuthu or dumbing good combo trust us!', price: 49.99, image: require('../assets/beefstew.jpg') },
    { id: '3', name: 'Dumbings', description: 'Homemade delicious dumps, soft like a cloud', price: 25.00, image: require('../assets/Dumps.jpg') },
    { id: '4', name: 'Hardbody Chicken', description: 'Experience the rich, traditional flavors of South Africa with our Hardbody Chicken. This dish features an older, free-range chicken known for its firm texture and deeply flavorful meat. Slow-cooked to perfection, our Hardbody Chicken is tender and succulent, offering a unique taste that pairs beautifully with our selection of sides.', price: 50.00, image: require('../assets/hardbodyChicken.jpg') },
    { id: '5', name: 'Tribes', description: 'We pride ourselves on serving the finest quality steaks, venison, lamb, and traditional South African specialties. Each dish is prepared with a modern ethnic African touch, ensuring a memorable dining experience', price: 25.99, image: require('../assets/TRIBES.jpg') },
    { id: '6', name: 'Phuthu', description: 'Phuthu is a traditional South African dish that is made from Mielie-Meal (Ground maize meal).', price: 25.00, image: require('../assets/phuthu.jpg') },
  ];

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <Text style={styles.itemPrice}>R{item.price.toFixed(2)}</Text>
                <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
                    <Text style={styles.addButtonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <FlatList
            data={menuItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        padding: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    itemImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 16,
    },
    itemInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    itemDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    addButton: {
        backgroundColor: 'darkblue',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default MenuScreen;

