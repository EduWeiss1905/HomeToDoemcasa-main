import react from "react";
import { View,StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Cadastro(){
    const navigation = useNavigation()
    return (
        <View style={styles.container}>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'pink'
    }
})