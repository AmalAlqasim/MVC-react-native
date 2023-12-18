import { Button, SafeAreaView, Text } from 'react-native';
import NounsList from './Lists/NounsList';
import { useNounsContext } from '../controller/NounsController';

const ListNounsView = () => {
  const { nounsState } = useNounsContext();
    // console.log(nounsState);
  return (
    <>
    <Text>List Nouns</Text>
    <Text>{nounsState.message}</Text>
      <NounsList action= 'READNOUN'/>
    </>
  );
};

export default ListNounsView;
