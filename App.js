import React from "react";
import { View,Text,StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";


const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const DrawerNav = createDrawerNavigator();

function Login({navigation}){
  return(
    <View style={styles.container}>
      <Text>Login Page</Text>
      <Button title="Don't you have Account?" onPress={() => navigation.navigate('SignUp')}/>
    </View>
  )
}

function SignUp({navigation}){
  return(
    <View style={styles.container}>
      <Text>SignUp Page</Text>
      <Button title="Do you have Account??" onPress={() => navigation.navigate('Tab')}/>
    </View>
  )
}

// function DashBoard({navigation}){
//   return(
//     <View style={styles.container}> 
//       <Text>There is DashBoard!</Text>
//       <Button title="LogOut" onPress={() => navigation.navigate('Login')}/>
//     </View>
//   )
// }

function Settings(){
  return(
    <View style={styles.container}> 
      <Text>There is Settigns Page!</Text>
    </View>
  )
}

function Profile({navigation}){
  return(
    <View style={styles.container}>
      <Text>There is Profile Page :* </Text>
      <Button title="LogOut" onPress={() => navigation.navigate('Login')}/>
    </View>
  )
}

function ChatBot(){
  return(
    <View style={styles.container}>
      <Text>You can chat with Chat-GPT </Text>
    </View>
  )
}

function Drawer(){
  return(
    <DrawerNav.Navigator>
      <DrawerNav.Screen name="Profile" component={Profile}/>
      <DrawerNav.Screen name="Chat-GPT" component={ChatBot}/>
    </DrawerNav.Navigator>
  )
}

function Tab(){
  return(
    <BottomTab.Navigator>
      <BottomTab.Screen name="Dashboard" component={Drawer}/>
      <BottomTab.Screen name="Settigns" component={Settings}/>
    </BottomTab.Navigator>
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Tab" component={Tab}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"center",
  }
})