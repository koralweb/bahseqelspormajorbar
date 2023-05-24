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
          <View style={styles.daytime}>
          <Text style={styles.day}>{currentDate} Mayıs</Text>
          <Text style={styles.time}>{tr.time}</Text>

          </View>

          <Text style={styles.commands}>{tr.team1}</Text>
          <Text style={styles.solid}></Text>
          <Text style={styles.commands}>{tr.team2}</Text>
        </View>
      ));
  };

  const daysList = () => {
    const arr = [];
    for (let i = today; i < today + 5; i++) {
      const el = (
        <TouchableOpacity key={i} onPress={() => setCurrentDate(i)} style={styles.dateBlock}>
          <Text style={styles.data}>{i} Mayıs</Text>
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
        <Text style={styles.title}>Yayın listesi</Text>
        <View style={styles.list}>{daysList()}</View>
        <ScrollView style={styles.card}>{renderBroadcasts()}</ScrollView>
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
  title: {
    fontSize: 25,
    fontWeight: 500,
    color: 'black',
    alignSelf: `center`,
    padding: 10,

  },
  data: {
    borderWidth: 1,
    borderColor:'grey',
    backgroundColor: '#008eaf',
    color: 'white',
    padding: 5,
    marginBottom: 20,


  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  item: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,



  },




  daytime: {
    flexDirection: 'row',
    justifyContent: `space-between`,
    backgroundColor: '#008eaf',
    padding: 5,

  },
  day: {
    fontSize: 15,
    fontWeight: 600,

  },
  time: {
    borderWidth: 1,
    backgroundColor: `black`,
    color: "yellow",
    padding: 2,

  },
  commands: {
    fontSize: 20,
    fontWeight: 600,
    color: `black`,
    padding: 10,


  },
  solid: {
    borderBottomWidth: 2,



  },
});

export default BroadcastsScr;
