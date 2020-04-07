import React,{Component} from 'react'
import {View, Text, StyleSheet, ToastAndroid} from 'react-native'
import {Button, Input} from 'native-base'

import Icon from 'react-native-vector-icons/FontAwesome'

import styles from '../utils/styles'

const localStyles = StyleSheet.create({
  loginParent:{
    width: '80%',
    flex: 1
  },
  loginHeader:{
    backgroundColor: '#3961F8',
    width: '100%'
  },
  loginForm: {
    height: 40,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10
  },
  buttonText:{
    color: '#fff',
    fontSize: 20
  },
  socialButton:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  forgotLink: {
    color: '#00f',
    fontSize: 18
  },
  center: {
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  button: {
    backgroundColor: '#3961F8',
    borderRadius: 5,
  }
})

export default class LoginScreen extends Component{
  constructor(props){
    super(props)
    this.state = {
      user: '',
      pass: ''
    }
    this.login = () =>{
      if((this.state.user === 'admin') && (this.state.pass === 'admin')){
        this.props.navigation.reset({
          index: 0,
          routes: [
            {name: 'BottomStack'}
          ]
        })
      } else {
        ToastAndroid.show('Wrong Username or Password', ToastAndroid.SHORT)
      }
    }
  }
  render(){
    return(
      <View style={styles.parent}>
        <View style={[styles.parent,localStyles.loginHeader]}>
          <Icon name='github' size={60} color='#fff' />
          <Text style={localStyles.title}>Hello Apps</Text>
        </View>
        <View style={localStyles.loginParent}>
            <View style={localStyles.loginForm}>
              <Input onChangeText={(text) => this.setState({user:text})} placeholder='Username' />
            </View>
            <View style={localStyles.loginForm}>
              <Input onChangeText={(text) => this.setState({pass:text})} secureTextEntry={true} placeholder='Password' />
            </View>
            <View>
              <Button style={localStyles.button} onPress={this.login} block>
                <Text style={localStyles.buttonText}>Login</Text>
              </Button>
            </View>
            <View style={localStyles.center}>
              <Text style={localStyles.forgotLink}>Forgot Password?</Text>
            </View>
            <View style={localStyles.socialButton}>
              <View>
                <Icon name='google' size={35} />
              </View>
              <View>
                <Icon name='facebook' size={35} />
              </View>
              <View>
                <Icon name='twitter' size={35} />
              </View>
            </View>
          </View>
      </View>
    )
  }
}