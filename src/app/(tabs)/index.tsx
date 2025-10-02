import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { router } from 'expo-router';

export default function Produtos(){
    function carrinho(){
        router.navigate('/(tabs)/carrinho')
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Acompanhe nosso catálogo!</Text>
            <Image source={require("../../../assets/images/item1.webp")} style={styles.image}/>
            <Text style={styles.subtitle}>Terceira Camisa Oficial 24/2025</Text>
            <Image source={require("../../../assets/images/item2.webp")} style={styles.image}/>
            <Text style={styles.subtitle}>Primeira Camisa Oficial 24/2025</Text>
            <Image source={require("../../../assets/images/item3.webp")} style={styles.image}/>
            <Text style={styles.subtitle}>Segunda Camisa Oficial 24/2025</Text>
            <TouchableOpacity style={styles.button} onPress={carrinho}>
                <Text style={styles.textButton}>Adicionar Produto</Text>
            </TouchableOpacity>

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
    subtitle:{
        fontSize: 16,
        color: '#000'
    },
    textButton:{
        fontSize: 18,
        color: '#fff'
    },
    button:{
        backgroundColor: '#000',
        paddingVertical: 10,
        paddingHorizontal: 32,
        borderRadius: 10
    },
    image:{
        width: 110,
        height: 110,
    }
})