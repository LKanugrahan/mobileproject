import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Home from './src/menuPages/Home';
import AuthLogin from './src/authPages/AuthLogin';
import AuthRegist from './src/authPages/AuthRegist';
import ResetPass from './src/authPages/ResetPass';
import BuildPass from './src/authPages/BuildPass';
import PopularMenu from './src/menuPages/PopularMenu';
import AddRecipe from './src/menuPages/AddRecipe';
import Profile from './src/profilePages/Profile';
import MyRecipe from './src/menuPages/MyRecipe';
import UpdateProfile from './src/profilePages/UpdateProfile';
import UpdateRecipe from './src/menuPages/UpdateRecipe';
import DetailRecipe from './src/menuPages/DetailRecipe';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          unmountOnBlur: true,
          tabBarShowLabel: false,
          tabBarIcon: () => <Icon name="home" size={30} />,
        }}
      />
      <Tab.Screen
        name="AddTab"
        component={AddRecipe}
        options={{
          unmountOnBlur: true,
          tabBarShowLabel: false,
          tabBarIcon: () => <Icon name="plus-square" size={30} />,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={Profile}
        options={{
          unmountOnBlur: true,
          tabBarShowLabel: false,
          tabBarIcon: () => <Icon name="user" size={30} />,
        }}
      />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Regist" component={AuthRegist} />
      <Stack.Screen name="Login" component={AuthLogin} />
      <Stack.Screen name="Reset" component={ResetPass} />
      <Stack.Screen name="Build" component={BuildPass} />
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="Popular" component={PopularMenu} />
      <Stack.Screen name="Add" component={AddRecipe} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
      <Stack.Screen name="MyRecipe" component={MyRecipe} />
      <Stack.Screen name="UpdateRecipe" component={UpdateRecipe} />
      <Stack.Screen name="DetailRecipe" component={DetailRecipe} />
    </Stack.Navigator>
  );
}

export default App;
