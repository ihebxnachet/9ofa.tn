
import * as React from 'react';
import { Linking,FlatList, Platform, StyleSheet, Text, ActivityIndicator, View, Button } from 'react-native';
import Card from '../components/Card'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useIsFocused } from '@react-navigation/native';

export default class Families extends React.Component {
constructor(){
  super();
  this.state={
    isLoading:true,
    dataSource:[],
    refresh:false
  }
  
}
loadMyData(){
  fetch("http://www.9ofa.tn/wp-json/families/list").then(response=>response.json())
  .then((respnseJson)=>{
    this.setState(
      {
        isLoading:false,
        dataSource:respnseJson
      }
    )
  })
}

componentDidMount(){
  
    fetch("http://www.9ofa.tn/wp-json/families/list").then(response=>response.json())
    .then((respnseJson)=>{
      this.setState(
        {
          isLoading:false,
          dataSource:respnseJson
        }
      )
    })
  
  console.log('mount')
  


 
}
componentWillUnmount(){
 
    console.log('ounmouted')
  }
handleRefresh=()=>{
  this.setState({
    isLoading:true,
    refresh:true
  })
  fetch("http://www.9ofa.tn/wp-json/families/list").then(response=>response.json())
    .then((respnseJson)=>{
      this.setState(
        {
          isLoading:false,
          dataSource:respnseJson,
          refresh:false
        }
      )
    })
}

render(){
  
  if(this.state.isLoading){
return(
<ActivityIndicator style={{position: 'absolute', 
top: 0, left: 0, 
right: 0, bottom: 0, 
justifyContent: 'center', 
alignItems: 'center'}}/>
)
  }else if(
    this.state.dataSource.length === 0
  ){
    return(
      <View style={{  flex: 1, 
        alignItems: 'center',
        justifyContent: 'center', }}>
          <Text>{isFocused ? 'focused' : 'unfocused'}</Text>
        <Text>
          No Families yet 
        </Text>
      </View>
    )
  }
  
  
  else{
    return (
   
      <View style={styles.container}>
       <FlatList
       refreshing={this.state.refresh}
       onRefresh={this.handleRefresh}
      keyExtractor={item => item.prenom}
       data={this.state.dataSource}
       renderItem={({item})=>
      
          <Card style={{padding:10}}>
             
            <View>
            <Text style={{color: 'red',fontWeight: 'bold'}}>Name: </Text>
              <Text>{item.name}</Text>
            </View>
            
            <View>
              
              <Text style={{color: 'red',fontWeight: 'bold'}}>Phone: </Text>
              <Text>  {item.tel}</Text>
              
            </View>
            <View>
              
              <Text style={{color: 'red',fontWeight: 'bold'}}>Address: </Text>
              <Text>{item.adress}</Text>
            </View>
            <View>
              
              <Text style={{color: 'red',fontWeight: 'bold'}}>gouvernorate: </Text>
              <Text>{item.gov}</Text>
            </View>
            
            <View>
              <Button onPress={()=>{Linking.openURL('tel:${item.tel}');}}  title='call'/>
                
              
            </View>
           
   
          </Card>
        }
       >

       </FlatList>
      </View>
    );
  }
  
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
