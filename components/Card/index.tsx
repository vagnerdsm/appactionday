import React from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

const Card = (props: any) => {

    return (
        <View style={styles.cardMetric}>

            <FontAwesome name={props.icon} size={24} color={props.iconColor} />

            <View style={styles.textContainer}>
                <Text style={styles.text}>{props.name}</Text>
                <Text style={[styles.text, { fontSize: 22, fontWeight: 'bold' }]}>{props.value}</Text>
            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    cardMetric: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 160,
        height: 100,
        backgroundColor: "#fff",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingLeft: 10,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        gap: 4,
        paddingLeft: 8,
        backgroundColor: "#fff",
        borderRadius: 8,
    },
    text: {
        color: '#000',
        fontSize: 12,
    },
});

export default Card