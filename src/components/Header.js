import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import products from '../mobx/products';
import {observer} from 'mobx-react-lite';

const Header = ({navigation}) => {
  return (
    <View style={styles.cont}>
      <Image source={require('../assets/Bahseqel.png')} style={styles.icon} />
      {products.list.some(el => el.added) && (
        <TouchableOpacity
          style={styles.cartBtn}
          onPress={() => navigation.push('Cart')}>
          <FontAwesomeIcon icon={'shopping-cart'} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const iconWidth = 931 / 5;
const iconHeight = 157 / 5;

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#008eaf',
    paddingTop: Platform.OS === 'ios' ? 35 : 10,
    paddingBottom: 10,
    minHeight: 70,
  },
  cartBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  icon: {
    width: iconWidth,
    height: iconHeight,
    position: 'absolute',
    bottom: 5,
    left: Dimensions.get('window').width / 2 - iconWidth / 2,
  },
});

export default observer(Header);
