import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text, Input, Icon, Button} from '@rneui/themed';

const BuildPass = ({navigation}) => {
  return (
    <View style={styles.containerHero}>
      <Input
        inputContainerStyle={[styles.containerGray, styles.marginText]}
        placeholder="Create New Password"
        secureTextEntry={true}
        leftIcon={
          <Icon
            marginLeft={10}
            type="feather"
            name="lock"
            size={24}
            color="rgba(196, 196, 196, 1)"
          />
        }
      />
            <Input
        inputContainerStyle={[styles.containerGray, styles.marginText]}
        placeholder="New Password"
        secureTextEntry={true}
        leftIcon={
          <Icon
            marginLeft={10}
            type="feather"
            name="unlock"
            size={24}
            color="rgba(196, 196, 196, 1)"
          />
        }
      />

      <Button
        size="lg"
        title="Reset Password"
        containerStyle={{
          width: '95%',
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
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default BuildPass;

const styles = StyleSheet.create({
  colYellow: {
    color: 'rgba(239, 200, 26, 1)',
  },
  colGray: {
    color: 'rgba(196, 196, 196, 1)',
  },
  marginText: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  marginTextR: {
    marginLeft: 'auto',
  },
  containerGold: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(239, 200, 26, 1)',
    backgroundColor: 'rgba(245, 245, 245, 1)',
  },
  containerGray: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'rgba(245, 245, 245, 1)',
  },
  containerHero: {
    width: '90%',
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
