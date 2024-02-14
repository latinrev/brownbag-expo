import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MapComponent from "./components/MapComponent";
import HomeComponent from "./components/HomeComponent";
import {NavigationContainer} from '@react-navigation/native';
import Catalogue from "./components/Catalogue";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import MyCart from "./components/MyCart";
import Calendar from "./components/Calendar";
import CalendarComponent from "./components/Calendar";
import PedometerComponent from "./components/Pedometer";


const Tab = createBottomTabNavigator();
const queryClient = new QueryClient()

export default function App() {
    return (
            <QueryClientProvider client={queryClient}>
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen name="Home" component={HomeComponent}/>
                        <Tab.Screen name="Maps" component={MapComponent}/>
                        <Tab.Screen name="Catalogue" component={Catalogue}/>
                        <Tab.Screen name="Cart" component={MyCart}/>
                        <Tab.Screen name="Calendar" component={CalendarComponent}/>
                        <Tab.Screen name="Pedometer" component={PedometerComponent}/>
                    </Tab.Navigator>
                </NavigationContainer>
            </QueryClientProvider>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: '30%',
        height: '30%',
    },
});
