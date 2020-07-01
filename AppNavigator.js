import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './Home';
import Map from './Maps';

const RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
  Map: {
    screen: Map
  },
});

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;