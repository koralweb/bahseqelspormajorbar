import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import products from '../mobx/products';
import Product from '../components/ShopScreen/Product';
import FoodType from '../components/ShopScreen/FoodType';
import {observer} from 'mobx-react-lite';
import MenuBtn from '../components/MenuBtn';
import Menu from '../components/Menu';

const MarketScr = ({navigation}) => {
  const [type, setType] = useState('All');

  const renderProduct = () => {
    return type === 'All'
      ? products.list.map(pr => <Product pr={pr} key={pr.id} />)
      : products.list
          .filter(p => p.type === type)
          .map(pr => <Product pr={pr} key={pr.id} />);
  };

  return (
    <View style={styles.cont}>
      <Header navigation={navigation} />
      <FoodType setType={setType} />
      <ScrollView>{renderProduct()}</ScrollView>
      <MenuBtn />
      <Menu navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
});

export default observer(MarketScr);
