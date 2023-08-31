import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import React from 'react';
import {Text, Input, Card, Icon, Button} from '@rneui/themed';

const UpdateRecipe = ({navigation}) => {
  return (
    <View style={styles.containerHero}>
      <Text h3 style={[styles.colYellow, styles.marginText, styles.marginTextB]}>
        Update Your Recipe
      </Text>
      <Input
        inputContainerStyle={[styles.containerGray, styles.marginText]}
        placeholder="Title recipe"
        leftIcon={
          <Icon
          marginLeft={10}
            type="feather"
            name="book-open"
            size={24}
          />
        }
      />
            <Input
        inputContainerStyle={[styles.containerGray, styles.marginText]}
        placeholder="Ingredients"
      />
            <Input
        inputContainerStyle={[styles.containerGray, styles.marginText]}
        placeholder="Add Photo"
      />
            <Input
        inputContainerStyle={[styles.containerGray, styles.marginText]}
        placeholder="Category"
      />
      
      <Button
        size="lg"
        title="UPDATE"
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
        onPress={() => navigation.navigate('MyRecipe')}
      />
    </View>
  );
};

export default UpdateRecipe;

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
