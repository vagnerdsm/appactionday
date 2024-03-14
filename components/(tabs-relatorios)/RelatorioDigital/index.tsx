import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { Card, ChartBar, ChartPie } from '../../../components'
import userApiService from '@/services/useApiService';
const generateColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}
const SecondRoute = () => {
    const { data, isLoading } = userApiService()

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    let formatador = new Intl.NumberFormat('pt-BR',
        { minimumFractionDigits: 0, maximumFractionDigits: 2 }
    );

    if (isLoading) {
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Text>Loading...</Text>
            </ScrollView>
        );
    }

    return (

        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            <View style={styles.rowContainer}>
                <Card
                    icon="desktop"
                    name="Leads"
                    value={formatador.format(data?.lead_face + data?.lead_google)}
                    iconColor="#9327F0"
                />
                <Card
                    icon="money"
                    name="CPL"
                    value={formatter.format((data?.cpl_face + data?.cpl_google) / (data?.lead_google + data?.lead_face))}
                    iconColor="#61DE70"
                />
            </View>

            <View style={styles.rowContainer}>
                <Card
                    icon="eye"
                    name="impressoes"
                    value={formatador.format(data?.impressoes)}
                    iconColor="#9327F0"
                />
                <Card
                    icon="eye"
                    name="Valor Investido"
                    value={formatter.format(data?.valor_gasto_facebook + data?.valor_gasto_google)}
                    iconColor="#61DE70"
                />
            </View>

            <View style={styles.columnContainer}>


                <ChartPie
                    title={`Custo por Matrícula x Ticket Médio`}
                    data={[
                        {
                            name: 'Custo por Matrícula',
                            population: Number(((data?.custo_vendas / data?.vendas_rd) + (data?.valor_gasto_google / data?.vendas_rd)).toFixed(2)),
                            color: '#54F2D4'
                        },
                        {
                            name: 'Ticket Medio',
                            population: Number((data?.ticket_medio / data?.vendas_rd).toFixed(2)),
                            color: '#1AAB40'
                        },
                    ]}
                />



                <ChartPie
                    title={"Facebook por objetivo"}
                    data={data?.facebook_objetivo.map((item: { conversoes: number, OBJETIVO: string }) => ({
                        name: item.OBJETIVO,
                        population: item.conversoes,
                        color: generateColor(),
                    }))}
                />

                <ChartBar
                    title={'Lead Por Gênero'}
                    label={data?.lead_genero.map((lead: { gender: string; }) => lead.gender)}
                    data={data?.lead_genero.map((lead: { conversoes: number; }) => lead.conversoes)}
                />


                <ChartBar
                    title={'Lead Por Idade'}
                    label={data?.lead_idade.map((lead: { age: string; }) => lead.age)}
                    data={data?.lead_idade.map((lead: { conversoes: number; }) => lead.conversoes)}
                />

            </View>

        </ScrollView >
    )
};

export default SecondRoute

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

    columnContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
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

