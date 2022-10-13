import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailPage from './src/screens/RestaurantDetailsScreen';
import DishDetailScreen from './src/screens/DishDetailScreen';
import Basket from './src/screens/Basket';
import OrderScreen from './src/screens/OrderScreen';
import OrderDetails from './src/screens/OrderDetails';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <HomeScreen/> */}
        {/* <RestaurantDetailPage/> */}
        {/* <DishDetailScreen/> */}
        {/* <Basket/> */}
        {/* <OrderScreen/> */}

        <OrderDetails />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
