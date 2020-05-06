import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, CardSection, Button, Input } from './Common/index';
import data from '../data/data.json';

export default function Home({ navigation }) {

  const [search, setSearch] = useState('');

  return (
    <Card>
      <CardSection newStyle={styles.sectionStyle}>
        <Input
          label="Search:"
          placeholder="Enter Search"
          onChangeText={search => setSearch(search)}
          defaultValue={search}
        />
      </CardSection>
      <CardSection newStyle={styles.sectionStyle}>
        <Button onPress={() => searchHere()}>Search</Button>
      </CardSection>
    </Card>
  );

  function searchHere() {

    var strRegExPattern = '/^.*' + search + '.*$/';
    alert(strRegExPattern + " Ex");

    var searchQuery = new RegExp(escapeRegExp(strRegExPattern));

    alert(searchQuery + " Query");

    var filteredArray = data.filter(function (obj) {
      return obj.name.match(strRegExPattern);
    });
    console.log(filteredArray); return;
    console.log(data.findIndex(result));
  }

  function escapeRegExp(stringToGoIntoTheRegex) {
    return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }

}


const styles = {
  'sectionStyle': {
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
};
