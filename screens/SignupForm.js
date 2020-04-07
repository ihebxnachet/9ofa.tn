import * as React from 'react';
import { KeyboardAvoidingView,TextInput,View, Text,StyleSheet,TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function SignupForm () {
    const navigation = useNavigation();
   
    return(
        
       <KeyboardAvoidingView style={styles.container}>
           <TextInput
     placeholder='Association Name'
     
     placeholderTextColor='rgba(52, 46, 55, 0.5)'
     
     returnKeyType='next'
     style={styles.input}>

     </TextInput>
     <TextInput
     placeholder='Email'
     keyboardType="email-address"
     placeholderTextColor='rgba(52, 46, 55, 0.5)'
    
     returnKeyType='next'
     style={styles.input}>
             </TextInput>
         <TextInput
     placeholder='Mobile Number'
     keyboardType="phone-pad"
     placeholderTextColor='rgba(52, 46, 55, 0.5)'
  
     returnKeyType='next'
     style={styles.input}></TextInput>

    
     <TextInput 
     returnKeyType='go'
     placeholder='Password'
     placeholderTextColor='rgba(52, 46, 55, 0.5)'
     secureTextEntry
     style={styles.input}
>

     </TextInput>
     <TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.replace('9ofa.tn')} >
         <Text style={styles.buttonText}>
                    Signup
         </Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.goBack()}>
         <Text style={styles.buttonText}>
                    cancel
         </Text>
     </TouchableOpacity>

 </KeyboardAvoidingView>
      
    )
}
    


const styles=StyleSheet.create({
    container:{
        padding:20
    },input:{
        height:40,
        backgroundColor:'rgba(250, 130, 76,0.2)',
        marginBottom:20,
        color:'black',
        paddingHorizontal:10
    },
    buttonContainer:{
        backgroundColor:'rgba(250, 130, 76,0.5)',
       paddingVertical:5,
       marginBottom:10

    },
    buttonText:{
        textAlign:'center',
        color:'rgba(250, 130, 76,1)',
        fontWeight:'700'
    }
})
