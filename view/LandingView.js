import { Button, SafeAreaView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LandingView = (props) => {
  const navigation = useNavigation();
  return (
    <>
      <Button
        onPress={() => navigation.navigate('NounsOverview', 'Yes')}
        title="Go to Nouns"
      />
    </>
  );
};

export default LandingView;
