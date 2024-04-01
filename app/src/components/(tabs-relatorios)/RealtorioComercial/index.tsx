import React from 'react'
import { StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native'
import { Card, ChartPie, ChartLine, userApiService } from '../..'

const generateColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

const ThirdRoute = () => {
    const { data, isLoading } = userApiService()

    if (isLoading) {
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <ActivityIndicator />
            </ScrollView>
        );
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            {/* Oportunidades ganhas e perdidas */}
            <View style={styles.rowContainer}>
                <Card
                    icon="check-square-o"
                    name="Oportunidades Ganhas"
                    value={data?.oportuniadades_ganhas}
                    iconColor="#61DE70"
                />
                <Card
                    icon="window-close-o"
                    name="Oportunidades Perdidas"
                    value={data?.oportunidades_perdidas}
                    iconColor="#851b20"
                />
            </View>

            {/* Oportunidades em Adamento */}
            <View style={styles.rowContainer}>
                <Card
                    icon="rotate-right"
                    name="Oportunidades em Andamento"
                    value={data?.oportunidades_em_andamento}
                    iconColor="#665d5d"
                />
            </View>

            <View style={styles.columnContainer}>
                <ChartPie
                    title={"Conversao por Vendedor"}
                    data={data?.conversao_vendedor_calculo.map((item: { conversao: number; vendedor: string }) => ({
                        name: item.vendedor,
                        population: item.conversao,
                        color: generateColor(),
                    }))}
                />

                <ChartPie
                    title={"Faturamento por Vendedor"}
                    data={data?.faturamento_por_vendedor.map((item: { Faturamento: number; Vendedor: string }) => ({
                        name: item.Vendedor,
                        population: item.Faturamento,
                        color: generateColor(),
                    }))}
                />

                <ChartPie
                    title={"Oportunidades por Vendedor"}
                    data={data?.oportunidades_por_vendedor.map((item: { Oportunidades: number; Vendedor: string }) => ({
                        name: item.Vendedor,
                        population: item.Oportunidades,
                        color: generateColor(),
                    }))}
                />

                <ChartLine
                    label={data?.oportunidades_por_mes.map((item: any) => item.Date)}
                    data={data?.oportunidades_por_mes.map((item: any) => item.Oportunidades)}
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

export default ThirdRoute