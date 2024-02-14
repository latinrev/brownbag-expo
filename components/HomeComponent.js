import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useBatteryLevel} from "expo-battery";


export default function HomeComponent() {

const batteryLevel = useBatteryLevel()
return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Text> Current Battery Level {batteryLevel} </Text>
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
