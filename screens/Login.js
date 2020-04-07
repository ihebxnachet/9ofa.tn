import * as React from 'react';
import {Image, TextInput,View, Text,StyleSheet,Button,KeyboardAvoidingView,ScrollView} from 'react-native';

import LoginForm from './LoginForm'
export default class Login extends React.Component{
    
render(){
    const styles=StyleSheet.create({
        container:{
           flex:1,
           backgroundColor:'#FAFFFD'
        },logoContainer:{
        alignItems:'center',
        flexGrow:1,
        justifyContent:'center',
        
        }
        ,logo:{
           width:150,
           height:150
        }
        })
    return (
      
      
      
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/splash.png')}/>
            </View>
            <View style={styles.formContainer} >
                <LoginForm navigation={this.props.navigation}/>
            </View>
        
        </View>
  

 

);
}

}


    
   
