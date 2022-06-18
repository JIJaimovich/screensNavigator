import { createStackNavigator } from '@react-navigation/native-stack';
import {createAppContainer} from 'react-navigation';
import About from '../screens/about';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
    Home: {
        screen: Home
    },
    ReviewDetails: {
        screen: ReviewDetails
    },
    About: {
        screen: About
    },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer;