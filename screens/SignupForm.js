import * as React from 'react';
import { ScrollView,KeyboardAvoidingView,TextInput,View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup'
import {Formik} from 'formik';
import axios from 'axios'
export default function SignupForm () {
    const navigation = useNavigation();
    const validationSchem=yup.object().shape({
        email:yup.string().required().min(5),
        password:yup.string().required().min(8),
        tel:yup.string().required().min(8),
        Name:yup.string().required().min(5),
        gov:yup.string().required().min(5),
       
      })
    return(
        <Formik
        validationSchema={validationSchem}
        initialValues={{Name:'',password:'',email:'',tel:'',gov:''}}
        onSubmit={async (values,actions )=>{
            const psot= await axios.post("http://www.9ofa.tn/wp-json/assoc/register?name='"+values.Name+"'&email='"+values.email+"'&phone="+values.tel+"&password='"+values.password+"'&gov='"+values.gov+"'")
.then(
  res => {
      
      console.log(res.data);
      actions.setSubmitting(false)
      actions.resetForm()
      if (res.status===200){
          
          navigation.navigate("9ofa.tn")
      }
      else{
          alert("error please check your inputs")
      }
    })
           }}
        
          
            
            
           
            
         
        >
            {(props)=>(
       <View style={styles.container}>
           <TextInput
     placeholder='Association Name'
     
     placeholderTextColor='rgba(52, 46, 55, 0.5)'
     onChangeText={props.handleChange('Name')}
                      value={props.values.Name}
     returnKeyType='next'
     style={styles.input}>

     </TextInput>
     <Text style={{color:'red'}}>{props.errors.Name}</Text>
     <TextInput
     placeholder='Email'
     keyboardType="email-address"
     placeholderTextColor='rgba(52, 46, 55, 0.5)'
     onChangeText={props.handleChange('email')}
                      value={props.values.email}
     returnKeyType='next'
     style={styles.input}>
             </TextInput>
             <Text style={{color:'red'}}>{props.errors.email}</Text>
         <TextInput
     placeholder='Mobile Number'
     keyboardType="phone-pad"
     placeholderTextColor='rgba(52, 46, 55, 0.5)'
     onChangeText={props.handleChange('tel')}
     value={props.values.tel}
     returnKeyType='next'
     style={styles.input}></TextInput>
     <Text style={{color:'red'}}>{props.errors.tel}</Text>

    
     <TextInput 
    
     placeholder='Password'
     placeholderTextColor='rgba(52, 46, 55, 0.5)'
     secureTextEntry
     style={styles.input}
     onChangeText={props.handleChange('password')}
     value={props.values.password}
>

     </TextInput>
     <Text style={{color:'red'}}>{props.errors.password}</Text>
     <TextInput 
     returnKeyType='go'
     placeholder='gouvernorat'
     placeholderTextColor='rgba(52, 46, 55, 0.5)'
     
     style={styles.input}
     onChangeText={props.handleChange('gov')}
     value={props.values.gov}
>

     </TextInput>
     <Text style={{color:'red'}}>{props.errors.gov}</Text>
     <TouchableOpacity style={styles.buttonContainer} onPress={props.handleSubmit} >
         <Text style={styles.buttonText}>
                    Signup
         </Text>
     </TouchableOpacity>
 

 </View>)}
              </Formik>
      
    )
}
    


const styles=StyleSheet.create({
    container:{
        marginTop:'30%',
        paddingHorizontal:20
        }
        
    ,input:{
        height:40,
        backgroundColor:'rgba(250, 130, 76,0.2)',
       
        color:'black',
        paddingHorizontal:10
    },
    buttonContainer:{
        backgroundColor:'rgba(250, 130, 76,0.5)',
       height:50,
       marginBottom:10,
    padding:10
    },
    buttonText:{
        textAlign:'center',
        color:'rgba(250, 130, 76,1)',
        fontWeight:'700'
    }
})
