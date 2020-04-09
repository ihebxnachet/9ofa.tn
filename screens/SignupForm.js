import * as React from 'react';
import {ScrollView, AsyncStorage,TextInput,View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup'
import {Formik} from 'formik';
import axios from 'axios'
import { ActivityIndicator, Colors } from 'react-native-paper';
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
        
         
 
          navigation.navigate("Login")
      }
      else{
          alert("error please check your inputs")
      }
    })
           }}
        
          
            
            
           
            
         
        >
            {(props)=>(
                <ScrollView>
       <View style={styles.container}>
           <TextInput
           autoFocus
           onBlur={props.handleBlur("Name")}
     placeholder='Association Name'
     
     placeholderTextColor='rgba(52, 46, 55, 0.5)'
     onChangeText={props.handleChange('Name')}
                      value={props.values.Name}
     
     style={styles.input}>

     </TextInput>
     <Text style={{color:'red'}}>{props.errors.Name}</Text>
     <TextInput
     
     onBlur={props.handleBlur("email")}
     placeholder='Email'
     keyboardType="email-address"
     placeholderTextColor='rgba(52, 46, 55, 0.5)'
     onChangeText={props.handleChange('email')}
                      value={props.values.email}
     
     style={styles.input}>
             </TextInput>
             <Text style={{color:'red'}}>{props.errors.email}</Text>
         <TextInput
         
         onBlur={props.handleBlur("tel")}
     placeholder='Mobile Number'
     keyboardType="phone-pad"
     placeholderTextColor='rgba(52, 46, 55, 0.5)'
     onChangeText={props.handleChange('tel')}
     value={props.values.tel}
     
     style={styles.input}></TextInput>
     <Text style={{color:'red'}}>{props.errors.tel}</Text>

    
     <TextInput 
    
    onBlur={props.handleBlur("password")}
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
     
     onBlur={props.handleBlur("gov")}
     
     placeholder='gouvernorat'
     placeholderTextColor='rgba(52, 46, 55, 0.5)'
     
     style={styles.input}
     onChangeText={props.handleChange('gov')}
     value={props.values.gov}
>

     </TextInput>
     <Text style={{color:'red'}}>{props.errors.gov}</Text>
     {
            props.isSubmitting ? (
                <ActivityIndicator animating={true} color={Colors.red800} />
              ):(
                <TouchableOpacity style={styles.buttonContainer} onPress={props.handleSubmit} >
                <Text style={styles.buttonText}>
                           Signup
                </Text>
            </TouchableOpacity>
              )
     }
 
 

 </View>
 </ScrollView>)}
              </Formik>
      
    )
}
    


const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
        marginTop:'10%'
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
