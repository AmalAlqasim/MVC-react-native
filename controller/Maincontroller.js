import React from 'react';
import { NounsController } from './NounsController';
import { NavigationContainer } from '@react-navigation/native';
import Router from './Router';

const MainController = () => {
  return (
    <NavigationContainer>
      <NounsController>
        <Router />
      </NounsController>
    </NavigationContainer>
  );
};

export default MainController;
