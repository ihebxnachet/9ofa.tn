import * as React from 'react';
import { AsyncStorage,KeyboardAvoidingView,TextInput,View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import * as yup from 'yup'
import {Formik} from 'formik';
import axios from 'axios'
class  LoginForms extends React.Component{
  constructor(){
    super();
    this.state={
      id:''
      
   
    }
  }

    
check(){
  AsyncStorage.getItem('name').then((value) => {
    this.setState({
      id:value
    })
  })
  if (this.state.id == ''){
    return false
  }
  else{
    return true
  }
}
 
   
  
  render(){
    const _storeData =  (key,values) => {
       
      AsyncStorage.setItem(key, values);
  
   
 };

    const { navigation } = this.props;
 
    const validationSchem=yup.object().shape({
      email:yup.string().required().min(5),
      password:yup.string().required().min(8),
     
    })
    

  
  if(this.check){
    return(
      <Formik
        validationSchema={validationSchem}
        initialValues={{email:'',password:''}}
        onSubmit={async (values,actions )=>{
          const x="http://9ofa.tn/wp-json/user/login?email='"+values.email+"'&password='"+values.password+"'"
          const psot= await axios.post("http://9ofa.tn/wp-json/user/login?email="+values.email+"&password="+values.password+"")
.then(
res => {
    if(res.data[0].error==404){
      alert ('wrong login or account not activated yet');
      actions.setSubmitting(false)
    }
 else{
   
   
  _storeData('name',res.data[0].name)
  _storeData('gov',res.data[0].gov)
  _storeData('id',res.data[0].id)
  _storeData('email',res.data[0].email)
  _storeData('tel',res.data[0].tel)
  actions.setSubmitting(false)
  
  navigation.navigate('9ofa.tn')
 }
         })}}
            
            
           
            
         
        >
            {(props)=>(
     <KeyboardAvoidingView style={styles.container}>
   <TextInput
   autoCapitalize="none"
   placeholder='Email'
   keyboardType="email-address"
   placeholderTextColor='rgba(52, 46, 55, 0.5)'
   onChangeText={props.handleChange('email')}
   value={props.values.email}
   
   style={styles.input}>

   </TextInput>
   <Text style={{color:'red'}}>{props.errors.email}</Text>
   <TextInput 
   returnKeyType='go'
   placeholder='Password'
   placeholderTextColor='rgba(52, 46, 55, 0.5)'
   secureTextEntry
   style={styles.input}
   onChangeText={props.handleChange('password')}
                    value={props.values.password}
   >

   </TextInput>
   <Text style={{color:'red'}}>{props.errors.password}</Text>
   {
      props.isSubmitting ? (
        <ActivityIndicator animating={true} color={Colors.red800} />
      ):(
        <View>

       
<TouchableOpacity style={styles.buttonContainer} onPress={props.handleSubmit} >
       <Text style={styles.buttonText}>
                  Login
       </Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.navigate('Signup')}>
       <Text style={styles.buttonText}>
                  Signup
       </Text>
   </TouchableOpacity>
   </View>
      )
   }
   
   <View style={{ flex : 1 }} />
</KeyboardAvoidingView>
            )}
            </Formik>
  )
  }else{
    return(
<View>
      {navigation.navigate('9ofa.tn')}
    </View>
    )
    
  }
    
  }
    
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
export default function(props) {
    const navigation = useNavigation();
  
    return <LoginForms {...props} navigation={navigation} />;
  }