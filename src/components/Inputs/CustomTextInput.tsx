import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput as PaperInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
interface MaterialInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}

const MaterialInput: React.FC<MaterialInputProps> = ({
  label,
  value,
  onChangeText,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>

      <PaperInput
        label={label}
        value={value}
        onChangeText={onChangeText}
      
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        theme={{
          colors: {
            primary: '#222E48',
            background: '#EEEEEE',
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    width:'90%',
    height:20,
    
   alignSelf:'center'
  },
});

export default MaterialInput;
