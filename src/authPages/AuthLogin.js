import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Text, Input, Icon, Button} from '@rneui/themed';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../redux/actions/authAction';
import {getCategory} from '../redux/actions/homeAction';
import {searchMenu} from '../redux/actions/menuAction';

const AuthLogin = ({navigation}) => {
  const dispatch = useDispatch();
  const [inputLogin, setLogin] = useState({
    email: '',
    password: '',
  });

  const isLogin = useSelector(state => state.authReducer.isSuccess);

  useEffect(() => {
    const fetchData = async () => {
      if (isLogin === false) {
        console.log('salah');
      } else if (isLogin === true) {
        console.log('pindah');
        await dispatch(getCategory());
        await dispatch(searchMenu());
        console.log('mau pindah');
        navigation.navigate('Home');
      }
    };

    fetchData();
  }, [isLogin]);

  return (
    <View style={styles.containerHero}>
      <Text h3 style={[styles.colYellow, styles.marginText]}>
        Welcome !
      </Text>
      <Text style={[styles.colGray, styles.marginText, styles.marginTextB]}>
        Log in to your exiting account.
      </Text>
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
        onChangeText={newEmail => setLogin({...inputLogin, email: newEmail})}
        value={inputLogin.email}
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
        onChangeText={newPass => setLogin({...inputLogin, password: newPass})}
        value={inputLogin.password}
      />
      <Text
        style={styles.marginTextR}
        onPress={() => navigation.navigate('Reset')}>
        Forgot Password?
      </Text>

      <Button
        size="lg"
        title="LOGIN"
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
        onPress={async () => {
          await dispatch(loginAction(inputLogin));
        }}
      />
      <View style={[styles.marginText]} flexDirection="row">
        <Text>Don’t have an account? </Text>
        <Text
          style={[styles.colYellow]}
          onPress={() => navigation.navigate('Regist')}>
          Sign Up
        </Text>
      </View>
    </View>
  );
};

export default AuthLogin;

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
  marginTextR: {
    marginLeft: 'auto',
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
