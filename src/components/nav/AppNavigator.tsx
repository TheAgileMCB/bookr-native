import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../home/Home';
import Map from '../map/Maps';
import Books from '../books/Books';

const RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
  Map: {
    screen: Map
  },
  Books: {
    screen: Books
  }
});

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;