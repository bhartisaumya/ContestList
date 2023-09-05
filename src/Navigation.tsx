import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import HomePage from "./screens/HomePage";
import ContestItem from "./screens/ContestItem";

export type RootStackParamList = {
    Home: undefined,
    Contests: {contestList: any, website: string}
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation(){   
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name = "Home" component={HomePage}/>   
                <Stack.Screen name = "Contests" component={ContestItem}/>  
            </Stack.Navigator>
        </NavigationContainer>
    )
};