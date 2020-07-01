import { createStackNavigator } from 'react-navigation-stack';
import Home from './Home';
import Map from './Maps';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Map: { screen: Map },
});

export default AppNavigator;