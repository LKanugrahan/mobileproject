import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text, Input, Icon, Button} from '@rneui/themed';

const ResetPass = ({navigation}) => {
  return (
    <View style={styles.containerHero}>
      <Text h3 style={[styles.colYellow, styles.marginText]}>
        Forgot Password?
      </Text>
      <Text style={[styles.colGray, styles.marginText]}>
        We just need your registered e-mail addres
      </Text>
      <Text style={[styles.colGray, styles.marginText]}>
        to send your password reset
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
      />

      <Button
        size="lg"
        title="Send To Email"
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
        onPress={() => navigation.navigate('Build')}
      />
    </View>
  );
};

export default ResetPass;

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
