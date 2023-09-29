import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  ScrollView,
  SafeAreaView,
  Dimensions,
  RefreshControl,
  Animated,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import NormalText from '../../components/texts/NormalText';
import ProfileStatus from '../../components/ProfileStatus/ProfileStatus';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../navigation/StackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Profile = {
  _id: string;
  fullName: string;
  age: string;
  profession: string;
  maritalStatus: string;
  sect: string;
  city: string;
};

type ProfileResponse = {
  status: string;
  data: {
    profiles: Profile[];
  };
};

const LoadingSkeleton = () => {
  // You can use Animated or any other animation library to create shimmer effect.
  const shimmerOpacity = new Animated.Value(1);

  // Start the shimmer animation
  Animated.loop(
    Animated.sequence([
      Animated.timing(shimmerOpacity, {
        toValue: 12,
        duration: 2000,
        useNativeDriver: false,
      }),
      Animated.timing(shimmerOpacity, {
        toValue: 0.5,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]),
  ).start();

  return (
    <View style={styles.container}>
      {/* Shimmer effect */}
      <Animated.View
        style={[styles.shimmer, { opacity: shimmerOpacity }]}
      />
      {/* Placeholder content */}
      <View style={styles.placeholderContent}>
        {/* Add your placeholder elements here */}
        {/* For example: */}
        <View style={styles.placeholderText} />
        <View style={styles.placeholderText} />
        <View style={styles.placeholderText} />
     
      </View>
    </View>
  );
};

const Dashboard: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const fetchProfiles = async () => {
    try {
      const response = await axios.get<ProfileResponse>(
        'https://shaadi-meetup-new.onrender.com/api/profile/',
      );
      const data = response.data;
      setProfiles(data.data.profiles);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const onRefresh = React.useCallback(() => {
    // setRefreshing(true);
    // fetchProfiles();
    // setRefreshing(false);
    setRefreshing(true);
    // Fetch profiles and setRefreshing to false when data is loaded
    fetchProfiles().then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ProfileStatus />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {/* {refreshing && (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            animating={refreshing}
          />
          
        )} */}
            <NormalText text="Match Profiles" />
        {isLoading ?  (
          <>
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            {/* Add more skeletons as needed */}
          </>
        ) : (
          <>
        
        {profiles.map(profile => (
          <View key={profile._id}>
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('ProfileDetail', {profile: profile});
              }}>
              <View style={styles.cardWidth}>
                <View style={styles.profile}>
                  <Image
                    style={styles.image}
                    source={require('../../assets/Icons/couple.png')}
                  />
                </View>
                <View style={styles.details}>
                  <Text style={styles.name}>Name: {profile.fullName}</Text>
                  <View style={styles.MaritalandProfession}>
                    <Text style={styles.MartialStatus}>
                      Status: {profile.maritalStatus}
                    </Text>
                    <Text style={styles.age}>Age: {profile.age} years</Text>
                  </View>

                  <Text style={styles.profession}>
                    Profession: {profile.profession}
                  </Text>

                  {/* <View style={styles.cityandSect}>
                    <Text style={styles.city}>City: {profile.city}</Text>
                    <Text style={styles.sect}>Sect: {profile.sect}</Text>
                  </View> */}
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        ))}
        </>
        )}
        {/* Add more content here if necessary */}
      </ScrollView>
    </SafeAreaView>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 110,
  },
  cardWidth: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: width - 30,
    height: 140,
    marginBottom: 20,
    marginVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    flex: 2,
    paddingLeft: 10,
  },
  image: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 10,
 
    
  },
  name: {
    fontStyle: 'italic',
    fontWeight: '800',
    fontSize: width * 0.035,
    marginBottom: width * 0.01,
    marginTop: width * 0.02,
  },
  MaritalandProfession: {
    flexDirection: 'row',

    marginTop: width * 0.01,
  },
  MartialStatus: {
    fontStyle: 'italic',
    flex: 1,
    marginRight: width * 0.01,
  },
  age: {
    flex: 1,
    fontStyle: 'italic',
    marginRight: width * 0.04,
  },

  profession: {
    fontStyle: 'italic',

    marginTop: width * 0.02,
    marginRight: width * 0.01,
  },

  cityandSect: {
    flexDirection: 'row',
    marginTop: width * 0.02,
    marginBottom: width * 0.02,
    marginRight: width * 0.02,
  },
  city: {
    fontStyle: 'italic',
    flex: 1,
    marginRight: width * 0.01,
  },
  sect: {
    flex: 1,
    fontStyle: 'italic',
  },

  shimmer: {
    backgroundColor: '#E0E0E0',
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 20,
    marginLeft:20,
    
   
  },
  placeholderContent: {
    flex: 1,
    marginTop:10,
    marginRight:20,
  },
  placeholderText: {
    backgroundColor: '#E0E0E0',
    height: 15,
    marginBottom: 10,
    borderRadius:10
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor:'#f2f2f2',
    marginLeft:20,
    marginRight:20,
    height:130,
    borderRadius:10
  },
});

export default Dashboard;
