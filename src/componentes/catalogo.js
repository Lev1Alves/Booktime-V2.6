import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';

import {useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 




export function Catalogoscreen({navigation}) {




const [numeros, setNumeros] = useState([

{numero: 'Suspense', key: 1 },

{numero: 'Romance', key: 2 },

{numero: 'Geek', key: 3 },

{numero: 'Científico', key: 4 },

{numero: 'Contos', key: 5 },

{numero: 'Biografias', key: 6 },

{numero: 'Autoajuda', key: 7 },

{numero: 'Direito', key: 8 },

{numero: 'História', key: 9 },

{numero: 'Infantil', key: 10 },

{numero: 'LGBTQ+', key: 11 },

{numero: 'Ação', key: 12 },

{numero: 'HQS', key: 13 },

{numero: 'Religião', key: 14 },

{numero: 'Erótico', key: 15 },

{numero: 'Medicina', key: 16 },

])




 return (
 
  <View style={styles.container}>
     
   
  <View style={styles.container3}>
  <AntDesign name="bars" size={50} color="black" />
  <MaterialCommunityIcons name="book-open-page-variant" size={40} color="black" />
  <Text style={styles.titulo}>BookTime</Text> 
  <MaterialCommunityIcons name="account-circle" style={styles.icon} size={60} color="black" />
    </View>
   
    <View style={styles.container2}>

   

  <Text style={styles.titulo1}>Promoção do dia</Text> 
  <MaterialCommunityIcons name="sale" size={35} color="white" />

  </View>
  <View style={styles.container4}>
 <Text style={styles.titulo3}>Categorias :</Text> 
 
</View>
 <FlatList
 
 numColumns={2}
 keyExtractor={(item) => item.key}
 data={numeros}
 renderItem={({ item }) => (
   <TouchableOpacity 
   onPress={() => navigation.navigate('livros')}
   title= 'livros'
   >
   <Text style={styles.quadrado}>{item.numero}</Text>
   </TouchableOpacity>
 )
 }
 />

 </View>
 );
}

 




const styles = StyleSheet.create({

container: {

flex: 1,

backgroundColor: '#fff',

 alignItems: 'center',

 justifyContent: 'center',
 },




quadrado:{
marginTop: 20,
 padding: 20,
paddingVertical: 40,
backgroundColor: '#1e81b0',
 fontSize: 24,
 margin: 2,
 textAlign: 'center',
 color:'white',
 width:200,


 },
 container3: {
  
  alignItems: 'center',
  justifyContent: 'space-evenly',
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
  marginLeft:7,
  marginRight:5,
 },
 container2: {
  
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  backgroundColor: '#1e81b0',
  width:500,
  borderRadius: 10,
  marginBottom:20,
 
  height:200,
},
titulo1: {
  fontSize: 30,
  marginRight: 30,
  alignItems:'center',
  color:'white'
 },
 container4: {
  
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'row',
alignSelf:'flex-start'



 
},
titulo3:{
  color:'black',
  fontSize:40,
 
},

 
});
