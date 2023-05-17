import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import productsList from '../../data/products';

const filterProductTypes = () => {
  const arr = ['All'];
  productsList.forEach(prod => {
    if (!arr.includes(prod.type)) arr.push(prod.type);
  });
  return arr;
};

const FoodType = ({setType}) => {
  const renderFoodType = () => {
    return filterProductTypes().map(el => (
      <TouchableOpacity
        style={styles.item}
        key={el}
        onPress={() => setType(el)}>
        <Text>{el}</Text>
      </TouchableOpacity>
    ));
  };

  return <View style={styles.foodType}>{renderFoodType()}</View>;
};

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
  },
  foodType: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default FoodType;
