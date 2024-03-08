import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import useApiRequest from '@/app/Services/ApiService';
import { Card, ChartPie } from '../../../components'

const generateColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

const ThirdRoute = () => {
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

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            {/* Oportunidades ganhas e perdidas */}
            <View style={styles.rowContainer}>
                <Card
                    icon="check-square-o"
                    name="Oportunidades Ganhas"
                    value={isLoading ? isLoading : data?.oportuniadades_ganhas}
                    iconColor="#61DE70"
                />
                <Card
                    icon="window-close-o"
                    name="Oportunidades Perdidas"
                    value={isLoading ? isLoading : data?.oportunidades_perdidas}
                    iconColor="#851b20"
                />
            </View>

            {/* Oportunidades em Adamento */}
            <View style={styles.rowContainer}>
                <Card
                    icon="rotate-right"
                    name="Oportunidades em Andamento"
                    value={isLoading ? isLoading : data?.oportunidades_em_andamento}
                    iconColor="#665d5d"
                />
            </View>

            <View style={styles.columnContainer}>

                {isLoading ? (
                    <Text>Loading...</Text>
                ) :
                    <ChartPie
                        title={"Oportunidades por Vendedor"}
                        data={data?.venda_por_vendedor.map((item: { Oportunidades: number; Vendedor: string }) => ({
                            name: item.Vendedor,
                            population: item.Oportunidades,
                            color: generateColor(),
                        }))}
                    />
                }

                {isLoading ? (
                    <Text>Loading...</Text>
                ) :
                    <ChartPie
                        title={"Conversao por Vendedor"}
                        data={data?.conversao_vendedor_calculo.map((item: { conversao: number; vendedor: string }) => ({
                            name: item.vendedor,
                            population: item.conversao,
                            color: generateColor(),
                        }))}
                    />
                }

                {isLoading ? (
                    <Text>Loading...</Text>
                ) :
                    <ChartPie
                        title={"Faturamento por Vendedor"}
                        data={data?.faturamento_por_vendedor.map((item: { Faturamento: number; Vendedor: string }) => ({
                            name: item.Vendedor,
                            population: item.Faturamento,
                            color: generateColor(),
                        }))}
                    />
                }

                {isLoading ? (
                    <Text>Loading...</Text>
                ) :
                    <ChartPie
                        title={"Oportunidades por Vendedor"}
                        data={data?.oportunidades_por_vendedor.map((item: { Oportunidades: number; Vendedor: string }) => ({
                            name: item.Vendedor,
                            population: item.Oportunidades,
                            color: generateColor(),
                        }))}
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
    },

    columnContainer: {
        flexDirection: 'column',
        alignItems: 'center',
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