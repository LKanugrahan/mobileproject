import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import React from 'react';
import {Text, Input, Card, Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/Feather';

const data = [
  {
    id: '1',
    title: 'Item 1',
    imageUrl: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: '2',
    title: 'Item 2',
    imageUrl: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: '3',
    title: 'Item 3',
    imageUrl: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: '4',
    title: 'Item 3',
    imageUrl: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: '5',
    title: 'Item 3',
    imageUrl: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: '6',
    title: 'Item 3',
    imageUrl: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: '7',
    title: 'Item 3',
    imageUrl: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: '8',
    title: 'Item 3',
    imageUrl: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: '9',
    title: 'Item 3',
    imageUrl: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: '10',
    title: 'Item 3',
    imageUrl: 'https://legacy.reactjs.org/logo-og.png',
  },
  // ...more items
];

const renderItem = ({item}) => (
  <View style={styles.item} justifyContent="space-between">
    <Image source={{uri: item.imageUrl}} style={styles.image} />
    <View width="30%" marginHorizontal={10} height="75%">
      <Text style={styles.title}>{item.title}</Text>
      <Text>Apa aja</Text>
    </View>
    <View height={100} width={100} alignItems="center" flexDirection="row">
      <Button
        size="sm"
        containerStyle={{
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        buttonStyle={{
          backgroundColor: 'white',
          borderRadius: 20,
          borderColor: 'rgba(239, 200, 26, 1)',
          borderWidth: 2,
          width: 50,
          height: 50,
        }}
        icon={<Icon name="bookmark" size={30} color="rgba(239, 200, 26, 1)" />}
      />
      <Button
        size="sm"
        containerStyle={{
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        buttonStyle={{
          backgroundColor: 'white',
          borderRadius: 20,
          borderColor: 'rgba(239, 200, 26, 1)',
          borderWidth: 2,
          width: 50,
          height: 50,
        }}
        icon={<Icon name="thumbs-up" size={30} color="rgba(239, 200, 26, 1)" />}
      />
    </View>
  </View>
);

const PopularMenu = ({navigation}) => {
  return (
    <View height="100%">
      <View flexDirection="row" alignItems="center">
        <Icon
          name="chevron-left"
          size={30}
          color="rgba(239, 200, 26, 1)"
          onPress={() => navigation.goBack()}
        />

        <Text h3 style={[styles.colYellow, styles.marginText]}>
          Popular Recipes
        </Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default PopularMenu;

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
    paddingBottom: 5,
  },
  marginTextR: {
    marginLeft: 'auto',
  },
  marginTextB: {
    marginTop: 'auto',
    marginBottom: 15,
    marginLeft: 20,
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
  tinyLogo: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth:3,
    borderColor:'rgba(239, 200, 26, 1)'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
  },
});
