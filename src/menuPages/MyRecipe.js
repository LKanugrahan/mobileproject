import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Text, Icon, Button} from '@rneui/themed';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteMenu,
  getMenuDetail,
  getRecipeDetail,
} from '../redux/actions/menuAction';

const dataRecipe = () => {
  const data = useSelector(state => state.detailMenuReducer.data);
  return data;
};

const Item = ({data, navigation}) => {
  const dispatch = useDispatch();

  const limitRecipeName = (name, limit) => {
    if (name.length > limit) {
      return name.substring(0, limit) + '...';
    }
    return name;
  };

  const refreshMenu = async () => {
    await dispatch(deleteMenu(data.id));
    dispatch(getMenuDetail(data.users_id));
  };

  return (
    <TouchableOpacity
      onPress={async () => {
        await dispatch(getRecipeDetail(data.id));
        navigation.navigate('DetailRecipe');
      }}>
      <View style={styles.item} justifyContent="space-between">
        <Image source={{uri: data.recipe_image}} style={styles.image} />
        <View width="35%" marginHorizontal={5} height="75%">
          <Text style={styles.title}>
            {limitRecipeName(data.recipe_name, 10)}
          </Text>
          <Text>{data.category}</Text>
        </View>
        <View height={100} justifyContent="space-evenly">
          <Button
            size="sm"
            title="Edit"
            containerStyle={{
              marginLeft: 'auto',
              marginRight: 'auto',
              width: 100,
            }}
            buttonStyle={{
              backgroundColor: 'rgba(48, 192, 243, 1)',
              borderRadius: 10,
            }}
            titleStyle={{
              color: 'white',
              marginHorizontal: 20,
            }}
            onPress={async() => {
              await dispatch(getRecipeDetail(data.id));
              navigation.navigate('UpdateRecipe', {
                id: data.id,
                users_id: data.users_id,
              });
            }}
          />
          <Button
            size="sm"
            title="Delete"
            containerStyle={{
              marginLeft: 'auto',
              marginRight: 'auto',
              width: 100,
            }}
            buttonStyle={{
              backgroundColor: 'rgba(245, 126, 113, 1)',
              borderRadius: 10,
            }}
            titleStyle={{
              color: 'white',
              marginHorizontal: 20,
            }}
            onPress={refreshMenu}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const MyRecipe = ({navigation}) => {
  return (
    <View height="100%">
      <View flexDirection="row" alignItems="center">
        <Icon
          name="chevron-left"
          size={30}
          color="rgba(239, 200, 26, 1)"
          onPress={() => navigation.navigate('Home', {screen: 'Profile'})}
          // onPress={() =>
          //   navigation.reset({
          //     index: 0,
          //     routes: [{name: 'Home'}],
          //   })
          // }
        />

        <Text h3 style={[styles.colYellow, styles.marginText]}>
          My Recipes
        </Text>
      </View>
      <FlatList
        data={dataRecipe()}
        renderItem={({item}) => <Item data={item} navigation={navigation} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MyRecipe;

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
    borderWidth: 3,
    borderColor: 'rgba(239, 200, 26, 1)',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    marginVertical: 10,
  },
});
