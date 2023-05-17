import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {observer} from 'mobx-react-lite';
import menu from '../mobx/menu';

// Поле link - НЕ МЕНЯТЬ!!!!
const pages = [
  {link: 'Home', name: 'Главная'},
  {link: 'Market', name: 'Продукты'},
  {link: 'Booking', name: 'Бронирование'},
  {link: 'Broadcasts', name: 'Трансляции'},
  {link: 'Contacts', name: 'Контакты'},
  {link: 'Cart', name: 'Корзина'},
];

const Menu = ({navigation}) => {
  const goToPage = page => {
    menu.change();
    navigation.push(page);
  };

  const renderMenuItems = () => {
    return pages.map(page => (
      <TouchableOpacity
        key={page.link}
        style={styles.item}
        onPress={() => goToPage(page.link)}>
        <Text style={styles.text}>{page.name}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <>{menu.show && <View style={styles.cont}>{renderMenuItems()}</View>}</>
  );
};

const styles = StyleSheet.create({
  cont: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});

export default observer(Menu);
