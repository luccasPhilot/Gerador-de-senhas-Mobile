import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'


export function PasswordItem({ data, removePressable }) {
    return (
        <Pressable style={styles.conteiner} onLongPress={removePressable}>
            <Text style={styles.text}>{data}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
    },

    text:{
        color: "#fff"
    }
})