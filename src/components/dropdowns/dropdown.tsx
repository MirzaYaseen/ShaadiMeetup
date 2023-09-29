import DropDownPicker from 'react-native-dropdown-picker';
import React, {useState} from 'react'
import { StyleSheet} from 'react-native'


function DropDown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Age', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

  return (
    <DropDownPicker style={styles.dropdown}
    placeholder='Select Age'
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
}
const styles = StyleSheet.create({
    dropdown:{
       width:"45%",
       justifyContent:'flex-end',
       alignItems:'flex-start',
       alignSelf:'flex-start',
       marginLeft:20,
     
    }
})
export default DropDown