
import * as React from 'react';
import { AsyncStorage,Linking,FlatList, Platform, StyleSheet, Text, ActivityIndicator, View, Button } from 'react-native';
import Card from '../components/Card'
import axios from 'axios'
export default class Stocks extends React.Component {
constructor(){
  super();
  this.state={
    isLoading:true,
    dataSource:[],
    id:'',refresh:false
  }
}

componentDidMount(){
  
    AsyncStorage.getItem('id').then((value) => {
     
      this.setState({ id : value })
      const url="http://www.9ofa.tn/wp-json/stock/list?id="+this.state.id
      fetch(url).then(response=>response.json()).then((responseJson)=>{
        this.setState({
          isLoading:false,
          dataSource:responseJson
        })
      })
    })
      
}
handleRefresh=()=>{
  this.setState({
    isLoading:true,
    refresh:true
  })
  console.log('id'+this.state.id)
  AsyncStorage.getItem('id').then((value) => {
     
    this.setState({ id : value })
    const url="http://www.9ofa.tn/wp-json/stock/list?id="+this.state.id
    fetch(url).then(response=>response.json()).then((responseJson)=>{
      this.setState({
        isLoading:false,
        dataSource:responseJson,
        refresh:false
      })
    })
  })
}
render(){
  const  id = () => {
    AsyncStorage.getItem('id').then((value) => {
     
      this.setState({ id : value })})
  };
  id()
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
        <Text>
          No Stock yet 
        </Text>
        <Text>
          click on the button to refresh
        </Text>
        <Button title='refresh' onPress={this.handleRefresh}/>
      </View>
    )
  }
  
  
  else{
    return (
   
      <View style={styles.container}>
       <FlatList
       refreshing={this.state.refresh}
       onRefresh={this.handleRefresh}
      keyExtractor={item => item.nom}
       data={this.state.dataSource}
       renderItem={({item})=>
      
          <Card style={{padding:10}}>
             
            <View>
            <Text style={{color: 'red',fontWeight: 'bold'}}>Name: </Text>
              <Text>{item.name}</Text>
            </View>
            
            <View>
              
              <Text style={{color: 'red',fontWeight: 'bold'}}>qunatity: </Text>
              <Text>  {item.quant}</Text>
              
            </View>
            
            <Button title='Delete Stock' onPress={()=>{
              var url="http://9ofa.tn/wp-json/stock/delete?id="+item.id
                      axios.get(url).then(
                        res => {
                    
                          if (res.status==200){
                              alert("Stock deleted")
                              this.handleRefresh()
                              
                          }else{
                            alert("error")
                          }
                          }).then(this.handleRefresh)
                      
                    }}/>
            
           
   
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
