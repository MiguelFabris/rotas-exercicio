import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Home(){

    function verCatalogo(){
        router.navigate('/(tabs)')
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Seja bem vindo à loja oficial do São Paulo FC !</Text>
            <Text style={styles.subtitle}> Aqui você encontra todos os produtos originais do tricampeão mundial. Entre no nosso catálogo e aproveite o melhor do esporte:</Text>
            <TouchableOpacity style={styles.button} onPress={verCatalogo}>
                <Text style={styles.titleButton}>Catálogo</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
        padding:60
    },
    title:{
        fontSize: 22,
        fontWeight:'bold',
        textAlign: 'center',
        color: '#000'
    },
    subtitle:{
        fontSize: 16,
        textAlign: 'center',
        color: '#000'
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