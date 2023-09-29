import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import BottomTabNavigation from '../navigation/BottomTabNavigator';
import Dashboard from '../screens/Dashboard';
import AddProfile from '../screens/AddProfile';
import Requirement from '../screens/Requirement';
import Register from '../screens/Register';
import LoginForm from '../screens/Login';
import ProfileDetail from '../screens/ProfileDetail';
import UserData from '../screens/UserData';
import ThankYouScreen from '../screens/Thankyou';
import UserPostAds from '../screens/UserPostedAds';
import Subscription from '../screens/Subscriptionplan';
export type RootStackParam = {
  Splash: any;
  Register: any;
  LoginForm: any;
  Dashboard: any;
  BottomNavigator: any;
  AddProfile: any;
  Requirement: any;
  ProfileDetail: any;
  UserData: any;
  ThankYouScreen: any;
  UserPostAds: any;
  Subscription: any;
};

const RootStack = createNativeStackNavigator<RootStackParam>();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
      
      {/* <RootStack.Screen name="Subscription" component={Subscription} /> */}
        <RootStack.Screen name="Splash" component={Splash} />
        <RootStack.Screen
          name="BottomNavigator"
          component={BottomTabNavigation}
        />

        <RootStack.Screen name="LoginForm" component={LoginForm} />
        <RootStack.Screen name="Register" component={Register} />

        <RootStack.Screen name="AddProfile" component={AddProfile} /> 
        {/* <RootStack.Screen name="Requirement" component={Requirement} /> */}

        <RootStack.Screen name="ProfileDetail" component={ProfileDetail} />
        <RootStack.Screen name="UserData" component={UserData} />
        <RootStack.Screen name="UserPostAds" component={UserPostAds} />
        <RootStack.Screen name="Subscription" component={Subscription} /> 
         <RootStack.Screen name="ThankYouScreen" component={ThankYouScreen} />
        {/* <RootStack.Screen name="UserPostAds" component={UserPostAds} /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
