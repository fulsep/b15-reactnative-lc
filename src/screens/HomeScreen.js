import React, {Component} from 'react'
import {View, Text, TouchableOpacity } from 'react-native'

import styles from '../utils/styles'

export default class Home extends Component{
  constructor(props){
    super(props)
    this.changeScreen = () => {
      // console.log(this.props)
      this.props.navigation.navigate('DetailScreen')
    }
  }
  render(){
    return(
      <>
        <View style={styles.parent}>
          <Text style={styles.title}>Hello from Home Screen</Text>
          <TouchableOpacity onPress={this.changeScreen}>
            <Text style={styles.subtitle}>Go to Detail Screen</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}