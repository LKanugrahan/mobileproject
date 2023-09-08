import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  FlatList,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {Text, Input, Icon, Button, ListItem, Avatar} from '@rneui/themed';
import * as ImagePicker from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {addMenu, getMenuDetail} from '../redux/actions/menuAction';


const categoryRecipe = () => {
  const category = useSelector(state => state.categoryReducer.data);
  return category;
};

const Category = ({data, onCategory}) => {
  return (
    <ListItem onPress={() => onCategory(data.id)}>
      <Text>{data.category}</Text>
    </ListItem>
  );
};

const AddRecipe = ({navigation}) => {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState();
  const [expanded, setExpanded] = useState(false);
  const [inputMenu, setMenu] = useState({
    recipe_name: '',
    recipe_ingredients: '',
    category_id: null,
    recipe_image: '',
  });

  const handleCategory = categoryId => {
    setMenu({...inputMenu, category_id: categoryId});
    setExpanded(false)
  };
  const users_id = useSelector(state=>state.authReducer.data)
  const name = categoryRecipe().find(category => category.id === inputMenu.category_id)?.category

  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs Camera Access',
          buttonPositive: 'OK',
          buttonNegative: 'cancel',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('access camera success');
        cameraLaunch();
      } else {
        console.log('access camera failed');
        console.log(PermissionsAndroid.RESULTS.GRANTED);
      }
    } catch (err) {
      console.log('error');
      console.log(err);
    }
  };

  const cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, res => {
      console.log('response camera ', res);
      if (res.didCancel) {
        console.log('user cancel camera picker');
      } else if (res.error) {
        console.log('camera picker error ', res.errorMessage);
      } else {
        console.log(res);
        setPhoto(res.assets[0]);
      }
    });
  };

  const galleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('user cancel camera picker');
      } else if (res.error) {
        console.log('camera picker error ', res.errorMessage);
      } else {
        console.log(res);
        setPhoto(res.assets[0]);
      }
    });
  };

  const postMenu = async () => {
    let formData = new FormData();
    formData.append('recipe_name', inputMenu.recipe_name);
    formData.append('recipe_ingredients', inputMenu.recipe_ingredients);
    formData.append('category_id', inputMenu.category_id);
    formData.append('recipe_image', {
      uri: photo.uri,
      name: photo.fileName,
      type: photo.type,
    });
    await dispatch(addMenu(formData));
    await dispatch(getMenuDetail(users_id.id))
  };

  return (
    <View style={styles.containerHero}>
      <Text
        h3
        style={[styles.colYellow, styles.marginText, styles.marginTextB]}>
        Add Your Recipe
      </Text>
      <Input
        inputContainerStyle={[styles.containerGray, styles.marginText]}
        placeholder="Title recipe"
        leftIcon={
          <Icon marginLeft={10} type="feather" name="book-open" size={24} />
        }
        onChangeText={newRecipe =>
          setMenu({...inputMenu, recipe_name: newRecipe})
        }
        value={inputMenu.recipe_name}
      />
      <Input
        inputContainerStyle={[styles.containerGray, styles.marginText]}
        placeholder="Ingredients"
        leftIcon={
          <Icon marginLeft={10} type="feather" name="file-text" size={24} />
        }
        onChangeText={newIngredients =>
          setMenu({...inputMenu, recipe_ingredients: newIngredients})
        }
        value={inputMenu.recipe_ingredients}
      />
      <View
        height={150}
        style={{width: '90%'}}
        flexDirection="row"
        justifyContent="space-between">
        <View height={150}>
          <ListItem.Accordion
            height={50}
            content={<Text>{inputMenu.category_id? `${name}` :'Category'}</Text>}
            isExpanded={expanded}
            onPress={() => {
              setExpanded(!expanded);
            }}>
            <View height={100}>
              <FlatList
                data={categoryRecipe()}
                renderItem={({item}) => (
                  <Category data={item} onCategory={handleCategory} />
                )}
                keyExtractor={item => item.id}
              />
            </View>
          </ListItem.Accordion>
        </View>
        <View width="55%">
          {photo ? (
            <ImageBackground
              source={{uri: photo.uri}}
              style={{width: '100%', height: '100%', alignItems: 'flex-end'}}>
              <Button
                size="md"
                icon={
                  <Icon
                    type="feather"
                    name="camera"
                    size={24}
                    color="rgba(239, 200, 26, 1)"
                  />
                }
                buttonStyle={{
                  backgroundColor: 'transparent',
                  borderRadius: 10,
                }}
                onPress={requestPermission}
              />
              <Button
                size="md"
                icon={
                  <Icon
                    type="feather"
                    name="image"
                    size={24}
                    color="rgba(239, 200, 26, 1)"
                  />
                }
                buttonStyle={{
                  backgroundColor: 'transparent',
                  borderRadius: 10,
                }}
                onPress={galleryLaunch}
              />
            </ImageBackground>
          ) : (
            <ImageBackground
              style={{
                width: '100%',
                height: '100%',
                alignItems: 'flex-end',
              }}>
              <Button
                size="md"
                icon={
                  <Icon
                    type="feather"
                    name="camera"
                    size={24}
                    color="rgba(239, 200, 26, 1)"
                  />
                }
                buttonStyle={{
                  backgroundColor: 'transparent',
                  borderRadius: 10,
                }}
                onPress={requestPermission}
              />
              <Button
                size="md"
                icon={
                  <Icon
                    type="feather"
                    name="image"
                    size={24}
                    color="rgba(239, 200, 26, 1)"
                  />
                }
                buttonStyle={{
                  backgroundColor: 'transparent',
                  borderRadius: 10,
                }}
                onPress={galleryLaunch}
              />
            </ImageBackground>
          )}
        </View>
      </View>

      <Button
        size="lg"
        title="POST"
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
          await postMenu();
          navigation.navigate('MyRecipe');
        }}
      />
    </View>
  );
};

export default AddRecipe;

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
