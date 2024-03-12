import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import Card from '@/components/Card';
import ChartBar from '@/components/BarChart';
import MetaCard from '@/components/MetaCard';

const FirstRoute = () => {




  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* Vendas RD e Faturamento Total */}
      <View style={styles.rowContainer}>
        <Card
          icon="money"
          name="Vendas RD"
          value="R$400,00"
          iconColor="#9327F0"
        />
        <Card
          icon="money"
          name="Faturamento Total"
          value="R$400,00"
          iconColor="#61DE70"
        />
      </View>

      {/* Ticket Medio e Impressoes */}
      <View style={styles.rowContainer}>
        <Card
          icon="ticket"
          name="Ticket Médio"
          value="R$400,00"
          iconColor="#0062FF"
        />

        <Card
          icon="eye"
          name="Impressões"
          value="40000"
          iconColor="#00e6fe"
        />
      </View>

      {/* Meta e progresso */}
      <View style={styles.rowContainer}>
        <MetaCard />
      </View>

      {/* Grafico Ticket Medio X Mes */}
      <View style={styles.rowContainer}>

        <ChartBar
          title={'Ticket Médio x Mês'}
          label={['January', 'February', 'March', 'April']}
          data={[20, 45, 28, 10]}
        />

      </View>

      {/* Gráfico Vendas por Mês */}
      <View style={styles.rowContainer}>

        <ChartBar
          title={'Vendas Por Mês'}
          label={['January', 'February', 'March', 'April']}
          data={[10, 20, 30, 40]}
        />

      </View>

    </ScrollView>
  );
};

const SecondRoute = () => (
  <View style={{ flex: 1 }}>

  </View>
);

const ThirdRoute = () => (
  <View style={{ flex: 1 }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

export default function TabOneScreen() {
  const layout = require('../(tabs)/_layout');

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Geral' },
    { key: 'second', title: 'Digital' },
    { key: 'third', title: 'Comercial' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => (
        <TabBar
          {...props}
          style={styles.tabBar}
          indicatorStyle={{ backgroundColor: "#00D7FF" }}
          labelStyle={{
            color: '#000'
          }}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",

  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    paddingTop: 16,
    backgroundColor: '#fff',
  },

  tabBar: {
    backgroundColor: '#fff',
    borderColor: 'blue'
  },

  graphStyle: {
    marginVertical: 8,
    borderRadius: 16,
  },

});

