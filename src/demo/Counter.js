import React, { useEffect, useState } from 'react'
import { Button, Text } from 'react-native'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [newCount, setNewCount] = useState(0)

    useEffect(() => {
        console.log(`Count changed`)
        return () => {
            console.log('useEffect cleanUp')
        }
    }, [count])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`count: ${count}`}</Text>
            <Button
                color={'red'}
                title={'Increase the count'}
                onPress={() => {
                    setCount(count + 1)
                }}
            />
            <Button
                color={'green'}
                title={'Decrease the count'}
                onPress={() => setCount(count - 1)}
            />
            <Button
                color={'red'}
                title={'Increase the new count'}
                onPress={() => {
                    setNewCount(newCount + 1)
                }}
            />
            <Button
                color={'green'}
                title={'Decrease the new count'}
                onPress={() => setNewCount(newCount - 1)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    },
    title: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 25
    }
})
export default Counter
