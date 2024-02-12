import React from 'react'
import { View, Text } from '@/components/Themed'
import { StyleSheet } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import FontAwesome from '@expo/vector-icons/FontAwesome';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}

const FirstRoute = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.cardMetric}>
          <FontAwesome name='money' />
          <Text style={{ color: '#000' }}>teste</Text>
          <Text style={{ color: '#000' }}>R$450,00</Text>
        </View>
      </View>
    </View>
  )
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
  third: ThirdRoute
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
    backgroundColor: "#fff",
    alignItems: "center"
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    paddingTop: 10,
    backgroundColor: '#fff'
  },
  cardMetric: {
    width: 160,
    height: 100,
    backgroundColor: "#ccc",
    borderRadius: 8
  },
  tabBar: {
    backgroundColor: '#19173D',
    borderColor: 'blue'
  },
})

