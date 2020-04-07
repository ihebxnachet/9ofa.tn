
import * as React from 'react';
import { KeyboardAvoidingView,StyleSheet, Text, View ,TextInput, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Formik} from 'formik';
import Card from '../components/Card'

export default class AddFamilies extends React.Component {


render(){
    return (
        <Card styles={styles.container}>
          <KeyboardAvoidingView>
          <Formik
          initialValues={{name:'',phone:'',adress:'',notes:'',}}
          onSubmit={(values,actions)=>{
            console.log(values)
            alert('family added succefully')
            actions.resetForm()
            
            
          }}
          >
              {(props)=>(
                    <ScrollView>
                      <Text style={{fontWeight: 'bold'}}>Family Name: </Text>
                      <TextInput
                      style={{height: 40, borderColor: 'gray', borderWidth: 1,borderRadius:6}}
                      placeholder='Family Name'
                      onChangeText={props.handleChange('name')}
                      value={props.values.name}
                      />
                      <Text style={{fontWeight: 'bold'}}>Family Phone number: </Text>
                      <TextInput
                       style={{height: 40, borderColor: 'gray', borderWidth: 1,borderRadius:6}}
                      placeholder='Phone number'
                      onChangeText={props.handleChange('phone')}
                      value={props.values.phone}
                      keyboardType='number-pad'
                      />
                      <Text style={{fontWeight: 'bold'}}>Family Adress: </Text>
                      <TextInput
                      multiline
                       style={{height: 40, borderColor: 'gray', borderWidth: 1,borderRadius:6}}
                      placeholder='Address'
                      onChangeText={props.handleChange('adress')}
                      value={props.values.adress}
                      />
                  
                      <Text style={{fontWeight: 'bold'}}>Add notes: </Text>
                      <TextInput
                      multiline
                       style={{height: 40, borderColor: 'gray', borderWidth: 1,borderRadius:6}}
                      placeholder='Add notes'
                      onChangeText={props.handleChange('notes')}
                      value={props.values.notes}
                      />
                      
                      <View style={{marginTop:10}}>
                      <Button
                      
                      title='submit'
                      
                      onPress={props.handleSubmit}
                      />
                      </View>
                      
                    </ScrollView>
              )}
          </Formik>
          </KeyboardAvoidingView>
        </Card>
      );
  
}
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
