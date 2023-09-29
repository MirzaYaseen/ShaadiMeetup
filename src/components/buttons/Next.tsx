import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import COLORS from '../colors/colors';

type Props = {
  text: string;
  onPress: () => void;
  backgroundColor?: string;
  disable: string;
};

const CustomButton: React.FC<Props> = ({
  text,
  backgroundColor,
  disable,
  onPress,
}: Props) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: backgroundColor ? backgroundColor : '#EEEEEE'
          },
        ]}
        onPress={onPress}>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.buttonText}>{text}</Text>
        <Image source={require('../../assets/Icons/double.png')} style={styles.image}/>
            </View>
       
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '30%',
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'center',
    alignSelf:'flex-end',
    marginRight:20,
    marginTop: 30,
    marginBottom: 10,
    elevation: 5,

  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: '700',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
   paddingLeft:15
  },
  image:{
    width:'50%',
    height:'50%',
    marginTop:7
  }
});
export default CustomButton;
