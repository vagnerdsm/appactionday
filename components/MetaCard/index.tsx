import React from "react";
import { ProgressChart } from "react-native-chart-kit";
import { Text, View, StyleSheet } from "react-native";

const MetaCard = (props: any) => {
    const { vendas, meta, porcentagem } = props;

    const data = {
        labels: ["Swim"],
        data: [0.125]
    };
    return (
        <View style={styles.metaContainer}>
            <View style={styles.textContent}>
                <Text style={styles.textContentTitle}>Vendas</Text>
                <Text>Vendas/Meta</Text>
                <Text style={styles.valueContent}>{vendas}/{meta}</Text>
            </View>

            <View style={styles.valueContainer}>
                <ProgressChart
                    data={data}
                    width={120}
                    height={120}
                    strokeWidth={6}
                    radius={52}
                    chartConfig={{
                        backgroundColor: "#000",
                        backgroundGradientFrom: "#ffff",
                        backgroundGradientTo: "#fff",
                        color: (opacity = 1) => `rgba(0, 98, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    }}
                    hideLegend={true}
                />

                <View style={styles.percentContainer}>
                    <Text style={styles.valuePercent}>{porcentagem}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    metaContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 335,
        height: 128,
        backgroundColor: "#fff",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        paddingLeft: 10,
    },

    textContent: {
        gap: 10,
    },

    textContentTitle: {
        fontSize: 20,
    },

    valueContent: {
        fontSize: 32,
    },

    valueContainer: {
        position: "relative",
    },

    percentContainer: {
        position: "absolute",
        top: "38%",
        left: "26%",
    },

    valuePercent: {
        fontSize: 20,
    },
});

export default MetaCard;