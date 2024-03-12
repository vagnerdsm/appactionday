import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { Card, ChartBar, MetaCard } from '../../../components'
import userApiService from '@/services/useApiService';

const FirstRoute = () => {
    const { data, isLoading } = userApiService()

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    let formatador = new Intl.NumberFormat('pt-BR',
        { minimumFractionDigits: 0, maximumFractionDigits: 2 }
    );

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            {isLoading ? (
                <Text>Loading...</Text>
            ) :
                <View style={styles.rowContainer}>
                    <Card
                        icon="money"
                        name="Vendas RD"
                        value={data?.vendas_rd}
                        iconColor="#9327F0"
                    />
                    <Card
                        icon="money"
                        name="Faturamento Total"
                        value={formatter.format(data?.faturamento_total)}
                        iconColor="#61DE70"
                    />
                </View>
            }

            {isLoading ? (
                <Text>Loading...</Text>
            ) :
                <View style={styles.rowContainer}>
                    <Card
                        icon="ticket"
                        name="Ticket Médio"
                        value={formatter.format(data?.faturamento_total / data?.vendas_rd)}
                        iconColor="#0062FF"
                    />

                    <Card
                        icon="eye"
                        name="Impressões"
                        value={formatador.format(data?.impressoes)}
                        iconColor="#00e6fe"
                    />
                </View>
            }

            {isLoading ? (
                <Text>Loading...</Text>
            ) :
                <View style={styles.rowContainer}>
                    {data?.meta !== 0 && (
                        <MetaCard
                            vendas={isLoading ? isLoading : data?.vendas_rd}
                            meta={isLoading ? isLoading : data?.meta}
                            porcentagem={isLoading ? isLoading : `${Number(((data?.vendas_rd / data?.meta))).toFixed(2)}%`}

                        />
                    )}
                </View>
            }

            {isLoading ? (
                <Text>Loading...</Text>
            ) :
                <View style={styles.columnContainer}>

                    <ChartBar
                        title={'Grafico Ticket Medio X Mes'}
                        label={data?.ticket_por_mes.map((item: { DATE: string; }) => item.DATE)}
                        data={data?.ticket_por_mes.map((item: { Faturamento: number; }) => item.Faturamento)}
                    />

                    <ChartBar
                        title={'Vendas Por Mês'}
                        label={data?.vendas_por_mes.map((item: { DATE: String; }) => item.DATE)}
                        data={data?.vendas_por_mes.map((item: { Vendas: Number; }) => item.Vendas)}
                    />

                </View>
            }

        </ScrollView>
    );

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
    columnContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        paddingTop: 16,
    },

    graphStyle: {
        marginVertical: 8,
        borderRadius: 16,
    },

});

export default FirstRoute