import React, {Component } from 'react';
//import {Button} from 'react-native-elements';
import { Alert, StyleSheet, View, Text , TextInput, Image, Button, Linking} from 'react-native';

export default class PinScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      PIN: ''
    };
  }
  onLogin() {
    const { PIN } = this.state;
    if(PIN!=null)
    Alert.alert('Credentials', `${PIN}`);
  }

  _onGoBack() {
    Alert.alert('GOTO HOME')
  }    

  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.loginBox}>
          <Image source={require('./app/src/img/login_logo.png')} style={styles.logoHome} />
          <Text style={styles.header}> PIN</Text>        
          <TextInput style={styles.inputText}
           onChangeText={(PIN) => this.setState({PIN})}
            value={this.state.text} 
           placeholder="Type in your PIN"
           secureTextEntry={true}/>
          
        </View>


        <View style={styles.buttonContainer}>
          <Button
            onPress={this.onLogin.bind(this)}
            title="LOGIN"
            type = "solid"
            //color="#e17055" 
            color="#e74c3c"
            raised
          />
        </View>
          <View style= {styles.pinPageText}>
            <Text style={styles.GB} 
            onPress={ ()=>{this._onGoBack()}}>
            GO BACK</Text>        
            <Text style={styles.forgotPIN} 
            onPress={ ()=>{ Linking.openURL('https://kite.zerodha.com/forgot')}}>
            FORGOT PIN?</Text>        
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center'
  },
  loginBox: {
    justifyContent: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    width: 260,
    height: 70,
    marginTop: 5
    
  
  },
  logoHome:{
    marginTop: -100,
    marginBottom:100,
    width: 200,
    resizeMode: "contain"
  },
   inputText: {
     height: 40, 
     width: 300, 
     borderColor: 'gray', 
     borderBottomWidth: 0.5,
     marginBottom: 10
     
    },
    GB:{
      marginTop: 10,
      fontSize: 10,
      marginRight: 30
    },
    forgotPIN:
    {
      marginTop: 10,
      fontSize: 10,
      marginLeft: 30
    },
    header:
    {
      color: 'gray'
    },
    pinPageText:
    {
      flexDirection: 'row'
    }
});