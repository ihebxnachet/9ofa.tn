import * as React from 'react';
import {Picker,ScrollView, AsyncStorage,TextInput,View, Text,StyleSheet,TouchableOpacity} from 'react-native';
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
       
       
      })
    return(
        <Formik
        validationSchema={validationSchem}
        initialValues={{Name:'',password:'',email:'',tel:'',gov:'sousse'}}
        onSubmit={async (values,actions )=>{
            const gov=values.gov.toLowerCase()
            const psot= await axios.post("http://www.9ofa.tn/wp-json/assoc/register?name='"+values.Name+"'&email='"+values.email+"'&phone="+values.tel+"&password='"+values.password+"'&gov='"+gov+"'")
            .then(
            res => {
            
          
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
     <Picker // passing value directly from formik 
     selectedValue={props.values.gov} // changing value in formik 
     onValueChange={itemValue => props.setFieldValue('gov', itemValue)} > 
      
     <Picker.Item label='Select your gouvernate' value={props.initialValues.gov} key={0} /> 
     <Picker.Item label='Tataouine' value={'tataouine'} key={1} /> 
     <Picker.Item label='Kebili' value={'Kebili'} key={2} /> 
     <Picker.Item label='Medenine' value={'Medenine'} key={3} /> 
     <Picker.Item label='Kasserine' value={'Kasserine'} key={4} /> 
     <Picker.Item label='Gafsa' value={'Gafsa'} key={5} /> 
     <Picker.Item label='Sfax' value={'Sfax'} key={6} /> 
     <Picker.Item label='Sidi Bouzid' value={'Sidi Bouzid'} key={7} /> 
     <Picker.Item label='Gabes' value={'Gabes'} key={8} /> 
     <Picker.Item label='Kairouan' value={'Kairouan'} key={9} /> 
     <Picker.Item label='Tozeur' value={'Tozeur'} key={10} /> 
     <Picker.Item label='Kef' value={'Kef'} key={11} /> 
     <Picker.Item label='Siliana' value={'Siliana'} key={12} /> 
     <Picker.Item label='Bizerte' value={'Bizerte'} key={13} /> 
     <Picker.Item label='Beja' value={'Beja'} key={14} /> 
     <Picker.Item label='Jendouba' value={'Jendouba'} key={15} /> 
     <Picker.Item label='Mahdia' value={'Mahdia'} key={16} /> 
     <Picker.Item label='Nabeul' value={'Nabeul'} key={17} /> 
     <Picker.Item label='Zaghouan' value={'Zaghouan'} key={18} /> 
     <Picker.Item label='Sousse' value={'Sousse'} key={19} /> 
     <Picker.Item label='Mannouba' value={'la mannouba'} key={20} /> 
     <Picker.Item label='Monastir' value={'Monastir'} key={21} /> 
     <Picker.Item label='Ben Arous' value={'Ben arous'} key={22} /> 
     <Picker.Item label='Ariana' value={'Ariana'} key={23} /> 
     <Picker.Item label='Tunis' value={'Tunis'} key={24} /> 
     </Picker>
     
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
