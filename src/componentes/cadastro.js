import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {Cabecalhopart} from './cabecalho';

export function Cadastroscreen({navigation}) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [CEP, setCEP] = useState('');
  const [CPF, setCPF] = useState('');
  const [Telefone, setTelefone] = useState('');
  const [ligar, setLigar] = useState (true);
  const [Cadastrar, setCadastrar] = useState ('Cadastrar');
   
  const clicarBotao = () =>{
    setLigar(!ligar);
  if (ligar == false){
    
  }else if (ligar == true){
   
  }
   }

  const handleLogin = () => {
    console.log('Email: ', email);
    console.log('Senha: ', senha);
    console.log('CEP: ', CEP);
    console.log('Telefone: ', Telefone);
    console.log('CPF: ', CPF);
  };

  return (
    
    <View style={styles.container}>
     <View>

   <Cabecalhopart/>
   
     </View>

      <Text style={styles.title}>Cadastro</Text>
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
          autoCapitalize='none'
          secureTextEntry
          leftIcon={<AntDesign name="mail" size={24} color="black" />}
        />
         </View>
         <View style={styles.inputContainer}>
         <AntDesign name="idcard" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={CPF}
          onChangeText={setCPF}
          keyboardType='numeric'
          autoCapitalize='none'
          secureTextEntry
          leftIcon={<AntDesign name="mail" size={24} color="black" />}
        />
         </View>
        <View style={styles.inputContainer}>
        <AntDesign name="home" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="CEP"
          value={CEP}
          onChangeText={setCEP}
          keyboardType="numeric"
          autoCapitalize="none"
          leftIcon= {<AntDesign name="home" size={24} color="black" />}
          />
      

      </View>
       
      <View style={styles.inputContainer}>
      <AntDesign name="phone" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="+55 (DDD) xxxx-xxxx"
          value={Telefone}
          onChangeText={setTelefone}
          keyboardType="numeric"
          autoCapitalize="none"
          leftIcon= {<AntDesign name="phone" size={24} color="black" />}
          />
      

      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      
      <Button
     title = { Cadastrar }
     onPress={() => navigation.navigate('login')}
      
     />

         
        {
          ligar ?
          <Text></Text>
          :
        <View style={styles.container2}>    
        <Text style={styles.chat1}>Você foi cadastrado</Text>  
       
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
