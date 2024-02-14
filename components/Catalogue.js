import {useQuery} from "@tanstack/react-query";
import {View, Text, Image, StyleSheet, SafeAreaView, ScrollView, Button, TouchableOpacity} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useGetProducts} from "./queries";

export default function Catalogue() {
 const {data} = useGetProducts()

  const saveToCart = async (value) => {
    let currentCart = ''
    try {
      let currentCart = JSON.parse(await AsyncStorage.getItem('cart'))
      try {
        if(!currentCart) currentCart =[]
        await AsyncStorage.setItem('cart', JSON.stringify([...currentCart, value]));
      } catch (e) {
        // saving error
      }
    } catch (e) {
    }

  };


  (async ()=>{
    const currentCart = await AsyncStorage.getItem('cart')
    console.log(currentCart)
  })()
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {data?.map(item =>
          <View key={item.id} style={{justifyContent: 'center', alignContent: 'center', flexDirection: 'column'}}>
            <Image  src={item.image} style={{width: 100, height: 200}}/>
            <Text>{item.title}</Text>
            <TouchableOpacity>
              <Button title='Add To Cart' onPress={() => saveToCart(item.id)}/>
            </TouchableOpacity>
          </View>)}
        <Text></Text>
      </ScrollView>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
