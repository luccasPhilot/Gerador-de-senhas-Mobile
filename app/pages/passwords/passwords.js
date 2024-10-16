import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../../hooks/useStorage'
import { PasswordItem } from './passwordItem'

export function Passwords() {
    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused()
    const { getItem, removeItem } = useStorage()

    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem("@pass")
            setListPasswords(passwords)
        }
        loadPasswords()
    }, [focused])

    async function handleDeletePassword(item) {
        const passwords = await removeItem("@pass", item)
        setListPasswords(passwords)
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.hender}>
                <Text style={styles.title}>Minhas Senha</Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    style={{ flex: 1, paddingTop: 14 }}
                    data={listPasswords}
                    keyExtrator={(item) => String(item)}
                    renderItem={({ item }) => <PasswordItem data={item} removePressable={() => handleDeletePassword(item)} />}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    hender: {
        backgroundColor: "#392de9",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },

    title: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold"
    },

    content: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,

    }
})