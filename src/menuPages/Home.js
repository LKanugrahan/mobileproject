import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {Text, Input, Icon,Card} from '@rneui/themed';
const Home = ({navigation}) => {
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
      />
      <Text h4 onPress={() => navigation.navigate('Popular')}>
        Popular Recipes
      </Text>
      <Text h5>Populer check</Text>

      <ScrollView horizontal={true} width="100%" height={200}>
        <View width={950} flexDirection="row" justifyContent="space-between">
          <ImageBackground
            source={{
              uri: 'https://cdn1-production-images-kly.akamaized.net/grfsArrUnfc-czQf0baUYmOKgbQ=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3108566/original/079979700_1587487794-Sajiku_1.jpg',
            }}
            style={{width: 300, height: '100%'}}>
            <View style={[styles.marginTextB]}>
              <Text h4>
                Fried Rice
              </Text>
              <Text h4>
                With Egg
              </Text>
            </View>
          </ImageBackground>
          <ImageBackground
            source={{
              uri: 'https://cdn1-production-images-kly.akamaized.net/grfsArrUnfc-czQf0baUYmOKgbQ=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3108566/original/079979700_1587487794-Sajiku_1.jpg',
            }}
            style={{width: 300, height: '100%'}}>
            <View style={[styles.marginTextB]}>
              <Text h4>
                Fried Rice
              </Text>
              <Text h4>
                With Egg
              </Text>
            </View>
          </ImageBackground>
          <ImageBackground
            source={{
              uri: 'https://cdn1-production-images-kly.akamaized.net/grfsArrUnfc-czQf0baUYmOKgbQ=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3108566/original/079979700_1587487794-Sajiku_1.jpg',
            }}
            style={{width: 300, height: '100%'}}>
            <View style={[styles.marginTextB]}>
              <Text h4>
                Fried Rice
              </Text>
              <Text h4>
                With Egg
              </Text>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
      <Text h4 onPress={() => navigation.navigate('Login')}>
        New Recipes
      </Text>
      <ScrollView horizontal={true} height={75}>
        <View width={640} flexDirection="row" justifyContent="space-between">
          <View
            alignItems="center"
            justifyContent="space-evenly"
            flexDirection="column">
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <Text>Apa</Text>
          </View>
          <View
            alignItems="center"
            justifyContent="space-evenly"
            flexDirection="column">
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <Text>Apa</Text>
          </View>
          <View
            alignItems="center"
            justifyContent="space-evenly"
            flexDirection="column">
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <Text>Apa</Text>
          </View>
          <View
            alignItems="center"
            justifyContent="space-evenly"
            flexDirection="column">
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <Text>Apa</Text>
          </View>
          <View
            alignItems="center"
            justifyContent="space-evenly"
            flexDirection="column">
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <Text>Apa</Text>
          </View>
          <View
            alignItems="center"
            justifyContent="space-evenly"
            flexDirection="column">
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <Text>Apa</Text>
          </View>
          <View
            alignItems="center"
            justifyContent="space-evenly"
            flexDirection="column">
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <Text>Apa</Text>
          </View>
        </View>
      </ScrollView>
      <Text h4>Popular For You</Text>
      <ScrollView
        horizontal={true}
        width="100%"
        height={150}>
        <View width={950} flexDirection="row" justifyContent="space-between">
          <ImageBackground
            source={{
              uri: 'https://cdn1-production-images-kly.akamaized.net/grfsArrUnfc-czQf0baUYmOKgbQ=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3108566/original/079979700_1587487794-Sajiku_1.jpg',
            }}
            style={{width: 300, height: '100%'}}>
            <View style={[styles.marginTextB]}>
              <Text h4>
                Fried Rice
              </Text>
              <Text h4>
                With Egg
              </Text>
            </View>
          </ImageBackground>
          <ImageBackground
            source={{
              uri: 'https://cdn1-production-images-kly.akamaized.net/grfsArrUnfc-czQf0baUYmOKgbQ=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3108566/original/079979700_1587487794-Sajiku_1.jpg',
            }}
            style={{width: 300, height: '100%'}}>
            <View style={[styles.marginTextB]}>
              <Text h4>
                Fried Rice
              </Text>
              <Text h4>
                With Egg
              </Text>
            </View>
          </ImageBackground>
          <ImageBackground
            source={{
              uri: 'https://cdn1-production-images-kly.akamaized.net/grfsArrUnfc-czQf0baUYmOKgbQ=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3108566/original/079979700_1587487794-Sajiku_1.jpg',
            }}
            style={{width: 300, height: '100%'}}>
            <View style={[styles.marginTextB]}>
              <Text h4>
                Fried Rice
              </Text>
              <Text h4>
                With Egg
              </Text>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
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
    marginTop: 30,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
