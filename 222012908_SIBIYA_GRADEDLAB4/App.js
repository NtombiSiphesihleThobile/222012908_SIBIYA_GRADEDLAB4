import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CartProvider } from './components/CartContext';
import { FormProvider, ThemeProvider } from './components/Context'; // Ensure ThemeProvider is exported
import MenuScreen from './components/MenuScreen';
import CartScreen from './components/CartScreen';
import ProfileScreen from './components/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <FormProvider>
            <CartProvider>
                <ThemeProvider> 
                    <NavigationContainer>
                        <Tab.Navigator>
                            <Tab.Screen name="Menu" component={MenuScreen} />
                            <Tab.Screen name="Profile" component={ProfileScreen} />
                            <Tab.Screen name="Cart" component={CartScreen} />
                        </Tab.Navigator>
                    </NavigationContainer>
                </ThemeProvider>
            </CartProvider>
        </FormProvider>
    );
}


