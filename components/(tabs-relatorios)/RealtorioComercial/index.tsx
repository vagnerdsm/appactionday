import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import Card from '@/components/Card';
// import ChartPie from '@/components/PieChart';

const ThirdRoute = () => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            {/* Oportunidades ganhas e perdidas */}
            <View style={styles.rowContainer}>
                <Card
                    icon="check-square-o"
                    name="Oportunidades Ganhas"
                    value="R$400,00"
                    iconColor="#61DE70"
                />
                <Card
                    icon="window-close-o"
                    name="Oportunidades Perdidas"
                    value="R$400,00"
                    iconColor="#851b20"
                />
            </View>

            {/* Oportunidades em Adamento */}
            <View style={styles.rowContainer}>
                <Card
                    icon="rotate-right"
                    name="Oportunidades em Andamento"
                    value="R$400,00"
                    iconColor="#665d5d"
                />
            </View>

            <View style={styles.rowContainer}>
             
            </View>

        </ScrollView >
    )
};
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

export default ThirdRoute 