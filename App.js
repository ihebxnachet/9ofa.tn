import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator,DrawerActions } from '@react-navigation/drawer';
import Donnor from './screens/Donnor'
import Login from './screens/Login';
import Signup from './screens/Signup';
import Families from './screens/Families'
import Icon from 'react-native-vector-icons'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const DonnorStack = createStackNavigator();
const DonnorScreen=({navigation})=>(
 <DonnorStack.Navigator >
   <DonnorStack.Screen name="Donnor List" component={Donnor}/>
 </DonnorStack.Navigator>
  )
  const FamiliesScreen=({navigation})=>(
    <FamiliesStack.Navigator >
      <FamiliesStack.Screen name="Families List" component={Families} options={{
        headerLeft:()=>{
          <Icon.Button name='ios-menu' size={25} onPress={()=>{
           navigation.openDrawer()
          }} />
        }
      }} />
    </FamiliesStack.Navigator>
     )
function Roots() {
  return(

<Drawer.Navigator initialRouteName="Donnor">
        <Drawer.Screen name="Donnor List" component={DonnorScreen} />
        <Drawer.Screen name="Families List" component={FamiliesScreen}/>
</Drawer.Navigator>

  )
  
}

export default function App() {
 return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      
      <Stack.Screen name="9ofa.tn" component={Roots} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
