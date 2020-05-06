import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { Card, CardSection } from './Common/index';
import data from '../data/data.json';

export default function Home({ navigation }) {
  // console.log(data);
  return (
    <Card>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.serial}
      />
    </Card>
  );
}

function Item({ item }) {
  return (
    <CardSection passedStyle={styles.sectionStyle}>
      <Text>{item.serial}</Text>
      <Text>{item.membership}</Text>
      <Text>{item.name}</Text>
      <Text>{item.father}</Text>
      <Text>{item.address}</Text>
    </CardSection>
  );
}


const styles = {
  'sectionStyle': {
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
};