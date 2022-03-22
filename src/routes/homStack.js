import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HelloWorldComponent from "../HelloWorldComponent";
import FriendsListComponent from "../FriendsListComponent";
import ImageScreenComponent from "../ImageScreenComponent";
import CounterComponent from "../ReusableComponents/CounterComponent"
import RandomGenerator from '../ReusableComponents/RandomGenerator'
const Screens = {
  Home: {
    screen: HelloWorldComponent,
  },
  Friends: {
    screen: FriendsListComponent,
  },
  Images: {
    screen: ImageScreenComponent,
  },
  Counter : {
    screen: CounterComponent
  },
  Random :{
    screen: RandomGenerator
  }
};
const homeStack = createStackNavigator(Screens);

export default createAppContainer(homeStack);
