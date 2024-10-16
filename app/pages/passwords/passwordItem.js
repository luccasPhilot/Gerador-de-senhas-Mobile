import React from 'react'
import { useState } from 'react'
import { Text, StyleSheet, Pressable, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';


export function PasswordItem({ data, removePressable }) {
    const [isVisible, setIsVisible] = useState(false);

    function showEncripted(text) {
        return '*'.repeat(text.length);
    }

    return (
        <Pressable style={styles.container} onLongPress={removePressable}>
            <Text style={styles.text}>{isVisible ? data : showEncripted(data) }</Text>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                    <Icon name={isVisible ? 'visibility' : 'visibility-off'} size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
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
    },

    iconContainer: {
        marginLeft: 10
    }
})