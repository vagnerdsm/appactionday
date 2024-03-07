import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import Card from '@/components/Card';
import ChartBar from '@/components/BarChart';
import useApiRequest from '@/app/Services/ApiService';
import ChartPie from '@/components/PieChart';

const SecondRoute = () => {
    const [data, setData] = useState<any>(null)
    const [isLoading, setIsLoading] = useState<any>("Loading...")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await useApiRequest();

                setData(fetchedData);
                setIsLoading(null);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                setIsLoading(null);
            }
        };

        fetchData();
    }, [])

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    return (

        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            <View style={styles.rowContainer}>
                <Card
                    icon="desktop"
                    name="Leads"
                    value={isLoading ? isLoading : data?.lead_face + data?.lead_google}
                    iconColor="#9327F0"
                />
                <Card
                    icon="money"
                    name="CPL"
                    value={isLoading ? isLoading : formatter.format((data?.cpl_face + data?.cpl_google) / (data?.lead_google + data?.lead_face))}
                    iconColor="#61DE70"
                />
            </View>

            <View style={styles.rowContainer}>
                <Card
                    icon="eye"
                    name="impressoes"
                    value={isLoading ? isLoading : data?.impressoes}
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

                {isLoading ? (
                    <Text>Loading...</Text>
                ) :
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
                }

                {isLoading ? (
                    <Text>Loading...</Text>
                ) :
                    <ChartPie
                        title={"Facebook por objetivo"}
                        data={[
                            {
                                name: data?.facebook_objetivo.map((item: { OBJETIVO: String; }) => item.OBJETIVO),
                                population: data?.facebook_objetivo.map((item: { conversoes: Number; }) => item.conversoes),
                                color: '#54F2D4'
                            }
                        ]}
                    />

                }

                {
                    isLoading ? (
                        <Text> Loading...</Text>
                    ) :
                        <ChartBar
                            title={'Lead Por Gênero'}
                            label={data?.lead_genero.map((lead: { gender: any; }) => lead.gender)}
                            data={data?.lead_genero.map((lead: { conversoes: any; }) => lead.conversoes)}
                        />
                }

                {isLoading ? (
                    <Text>Loading...</Text>
                ) :
                    <ChartBar
                        title={'Lead Por Idade'}
                        label={data?.lead_idade.map((lead: { age: any; }) => lead.age)}
                        data={data?.lead_idade.map((lead: { conversoes: any; }) => lead.conversoes)}
                    />
                }

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
        paddingBottom: 10
    },

    columnContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12
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