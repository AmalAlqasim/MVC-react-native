import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import LandingView from '../view/LandingView';
import NounsOverview from '../view/NounsOverview';
import ReadNounView from '../view/ReadNounView';
import ListNounsView from '../view/ListsNounsView';
import CreateNounView from '../view/CreateNounView';

// Snelle opzet view
// const CreateNounView = () => <Text>Create screen</Text>;
const UpdateNounView = () => <Text>Update screen</Text>;
const DeleteNounView = () => <Text>Delete screen</Text>;

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="LandingView">
      <Stack.Screen name="LandingView" component={LandingView} />
      <Stack.Screen name="NounsOverview" component={NounsOverview} />
      <Stack.Screen name="CreateNounView" component={CreateNounView} />
      <Stack.Screen name="ReadNounView" component={ReadNounView} />
      <Stack.Screen name="UpdateNounView" component={UpdateNounView} />
      <Stack.Screen name="DeleteNounView" component={DeleteNounView} />
      <Stack.Screen name="ListNounsView" component={ListNounsView} />
    </Stack.Navigator>
  );
};

export default Router;
