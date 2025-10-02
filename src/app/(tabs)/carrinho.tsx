import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { router } from 'expo-router';

export default function Carrinho(){
    function pagamento(){
        router.navigate('/(tabs)/pagamento/7782498')
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Carrinho:</Text>
            <Image source={require("../../../assets/images/item2.webp")}/>
            <Text style={styles.subtitle}>Primeira Camisa Oficial 24/2025</Text>
            <Text style={styles.desconto}>R$499,90</Text>
            <Text style={styles.preco}>R$249,90</Text>
            <TouchableOpacity style={styles.button} onPress={pagamento}>
                 <Text style={styles.titleButton}>Pagar</Text>
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
        fontSize: 20,
        fontWeight:'bold',
        color: '#000',
        marginTop: 25
    },
    subtitle:{
        fontSize: 16,
        color: '#000'
    },
    desconto:{
        fontSize: 18,
        fontWeight: 'heavy',
        textDecorationLine: 'line-through',
        marginTop: -20,
        color: '#000'
    },
    preco:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginTop: -40
    },
    titleButton:{
        fontSize: 22,
        fontWeight:'bold',
        textAlign: 'center',
        color: '#fff'
    },
    button:{
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 32,
        borderRadius: 10,
    }
})