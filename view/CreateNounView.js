import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Platform, Image, TouchableOpacity } from 'react-native';
import { useNounsContext } from '../controller/NounsController';
import * as ImagePicker from 'expo-image-picker';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

const CreateNounView = () => {
  const { nounsState, dispatch } = useNounsContext();
  const [name, setName] = useState('');
  const [bornAt, setBornAt] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
// Toestemming vragen indien nodig voor toegang tot de image gallery van het apparaat
(async () => {
  const { status } =
    await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== 'granted') {
    Alert.alert(
      'Permission required',
      'Please grant permission to access the image gallery.'
    );
  }
})();
}, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const saveNoun = () => {
    const newNoun = {
      id: nounsState.nouns.length + 1,
      name,
      bornAt,
      photo: image,
    };
    dispatch({ type: 'CREATENOUN', payload: newNoun })

  };

  return (
    <View>
      <Text>Name:</Text>
      <TextInput
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder="Inter name"
      />

      <Text>Born At:</Text>
      <TextInput
        onChangeText={(text) => setBornAt(text)}
        value={bornAt}
        placeholder=" Inter Born At"
      />

      {/* <TouchableOpacity onPress={pickImage}>
        <Text>Pick an image</Text>
      </TouchableOpacity> */}



      
      <Button title="Pick an image" onPress={pickImage} />
      {image && (
      <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
      )}
      <Button title="Contact toevoegen" onPress={saveNoun} />
    </View>
  );
};

export default CreateNounView;


