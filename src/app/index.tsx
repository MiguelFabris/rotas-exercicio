import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { router } from 'expo-router';

export default function Index(){
    function entrar(){
        router.navigate('/home'); 
    }
    return(
        <View style={styles.container}>
            <Image source={require("../../assets/images/SAOPAULO.png")} style={styles.image}/>
            <TouchableOpacity style={styles.button} onPress={entrar}>
                <Text style={styles.title}>Entrar</Text>
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
        padding:60,
        backgroundColor: '#CD2626'
    },
    title:{
        fontSize: 22,
        fontWeight:'bold',
        color: '#fff'
    },
    button:{
        backgroundColor: '#000',
        paddingVertical: 10,
        paddingHorizontal: 32,
        borderRadius: 10
    },
    image:{
        width: 200,
        height: 200,
        resizeMode: 'contain'
    }
})