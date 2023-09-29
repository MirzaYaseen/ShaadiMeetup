import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import COLORS from '../../components/colors/colors';
import HeaderText from '../../components/texts/BigText';
import SmallText from '../../components/texts/SmallText';
import CustomButton from '../../components/buttons/Custombutton';
import {TextInput, Button} from 'react-native-paper';
import {TouchableHighlight} from 'react-native-gesture-handler';
type RequirementScreenProps = {
  navigation: any;
  route: any;
};
const Requirement: React.FC<RequirementScreenProps> = ({navigation, route}) => {
  const [partnerAge, setPartnerAge] = useState<string>('');
  // const [partnerGender, setPartnerGender] = useState<string>('');
  const [partnerSelectedGender, setPartnerSelectedGender] = useState<
    string | null
  >(null);

  // const [partnerReligion, setPartnerReligion] = useState<string>('');
  const [partnerSelectedReligion, setPartnerSelectedReligion] = useState<
    string | null
  >(null);

  const [partnerCaste, setPartnerCaste] = useState<string>('');
  // const [partnerSect, setPartnerSect] = useState<string>('');
  const [partnerSelectedSect, setPartnerSelectedSect] = useState<string | null>(
    null,
  );

  // const [partnerBodyPhysique, setPartnerBodyPhysique] = useState<string>('');
  const [partnerSelectedBodyPhysique, setPartnerSelectedBodyPhysique] =
    useState<string | null>(null);

  const [partnerSelectedHeight, setPartnerSelectedHeight] = useState<
    string | null
  >(null);

  const [partnerEducation, setPartnerEducation] = useState<string>('');
  // const [partnerMaritalStatus, setpartnerMaritalStatus] = useState('');
  const [partnerSelectedMaritalStatus, setPartnerSelectedMaritalStatus] =
    useState<string | null>(null);

  // const [partnerJobStatus, setPartnerJobStatus] = useState<string>('');
  const [partnerSelectedJobStatus, setPartnerSelectedJobStatus] = useState<
    string | null
  >(null);

  // const [partnerStayingCountry, setPartnerStayingCountry] = useState('');
  const [partnerSelectedCountry, setPartnerSelectedCountry] = useState<
    string | null
  >(null);

  const [partnerCity, setPartnerCity] = useState('');
  const [partnerAnyDemand, setPartnerAnyDemand] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [ageError, setAgeError] = useState<string>('');
  const [genderError, setGenderError] = useState<string>('');
  const [religionError, setReligionError] = useState<string>('');
  const [casteError, setCasteError] = useState<string>('');
  const [sectError, setSectError] = useState<string>('');
  const [bodyPhysiqueError, setBodyPhysiqueError] = useState<string>('');
  const [educationError, setEducationError] = useState<string>('');
  const [maritalStatusError, setMaritalStatusError] = useState<string>('');
  const [jobStatusError, setJobStatusError] = useState<string>('');
  const [countryError, setCountryError] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const heightOptions = [
    {label: 'Height', value: ''},
    {label: '3\'8"', value: '3\'8"'},
    {label: '3\'9"', value: '3\'9"'},
    {label: '3\'10"', value: '3\'10"'},
    {label: '3\'11"', value: '3\'11"'},
    {label: '4\'0"', value: '4\'0"'},
    {label: '4\'1"', value: '4\'1"'},
    {label: '4\'2"', value: '4\'2"'},
    {label: '4\'3"', value: '4\'3"'},
    {label: '4\'4"', value: '4\'4"'},
    {label: '4\'5"', value: '4\'5"'},
    {label: '4\'6"', value: '4\'6"'},
    {label: '4\'7"', value: '4\'7"'},
    {label: '4\'8"', value: '4\'8"'},
    {label: '4\'9"', value: '4\'9"'},
    {label: '4\'10"', value: '4\'10"'},
    {label: '4\'11"', value: '4\'11"'},
    {label: '5\'0"', value: '5\'0"'},
    {label: '5\'1"', value: '5\'1"'},
    {label: '5\'2"', value: '5\'2"'},
    {label: '5\'3"', value: '5\'3"'},
    {label: '5\'4"', value: '5\'4"'},
    {label: '5\'5"', value: '5\'5"'},
    {label: '5\'6"', value: '5\'6"'},
    {label: '5\'7"', value: '5\'7"'},
    {label: '5\'8"', value: '5\'8"'},
    {label: '5\'9"', value: '5\'9"'},
    {label: '5\'10"', value: '5\'10"'},
    {label: '5\'11"', value: '5\'11"'},
    {label: '6\'0"', value: '6\'0"'},
    {label: '6\'1"', value: '6\'1"'},
    {label: '6\'2"', value: '6\'2"'},
    {label: '6\'3"', value: '6\'3"'},
    {label: '6\'4"', value: '6\'4"'},
    {label: '6\'5"', value: '6\'5"'},
    {label: '6\'6"', value: '6\'6"'},
    {label: '6\'7"', value: '6\'7"'},
    {label: '6\'8"', value: '6\'8"'},
    {label: '6\'9"', value: '6\'9"'},
    {label: '6\'10"', value: '6\'10"'},
    {label: '6\'11"', value: '6\'11"'},
    {label: '7\'0"', value: '7\'0"'},
    {label: '7\'1"', value: '7\'1"'},
    {label: '7\'2"', value: '7\'2"'},
    {label: '7\'3"', value: '7\'3"'},
    {label: '7\'4"', value: '7\'4"'},
    {label: '7\'5"', value: '7\'5"'},
    {label: '7\'6"', value: '7\'6"'},

    // add more options as needed
  ];

  const BodyPhysiqueOptions = [
    {label: 'Body Physique', value: ''},
    {label: 'Slim', value: 'Slim'},
    {label: 'Athletic', value: 'Athletic'},
    {label: 'Normal', value: 'Normal'},
    {label: 'Obese ', value: 'Obese'},

    // add more options as needed
  ];

  const GenderOptions = [
    {label: 'Gender', value: ''},
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},

    // add more options as needed
  ];

  const ReligionOptions = [
    {label: 'Religion', value: ''},
    {label: 'Islam', value: 'Islam'},
    {label: 'Christianity', value: 'Christianity'},

    // add more options as needed
  ];

  const SectOptions = [
    {label: 'Sect', value: ''},
    {label: 'Ahl-e-Sunnat (Muslim)', value: 'Sunni (Muslim)'},
    {label: 'Ahl-e-Hadith (Muslim)', value: 'Ahl-e-Hadees (Muslim)'},
    {label: 'Ahl-e-Tasheeh (Muslim)', value: 'Ahl-e-Tasheeh (Muslim)'},
    {label: 'Catholic (Christian)', value: 'Catholic (Christian)'},
    {label: 'Protestantism (Christian)', value: 'Protestantism (Christian)'},
    {label: 'Orthodoxy (Christian)', value: 'Orthodoxy (Christian)'},
    // add more options as needed
  ];

  const MaritalStatusOptions = [
    {label: 'Marital Status', value: ''},
    {label: 'Single', value: 'Single'},
    {label: 'Widow', value: 'Widow'},
    {label: 'Divorced', value: 'Divorced'},
    // add more options as needed
  ];

  const CountryOptions = [
    {label: 'Select Country', value: ''},
    {label: 'Australia', value: 'Australia'},
    {label: 'Canada', value: 'Canada'},
    {label: 'France', value: 'France'},
    {label: 'Germany', value: 'Germany'},
    {label: 'Italy', value: 'Italy'},
    {label: 'Kuwait', value: 'Kuwait'},
    {label: 'Pakistan', value: 'Pakistan'},
    {label: 'Qatar', value: 'Qatar'},
    {label: 'Turkey', value: 'Turkey'},
    {label: 'United Kingdom', value: 'United Kingdom'},
    {label: 'UAE', value: 'UAE'},
    {label: 'United States of America', value: 'United States of America'},
    // add more options as needed
  ];

  const JobStatusOptions = [
    {label: 'Job Status', value: ''},
    {label: 'Job Holder', value: 'Job Holder'},
    {label: 'Non-Job Holder', value: 'Non-Job Holder'},
    {label: 'Own Bussiness', value: 'Own Bussiness'},
    {label: 'Government Job', value: 'Government Job'},
    {label: 'Army Personnal', value: 'Army Personnal'},
    {label: 'Any', value: 'Any'},
    // add more options as needed
  ];

  const validatePartnerHeight = (value: string | null) => {
    if (!value) {
      setError('Select Partner Height');
      return false;
    }
    setError('');
    return true;
  };

  // const handleGenderValidation = (itemValue: string | null) => {
  //   setPartnerSelectedGender(itemValue);
  //   if (!itemValue) {
  //     setGenderError('Please select your partner Gender.');
  //   } else if (itemValue == '') {
  //     setGenderError('Please select your partner Gender.');
  //   } else {
  //     setGenderError('');
  //     // handle successful submission
  //   }
  // };

  // const handleReligionValidation = (itemValue: string | null) => {
  //   setPartnerSelectedReligion(itemValue);
  //   if (!itemValue) {
  //     setReligionError('Please select your partner religion.');
  //   } else if (itemValue == '') {
  //     setReligionError('Please select your partner religion.');
  //   } else {
  //     setReligionError('');
  //     // handle successful submission
  //   }
  // };

  // const validatePartnerGender = () => {
  //   if (!partnerSelectedGender) {
  //     setGenderError('Partner gender is required');
  //     return false;
  //   }
  //   setGenderError('');
  //   return true;
  // };

  const handlePartnerAgeChange = (age: string) => {
    setPartnerAge(age);
    validatePartnerAge(age);
  };

  const validatePartnerAge = (age: string) => {
    if (!age) {
      setAgeError('Age is required');
      return false;
    } else if (isNaN(parseInt(age))) {
      setAgeError('Age should be a number');
      return false;
    } else if (parseInt(age) < 18) {
      setAgeError('Age should be at least 18 years');
      return false;
    } else if (parseInt(age) > 60) {
      setAgeError('Age should be below 60 years');
      return false;
    }
    setAgeError('');
    return true;
  };
  

  const handlePartnerEductaionChange = (education: string) => {
    setPartnerEducation(education);
    validatePartnerEducation(education);
  };

  const validatePartnerEducation = (education: string) => {
    if (!education) {
      setEducationError('Demanded Education is required');
      return false;
    } 
    setEducationError('');
    return true;
  };


  const validatePartnerGender = (value: string | null) => {
    if (!value) {
      setGenderError('Partner gender is required');
      return false;
    }
    setGenderError('');
    return true;
  };

  const validatePartnerSelectedReligion = (value: string | null) => {
    if (!value) {
      setReligionError('Partner religion is required');
      return false;
    }
    setReligionError('');
    return true;
  };

  const validatePartnerSelectedSect = (value: string | null) => {
    if (!value) {
      setSectError('Partner sect is required');
      return false;
    }
    setSectError('');
    return true;
  };

  const validatePartnerSelectedBodyPhysique = (value: string | null) => {
    if (!value) {
      setBodyPhysiqueError('Partner Body physique is required');
      return false;
    }
    setBodyPhysiqueError('');
    return true;
  };

  const validatePartnerSelectedMaritalStatus = (value: string | null) => {
    if (!value) {
      setMaritalStatusError('Marital Status is required');
      return false;
    }
    setMaritalStatusError('');
    return true;
  };

  const validatePartnerSelectedCountry = (value: string | null) => {
    if (!value) {
      setCountryError('Country is not selected');
      return false;
    }
    setCountryError('');
    return true;
  };

  const validatePartnerSelectedJobStatus = (value: string | null) => {
    if (!value) {
      setJobStatusError('Job Status is Required');
      return false;
    }
    setJobStatusError('');
    return true;
  };

  // const handleSectValidation = (itemValue: string | null) => {
  //   setPartnerSelectedSect(itemValue);
  //   if (!itemValue) {
  //     setSectError('Please select your partner sect.');
  //   } else if (itemValue == '') {
  //     setSectError('Please select your partner sect.');
  //   } else {
  //     setSectError('');
  //     // handle successful submission
  //   }
  // };

  // const handleBodyPhysiqueValidation = (itemValue: string | null) => {
  //   setPartnerSelectedBodyPhysique(itemValue);
  //   if (!itemValue) {
  //     setBodyPhysiqueError('Please select your partner body physique.');
  //   } else if (itemValue == '') {
  //     setBodyPhysiqueError('Please select your body physique.');
  //   } else {
  //     setBodyPhysiqueError('');
  //     // handle successful submission
  //   }
  // };

  // const handleMaritalStatusValidation = (itemValue: string | null) => {
  //   setPartnerSelectedMaritalStatus(itemValue);
  //   if (!itemValue) {
  //     setMaritalStatusError('Please select your partner Marital Status.');
  //   } else if (itemValue == '') {
  //     setMaritalStatusError('Please select your Marital Status.');
  //   } else {
  //     setMaritalStatusError('');
  //     // handle successful submission
  //   }
  // };

  // const handleSelectedCountryValidation = (itemValue: string | null) => {
  //   setPartnerSelectedCountry(itemValue);
  //   if (!itemValue) {
  //     setCountryError('Please select your partner country.');
  //   } else if (itemValue == '') {
  //     setCountryError('Please select your partner country.');
  //   } else {
  //     setCountryError('');
  //     // handle successful submission
  //   }
  // };

  // const handleJobStatusValidation = (itemValue: string | null) => {
  //   setPartnerSelectedJobStatus(itemValue);
  //   if (!itemValue) {
  //     setJobStatusError('Please select your partner Job Preference.');
  //   } else if (itemValue == '') {
  //     setJobStatusError('Please select your Job Preference.');
  //   } else {
  //     setJobStatusError('');
  //     // handle successful submission
  //   }
  // };

  // const validatePartnerFields = () => {
  //   let isValid = true;

  //   // Check partnerAge field
  //   if (partnerAge < 18 || partnerAge > 100) {
  //     Alert.alert('Please enter a valid partner age between 18 and 100');
  //     isValid = false;
  //   }

  //   // Check partnerCaste field
  //   if (partnerCaste.length < 1) {
  //     Alert.alert('Please enter a valid partner caste');
  //     isValid = false;
  //   }

  //   // Check partnerSelectedHeight field
  //   if (partnerSelectedHeight.length < 1) {
  //     Alert.alert('Please enter a valid partner height');
  //     isValid = false;
  //   }

  //   // Check partnerEducation field
  //   if (partnerEducation.length < 1) {
  //     Alert.alert('Please enter a valid partner education level');
  //     isValid = false;
  //   }

  //   // Check partnerSelectedJobStatus field
  //   if (partnerSelectedJobStatus.length < 1) {
  //     Alert.alert('Please enter a valid partner job status');
  //     isValid = false;
  //   }

  //   // Check partnerSelectedCountry field
  //   if (partnerSelectedCountry.length < 1) {
  //     Alert.alert('Please enter a valid partner country');
  //     isValid = false;
  //   }

  //   // Check partnerCity field
  //   if (partnerCity.length < 1) {
  //     Alert.alert('Please enter a valid partner city');
  //     isValid = false;
  //   }

  //   // Check partnerSelectedMaritalStatus field
  //   if (partnerSelectedMaritalStatus.length < 1) {
  //     Alert.alert('Please enter a valid partner marital status');
  //     isValid = false;
  //   }

  //   // Check partnerAnyDemand field
  //   if (partnerAnyDemand.length < 1) {
  //     Alert.alert('Please enter any demands from the partner');
  //     isValid = false;
  //   }

  //   return isValid;
  // };

  const handlePress = async () => {
    // if (!validatePartnerFields()) {
    //   return;
    // }

    // const isPartnerGenderValid = validatePartnerGender();
    const isPartnerAgeValid = validatePartnerAge(partnerAge);
    const isPartnerEducationValid = validatePartnerEducation(partnerEducation);
    const isPartnerGenderValid = validatePartnerGender(partnerSelectedGender);
    const isPartnerSelectedReligionValid = validatePartnerSelectedReligion(
      partnerSelectedReligion,
    );
    const isPartnerSelectedSectValid =
      validatePartnerSelectedSect(partnerSelectedSect);
    const isPartnerSelectedBodyPhysiqueValid =
      validatePartnerSelectedBodyPhysique(partnerSelectedBodyPhysique);
    const isPartnerSelectedBodyHeightValid = validatePartnerHeight(
      partnerSelectedHeight,
    );
    const isPartnerSelectedJobStatusValid = validatePartnerSelectedJobStatus(
      partnerSelectedJobStatus,
    );
    const isPartnerSelectedMaritalStatusValid =
      validatePartnerSelectedMaritalStatus(partnerSelectedMaritalStatus);
    const isPartnerSelectedCountryValid = validatePartnerSelectedCountry(
      partnerSelectedCountry,
    );

    if (
      !isPartnerGenderValid ||
      !isPartnerSelectedReligionValid ||
      !isPartnerSelectedSectValid ||
      !isPartnerSelectedBodyPhysiqueValid ||
      !isPartnerSelectedBodyHeightValid ||
      !isPartnerSelectedJobStatusValid ||
      !isPartnerSelectedMaritalStatusValid ||
      !isPartnerSelectedCountryValid ||
      !isPartnerAgeValid ||
      !isPartnerEducationValid
    ) {
      return;
    }

    const postData = {
      fullName: route.params.fullName,
      fatherName: route.params.fatherName,
      age: route.params.age,
      selectedGender: route.params.selectedGender,
      selectedReligion: route.params.selectedReligion,
      caste: route.params.caste,
      selectedSect: route.params.selectedSect,
      weight: route.params.weight,
      selectedHeight: route.params.selectedHeight,
      education: route.params.education,
      profession: route.params.profession,
      income: route.params.income,
      fatherOccupation: route.params.fatherOccupation,
      selectedFatherAlive: route.params.selectedFatherAlive,
      selectedMotherAlive: route.params.selectedMotherAlive,
      siblings: route.params.siblings,
      selectedHouse: route.params.selectedHouse,
      selectedHouseSize: route.params.selectedHouseSize,
      selectedCountry: route.params.selectedCountry,
      city: route.params.city,
      residenceArea: route.param.residenceArea,
      selectedMaritalStatus: route.params.selectedMaritalStatus,
      phoneNumber: route.params.phoneNumber,

      partnerAge,
      // partnerGender,
      partnerSelectedGender,
      // partnerReligion,
      partnerSelectedReligion,

      partnerCaste,
      // partnerSect,
      partnerSelectedSect,

      // partnerBodyPhysique,
      partnerSelectedBodyPhysique,

      partnerSelectedHeight,
      partnerEducation,
      // partnerMaritalStatus,
      partnerSelectedMaritalStatus,

      // partnerJobStatus,
      partnerSelectedJobStatus,

      // partnerStayingCountry,
      partnerSelectedCountry,
      partnerCity,
      partnerAnyDemand,
    };

    try {
      const response = await fetch(
        'https://shaadi-meetup-new.onrender.com/api/profile/createProfile',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        },
      );

      const result = await response.json();
      Alert.alert('Thanks for Posting')
      setShowModal(true);
      navigation.navigate('BottomNavigator')
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <HeaderText text="Requirements" />
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Image
            style={styles.image}
            source={require('../../assets/Icons/point.png')}
          />
          <Text style={styles.labelTag}>Looking in Partner </Text>
        </View>
        <View style={{}}>
          <TextInput
            mode="outlined"
            activeOutlineColor="#0096c7"
            label="Age"
            style={styles.age}
            keyboardType="number-pad"
            value={partnerAge}
            onChangeText={handlePartnerAgeChange}
            onEndEditing={() => validatePartnerAge(partnerAge)}
          />
          <View
          style={{
            justifyContent: 'space-between',
            paddingLeft: 35,
            paddingRight: 50,
            marginTop: 5,
          }}>
          {ageError && <Text style={styles.error}>{ageError}</Text>}
        </View>

          <View style={styles.pickerContainer}>
            {/* <Picker
              selectedValue={partnerSelectedGender}
              onValueChange={handleGenderValidation}
              style={styles.picker}>
              {GenderOptions.map((option, index) => (
                <Picker.Item
                  key={index}
                  label={option.label}
                  value={option.value}
                />
              ))}
            </Picker> */}

            {/* <Picker
              selectedValue={partnerSelectedGender}
              onValueChange={(value) => {
                setPartnerSelectedGender(value);
                validatePartnerGender(value);
              }}
              style={styles.picker}>
              {GenderOptions.map((option, index) => (
                <Picker.Item
                  key={index}
                  label={option.label}
                  value={option.value}
                />
              ))}
            </Picker> */}
            <Picker
              selectedValue={partnerSelectedGender}
              onValueChange={value => {
                setPartnerSelectedGender(value);
                validatePartnerGender(value);
              }}
              style={styles.picker}>
              {GenderOptions.map(option => (
                <Picker.Item
                  key={option.value}
                  label={option.label}
                  value={option.value}
                />
              ))}
            </Picker>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'space-between',
            paddingLeft: 35,
            paddingRight: 50,
            marginTop: 5,
          }}>
          {genderError && <Text style={styles.error}>{genderError}</Text>}
        </View>

        <View style={styles.pickerContainer}>
          {/* <Picker
            selectedValue={partnerSelectedMaritalStatus}
            onValueChange={handleMaritalStatusValidation}
            style={styles.picker}>
            {MaritalStatusOptions.map((option, index) => (
              <Picker.Item
                key={index}
                label={option.label}
                value={option.value}
              />
            ))}
          </Picker> */}
          <Picker
            selectedValue={partnerSelectedMaritalStatus}
            onValueChange={value => {
              setPartnerSelectedMaritalStatus(value);
              validatePartnerSelectedMaritalStatus(value);
            }}
            style={styles.picker}>
            {MaritalStatusOptions.map((option, index) => (
              <Picker.Item
                key={index}
                label={option.label}
                value={option.value}
              />
            ))}
          </Picker>
        </View>

        <View
          style={{
            justifyContent: 'space-between',
            paddingLeft: 35,
            paddingRight: 50,
            marginTop: 5,
          }}>
          {maritalStatusError && (
            <Text style={styles.error}>{maritalStatusError}</Text>
          )}
        </View>

        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Image
            style={styles.image}
            source={require('../../assets/Icons/point.png')}
          />
          <Text style={styles.labelTag}>Religious Details </Text>
        </View>

        <View style={styles.pickerContainer}>
          {/* <Picker
            selectedValue={partnerSelectedReligion}
            onValueChange={handleReligionValidation}
            style={styles.picker}>
            {ReligionOptions.map((option, index) => (
              <Picker.Item
                key={index}
                label={option.label}
                value={option.value}
              />
            ))}
          </Picker> */}

          <Picker
            selectedValue={partnerSelectedReligion}
            onValueChange={value => {
              setPartnerSelectedReligion(value);
              validatePartnerSelectedReligion(value);
            }}
            style={styles.picker}>
            {ReligionOptions.map((option, index) => (
              <Picker.Item
                key={index}
                label={option.label}
                value={option.value}
              />
            ))}
          </Picker>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            paddingLeft: 35,
            paddingRight: 50,
            marginTop: 5,
          }}>
          {religionError && <Text style={styles.error}>{religionError}</Text>}
        </View>

        <View>
          <TextInput
            mode="outlined"
            activeOutlineColor="#0096c7"
            label="Caste (Optional)"
            style={styles.caste}
            value={partnerCaste}
            onChangeText={setPartnerCaste}
          />
          <View style={styles.pickerContainer}>
            {/* <Picker
              selectedValue={partnerSelectedSect}
              onValueChange={handleSectValidation}
              style={styles.picker}>
              {SectOptions.map((option, index) => (
                <Picker.Item
                  key={index}
                  label={option.label}
                  value={option.value}
                />
              ))}
            </Picker> */}
            <Picker
              selectedValue={partnerSelectedSect}
              onValueChange={value => {
                setPartnerSelectedSect(value);
                validatePartnerSelectedSect(value);
              }}
              style={styles.picker}>
              {SectOptions.map((option, index) => (
                <Picker.Item
                  key={index}
                  label={option.label}
                  value={option.value}
                />
              ))}
            </Picker>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            paddingLeft: 35,
            paddingRight: 50,
            marginTop: 5,
          }}>
          {sectError && <Text style={styles.error}>{sectError}</Text>}
        </View>

        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.image}
            source={require('../../assets/Icons/point.png')}
          />
          <Text style={styles.labelTag}>Appearance Details </Text>
        </View>

        <View>
          <View style={styles.pickerContainer}>
            {/* <Picker
              selectedValue={partnerSelectedBodyPhysique}
              onValueChange={handleBodyPhysiqueValidation}
              style={styles.picker}>
              {BodyPhysiqueOptions.map((option, index) => (
                <Picker.Item
                  key={index}
                  label={option.label}
                  value={option.value}
                />
              ))}
            </Picker> */}

            <Picker
              selectedValue={partnerSelectedBodyPhysique}
              onValueChange={value => {
                setPartnerSelectedBodyPhysique(value);
                validatePartnerSelectedBodyPhysique(value);
              }}
              style={styles.picker}>
              {BodyPhysiqueOptions.map((option, index) => (
                <Picker.Item
                  key={index}
                  label={option.label}
                  value={option.value}
                />
              ))}
            </Picker>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              paddingLeft: 35,
              paddingRight: 50,
              marginTop: 5,
            }}>
            {bodyPhysiqueError && (
              <Text style={styles.error}>{bodyPhysiqueError}</Text>
            )}
          </View>

          <View style={styles.pickerContainer}>
            {/* <Picker
              selectedValue={partnerSelectedHeight}
              onValueChange={handleValidation}
              style={styles.picker}>
              {heightOptions.map((option, index) => (
                <Picker.Item
                  key={index}
                  label={option.label}
                  value={option.value}
                />
              ))}
            </Picker> */}

            <Picker
              selectedValue={partnerSelectedHeight}
              onValueChange={value => {
                setPartnerSelectedHeight(value);
                validatePartnerHeight(value);
              }}
              style={styles.picker}>
              {heightOptions.map((option, index) => (
                <Picker.Item
                  key={index}
                  label={option.label}
                  value={option.value}
                />
              ))}
            </Picker>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              paddingLeft: 35,
              paddingRight: 50,
              marginTop: 5,
            }}>
            {error && <Text style={styles.error}>{error}</Text>}
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Image
            style={styles.image}
            source={require('../../assets/Icons/point.png')}
          />
          <Text style={styles.labelTag}>Partner Background</Text>
        </View>

        <View>
          <TextInput
            mode="outlined"
            activeOutlineColor="#0096c7"
            label="Required Education"
            style={styles.education}
            value={partnerEducation}
            onChangeText={handlePartnerEductaionChange}
            onEndEditing={() => validatePartnerEducation(partnerEducation)}
          />
         
        </View>
        
        <View
            style={{
              justifyContent: 'space-between',
              paddingLeft: 35,
              paddingRight: 50,
              marginTop: 5,
            }}>
            {educationError && <Text style={styles.error}>{educationError}</Text>}
          </View>


        <View>
          <View style={styles.pickerContainer}>
            {/* <Picker
              selectedValue={partnerSelectedJobStatus}
              onValueChange={handleJobStatusValidation}
              style={styles.picker}>
              {JobStatusOptions.map((option, index) => (
                <Picker.Item
                  key={index}
                  label={option.label}
                  value={option.value}
                />
              ))}
            </Picker> */}
            <Picker
              selectedValue={partnerSelectedJobStatus}
              onValueChange={value => {
                setPartnerSelectedJobStatus(value);
                validatePartnerSelectedJobStatus(value);
              }}
              style={styles.picker}>
              {JobStatusOptions.map((option, index) => (
                <Picker.Item
                  key={index}
                  label={option.label}
                  value={option.value}
                />
              ))}
            </Picker>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              paddingLeft: 35,
              paddingRight: 50,
              marginTop: 5,
            }}>
            {jobStatusError && (
              <Text style={styles.error}>{jobStatusError}</Text>
            )}
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Image
              style={styles.image}
              source={require('../../assets/Icons/point.png')}
            />
            <Text style={styles.labelTag}>Partner Living Details</Text>
          </View>
          <View style={styles.pickerContainer}>
            {/* <Picker
              selectedValue={partnerSelectedCountry}
              onValueChange={handleSelectedCountryValidation}
              style={styles.picker}>
              {CountryOptions.map((option, index) => (
                <Picker.Item
                  key={index}
                  label={option.label}
                  value={option.value}
                />
              ))}
            </Picker> */}
            <Picker
              selectedValue={partnerSelectedCountry}
              onValueChange={value => {
                setPartnerSelectedCountry(value);
                validatePartnerSelectedCountry(value);
              }}
              style={styles.picker}>
              {CountryOptions.map((option, index) => (
                <Picker.Item
                  key={index}
                  label={option.label}
                  value={option.value}
                />
              ))}
            </Picker>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              paddingLeft: 35,
              paddingRight: 50,
              marginTop: 5,
            }}>
            {countryError && <Text style={styles.error}>{countryError}</Text>}
          </View>

          <TextInput
            mode="outlined"
            activeOutlineColor="#0096c7"
            label="City (Optional)"
            style={styles.city}
            value={partnerCity}
            onChangeText={setPartnerCity}
          />
        </View>
        <View>
          <TextInput
            mode="outlined"
            activeOutlineColor="#0096c7"
            label="Any More Demand (Optional)"
            style={styles.demand}
            multiline={true}
            value={partnerAnyDemand}
            onChangeText={setPartnerAnyDemand}
          />
        </View>

        <SmallText text="Note: Confirm all your given details, make sure what details have you provided are original." />

        {/* <CustomButton text="Post" onPress={handlePress} /> */}
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            width: 200,
            padding: 12,
            alignSelf: 'center',
            marginBottom: 20,
            borderRadius: 15,
            backgroundColor: '#0096c7',
            elevation: 5,
          }}
          onPress={handlePress}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              textAlign: 'center',
              fontWeight: '700',
            }}>
            Post
          </Text>
        </TouchableOpacity>
        <Modal visible={showModal} animationType="slide">
          <View style={styles.modal}>
            {/* <View style={{backgroundColor:'blue', alignSelf:'center', justifyContent:'center'}}> */}
            <Text style={styles.modalText}>Thank you for your post!</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => navigation.navigate('BottomNavigator')}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>

          {/* </View> */}
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 60,
    backgroundColor: COLORS.darkblue,
    elevation: 5,
    // borderBottomEndRadius: 35,
    // borderTopLeftRadius: 30,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },

  age: {
    width: '85%',

    marginTop: 20,
    alignSelf: 'center',

    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  gender: {
    width: '85%',

    marginTop: 20,
    alignSelf: 'center',

    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  religion: {
    width: '85%',

    marginTop: 20,
    alignSelf: 'center',
    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  caste: {
    width: '85%',

    marginTop: 20,
    alignSelf: 'center',

    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  sect: {
    width: '85%',

    marginTop: 20,
    alignSelf: 'center',

    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  bodyPhysique: {
    width: '85%',

    marginTop: 20,
    alignSelf: 'center',

    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  height: {
    width: '85%',

    marginTop: 20,
    alignSelf: 'center',
    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  education: {
    width: '85%',
    alignSelf: 'center',
    marginTop: 20,

    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  maritalStatus: {
    width: '85%',

    marginTop: 20,
    alignSelf: 'center',

    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  jobStatus: {
    width: '85%',

    marginTop: 20,
    alignSelf: 'center',

    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  country: {
    width: '85%',

    marginTop: 20,
    alignSelf: 'center',

    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  city: {
    width: '85%',

    marginTop: 20,
    alignSelf: 'center',

    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  demand: {
    width: '85%',
    alignSelf: 'center',
    height: 120,
    marginTop: 20,

    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
  pickerContainer: {
    width: '85%',
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#0096c7',
    height: 50,
  },
  picker: {
    color: '#333',
  },

  modal: {
    // width:'50%',
    // height:30,
    // backgroundColor:'pink',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#0096c7',
    borderRadius: 15,
    padding: 12,
    alignSelf: 'center',
  },
  modalButtonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
  },
  image: {
    width: 30,
    height: 30,
    marginTop: 25,
    marginBottom: 10,
    marginLeft: 30,
  },
  labelTag: {
    color: 'black',
    letterSpacing: 1,
    fontSize: 20,
    fontFamily: 'Georgia',
    fontWeight: '500',
    marginTop: 25,
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 30,
  },
});
export default Requirement;
