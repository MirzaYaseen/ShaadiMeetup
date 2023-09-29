import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Interested from '../screens/Interested';
import UserProfile from '../screens/UserPostedAds';
import Search from '../screens/Search';
import AddProfile from '../screens/AddProfile';
import Chat from '../screens/Chat';
import Subscriptionplan from '../screens/Subscriptionplan';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParam = {
  AddProfile: any;
};
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: '#ffffff',
            borderRadius: 15,
            height: 80,
            color: 'pink',
            ...style.shadow,
          },
          null,
        ],
      })}>
      <Tab.Screen
        name="Match Profiles"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Image
                source={require('../../assets/Icons/couple.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                Match
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Interested"
        component={Interested}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Image
                source={require('../../assets/Icons/heart.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                Fav
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Image
                source={require('../../assets/Icons/chat.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                Chat
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="add"
        component={AddProfile}
        options={{
          tabBarIcon: ({focused}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('AddProfile')}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: -30,
                width: 50,
                height: 50,
                backgroundColor: '#e32f45',
                borderRadius: 35,
              }}>
              <Image
                source={require('../../assets/Icons/add.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: '#fff',
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Image
                source={require('../../assets/Icons/search.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                Find
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Subscriptionplan"
        component={Subscriptionplan}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Image
                source={require('../../assets/Icons/credit.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                Plans
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Image
                source={require('../../assets/Icons/profilesetting.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const style = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default MyTabs;
