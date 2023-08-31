import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Input, Icon} from '@rneui/themed';

const inputAuth = props => {
  return (
    <View>
      <Input
        inputContainerStyle={styles.container}
        inputStyle={styles.input}
        placeholder={props.placeholder}
        leftIcon={
          <Icon type="font-awesome" name="chevron-left" size={24} color="red" />
        }
      />
    </View>
  );
};

export default inputAuth;

const styles = StyleSheet.create({
    container: {
      borderWidth: 2,
      width: '95%',
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: 10,
      borderColor: 'rgba(239, 200, 26, 1)',
      backgroundColor: 'rgba(245, 245, 245, 1)',
    },
    input: {
      color: 'rgba(239, 200, 26, 1)',
    },
  });


