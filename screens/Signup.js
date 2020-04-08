import * as React from 'react';
import {Image, TextInput,View, Text,StyleSheet,Button,KeyboardAvoidingView,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Formik} from 'formik';
import SignupForm from './SignupForm'
export default class Signup extends React.Component{
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
                
                <View style={styles.formContainer} >
                    <SignupForm navigation={this.props.navigation}/>
                </View>
            
            </View>
      
    
     
    
    );
    }
}