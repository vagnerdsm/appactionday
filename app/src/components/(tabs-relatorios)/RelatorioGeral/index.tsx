import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator, Button, Text, Alert } from 'react-native';
import { Card, ChartBar, MetaCard, userApiService } from '../..';
import { useAll } from '@/app/src/hooks/useAll';
import { useStateDate } from '@/app/src/services/stateDate';


const FirstRoute = () => {
    // const { data, isLoading, error } = useApiRequest();

    const { data, error, isError, refetch, status, isSuccess } = useAll()

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    let formatador = new Intl.NumberFormat('pt-BR',
        { minimumFractionDigits: 0, maximumFractionDigits: 2 }
    );

    if (status === 'pending') {
        return (
            <View style={[styles.container, styles.loading]}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    const handleInvalidate = async () => {
        refetch()
    }

    if (isError) {
        console.error(error);
        return (
            <View>
                <Text>Tivemos um erro ao carregar os dados!</Text>
                <Text>Por favor, tente novamente ou entre em contato com o suporte técnico.</Text>
                <Button title="Atualizar" onPress={handleInvalidate} />
            </View>
        );
    }

    if (isSuccess) {

        return (
            <ScrollView style={[styles.container]} showsVerticalScrollIndicator={false}>

                <View style={styles.rowContainer}>
                    <Card
                        icon="money"
                        name="Vendas RD"
                        value={data.vendas_rd}
                        iconColor="#9327F0"
                    />
                    <Card
                        icon="money"
                        name="Faturamento Total"
                        value={formatter.format(data.faturamento_total)}
                        iconColor="#61DE70"
                    />
                </View>

                <View style={styles.rowContainer}>
                    <Card
                        icon="ticket"
                        name="Ticket Médio"
                        value={formatter.format(data.faturamento_total / data.vendas_rd)}
                        iconColor="#0062FF"
                    />
                    <Card
                        icon="eye"
                        name="Impressões"
                        value={formatador.format(data.impressoes)}
                        iconColor="#00e6fe"
                    />
                </View>

                <View style={styles.rowContainer}>
                    {data.meta !== 0 && (
                        <MetaCard
                            vendas={data.vendas_rd}
                            meta={data.meta}
                            porcentagem={`${Number((data.vendas_rd / data.meta)).toFixed(2)}%`}
                        />
                    )}
                </View>

                <View style={styles.columnContainer}>
                    <ChartBar
                        title={'Grafico Ticket Medio X Mes'}
                        label={data.ticket_por_mes.map((item: any) => item.DATE)}
                        data={data.ticket_por_mes.map((item: any) => item.Faturamento)}
                    />

                    <ChartBar
                        title={'Vendas Por Mês'}
                        label={data.vendas_por_mes.map((item: any) => item.DATE)}
                        data={data.vendas_por_mes.map((item: any) => item.Vendas)}
                    />
                </View>
            </ScrollView>
        )
    }


        // return()

        // <ScrollView style={[styles.container]} showsVerticalScrollIndicator={false}>

        //     <View style={styles.rowContainer}>
        //         <Card
        //             icon="money"
        //             name="Vendas RD"
        //             value={data.vendas_rd}
        //             iconColor="#9327F0"
        //         />
        //         <Card
        //             icon="money"
        //             name="Faturamento Total"
        //             value={formatter.format(data.faturamento_total)}
        //             iconColor="#61DE70"
        //         />
        //     </View>

        //     <View style={styles.rowContainer}>
        //         <Card
        //             icon="ticket"
        //             name="Ticket Médio"
        //             value={formatter.format(data.faturamento_total / data.vendas_rd)}
        //             iconColor="#0062FF"
        //         />
        //         <Card
        //             icon="eye"
        //             name="Impressões"
        //             value={formatador.format(data.impressoes)}
        //             iconColor="#00e6fe"
        //         />
        //     </View>

        //     <View style={styles.rowContainer}>
        //         {data.meta !== 0 && (
        //             <MetaCard
        //                 vendas={data.vendas_rd}
        //                 meta={data.meta}
        //                 porcentagem={`${Number((data.vendas_rd / data.meta)).toFixed(2)}%`}
        //             />
        //         )}
        //     </View>

        //     <View style={styles.columnContainer}>
        //         <ChartBar
        //             title={'Grafico Ticket Medio X Mes'}
        //             label={data.ticket_por_mes.map((item: any) => item.DATE)}
        //             data={data.ticket_por_mes.map((item: any) => item.Faturamento)}
        //         />

        //         <ChartBar
        //             title={'Vendas Por Mês'}
        //             label={data.vendas_por_mes.map((item: any) => item.DATE)}
        //             data={data.vendas_por_mes.map((item: any) => item.Vendas)}
        //         />
        //     </View>
        // </ScrollView>
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        paddingTop: 16,
    },
    columnContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        paddingTop: 16,
    },
    graphStyle: {
        marginVertical: 8,
        borderRadius: 16,
    },
    loading: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default FirstRoute;
