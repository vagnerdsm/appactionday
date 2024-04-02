import React from 'react'
import { FlatList, StyleSheet, TextInput, View, Text } from 'react-native';
import userApiServiceBoleto from '../src/services/servicesAdm/useApiServiceBoleto';

export default function TabOneScreen() {
  const { data, isLoading } = userApiServiceBoleto()

  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: 'Dominic' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'Julie' },
        ]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderColor: 'blue',
    height: '100%'
  },
});