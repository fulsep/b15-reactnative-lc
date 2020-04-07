import React, {Component} from 'react'
import {View, Text } from 'react-native'

import styles from '../utils/styles'

export default class Detail extends Component{
  render(){
    return(
      <>
        <View style={styles.parent}>
          <Text style={styles.title} >Hello from Detail Screen</Text>
        </View>
      </>
    )
  }
}