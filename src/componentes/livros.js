import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native';
import {Cabecalhopart} from './cabecalho'

export function Livrosscreen({navigation}) {
  const [numeros, setNumeros] = useState([

    { numero: '1', key: 1 },
    { numero: '2', key: 2 },
    { numero: '3', key: 3 },
    { numero: '4', key: 4 },
    { numero: '5', key: 5 },
    { numero: '6', key: 6 },
    { numero: '7', key: 7 },
    { numero: '8', key: 8 },
    { numero: '9', key: 9 },
    { numero: '10', key: 10 },
    ])
  
  return (

    
     <ScrollView>
   
    <View style={styles.container3}>
    
    <Cabecalhopart/>
    
      </View>
     
    <View>
    <View style={styles.container4}>
    
   
    <Text style={styles.titulo2}>Mais Vendidos :</Text> 
    
      </View>
     

    <FlatList
    horizontal={true}
      numColumns={1}
      keyExtractor={(item) => item.key}
      data={numeros}
      renderItem={({ item }) => (
        <TouchableOpacity 
        
        >
        <Text style={styles.quadrado}>{item.numero}</Text>
        </TouchableOpacity>
      )
      }
      />
      </View>
      <View style={styles.container5}>
    
   
    <Text style={styles.titulo2}>Melhor avaliados:</Text> 
    
      </View>
      <FlatList
    horizontal={true}
      numColumns={1}
      keyExtractor={(item) => item.key}
      data={numeros}
      renderItem={({ item }) => (
        <TouchableOpacity 
        
        >
        <Text style={styles.quadrado}>{item.numero}</Text>
        </TouchableOpacity>
      )
      }
      />
     
      
     </ScrollView>



     
  );
}
const styles = StyleSheet.create({
  quadrado: {
    marginTop: 8,
    padding: 80,
    paddingVertical: 50,
    backgroundColor: '#1e81b0',
    fontSize: 24,
    marginLeft:20,
    textAlign: 'center',
    color:'white',
    width:200,
    height:300,
    flexDirection:'column',
  },
  titulo: {
    fontSize: 30,
    marginLeft: 30,
   },
   container3: {

    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#e0d517',
    width:420,
    borderRadius: 10,
    height:100,
    marginTop:20,

  },
  container4: {

    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop:8,
    width:300, 
  },
  titulo2: {
    fontSize: 30,
    marginBottom:20,
   },
}
)
  ;