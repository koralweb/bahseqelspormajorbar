import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import broadcasts from '../data/broadcasts';
import MenuBtn from '../components/MenuBtn';
import Menu from '../components/Menu';

const today = new Date().getDate();

const BroadcastsScr = ({navigation}) => {
  const [currentDate, setCurrentDate] = useState(today);

  const renderBroadcasts = () => {
    return broadcasts
      .filter(el => el.date === currentDate)
      .map(tr => (
        <View style={styles.item} key={Math.random()}>
          <Text>{currentDate} Мая</Text>
          <Text>{tr.time}</Text>
          <Text>{tr.team1}</Text>
          <Text>{tr.team2}</Text>
        </View>
      ));
  };

  const daysList = () => {
    const arr = [];
    for (let i = today; i < today + 5; i++) {
      const el = (
        <TouchableOpacity key={i} onPress={() => setCurrentDate(i)}>
          <Text>{i} Мая</Text>
        </TouchableOpacity>
      );
      arr.push(el);
    }
    return arr;
  };

  return (
    <View style={styles.cont}>
      <Header navigation={navigation} />

      <View style={styles.cont}>
        <Text>Список трансляций</Text>
        <View>{daysList()}</View>
        <ScrollView>{renderBroadcasts()}</ScrollView>
      </View>
      <MenuBtn />
      <Menu navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  item: {
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default BroadcastsScr;
