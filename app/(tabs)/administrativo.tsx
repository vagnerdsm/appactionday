import React from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native';
import userApiServiceBoleto from '../src/services/servicesAdm/useApiServiceBoleto';

export default function TabOneScreen() {
  const { data, isLoading } = userApiServiceBoleto()

  console.log(data)
  return (
    <View style={styles.container}>

      <FlatList
        data={[
          { key: data[0].SERVICO },
          { key: data[0].VENCIMENTO.value },            
          { key: data[0].VALOR },
          { key: data[0].LINK },
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