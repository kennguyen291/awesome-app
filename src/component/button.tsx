import { View, Text, StyleSheet } from "react-native"

const Button = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                BUTTON
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'coral',
        padding: 10,
        borderRadius: 10
    },
    text: {
        fontSize: 20,
        color: 'white'
    }
})

export default Button