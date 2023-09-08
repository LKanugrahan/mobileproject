import {StyleSheet, View, FlatList, ImageBackground} from 'react-native';
import React from 'react';
import {Text, Avatar, Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';

const DetailRecipe = ({navigation}) => {
  const dataRecipe = useSelector(state => state.menuReducer.data);

  return (
    <ImageBackground
      style={{height: '100%', justifyContent: 'flex-end'}}
      backgroundColor="rgba(239, 200, 26, 1)"
      source={{uri: dataRecipe[0].recipe_image}}>
      <Icon name="chevron-left" size={40} color="black" style={{marginBottom:'auto', marginTop:10}} onPress={()=>{
        if (dataRecipe.length<1) {

        }
        navigation.goBack()}}/>
      <Text h2 style={{color: 'white', margin:10}}>
        {dataRecipe[0].recipe_name}
      </Text>

      <View height="50%" backgroundColor="rgba(255,255,255, 0.5)" style={{borderRadius:25}}>
        <Text h3 style={{margin:20}}>Ingredients</Text>
        <Text h4 style={{marginHorizontal:20}}>{dataRecipe[0].recipe_ingredients}</Text>
      </View>
    </ImageBackground>
  );
};

export default DetailRecipe;

const styles = StyleSheet.create({});
