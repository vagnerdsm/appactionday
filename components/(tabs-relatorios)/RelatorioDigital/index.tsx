import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import Card from '@/components/Card';
import ChartBar from '@/components/BarChart';
import MetaCard from '@/components/MetaCard';
import ChartPie from '@/components/PieChart';

const SecondRoute = () => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.rowContainer}>
                <Card
                    icon="desktop"
                    name="Leads"
                    value="R$400,0"
                    iconColor="#9327F0"
                />
                <Card
                    icon="money"
                    name="CPL"
                    value="R$400,00"
                    iconColor="#61DE70"
                />
            </View>

            <View style={styles.rowContainer}>
                <Card
                    icon="eye"
                    name="impressoes"
                    value="R$400,00"
                    iconColor="#9327F0"
                />
                <Card
                    icon="eye"
                    name="Valor Investido"
                    value="R$400,00"
                    iconColor="#61DE70"
                />
            </View>

            <View style={styles.rowContainer}>
                <ChartBar
                    title={'Lead Por Gênero'}
                    label={['Male', 'Female', 'Unknow']}
                    data={[50, 55, 68]}
                />
            </View>

            <View style={styles.rowContainer}>
                <ChartBar
                    title={'Lead Por Idade'}
                    label={['18-24', '35-44', '25-34', '45-54', '65+']}
                    data={[10, 20, 30, 40, 50]}
                />
            </View >

            <View style={styles.rowContainer}>
                <ChartPie
                />
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

export default SecondRoute