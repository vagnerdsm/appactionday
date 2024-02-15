import React from 'react'
import { StyleSheet, View, } from 'react-native'
import { Stack } from 'expo-router';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import FirstRoute from '@/components/(tabs-relatorios)/RelatorioGeral';
import SecondRoute from '@/components/(tabs-relatorios)/RelatorioDigital';

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

  tabBar: {
    backgroundColor: '#fff',
    borderColor: 'blue'
  },

});

