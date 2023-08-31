import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text, Input, Icon, Button} from '@rneui/themed';

const AuthRegist = ({navigation}) => {
  return (
    <View style={styles.containerHero}>
      <Text h3 style={[styles.colYellow, styles.marginText]}>
        Welcome !
      </Text>
      <Text style={[styles.colGray, styles.marginText, styles.marginTextB]}>
        Register to Recipe App
      </Text>
      <Input
        inputContainerStyle={[styles.containerGold, styles.marginText]}
        inputStyle={styles.colYellow}
        placeholder="Input your name"
        leftIcon={
          <Icon
            marginLeft={10}
            type="feather"
            name="user"
            size={24}
            color="rgba(239, 200, 26, 1)"
          />
        }
      />
      <Input
        inputContainerStyle={[styles.containerGold, styles.marginText]}
        inputStyle={styles.colYellow}
        placeholder="Input your email"
        leftIcon={
          <Icon
            marginLeft={10}
            type="feather"
            name="mail"
            size={24}
            color="rgba(239, 200, 26, 1)"
          />
        }
      />
      <Input
        inputContainerStyle={[styles.containerGray, styles.marginText]}
        placeholder="Input your password"
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
      <Button
        size="lg"
        title="REGISTER"
        containerStyle={{
          width: '95%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginVertical: 20,
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
      <View style={[styles.marginText]} flexDirection="row">
        <Text>Have an account? </Text>
        <Text
          style={[styles.colYellow]}
          onPress={() => navigation.navigate('Login')}>
          Sign In
        </Text>
      </View>
    </View>
  );
};

export default AuthRegist;

//TODO: Batas style
const styles = StyleSheet.create({
  containerHero: {
    width: '90%',
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  marginTextB: {
    marginBottom: 10,
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
});
