import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Words = props => {
    return (
      <View>
        <Text>{props.text}</Text>
      </View>
    );
  };
  
  const Buttons = props => {
    return (
      <View>
        <Button
          size="lg"
          title={props.title}
          containerStyle={{
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          buttonStyle={{
            backgroundColor: 'rgba(239, 200, 26, 1)',
            borderRadius: 10,
          }}
          titleStyle={{
            color: 'white',
            marginHorizontal: 20,
          }}
        />
      </View>
    );
  };

const buttonAuth = () => {
  return (
    <View>
      <Text>buttonAuth</Text>
    </View>
  )
}

export default buttonAuth

const styles = StyleSheet.create({})