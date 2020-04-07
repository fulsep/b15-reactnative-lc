import React,{Component} from 'react'
import {View, Text} from 'react-native'

import styles from '../utils/styles'


export default class Profile extends Component{
  render(){
    return(
      <>
        <View style={styles.parent}>
          <Text style={styles.title} >Hello from Profile Screen</Text>
        </View>
      </>
    )
  }
}