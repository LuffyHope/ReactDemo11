import React from 'react';
import {createAppContainer, NavigationActions} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Page1 from './page/page1';
import Page2 from './page/page2';
import Page3 from './page/page3';
import Page4 from './page/page4';

const TabNavigator = createStackNavigator(
  {
    Page1: {
      screen: Page1,
    },
    Page2: {
      screen: Page2,
    },
    Page3: {
      screen: Page3,
    },
    Page4: {
      screen: Page4,
    },
  },
  {
    initialRouteName: 'Page1',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(TabNavigator);
