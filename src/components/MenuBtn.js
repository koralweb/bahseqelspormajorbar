import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import menu from '../mobx/menu';
import {observer} from 'mobx-react-lite';

const MenuBtn = () => {
  return (
    <TouchableOpacity style={styles.btn} onPress={() => menu.change()}>
      <FontAwesomeIcon icon={menu.show ? 'close' : 'bars'} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 100,
    backgroundColor: 'grey',
  },
});

export default observer(MenuBtn);
