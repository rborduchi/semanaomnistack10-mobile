import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './pages/Main';
import Profile from './pages/Profile';

export default createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: 'DevRadar',
        },
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: 'GitHub',
        },
      },
    },
    {
      defaultNavigationOptions: {
        headerTintColor: '#FFF',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#7D40E7',
        },
      },
    }
  )
);
