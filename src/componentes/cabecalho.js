import { StyleSheet, Text, View, TextInput, TouchableOpacity,Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
export function Cabecalhopart(props){
return(

    <View style={styles.container3}>
    <MaterialCommunityIcons name="book-open-page-variant" size={40} color="black" />
    <Text style={styles.titulo}>BookTime</Text> 
    </View>

);
}
const styles = StyleSheet.create({
    container3: {
  
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#e0d517',
        width:500,
        borderRadius: 10,
        marginBottom:40,
        marginTop:8,
        height:100,
      },
       titulo: {
        fontSize: 30,
        marginLeft: 30,
       }
    
})
