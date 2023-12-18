// ReadNounView.js
import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from 'react-native';
import Background from '../assets/Background';
import styles from './UpfrontStyles'; // Import the styles module
import { useNounsContext } from '../controller/NounsController';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ReadNounView = () => {
  const { dispatch, nounsState } = useNounsContext();
  const navigation = useNavigation();
  const snackBarRef = useRef(null);

  const displaySnackBar = () => {
    console.log(snackBarRef);
    snackBarRef.current?.showSnackBarFunction('Snackbar example');
  };

  const IconButton = ({ text, iconName, onPress }) => {
    return (
      <TouchableOpacity style={s.button} onPress={onPress}>
        <Icon name={iconName} style={s.icon} />
        {/*<Text style={styles.buttonText}>{text}</Text>*/}
      </TouchableOpacity>
    );
  };

  const IconTextButton = ({ text, iconName, onPress }) => {
    return (
      <TouchableOpacity style={[s.button, s.flexrow]} onPress={onPress}>
        <Icon name={iconName} style={s.icon} />
        <Text style={s.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={s.safeArea}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={s.cardWrapper}>
        <View style={s.card}>
          <View style={s.imageWrapper}>
            <Background
              fromColor="#000000"
              toColor="#FFFFFF00"
              opacityColor1={0}>
              <Image
                style={s.cardImage}
                source={{ uri: nounsState.noun.photo }}
              />
            </Background>
          </View>
          <View style={s.cardContent}>
            <View style={[s.flexrow, s.spacebetween]}>
              <View style={s.headWrapper}>
                <Text style={s.h3}>{nounsState.noun.name}</Text>
              </View>
              <View style={s.flexrow}>
                <IconButton
                  text="Update"
                  iconName="pencil"
                  onPress={() =>
                    dispatch({ type: 'UPDATENOUN', payload: nounsState.noun })
                  }
                />
                <IconButton
                  text="Delete"
                  iconName="trash"
                  onPress={() => navigation.navigate('MyModal')}
                />
                {/*<IconTextButton
                  text="Delete"
                  iconName="trash"
                  onPress="action"
                />*/}
              </View>
            </View>
            <Text>
              {nounsState.noun.bornAt} {nounsState.noun.id}
            </Text>

            {/*<IconTextButton
              text="Delete"
              iconName="trash"
              onPress={displaySnackBar}
            />
            <SnackBar ref={snackBarRef} />*/}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  cardWrapper: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    paddingBottom: 16,
    minHeight: 500,
  },
  h3: {
    fontSize: 20,
  },
  cardImage: {
    // borderRadius: 8,
    width: '100%',
    aspectRatio: 4 / 3,
    objectFit: 'cover',
    mixBlendMode: 'overlay',
    // height: 200,
  },
  cardContent: {
    margin: 16,
    maxWidth: '100%',
  },
  headWrapper: {
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  imageWrapper: {
    width: '100%',
    aspectRatio: 4 / 3,
    maxHeight: 320,
    backgroundImage: 'linear-gradient( #FFFFFF00, #FFF 30vh )',
  },
  spacebetween: {
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#E8DEF8',
    alignItems: 'center',
    justifyContent: 'center',
    // width: 48,
    height: 40,
    borderRadius: 48,
    // lineHeight: 24,
    padding: 12,
    margin: 2,
  },
  buttonText: {
    // color: lite,
    paddingLeft: 4,
    fontWeight: 'bold',
    fontSize: 12,
  },
  icon: {
    color: 'black',
    fontSize: 16,
  },
  flexrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ReadNounView;
