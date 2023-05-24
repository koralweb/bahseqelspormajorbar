import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import MenuBtn from '../components/MenuBtn'
import Menu from '../components/Menu'

const CheckoutScr = ({navigation}) => {

  return (
    <View style={{flex:1}}>
      <Header navigation={navigation} />

      <Text style={styles.title}>Siparişiniz için teşekkürler!</Text>
      <Text style={styles.desc}>
        Yöneticilerimiz ayrıntıları netleştirmek için sizinle iletişime geçecektir.
        yakın bir gelecek. Spor barımızı tercih ettiğiniz için teşekkür ederiz.
      </Text>
      <MenuBtn />
      <Menu navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: '#008eaf',
    paddingTop: 14,
    paddingBottom: 11,
    textAlign: 'center',
  },
  desc: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 700,
    padding: 14,
  },
});

export default CheckoutScr;
