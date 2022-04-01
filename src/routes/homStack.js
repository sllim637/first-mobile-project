import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HelloWorldComponent from "../HelloWorldComponent";
import FriendsListComponent from "../FriendsListComponent";
import ImageScreenComponent from "../ImageScreenComponent";
import CounterComponent from "../ReusableComponents/CounterComponent"
import RandomGenerator from '../ReusableComponents/RandomGenerator'
import TextComponent from '../ReusableComponents/TextComponent'
import BoxModelComponent from '../boxModel/boxModelComponent'
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
  },
  TextInput :{
    screen: TextComponent
  },
  BoxModel : {
    screen: BoxModelComponent
  }
};
const homeStack = createStackNavigator(Screens);

export default createAppContainer(homeStack);
