import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import Card from '@/components/Card';
import ChartPie from '@/components/PieChart';
import useApiRequest from '@/app/Services/ApiService';

function generateColor() {
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