import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  BackHandler,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';
import COLORS from '../../components/colors/colors';
import HeaderText from '../../components/texts/BigText';
import Next from '../../components/buttons/Next';
import {TextInput} from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';
type AddProfileScreen = {
  navigation: any;
};

const AddProfile: React.FC<AddProfileScreen> = ({navigation}) => {
  const [fullName, setFullName] = useState<string>('');
  const [fatherName, setFatherName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  // const [gender, setGender] = useState<string>('');
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  // const [religion, setReligion] = useState<string>('');
  const [selectedReligion, setSelectedReligion] = useState<string | null>(null);

  const [caste, setCaste] = useState<string>('');
  // const [sect, setSect] = useState<string>('');
  const [selectedSect, setSelectedSect] = useState<string | null>(null);

  const [weight, setWeight] = useState<string>('');
  const [selectedHeight, setSelectedHeight] = useState<string | null>(null);

  const [education, setEducation] = useState<string>('');
  const [profession, setProfession] = useState<string>('');
  const [income, setIncome] = useState('');
  const [fatherOccupation, setFatherOccupation] = useState('');
  const [selectedFatherAlive, setSelectedFatherAlive] = useState<string | null>(
    null,
  );
  const [selectedMotherAlive, setSelectedMotherAlive] = useState<string | null>(
    null,
  );

  const [siblings, setSiblings] = useState('');

  // const [houseDetails, setHouseDetails] = useState('');
  const [selectedHouse, setSelectedHouse] = useState<string | null>(null);
  // const [stayingCountry, setStayingCountry] = useState('');
  const [selectedHouseSize, setSelectedHouseSize] = useState<string | null>(
    null,
  );

  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const [city, setCity] = useState('');
  const [residenceArea, setResidenceArea] = useState('');
  // const [maritalStatus, setMaritalStatus] = useState('');
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState<
    string | null
  >(null);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [fatherNameError, setFatherNameError] = useState('');
  const [ageError, setAgeError] = useState<string>('');
  const [genderError, setGenderError] = useState<string>('');
  const [religionError, setReligionError] = useState<string>('');
  const [casteError, setCasteError] = useState<string>('');
  const [sectError, setSectError] = useState<string>('');
  const [weightError, setWeightError] = useState<string>('');
  const [educationError, setEducationError] = useState<string>('');
  const [professionError, setProfessionError] = useState<string>('');
  const [incomeError, setIncomeError] = useState<string>('');
  const [fatherOccupationError, setFatherOccupationError] = useState('');
  const [motherAliveError, setMotherAliveError] = useState('');
  const [fatherAliveError, setFatherAliveError] = useState('');
  const [siblingsError, setSiblingsError] = useState<string>('');
  const [houseDetailsError, setHouseDetailsError] = useState('');
  const [houseSizeError, setHouseSizeError] = useState('');
  const [stayingCountryError, setStayingCountryError] = useState('');
  const [cityError, setCityError] = useState('');
  const [residenceError, setResidenceError] = useState('');
  const [maritalStatusError, setMaritalStatusError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const [error, setError] = useState<string | null>(null);
  const [disabled, setDisabled] = useState(true);

  const heightOptions = [
    {label: 'Height is Above 5.7 Feet', value: 'Height is Above 5.7 Feet'},
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

  const CountryOptions = [
    {label: 'Select Country', value: 'Pakistan'},
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

  const HouseOptions = [
    {label: 'House Details', value: 'Own'},
    {label: 'Own', value: 'Own'},
    {label: 'Rent', value: 'Rent'},
    {label: 'Compromised', value: 'Compromised'},
    // add more options as needed
  ];

  const HouseSizeOptions = [
    {label: 'House Size', value: ''},
    {label: '3 Marla', value: '3 Marla'},
    {label: '5 Marla', value: '5 Marla'},
    {label: '7 Marla', value: '7 Marla'},
    {label: '10 Marla', value: '10 Marla'},
    {label: '15 Marla', value: '15 Marla'},
    {label: '1 Kanal', value: '1 Kanal'},
    {label: '1.5 Kanal', value: '1.5 Kanal'},
    {label: '2 Kanal', value: '2 Kanal'},
    {label: '2.5 Kanal', value: '2.5 Kanal'},
    {label: '3 Kanal', value: '3 Kanal'},
    {label: '4 Kanal', value: '4 Kanal'},
    {label: '5 Kanal', value: '5 Kanal'},
    {label: 'More than 5 kanal', value: 'More than 5 kanal'},
    // add more options as needed
  ];

  const MaritalStatusOptions = [
    {label: 'Marital Status', value: 'Single'},
    {label: 'Single', value: 'Single'},
    {label: 'Widow', value: 'Widow'},
    {label: 'Divorced', value: 'Divorced'},
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
    {label: 'Christian', value: 'Christian'},

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

  const FatherAliveOptions = [
    {label: 'Father Status', value: ''},
    {label: 'Working', value: 'Working'},
    {label: 'Retired', value: 'Retired'},
    {label: 'Late', value: 'Late'},
    // add more options as needed
  ];

  const MotherAliveOptions = [
    {label: 'Mother Status', value: ''},
    {label: 'Working lady', value: 'Working lady'},
    {label: 'Retired', value: 'Retired'},
    {label: 'House Maker', value: 'House Maker'},
    {label: 'Late', value: 'Late'},
    // add more options as needed
  ];

  const handleBackButton = () => {
    Alert.alert(
      'Confirm exit',
      'Are you sure you want to leave this page?',
      [
        {text: 'Cancel', onPress: () => {}},
        // {text: 'Yes', onPress: () => BackHandler.exitApp()},
        {text: 'Yes', onPress: () => navigation.navigate('BottomNavigator')},
      ],
      {cancelable: false},
    );
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    if (
      fullName &&
      age &&
      // gender &&
      selectedGender &&
      // religion &&
      selectedReligion &&
      caste &&
      // sect &&
      selectedSect &&
      weight &&
      education &&
      profession &&
      income &&
      fatherOccupation &&
      selectedFatherAlive &&
      selectedMotherAlive &&
      siblings &&
      // houseDetails &&
      // stayingCountry &&
      selectedHouse &&
      selectedHouseSize &&
      selectedCountry &&
      city &&
      residenceArea &&
      // maritalStatus &&
      selectedMaritalStatus &&
      phoneNumber &&
      selectedHeight
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }

    if (fullName.length > 25) {
      setFullNameError('Name not greater than 25 characters');
    } else if (fullName == '') {
      setFullNameError('Full name is required');
    } else if (!/^[a-zA-Z\s]+$/.test(fullName)) {
      setFullNameError('Full name can only contain alphabets and spaces');
    } else {
      setFullNameError('');
    }

    if (!fatherName) {
      setFatherNameError("Father's name is required");
    } else if (fatherName.length < 3) {
      setFatherNameError("Father's name must be at least 3 characters long");
    } else if (fatherName.length > 25) {
      setFatherNameError("Father's name cannot be longer than 25 characters");
    } else if (!/^[a-zA-Z\s]+$/.test(fatherName)) {
      setFatherNameError("Father's name can only contain alphabets and spaces");
    } else {
      setFatherNameError('');
    }

    if (age !== '' && (isNaN(Number(age)) || age.length !== 2)) {
      setAgeError('Age must be a two-digit number');
    } else if (age === '') {
      setAgeError('Enter your Age');
    } else {
      setAgeError('');
    }

    // if (
    //   gender !== '' &&
    //   !['male', 'female', 'other'].includes(gender.toLowerCase())
    // ) {
    //   setGenderError('Gender either Male,Female or Other');
    // } else if (gender == '') {
    //   setGenderError('Gender either Male,Female or Other');
    // } else {
    //   setGenderError('');
    // }

    // if (
    //   religion !== '' &&
    //   !['islam', 'hindu', 'christian'].includes(religion.toLowerCase())
    // ) {
    //   setReligionError('Religion either islam, hindu, christian');
    // } else if (religion == '') {
    //   setReligionError('Religion either islam, hindu, christian');
    // } else {
    //   setReligionError('');
    // }

    if (caste == '') {
      setCasteError('Mughal, Butt, Rana etc.');
    } else {
      setCasteError('');
    }

    // if (
    //   sect !== '' &&
    //   !['sunni', 'ahleHadees', 'shia'].includes(sect.toLowerCase())
    // ) {
    //   setSectError('Sect either sunni, wahabi, shia');
    // } else if (sect == '') {
    //   setSectError('Sect either sunni, wahabi, shia');
    // } else {
    //   setSectError('');
    // }

    if (weight !== '' && isNaN(Number(weight))) {
      setWeightError('Weight be a number');
    }
    if (weight == '') {
      setWeightError('Weight be a number');
    } else {
      setWeightError('');
    }

    if (education.length > 50) {
      setEducationError('Education not greater than 50 characters');
    } else if (education === '') {
      setEducationError('Education is required');
    } else if (!/^[a-zA-Z\s]+$/.test(education)) {
      setEducationError('Education can only contain alphabets and spaces');
    } else {
      setEducationError('');
    }

    if (profession.length > 50) {
      setProfessionError('Profession not greater than 50 characters');
    } else if (profession === '') {
      setProfessionError('Profession is required');
    } else if (!/^[a-zA-Z\s]+$/.test(profession)) {
      setProfessionError('Profession can only contain alphabets and spaces');
    } else {
      setProfessionError('');
    }

    if (isNaN(+income) || +income <= 10000 || +income >= 10000000) {
      setIncomeError('At least income should be (PKR. 10000)');
    } else {
      setIncomeError('');
    }

    if (fatherOccupation.length > 50) {
      setFatherOccupationError(
        'Father Occupation not greater than 50 characters',
      );
    } else if (fatherOccupation === '') {
      setFatherOccupationError('Father Occupation is required');
    } else if (!/^[a-zA-Z\s]+$/.test(fatherOccupation)) {
      setFatherOccupationError(
        'Father Occupatio can only contain alphabets and spaces',
      );
    } else {
      setFatherOccupationError('');
    }

    if (siblings.length > 20) {
      setSiblingsError('Contact Admin, Special Task');
    } else if (siblings === '') {
      setSiblingsError('Number of Siblings required');
    } else {
      setSiblingsError('');
    }

    // if (
    //   houseDetails !== '' &&
    //   !['own', 'rent'].includes(houseDetails.toLowerCase())
    // ) {
    //   setHouseDetailsError('Choose one own, rent');
    // } else if (houseDetails === '') {
    //   setHouseDetailsError('Choose one own, rent');
    // } else {
    //   setHouseDetailsError('');
    // }

    //  if (selectedCountry === '') {
    //   setStayingCountryError('Staying Country is required');
    // } else {
    //   setStayingCountryError('');
    // }

    if (city.length > 25) {
      setCityError('City name not greater than 25 characters');
    } else if (city === '') {
      setCityError('Enter your living City Name');
    } else if (!/^[a-zA-Z\s]+$/.test(city)) {
      setCityError('only alphabets and spaces');
    } else {
      setCityError('');
    }

    if (residenceArea.length > 25) {
      setResidenceError('Area name not greater than 25 characters');
    } else if (residenceArea === '') {
      setResidenceError('Enter your living Area');
    } else {
      setResidenceError('');
    }

    // if (
    //   maritalStatus !== '' &&
    //   !['single', 'married', 'divorced', 'widow'].includes(
    //     maritalStatus.toLowerCase(),
    //   )
    // ) {
    //   setMaritalStatusError('Single, Married, Divorced, Widow');
    // } else if (maritalStatus === '') {
    //   setMaritalStatusError('Single, Married, Divorced, Widow');
    // } else {
    //   setMaritalStatusError('');
    // }

    // if (phoneNumber !== '' && isNaN(Number(phoneNumber))) {
    //   setPhoneNumberError('Enter Valid Cell #');
    // } else if (Number(phoneNumber) < 12) {
    //   setPhoneNumberError('Enter Valid number without spaces');
    // } else if (phoneNumber == '') {
    //   setPhoneNumberError('Enter Active Cell #');
    // } else {
    //   setPhoneNumberError('');
    // }
  }, [
    fullName,
    fatherName,
    age,
    // gender,
    selectedGender,
    // religion,
    selectedReligion,
    caste,
    // sect,
    selectedSect,
    weight,
    education,
    profession,
    income,
    fatherOccupation,
    selectedFatherAlive,
    selectedMotherAlive,
    siblings,

    // houseDetails,
    // stayingCountry,
    selectedHouse,
    selectedCountry,

    city,
    residenceArea,
    // maritalStatus,
    selectedMaritalStatus,

    phoneNumber,
    selectedHeight,
  ]);

  const handleValidation = (itemValue: string | null) => {
    setSelectedHeight(itemValue);
    if (!itemValue) {
      setError('Please select a height.');
    } else if (itemValue == '') {
      setError('Please select a height.');
    } else {
      setError(null);
      // handle successful submission
    }
  };

  const handleCountryValidation = (itemValue: string | null) => {
    setSelectedCountry(itemValue);
    if (!itemValue) {
      setStayingCountryError('Please select a Country.');
    } else if (itemValue == '') {
      setStayingCountryError('Please select a Country.');
    } else {
      setStayingCountryError('');
      // handle successful submission
    }
  };

  const handleHouseValidation = (itemValue: string | null) => {
    setSelectedHouse(itemValue);
    if (!itemValue) {
      setHouseDetailsError('Please select house detail.');
    } else if (itemValue == '') {
      setHouseDetailsError('Please select house detail.');
    } else {
      setHouseDetailsError('');
      // handle successful submission
    }
  };

  const handleHouseSizeValidation = (itemValue: string | null) => {
    setSelectedHouseSize(itemValue);
    if (!itemValue) {
      setHouseSizeError('Please select your house size.');
    } else if (itemValue == '') {
      setHouseSizeError('Please select your house size.');
    } else {
      setHouseSizeError('');
      // handle successful submission
    }
  };

  const handleMaritalStatusValidation = (itemValue: string | null) => {
    setSelectedMaritalStatus(itemValue);
    if (!itemValue) {
      setMaritalStatusError('Please select your Marital status.');
    } else if (itemValue == '') {
      setMaritalStatusError('Please select your Marital status.');
    } else {
      setMaritalStatusError('');
      // handle successful submission
    }
  };

  const handleGenderValidation = (itemValue: string | null) => {
    setSelectedGender(itemValue);
    if (!itemValue) {
      setGenderError('Please select your gender.');
    } else if (itemValue == '') {
      setGenderError('Please select your gender.');
    } else {
      setGenderError('');
      // handle successful submission
    }
  };

  const handleReligionValidation = (itemValue: string | null) => {
    setSelectedReligion(itemValue);
    if (!itemValue) {
      setReligionError('Please select any religion.');
    } else if (itemValue == '') {
      setReligionError('Please select any religion.');
    } else {
      setReligionError('');
      // handle successful submission
    }
  };

  const handleSectValidation = (itemValue: string | null) => {
    setSelectedSect(itemValue);
    if (!itemValue) {
      setSectError('Please select any Sect according to religion.');
    } else if (itemValue == '') {
      setSectError('Please select any Sect according to religion.');
    } else {
      setSectError('');
      // handle successful submission
    }
  };

  const handleFatherAliveValidation = (itemValue: string | null) => {
    setSelectedFatherAlive(itemValue);
    if (!itemValue) {
      setFatherAliveError('Please select your father status.');
    } else if (itemValue == '') {
      setFatherAliveError('Please select your father status.');
    } else {
      setFatherAliveError('');
      // handle successful submission
    }
  };
  const handleMotherAliveValidation = (itemValue: string | null) => {
    setSelectedMotherAlive(itemValue);
    if (!itemValue) {
      setMotherAliveError('Please select your mother status.');
    } else if (itemValue == '') {
      setMotherAliveError('Please select your mother status.');
    } else {
      setMotherAliveError('');
      // handle successful submission
    }
  };

  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text);
    const phoneNumberPattern =
      /^(\+92|0)?(3\d{2}|4[5-9]\d|5\d{2}|6\d{2}|7\d{2}|8\d{2}|9\d{2})\d{7}$/;
    if (phoneNumberPattern.test(text)) {
      setPhoneNumberError('');
    } else {
      setPhoneNumberError('Invalid phone number, try without spaces');
    }
  };

  const handlePress = () => {
    navigation.navigate('Requirement', {
      fullName: fullName,
      fatherName: fatherName,
      age: age,
      // gender: gender,
      selectedGender: selectedGender,

      // religion: religion,
      selectedReligion: selectedReligion,

      caste: caste,
      // sect: sect,
      selectedSect: selectedSect,

      weight: weight,
      selectedHeight: selectedHeight,
      education: education,
      profession: profession,
      income: income,
      fatherOccupation: fatherOccupation,
      selectedFatherAlive: selectedFatherAlive,
      selectedMotherAlive: selectedMotherAlive,
      siblings: siblings,

      // houseDetails: houseDetails,
      selectedHouse: selectedHouse,
      selectedHouseSize: selectedHouseSize,

      // stayingCountry: stayingCountry,
      selectedCountry: selectedCountry,

      city: city,
      residenceArea: residenceArea,
      // maritalStatus: maritalStatus,
      selectedMaritalStatus: selectedMaritalStatus,
      phoneNumber: phoneNumber,
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <HeaderText text="Personal Details" />
        </View>
        <View>
          <TextInput
            autoCapitalize="none"
            mode="outlined"
            activeOutlineColor="#0096c7"
            label="Full Name"
            style={styles.fullname}
            value={fullName}
            onChangeText={setFullName}
          />
          <View
            style={{
              justifyContent: 'space-between',
              paddingLeft: 35,
              paddingRight: 50,
              marginTop: 5,
            }}>
            {fullNameError && <Text style={styles.error}>{fullNameError}</Text>}
          </View>

          <TextInput
            mode="outlined"
            activeOutlineColor="#0096c7"
            label="Father Name"
            style={styles.fathername}
            value={fatherName}
            onChangeText={setFatherName}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            paddingLeft: 35,
            paddingRight: 50,
            marginTop: 5,
          }}>
          {fatherNameError && (
            <Text style={styles.error}>{fatherNameError}</Text>
          )}
        </View>

        <View>
          <TextInput
            autoCapitalize="none"
            mode="outlined"
            activeOutlineColor="#0096c7"
            label="Age"
            style={styles.age}
            keyboardType={'number-pad'}
            value={age}
            onChangeText={setAge}
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
            <Picker
              selectedValue={selectedGender}
              onValueChange={handleGenderValidation}
              style={styles.picker}>
              {GenderOptions.map((option, index) => (
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
          {genderError && <Text style={styles.error}>{genderError}</Text>}
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedReligion}
            onValueChange={handleReligionValidation}
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
            paddingRight: 20,
            marginTop: 5,
          }}>
          {religionError ? (
            <Text style={styles.error}>{religionError}</Text>
          ) : null}
        </View>

        <View>
          <TextInput
            autoCapitalize="none"
            mode="outlined"
            activeOutlineColor="#0096c7"
            label="Caste"
            style={styles.caste}
            value={caste}
            onChangeText={setCaste}
          />
          <View
            style={{
              justifyContent: 'space-between',
              paddingLeft: 35,
              paddingRight: 50,
              marginTop: 5,
            }}>
            {casteError && <Text style={styles.error}>{casteError}</Text>}
          </View>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedSect}
              onValueChange={handleSectValidation}
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

        <View>
          <TextInput
            mode="outlined"
            activeOutlineColor="#0096c7"
            label="Weight"
            style={styles.weight}
            keyboardType="number-pad"
            value={weight}
            onChangeText={setWeight}
          />
          <View
            style={{
              justifyContent: 'space-between',
              paddingLeft: 35,
              paddingRight: 50,
              marginTop: 5,
            }}>
            {weightError && <Text style={styles.error}>{weightError}</Text>}
          </View>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedHeight}
              onValueChange={handleValidation}
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
              paddingLeft: 35,
              paddingRight: 70,
              marginTop: 5,
            }}>
            {error && <Text style={styles.error}>{error}</Text>}
          </View>
        </View>

        <View>
          <TextInput
            mode="outlined"
            activeOutlineColor="#0096c7"
            label="Education"
            style={styles.education}
            value={education}
            onChangeText={setEducation}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 35,
              paddingRight: 20,
              marginTop: 5,
            }}>
            {educationError ? (
              <Text style={styles.error}>{educationError}</Text>
            ) : null}
          </View>
          <TextInput
            mode="outlined"
            activeOutlineColor="#0096c7"
            label="Profession"
            style={styles.profession}
            value={profession}
            onChangeText={setProfession}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 35,
              paddingRight: 20,
              marginTop: 5,
            }}>
            {professionError ? (
              <Text style={styles.error}>{professionError}</Text>
            ) : null}
          </View>
        </View>

        <View>
          <TextInput
            mode="outlined"
            activeOutlineColor="#0096c7"
            label="Monthly Income"
            style={styles.income}
            onChangeText={setIncome}
            keyboardType="number-pad"
            value={income}
          />
          <View
            style={{
              justifyContent: 'space-between',
              paddingLeft: 35,
              paddingRight: 20,
              marginTop: 5,
            }}>
            {incomeError ? (
              <Text style={styles.error}>{incomeError}</Text>
            ) : null}
          </View>

          <TextInput
            mode="outlined"
            activeOutlineColor="#0096c7"
            label="Father Occupassion"
            style={styles.fatheroccupation}
            value={fatherOccupation}
            onChangeText={setFatherOccupation}
          />
        </View>

        <View
          style={{
            justifyContent: 'space-between',
            paddingLeft: 35,
            paddingRight: 20,
            marginTop: 5,
          }}>
          {fatherOccupationError ? (
            <Text style={styles.error}>{fatherOccupationError}</Text>
          ) : null}
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedFatherAlive}
            onValueChange={handleFatherAliveValidation}
            style={styles.picker}>
            {FatherAliveOptions.map((option, index) => (
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
            paddingLeft: 35,
            paddingRight: 70,
            marginTop: 5,
          }}>
          {fatherAliveError && (
            <Text style={styles.error}>{fatherAliveError}</Text>
          )}
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedMotherAlive}
            onValueChange={handleMotherAliveValidation}
            style={styles.picker}>
            {MotherAliveOptions.map((option, index) => (
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
            paddingLeft: 35,
            paddingRight: 70,
            marginTop: 5,
          }}>
          {motherAliveError && (
            <Text style={styles.error}>{motherAliveError}</Text>
          )}
        </View>

        <View>
          <TextInput
            autoCapitalize="none"
            mode="outlined"
            activeOutlineColor="#0096c7"
            label="Siblings"
            style={styles.siblings}
            value={siblings}
            keyboardType={'number-pad'}
            onChangeText={setSiblings}
          />
          <View
            style={{
              justifyContent: 'space-between',
              paddingLeft: 35,
              paddingRight: 50,
              marginTop: 5,
            }}>
            {siblingsError && <Text style={styles.error}>{siblingsError}</Text>}
          </View>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedHouse}
              onValueChange={handleHouseValidation}
              style={styles.picker}>
              {HouseOptions.map((option, index) => (
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
          {houseDetailsError && (
            <Text style={styles.error}>{houseDetailsError}</Text>
          )}
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedHouseSize}
            onValueChange={handleHouseSizeValidation}
            style={styles.picker}>
            {HouseSizeOptions.map((option, index) => (
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
          {houseSizeError && <Text style={styles.error}>{houseSizeError}</Text>}
        </View>

        <View>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedCountry}
              onValueChange={handleCountryValidation}
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

          <TextInput
            mode="outlined"
            activeOutlineColor="#0096c7"
            label="Staying City"
            style={styles.city}
            value={city}
            onChangeText={setCity}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            paddingLeft: 35,
            paddingRight: 50,
            marginTop: 5,
          }}>
          {cityError && <Text style={styles.error}>{cityError}</Text>}
        </View>

        <TextInput
          mode="outlined"
          activeOutlineColor="#0096c7"
          label="Residence Area/Address"
          style={styles.city}
          value={residenceArea}
          onChangeText={setResidenceArea}
        />
        <View
          style={{
            justifyContent: 'space-between',
            paddingLeft: 35,
            paddingRight: 50,
            marginTop: 5,
          }}>
          {residenceError && <Text style={styles.error}>{residenceError}</Text>}
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedMaritalStatus}
            onValueChange={handleMaritalStatusValidation}
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
            paddingLeft: 35,
            paddingRight: 20,
            marginTop: 5,
          }}>
          {maritalStatusError ? (
            <Text style={styles.error}>{maritalStatusError}</Text>
          ) : null}
        </View>

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <TextInput
            mode="outlined"
            activeOutlineColor="#0096c7"
            label="Phone number"
            placeholder="+92XXXXXXXXXX"
            style={styles.city}
            keyboardType="number-pad"
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
          />
        </View>

        <View style={{paddingLeft: 35, paddingRight: 20, marginTop: 5}}>
          {phoneNumberError ? (
            <Text style={{color: 'red'}}>{phoneNumberError}</Text>
          ) : null}
        </View>
        {/* <Button title="Next" onPress={handlePress} disabled={disabled} /> */}
        <TouchableHighlight
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            width: '85%',
            padding: 12,
            alignSelf: 'center',
            marginBottom: 20,
            borderRadius: 15,
            backgroundColor: disabled ? 'grey' : '#0096c7',
            elevation: 5,
          }}
          disabled={disabled}
          onPress={handlePress}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              textAlign: 'center',
              fontWeight: '700',
            }}>
            Next
          </Text>
        </TouchableHighlight>
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
    // borderBottomEndRadius: 5,
    // borderTopLeftRadius: 30,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  fullname: {
    width: '85%',
    // padding: 5,
    // borderWidth: 1,
    marginTop: 20,
    alignSelf: 'center',
    // paddingLeft: 5,
    // backgroundColor: 'transparent',
    // borderColor: 'blue',
    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  fathername: {
    width: '85%',
    // padding: 5,
    // borderWidth: 1,
    marginTop: 20,
    alignSelf: 'center',
    // paddingLeft: 5,

    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  age: {
    width: '85%',
    // padding: 5,
    // borderWidth: 1,
    marginTop: 20,
    alignSelf: 'center',

    // paddingLeft: 5,
    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  gender: {
    width: '85%',
    // padding: 5,
    // borderWidth: 1,
    marginTop: 20,
    alignSelf: 'center',
    // paddingLeft: 5,
    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  religion: {
    width: '85%',
    // padding: 5,
    // borderWidth: 1,

    marginTop: 20,

    alignSelf: 'center',
    // paddingLeft: 5,
    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  caste: {
    width: '85%',
    // padding: 5,
    // borderWidth: 1,
    marginTop: 20,
    alignSelf: 'center',
    // paddingLeft: 5,
    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },

  sect: {
    width: '85%',
    // padding: 5,
    // borderWidth: 1,
    marginTop: 20,
    alignSelf: 'center',

    // paddingLeft: 5,
    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  weight: {
    width: '85%',
    // padding: 5,
    // borderWidth: 1,
    marginTop: 20,
    alignSelf: 'center',
    // paddingLeft: 5,
    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  height: {
    width: '85%',
    // padding: 5,
    // borderWidth: 1,
    marginTop: 20,
    alignSelf: 'center',
    // paddingLeft: 5,
    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  education: {
    width: '85%',
    // padding: 5,
    // borderWidth: 1,

    marginTop: 20,
    alignSelf: 'center',
    // paddingLeft: 5,
    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  profession: {
    width: '85%',
    // padding: 5,
    // borderWidth: 1,

    marginTop: 20,
    alignSelf: 'center',
    // paddingLeft: 5,
    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  income: {
    width: '85%',
    // padding: 5,
    // borderWidth: 1,

    marginTop: 20,
    alignSelf: 'center',
    // paddingLeft: 5,
    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  fatheroccupation: {
    width: '85%',
    // padding: 5,
    // borderWidth: 1,

    marginTop: 20,
    alignSelf: 'center',
    // paddingLeft: 5,
    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  siblings: {
    width: '85%',
    // padding: 5,
    // borderWidth: 1,
    marginTop: 20,
    alignSelf: 'center',
    // paddingLeft: 5,
    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  houseDetails: {
    width: '85%',
    // padding: 5,
    // borderWidth: 1,
    marginTop: 20,
    alignSelf: 'center',
    // paddingLeft: 5,
    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  country: {
    width: '85%',
    // padding: 5,
    // borderWidth: 1,
    marginTop: 20,
    alignSelf: 'center',

    // paddingLeft: 5,
    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  city: {
    width: '85%',
    // padding: 5,
    // borderWidth: 1,
    marginTop: 20,
    alignSelf: 'center',
    // paddingLeft: 5,
    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  maritalStatus: {
    width: '85%',
    // padding: 5,
    // borderWidth: 1,

    marginTop: 20,

    // paddingLeft: 5,
    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  phoneNumber: {
    width: '85%',
    // padding: 5,
    // borderWidth: 1,

    marginTop: 20,

    // paddingLeft: 5,
    // borderTopLeftRadius: 20,
    // borderBottomEndRadius: 20,
    // borderBottomRightRadius: 20
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
  errorcaste: {
    color: 'red',
    fontSize: 12,
  },
  errorcell: {
    color: 'red',
    fontSize: 12,
    marginBottom: 30,
  },

  pickerContainer: {
    width: '85%',
    // padding: 5,
    borderWidth: 2,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 5,
    borderColor: '#0096c7',
    height: 50,
  },
  picker: {
    color: '#333',
  },
});
export default AddProfile;
