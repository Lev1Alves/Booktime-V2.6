import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {Cabecalhopart} from './cabecalho';

export function Loginscreen({navigation}) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [ligar, setLigar] = useState (true);
  const [Cadastrar, setCadastrar] = useState ('Cadastre-se');
   
  const clicarBotao = () =>{
    setLigar(!ligar);
  if (ligar == false){
    
  }else if (ligar == true){
   
  }
   }

  const handleLogin = () => {
    console.log('Email: ', email);
    console.log('Senha: ', senha);
    
  };

  return (
    
    <View style={styles.container}>
     
   
   <View >
   <Cabecalhopart/>
   
     </View>

      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <AntDesign name="mail" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          leftIcon={<AntDesign name="mail" size={24} color="black" />}
        />
      </View>
      <View style={styles.inputContainer}>
        <AntDesign name="lock" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          leftIcon={<AntDesign name="mail" size={24} color="black" />}
        />
         </View>
        
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('catalogo')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      
      <Button
     title = { Cadastrar }
     onPress={() => navigation.navigate('cadastro')}
    
     />

         
        {
          ligar ?
          <Text></Text>
          :
        <View style={styles.container2}>    
        <Text style={styles.chat1}></Text>  
       
        </View>
        }
     
      
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginVertical: 10,
    width: '100%',
  },
  input: {
    flex: 1,
    marginLeft: 16,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 3,
    paddingHorizontal: 24,
    marginBottom:10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
});
