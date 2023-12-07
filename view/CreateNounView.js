
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { NounsContext } from '../controller/NounsController';

const CreateScreen = ({ navigation }) => {
  const { dispatch } = useContext(NounsContext);
  const [name, setName] = useState('');
  const [bornAt, setBornAt] = useState('');
  const [photo, setPhoto] = useState('');

  const AddContact = () => {

    dispatch({
      type: 'CREATENOUN',
      payload: {
        name,
        bornAt,
        photo,
      },
    });

    // terug 
    navigation.goBack();
  };

  return (
    <View>
      <Text>Name:</Text>
      <TextInput
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder="Enter name"
      />

      <Text>Born At:</Text>
      <TextInput
        onChangeText={(text) => setBornAt(text)}
        value={bornAt}
        placeholder="Enter Born At"
      />

      <Text>Photo URL:</Text>
      <TextInput
        onChangeText={(text) => setPhoto(text)}
        value={photo}
        placeholder=" photo URL"
      />

      <Button title="Contact toevoegen" onPress={AddContact} />
    </View>
  );
};

export default CreateScreen;


