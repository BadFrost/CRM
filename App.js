import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './screens/Login';
import { Register } from './screens/Register';
import { Dashboard } from './screens/Dashboard';
import { EditTasks } from './screens/EditTasks';
import { NewTask } from './screens/NewTask';
import { Profile } from './screens/Profile';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="EditTasks" component={EditTasks} />
      <Stack.Screen name="NewTask" component={NewTask} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}