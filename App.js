import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Livrosscreen} from './src/componentes/livros';
import {Cadastroscreen} from './src/componentes/cadastro';
import {Loginscreen} from './src/componentes/login';
import {Catalogoscreen} from './src/componentes/catalogo';
const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
        <Stack.Navigator>
                <Stack.Screen name="cadastro" component={Cadastroscreen} />
                <Stack.Screen name="login" component={Loginscreen} />
                <Stack.Screen name="catalogo" component={Catalogoscreen} />
                <Stack.Screen name="livros" component={Livrosscreen} />
        </Stack.Navigator>
</NavigationContainer>
);

  }