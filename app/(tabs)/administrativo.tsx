import React from 'react'
import { FlatList, StyleSheet, View, Text, Image } from 'react-native';
import userApiServiceBoleto from '../src/services/servicesAdm/useApiServiceBoleto';

export default function TabOneScreen() {
  const { data, isLoading } = userApiServiceBoleto()

  const iconMapping: any = {
    " Cloudia": require('../../assets/icons/cloudia.png'),
    "RD STATION": require('../../assets/icons/rdstation.png'),
    "Serviço Action Day": require('../../assets//icons/actionLogo.png'),
  }

  const DATA = data.map((item:
    {
      ID_ACTION: any;
      SERVICO: any;
      VENCIMENTO: any;
      VALOR: any;
    }) =>
  ({
    id: item.ID_ACTION,
    title: item.SERVICO,
    vencimento: item.VENCIMENTO.value,
    value: item.VALOR,
    icon: iconMapping[item.SERVICO]
  }));

  type ItemProps = { title: string, value: string, vencimento: string, icon: any }

  const Item = ({ title, value, vencimento, icon }: ItemProps) => (

    <View style={styles.item}>
      <Image source={icon} style={styles.icon} />

      <View style={styles.itemContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.valor} >Vencimento: {vencimento}</Text>
        <Text style={styles.valor}>Valor: {value}</Text>
      </View>
    </View >
  );

  return (
    <View style={styles.container}>

      <FlatList
        data={DATA}
        renderItem={({ item }) =>
          <Item
            title={item.title}
            value={item.value}
            vencimento={item.vencimento}
            icon={item.icon}
          />}
        keyExtractor={(item) => item.id}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#fff'
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },

  itemContent: {
    flexDirection: 'column'
  },

  title: {
    fontSize: 20,
  },

  valor: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  icon: {
    width: 60,
    height: 30,
    marginRight: 10,
  }

});
