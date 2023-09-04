import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "../presentations/HomeScreen";

const Stack = createStackNavigator();

const CardForFade = ({current}: {current: any}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const RootStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={'Help'}>
          <Stack.Screen
            name="SplashScreen"
            component={HomeScreen}
            options={{
              cardStyleInterpolator: CardForFade,

              headerShown: false,
              headerTitleAlign: 'left',
              headerTitle: '',

              headerStyle: {height: Platform.OS === 'ios' ? 50 : 50},
              headerTransparent: true,

            }}
          />


        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
