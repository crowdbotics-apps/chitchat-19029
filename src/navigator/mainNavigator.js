import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Achievements181920Navigator from '../features/Achievements181920/navigator';
import ArticleList281919Navigator from '../features/ArticleList281919/navigator';
import Contacts481917Navigator from '../features/Contacts481917/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Achievements181920: { screen: Achievements181920Navigator },
ArticleList281919: { screen: ArticleList281919Navigator },
Contacts481917: { screen: Contacts481917Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
