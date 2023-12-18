import { useContext } from 'react';
import {
  View,
  Image,
  FlatList,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import styles from './ListStyle';
import { NounsContext } from '../../controller/NounsController';

const NounsList = () => {
  const { nounsState, dispatch } = useContext(NounsContext);
  console.log(nounsState);

  const Item = (item) => {
    const { id, name, bornAt, photo } = item;
    return (
      <View style={styles.listcontainer}>
        <Image style={styles.listlead} source={{ uri: photo }} />
        <View style={styles.listtextcontainer}>
          <Text style={styles.listhead}>{name}</Text>
          <Text style={styles.listtext}>
            {bornAt} {id}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch({ type: 'READNOUN', id: id })}>
          <Image style={styles.listtrail} source={{ uri: photo }} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      data={nounsState.nouns}
      renderItem={({ item }) => (
        <Item
          id={item.id}
          name={item.name}
          bornAt={item.bornAt}
          photo={item.photo}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default NounsList;