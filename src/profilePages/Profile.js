import {View} from 'react-native';
import React from 'react';
import {Text, Avatar, Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/Feather';
import {logout} from '../redux/actions/authAction';
import {useDispatch, useSelector} from 'react-redux';
import {getMenuDetail} from '../redux/actions/menuAction';

const Profile = ({navigation}) => {
  const dataProfile = useSelector(state => state.authReducer?.data || null);

  const dispatch = useDispatch();
  return (
    <View height="100%">
      <View
        height="50%"
        backgroundColor="rgba(239, 200, 26, 1)"
        justifyContent="center"
        alignItems="center">
        <Avatar size={200} rounded source={{uri:dataProfile.photo}} />
        <Text h3 style={{color: 'white', marginTop: 15}}>
          {dataProfile.name}
        </Text>
      </View>
      <View
        justifyContent="space-between"
        flexDirection="row"
        paddingVertical={20}
        paddingHorizontal={10}>
        <Icon name="user" size={30} color="black" />
        <View width="75%">
          <Text h4 onPress={() => navigation.navigate('UpdateProfile')}>
            Edit Profile
          </Text>
        </View>
        <Icon name="chevron-right" size={30} color="black" />
      </View>
      <View
        justifyContent="space-between"
        flexDirection="row"
        paddingVertical={20}
        paddingHorizontal={10}>
        <Icon name="award" size={30} color="black" />
        <View width="75%">
          <Text
            h4
            onPress={async () => {
              await dispatch(getMenuDetail(dataProfile.id));
              navigation.navigate('MyRecipe');
            }}>
            My Recipe{' '}
          </Text>
        </View>
        <Icon name="chevron-right" size={30} color="black" />
      </View>
      <View
        justifyContent="space-between"
        flexDirection="row"
        paddingVertical={20}
        paddingHorizontal={10}>
        <Icon name="bookmark" size={30} color="black" />
        <View width="75%">
          <Text h4 onPress={() => navigation.navigate('Popular')}>
            Saved Recipe{' '}
          </Text>
        </View>
        <Icon name="chevron-right" size={30} color="black" />
      </View>
      <View
        justifyContent="space-between"
        flexDirection="row"
        paddingVertical={20}
        paddingHorizontal={10}>
        <Icon name="thumbs-up" size={30} color="black" />
        <View width="75%">
          <Text h4 onPress={() => navigation.navigate('Popular')}>
            Liked Recipe{' '}
          </Text>
        </View>
        <Icon name="chevron-right" size={30} color="black" />
      </View>
      <Button
        size="lg"
        title="LOGOUT"
        containerStyle={{
          width: '95%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginVertical: 20,
        }}
        buttonStyle={{
          backgroundColor: 'rgba(245, 126, 113, 1)',
          borderRadius: 10,
        }}
        titleStyle={{
          color: 'white',
          marginHorizontal: 20,
        }}
        onPress={() => {
          dispatch(logout());
          navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
          });
        }}
      />
    </View>
  );
};

export default Profile;
