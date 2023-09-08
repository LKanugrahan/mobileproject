import {
  StyleSheet,
  View,
  PermissionsAndroid,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Text, Input, Icon, Button, Avatar} from '@rneui/themed';
import {useDispatch, useSelector} from 'react-redux';

import {
  getProfileDetail,
  updateProfileDetail,
} from '../redux/actions/profileAction';
import * as ImagePicker from 'react-native-image-picker';

const UpdateProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const dataProfile = useSelector(state => state.authReducer?.data || null);
  const [photo, setPhoto] = useState();
  const [inputProfile, setProfile] = useState({
    name: '',
    photo: '',
  });
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

  const updateProfile = async () => {
    let formData = new FormData();
    formData.append('name', inputProfile.name);
    if (photo && photo.uri) {
      formData.append('photo', {
        uri: photo.uri,
        name: photo.fileName,
        type: photo.type,
      });
    }
    await dispatch(updateProfileDetail(dataProfile.id, formData));
  };

  return (
    <View style={styles.containerHero}>
      <Avatar
        size={200}
        rounded
        source={{uri: photo?.uri || dataProfile.photo}}
      />
      <Text
        h3
        style={[styles.colYellow, styles.marginText, styles.marginTextB]}>
        Update Your Profile
      </Text>
      <Input
        inputContainerStyle={[styles.containerGray, styles.marginText]}
        placeholder="Input Your Name"
        leftIcon={<Icon marginLeft={10} type="feather" name="user" size={24} />}
        onChangeText={newName => setProfile({...inputProfile, name: newName})}
        value={inputProfile.name}
      />
      <View width="95%" flexDirection="row" justifyContent="space-evenly">
        <Button
          size="md"
          title="Take Photo"
          icon={
            <Icon
              type="feather"
              name="camera"
              size={24}
              color="rgba(239, 200, 26, 1)"
            />
          }
          buttonStyle={{
            backgroundColor: 'white',
            borderRadius: 10,
          }}
          titleStyle={{
            color: 'rgba(239, 200, 26, 1)',
            marginHorizontal: 10,
          }}
          onPress={requestPermission}
        />
        <Button
          size="md"
          title="Upload Photo"
          icon={
            <Icon
              type="feather"
              name="image"
              size={24}
              color="rgba(239, 200, 26, 1)"
            />
          }
          buttonStyle={{
            backgroundColor: 'white',
            borderRadius: 10,
          }}
          titleStyle={{
            color: 'rgba(239, 200, 26, 1)',
            marginHorizontal: 10,
          }}
          onPress={galleryLaunch}
        />
      </View>

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
        onPress={async () => {
          await updateProfile();

          navigation.navigate('Home', {screen: 'Profile'});
        }}
      />
    </View>
  );
};

export default UpdateProfile;

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
