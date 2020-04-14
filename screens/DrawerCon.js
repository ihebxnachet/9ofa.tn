import React from 'react';
import { AsyncStorage,View, StyleSheet } from 'react-native';
import {
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';


class DrawerCon extends React.Component{
  constructor(){
    super();
    this.state={
      
      name:'',
      
   
    }
  }
  
  render(){
   
    const logout=()=>{
     
      AsyncStorage.removeItem('id')
      AsyncStorage.getItem('id').then((value) => {console.log(value)})
      navigation.navigate('Login')
    }
 
    const  name = () => {
      AsyncStorage.getItem('name').then((value) => {
       
        this.setState({ name : value })})
    };
    name()
    const { navigation } = this.props;
    
    return(
      <DrawerContentScrollView >
        <View
        style={
          styles.drawerContent
        }
      >
        <View style={styles.userInfoSection}>
          <Avatar.Image
          
            source={require("../assets/splash.png")}
            size={85}
          style={{backgroundColor:'white'}}
          />
          <Title style={styles.title}>{ this.state.name}</Title>
          <Caption style={styles.caption}>Association </Caption>
         
        </View>
        <Drawer.Section style={styles.drawerSection}>
          
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="account-outline" color={color} size={size} />
            )}
            label="Donnors "
            onPress={() => {navigation.navigate("Donnor List")}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="account-group"
                color={color}
                size={size}
              />
            )}
            label="Families"
            onPress={() => {navigation.navigate("Families List")}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="package-variant"
                color={color}
                size={size}
              />
            )}
            label="Stock"
            onPress={() => {navigation.navigate("Stocks List")}}
          />
        </Drawer.Section>
        <Drawer.Section title="Private notes">
        <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="lead-pencil"
                color={color}
                size={size}
              />
            )}
            label="Take note"
            onPress={() => {navigation.navigate("Notes")}}
          />
        </Drawer.Section>
        <Drawer.Section title="Logout">
        <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="logout-variant"
                color={color}
                size={size}
              />
            )}
            label="logout"
            onPress={
              logout
            }
          />
        </Drawer.Section>
      </View>
      </DrawerContentScrollView>
    )
  }
}
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default function(props) {
  const navigation = useNavigation();
 

  return <DrawerCon {...props} navigation={navigation}  />;
}