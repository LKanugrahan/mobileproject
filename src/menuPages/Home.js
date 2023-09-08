import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Text, Input, Icon, Card, Button} from '@rneui/themed';
import {useDispatch, useSelector} from 'react-redux';
import {getRecipeDetail, getRecipeSearch} from '../redux/actions/menuAction';
import {TouchableOpacity} from 'react-native';

const data = [
  {
    id: 1,
    name: 'Fried Rice',
    url: 'https://cdn1-production-images-kly.akamaized.net/grfsArrUnfc-czQf0baUYmOKgbQ=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3108566/original/079979700_1587487794-Sajiku_1.jpg',
  },
  {
    id: 2,
    name: 'Nasi Goreng',
    url: 'https://cdn1-production-images-kly.akamaized.net/grfsArrUnfc-czQf0baUYmOKgbQ=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3108566/original/079979700_1587487794-Sajiku_1.jpg',
  },
  {
    id: 3,
    name: 'Nasi Goreng',
    url: 'https://cdn1-production-images-kly.akamaized.net/grfsArrUnfc-czQf0baUYmOKgbQ=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3108566/original/079979700_1587487794-Sajiku_1.jpg',
  },
];

const categoryRecipe = () => {
  const category = useSelector(state => state.categoryReducer.data);
  return category;
};

const PopularSection = data => {
  return (
    <View width={320}>
      <ImageBackground
        source={{
          uri: data.url,
        }}
        style={{width: 300, height: '100%'}}>
        <View style={[styles.marginTextB]}>
          <Text h4 style={styles.colYellow}>
            {data.name}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const CategorySection = ({data}) => {
  return (
    <View width={90}>
      <View
        alignItems="center"
        justifyContent="space-evenly"
        flexDirection="column">
        <Image
          style={styles.tinyLogo}
          source={{
            uri: data.category_image,
          }}
        />
        <Text>{data.category}</Text>
      </View>
    </View>
  );
};
const BottomSection = data => {
  return (
    <View width={320}>
      <ImageBackground
        source={{
          uri: data.url,
        }}
        style={{width: 300, height: '100%'}}>
        <View style={[styles.marginTextB]}>
          <Text h4 style={styles.colYellow}>
            {data.name}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const Menu = () => {
  const menu = useSelector(state => state.searchMenuReducer.data);
  return menu;
};

const Item = ({data, navigation}) => {
  const dispatch = useDispatch();

  const limitRecipeName = (name, limit) => {
    if (name.length > limit) {
      return name.substring(0, limit) + '...';
    }
    return name;
  };

  return (
    <TouchableOpacity
      onPress={async () => {
        await dispatch(getRecipeDetail(data.id));
        navigation.navigate('DetailRecipe');
      }}>
      <View style={styles.item} justifyContent="space-between">
        <Image source={{uri: data.recipe_image}} style={styles.image} />
        <View width="30%" marginHorizontal={5} height="75%">
          <Text style={styles.title}>{limitRecipeName(data.recipe_name,7)}</Text>
          <Text>{data.category}</Text>
        </View>
        <View height={100} width={100} alignItems="center" flexDirection="row" >
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
            icon={
              <Icon
                type="feather"
                name="bookmark"
                size={30}
                color="rgba(239, 200, 26, 1)"
              />
            }
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
            icon={
              <Icon
                type="feather"
                name="thumbs-up"
                size={30}
                color="rgba(239, 200, 26, 1)"
              />
            }
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [searching, setSearch] = useState('');

  useEffect(() => {
    dispatch(getRecipeSearch(10, searching));
  }, [searching]);
  return (
    <View
      width="90%"
      height="100%"
      style={styles.marginText}
      justifyContent="center">
      <Input
        inputContainerStyle={[styles.containerGray]}
        placeholder="Search Recipes"
        leftIcon={
          <Icon
            marginLeft={10}
            type="feather"
            name="search"
            size={24}
            color="rgba(196, 196, 196, 1)"
          />
        }
        value={searching}
        onChangeText={text => setSearch(text)}
      />
      {searching ? (
          <FlatList
            data={Menu()}
            renderItem={({item}) => <Item data={item} navigation={navigation} />}
            keyExtractor={item => item.id}
          />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            h4
            onPress={() => navigation.navigate('Popular')}
            style={{marginBottom: 10}}>
            Popular Recipes
          </Text>
          <FlatList
            horizontal={true}
            height={200}
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({item}) => <PopularSection {...item} />}
            keyExtractor={item => item.id}
          />
          <Text h4 style={{marginBottom: 10}}>
            Category Recipes
          </Text>
          <FlatList
            alignItems="center"
            horizontal={true}
            height={80}
            showsHorizontalScrollIndicator={false}
            data={categoryRecipe()}
            renderItem={({item}) => <CategorySection data={item} />}
            keyExtractor={item => item.id}
          />
          <Text h4 style={{marginBottom: 10}}>
            New Recipes
          </Text>
          <FlatList
            horizontal={true}
            height={200}
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({item}) => <BottomSection {...item} />}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      )}
    </View>
  );
};

export default Home;

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
  marginTextB: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    marginTop: 'auto',
    paddingVertical: 5,
    paddingLeft: 20,
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
    marginTop: 30,
  },
  tinyLogo: {
    width: 50,
    height: 50,
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
