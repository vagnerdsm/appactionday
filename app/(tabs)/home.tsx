import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import Card from '@/components/Card';
import ChartBar from '@/components/BarChart';

const FirstRoute = () => {
  return (
    <View style={styles.container}>

      {/* Vendas RD e Faturamento Total */}
      <View style={styles.rowContainer}>
        <Card
          icon="money"
          name="Vendas RD"
          value="$400,00"
          iconColor="#9327F0"
        />
        <Card
          icon="money"
          name="Faturamento Total"
          value="$400,00"
          iconColor="#61DE70"
        />
      </View>

      {/* Ticket Medio e Impressoes */}
      <View style={styles.rowContainer}>
        <Card
          icon="ticket"
          name="Ticket Médio"
          value="$400,00"
          iconColor="#0062FF"
        />

        <Card
          icon="eye"
          name="Impressões"
          value="40000"
          iconColor="#00e6fe"
        />
      </View>

      {/* Grafico Ticket Medio X Mes */}
      <View style={styles.rowContainer}>

        <ChartBar
          label={['January', 'February', 'March', 'April']}
          data={[20, 45, 28, 10]}
        />
      </View>

    </View>
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
        />
      )}
    />
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#19173D",
    alignItems: "center"
  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    paddingTop: 26,
    backgroundColor: '#19173D',
  },

  tabBar: {
    backgroundColor: '#19173D',
    borderColor: 'blue'
  },
  graphStyle: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

