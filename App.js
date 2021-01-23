import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddEntry from './components/AddEntry';
import { createStore } from 'redux' ;
import { Provider } from 'react-redux' ;
import reducer from './reducers' ;
import {getMetricMetaInfo} from './utils/helpers.js';


/*export default function App() {
  return (
              
    <View style={styles.container}>      
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Changes you make will automatically reload.</Text>
      <Text>Shake your phone to open the developer menu.</Text>
      <StatusBar style="auto" />
      <AddEntry/>
      {getMetricMetaInfo('bike').getIcon()}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

export default class App extends Component{

  render(){
    return(

      /*<View>
        <Text>Open up App.js to start working on your app!</Text>
           <AddEntry/>
          {getMetricMetaInfo('bike').type}
      </View>*/

   <Provider store={createStore(reducer)}>
     <View>
        <AddEntry />
     </View>
     </Provider>
    )
          
    
    }
}
