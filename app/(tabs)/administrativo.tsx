import React from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native';
import userApiServiceBoleto from '../src/services/servicesAdm/useApiServiceBoleto';

export default function TabOneScreen() {
  const { data, isLoading } = userApiServiceBoleto()

  const DATA = data.map((item: { ID_ACTION: any; SERVICO: any; VALOR: any }) => ({ id: item.ID_ACTION, title: item.SERVICO }))

  type ItemProps = { title: string }

  const Item = ({ title }: ItemProps) => (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>

      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  item: {
    backgroundColor: '#ccc',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
