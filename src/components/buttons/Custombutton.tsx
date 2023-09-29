import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
const { height, width } = Dimensions.get('window');

type Props = {
  text: string;
  onPress: () => void;
  backgroundColor?: string;
};

const CustomButton: React.FC<Props> = ({
  text,
  backgroundColor,
  onPress,
}: Props) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: backgroundColor ? backgroundColor : '#222E48',
          },
        ]}
        onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  button: {
    padding: 20,
    width: '50%',
    height: 60,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
    elevation: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: '600',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CustomButton;
