import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';

type Props = {
  navigation: any;
  route: any;
};

const ProfileScreen: React.FC<Props> = ({route}) => {
  const {profile} = route.params;

  return (
    <SafeAreaView style={style.safearea}>
      <ScrollView>
        <View style={style.container}>
          <Text style={style.headerText}>Personal Details</Text>
        </View>

        <View style={style.borderContainer}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={style.image}
              source={require('../../assets/Icons/Profilecandidate.png')}
            />
            <Text style={style.labelTag}>About Candidate </Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label}>Name: </Text>
            <Text style={style.detail}>{profile.fullName}</Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label}>Father Name: </Text>
            <Text style={style.detail}>{profile.fatherName}</Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label}>Age: </Text>
            <Text style={style.detail}>{profile.age} years</Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label}>Gender: </Text>
            <Text style={style.detail}>{profile.gender}</Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label}>Religion: </Text>
            <Text style={style.detail}>{profile.religion}</Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label}>Caste: </Text>
            <Text style={style.detail}>{profile.caste}</Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label}>Sect: </Text>
            <Text style={style.detail}>{profile.sect}</Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label}>Marital Status: </Text>
            <Text style={style.detail}>{profile.maritalStatus}</Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label}>Country: </Text>
            <Text style={style.detail}>{profile.stayingCountry}</Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label}>City: </Text>
            <Text style={style.detail}>{profile.city}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              style={style.image}
              source={require('../../assets/Icons/appearance.png')}
            />
            <Text style={style.labelTag}>Candidate Appearance </Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label}>Body Weight: </Text>
            <Text style={style.detail}>{profile.weight} Kg</Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label}>Height: </Text>
            <Text style={style.detail}>{profile.selectedHeight}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={style.image}
              source={require('../../assets/Icons/education.png')}
            />
            <Text style={style.labelTag}>Educational Background</Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label}>Qualification: </Text>
            <Text style={style.detail}>{profile.education}</Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label}>Profession: </Text>
            <Text style={style.detail}>{profile.profession}</Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label}>Monthly Income: </Text>
            <Text style={style.detail}>{profile.income} Pkr</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              style={style.image}
              source={require('../../assets/Icons/bigfamily.png')}
            />
            <Text style={style.labelTag}>Family Details </Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label}>Father Occupation: </Text>
            <Text style={style.detail}>{profile.fatherOccupation}</Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label}>Number of Siblings: </Text>
            <Text style={style.detail}>{profile.siblings}</Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label}>Active Cell #: </Text>
            <Text style={style.detail}>{profile.phoneNumber}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              style={style.image}
              source={require('../../assets/Icons/house.png')}
            />
            <Text style={style.labelTag}>House Details </Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label}>House Detail: </Text>
            <Text style={style.detail}>{profile.houseDetails}</Text>
          </View>
          <View style={style.detailContainer}>
            <Text style={style.label}>House Size: </Text>
            <Text style={style.detail}>{profile.houseDetails}</Text>
          </View>
          <View style={style.detailContainer}>
            <Text style={style.label}>House Location: </Text>
            <Text style={style.detail}>{profile.houseDetails}</Text>
          </View>
        </View>

        <View style={style.borderContainer}>
          <View style={style.container}>
            <Text style={style.headerText2}>Partner Requirement</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={style.image}
              source={require('../../assets/Icons/partnerProfile.png')}
            />
            <Text style={style.labelTag}>About Partner </Text>
          </View>
          <View style={style.detailContainer}>
            <Text style={style.label2}>Age: </Text>
            <Text style={style.detail2}>{profile.partnerAge} years</Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label2}>Gender: </Text>
            <Text style={style.detail2}>{profile.partnerGender}</Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label2}>Religion: </Text>
            <Text style={style.detail2}>{profile.partnerReligion}</Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label2}>Caste: </Text>
            <Text style={style.detail2}>{profile.partnerCaste}</Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label2}>Sect: </Text>
            <Text style={style.detail2}>{profile.partnerSect}</Text>
          </View>
          <View style={style.detailContainer}>
            <Text style={style.label2}>Marital Status: </Text>
            <Text style={style.detail2}>{profile.partnerMaritalStatus}</Text>
          </View>
          <View style={style.detailContainer}>
            <Text style={style.label2}>Staying Country: </Text>
            <Text style={style.detail2}>{profile.partnerStayingCountry}</Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label2}>City : </Text>
            <Text style={style.detail2}>{profile.partnerCity}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              style={style.image}
              source={require('../../assets/Icons/appearancePartner.png')}
            />
            <Text style={style.labelTag}>Partner Appearance </Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label2}>Body Physique: </Text>
            <Text style={style.detail2}>{profile.partnerBodyPhysique}</Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label2}>Minimum Height: </Text>
            <Text style={style.detail2}>{profile.partnerSelectedHeight}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              style={style.image}
              source={require('../../assets/Icons/education.png')}
            />
            <Text style={style.labelTag}>Educational Background </Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label2}>Education: </Text>
            <Text style={style.detail2}>{profile.partnerEducation}</Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label2}>Job Status: </Text>
            <Text style={style.detail2}>{profile.partnerJobStatus}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              style={style.image}
              source={require('../../assets/Icons/house.png')}
            />
            <Text style={style.labelTag}>House Detail</Text>
          </View>

          <View style={style.detailContainer}>
            <Text style={style.label2}>House Detail: </Text>
            <Text style={style.detail2}>...</Text>
          </View>
          <View style={style.detailContainer}>
            <Text style={style.label2}>Minimum Size: </Text>
            <Text style={style.detail2}>...</Text>
          </View>
          <View style={style.detailContainer}>
            <Text style={style.label2}>Location: </Text>
            <Text style={style.detail2}>...</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              style={style.image}
              source={require('../../assets/Icons/demand.png')}
            />
            <Text style={style.labelTag}>Other Demand: </Text>
          </View>
          <View style={style.detailContainerOtherDemand}>
            <Text style={style.OtherDemanddetail2}>
              {profile.partnerAnyDemand}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  safearea: {
    flex: 1,
    marginBottom: 30,
  },
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  headerText: {
    backgroundColor: '#0096c7',
    padding: 15,
    width: '90%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    color: 'white',
    fontSize: 22,
    fontFamily: 'Georgia',
    fontWeight: '600',
    letterSpacing: 2,
    textAlign: 'center',
  },
  image: {
    width: 25,
    height: 30,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
  },
  headerText2: {
    backgroundColor: '#0096c7',
    padding: 15,
    width: '90%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    color: 'white',
    fontSize: 22,
    fontFamily: 'Georgia',
    fontWeight: '600',
    letterSpacing: 2,
    textAlign: 'center',
  },
  borderContainer: {
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',

    marginTop: 10,
    marginBottom: 10,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    width: '95%',
    alignSelf: 'center',
  },
  label: {
    color: '#4E6E81',
    letterSpacing: 1,
    fontSize: 16,
    fontFamily: 'Georgia',
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 30,
    paddingRight: 10,
  },
  labelTag: {
    color: 'black',
    letterSpacing: 1,
    fontSize: 22,
    fontFamily: 'Georgia',
    fontWeight: '500',
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 30,
  },
  detail: {
    letterSpacing: 1,
    fontSize: 16,
    fontFamily: 'Georgia',
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10,
    color: '#0096c7',
    paddingLeft: 10,
    paddingRight: 20,
    justifyContent: 'flex-start',
    width: 190,
  },
  detail2: {
    letterSpacing: 1,
    fontSize: 16,
    fontFamily: 'Georgia',
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10,
    color: '#0096c7',
    paddingLeft: 28,
    paddingRight: 30,
    width: 190,
  },
  OtherDemanddetail2: {
    letterSpacing: 1,
    fontSize: 16,
    fontFamily: 'Georgia',
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10,
    color: '#0096c7',
    paddingLeft: 20,
    paddingRight: 40,
    width: 400,
  },
  label2: {
    color: '#4E6E81',
    letterSpacing: 1,
    fontSize: 16,
    fontFamily: 'Georgia',
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 30,
    paddingRight: 10,
  },
  detailContainerOtherDemand: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    borderWidth: 1,
    width: '95%',
  },
});
export default ProfileScreen;
