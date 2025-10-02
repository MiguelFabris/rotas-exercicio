import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Product(){
    const { id } = useLocalSearchParams();
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Pagamento Confirmado!</Text>
            <Text style={styles.title}>Código do pagamento: {id} </Text>
            <TouchableOpacity onPress={() => router.back()}>
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 32
    },
    title:{
        fontSize: 22,
        fontWeight:'bold',
        color: '#000'
    },

})