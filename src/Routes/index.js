import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Cadastro from '../pages/Cadastro'
import Login from '../pages/Login'
import Rooms from '../pages/Rooms'
import HomePage from '../pages/HomePage'
import Tasks from '../pages/Tasks'
import Tarefas3 from '../pages/Tarefas3'

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name='Login'
            component= { Login }
            options= { { headerShown: false} }
            />
             <Stack.Screen
            name='Cadastro'
            component= { Cadastro }
            options= { { headerShown: false} }
            />
             <Stack.Screen
            name='Rooms'
            component= { Rooms }
            options= { { headerShown: false} }
            />
            <Stack.Screen
            name='Tasks'
            component= { Tasks }
            options= { { headerShown: false} }
            />
            <Stack.Screen
            name='HomePage'
            component= { HomePage }
            options= { { headerShown: false} }
            />
            <Stack.Screen
            name='Tarefas3'
            component= { Tarefas3 }
            options= { { headerShown: false} } 
            />
        </Stack.Navigator>
    )

}

