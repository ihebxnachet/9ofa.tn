import * as React from "react";
import { View,Text,TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator} from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Donnor from "./screens/Donnor";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Families from "./screens/Families";
import AddFamily from "./screens/AddFamily";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DrawerCon from './screens/DrawerCon';
import Stocks from "./screens/Stocks";
import AddStocks from "./screens/AddStocks";
import Notes from "./screens/Notes"

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FamiliesScreen = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerLeft: () => (
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.openDrawer()}
            activeOpacity={1.0}
          >
            <Icon name="menu" size={24} color="#000" />
          </TouchableOpacity>
        ),
      }}
      name="Families"
      component={Families}
    />
  </Stack.Navigator>
);
const AddFamilyScreen = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerLeft: () => (
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.openDrawer()}
            activeOpacity={1.0}
          >
            <Icon name="menu" size={24} color="#000" />
          </TouchableOpacity>
        ),
      }}
      name="Add Family"
      component={AddFamily}
    />
  </Stack.Navigator>
);
const StocksScreen = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerLeft: () => (
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.openDrawer()}
            activeOpacity={1.0}
          >
            <Icon name="menu" size={24} color="#000" />
          </TouchableOpacity>
        ),
      }}
      name="Stocks"
      component={Stocks}
    />
  </Stack.Navigator>
);
const AddStockScreen = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerLeft: () => (
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.openDrawer()}
            activeOpacity={1.0}
          >
            <Icon name="menu" size={24} color="#000" />
          </TouchableOpacity>
        ),
      }}
      name="Add Stock"
      component={AddStocks}
    />
  </Stack.Navigator>
);
const FamiliestTab = ({ navigation }) => (
  <Tab.Navigator>
    <Tab.Screen name="List" component={FamiliesScreen} options={{
       tabBarIcon:()=>(
         <Icon name="format-list-numbered" size={25} color="gray"/>
       )
    }}  />
    <Tab.Screen name="Add family" component={AddFamilyScreen}   options={{
       tabBarIcon:()=>(
         <Icon name="playlist-edit" size={25} color="gray"/>
       ),
  
        
    }} />
  </Tab.Navigator>
);
const StockstTab = ({ navigation }) => (
  <Tab.Navigator>
    <Tab.Screen name="List" component={StocksScreen} options={{
       tabBarIcon:()=>(
         <Icon name="format-list-numbered" size={25} color="gray"/>
       )
    }}  />
    <Tab.Screen name="Add Stock" component={AddStockScreen}   options={{
       tabBarIcon:()=>(
         <Icon name="playlist-edit" size={25} color="gray"/>
       ),
  
        
    }} />
  </Tab.Navigator>
);

const DonnorScreen = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerLeft: () => (
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.openDrawer()}
            activeOpacity={1.0}
          >
            <Icon name="menu" size={24} color="#000" />
          </TouchableOpacity>
        ),
      }}
      name="Donnor List"
      component={Donnor}
    />
  </Stack.Navigator>
);
const NotesScreen = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerLeft: () => (
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.openDrawer()}
            activeOpacity={1.0}
          >
            <Icon name="menu" size={24} color="#000" />
          </TouchableOpacity>
        ),
      }}
      name="Notes"
      component={Notes}
    />
  </Stack.Navigator>
);
function Roots() {
  return (
    <Drawer.Navigator initialRouteName="Donnor" drawerContent={() => <DrawerCon />}>
      <Drawer.Screen name="Donnor List" component={DonnorScreen} />
      <Drawer.Screen name="Families List" component={FamiliestTab} />
      <Drawer.Screen name="Stocks List" component={StockstTab} />
      <Drawer.Screen name="Notes" component={NotesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {

 
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        
        <Stack.Screen
          options={{ headerShown: false }}
          name="9ofa.tn"
          component={Roots}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    padding: 16,
  },
});
