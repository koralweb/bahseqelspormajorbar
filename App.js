// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {library} from '@fortawesome/fontawesome-svg-core';
import HomeScr from './src/screens/HomeScr';
import MarketScr from './src/screens/MarketScr';
import BookingScr from './src/screens/BookingScr';
import BroadcastsScr from './src/screens/BroadcastsScr';
import ContactsScr from './src/screens/ContactsScr';
import CartScr from './src/screens/CartScr';
import CheckoutScr from './src/screens/CheckoutScr';

import {faShoppingCart} from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faClose} from '@fortawesome/free-solid-svg-icons/faClose';

library.add(faShoppingCart, faBars, faClose);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScr}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Market"
          component={MarketScr}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Booking"
          component={BookingScr}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Broadcasts"
          component={BroadcastsScr}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Contacts"
          component={ContactsScr}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={CartScr}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Checkout"
          component={CheckoutScr}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
