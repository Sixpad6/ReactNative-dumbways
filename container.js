import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs' 
import { Ionicons } from '@expo/vector-icons'

import TodoApp from "./src/component/todoApp";
import Calculator from "./src/component/calculator";
import Hello from "./src/component/Hello";
import DetailTodo from "./src/component/detailTodo";

import {useTheme} from 'native-base'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyTab(){
    const theme = useTheme()
    return(
        <Tab.Navigator 
        initialRouteName="Hello"
        screenOptions={({ route })=>({
            headerMode : 'screen',
            headerTintColor : 'white',
            headerStyle :{backgroundColor:theme.colors.primary['500 ']},
            tabBarIcon: ({focused, color, size}) =>{
                let iconName

                if(route.name === 'Hello'){
                    iconName = focused ? 'ios-home' : 'ios-home-outline'
                } else if (route.name === 'TodoApp'){
                    iconName = focused ? 'list-circle' : 'list'
                }else if (route.name === 'Calculator'){
                    iconName = focused ? 'md-calculator' : 'md-calculator-outline'
                }
                return <Ionicons name = {iconName} size={size} color={color}/>
            },
            tabBarActiveTintColor: theme.colors.primary['900'],
            tabBarInactiveTintColor : 'grey'
            
        })}
        >
            <Tab.Screen
                name="Hello"
                component={Hello}
                options = {{
                    headerShown : false
                }}
            />
            <Tab.Screen
                name="TodoApp"
                component={TodoApp}
                options = {{
                    headerShown : false
                }}
            />
            <Tab.Screen
                name="Calculator"
                component={Calculator}
                options = {{
                    headerShown : false
                }}
            />
        </Tab.Navigator>
    )
}

export default function Container(){
    return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name="Home"
            component={MyTab}
            options = {{
                headerShown: false,
            }}
            />
            <Stack.Screen 
            name="TodoApp"
            component={TodoApp}
            options = {{
                headerShown: false,
            }}
            />
            <Stack.Screen 
            name="Calculator"
            component={Calculator}
            options = {{
                headerShown: false,
            }} 
            />
             <Stack.Screen 
            name="DetailTodo"
            component={DetailTodo}
            options = {{
                headerShown: false,
            }} 
            />
        </Stack.Navigator>
    </NavigationContainer>
    )
}




