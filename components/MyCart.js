import {Button, TouchableOpacity, View, Text, Image, SafeAreaView, ScrollView, StyleSheet} from "react-native";
import {useEffect, useMemo, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useGetProducts} from "./queries";

export default function MyCart() {
  const {data} = useGetProducts()
  const [cart, setCart] = useState([])


  useEffect(() => {
    (async () => {
      let cartIds = JSON.parse(await AsyncStorage.getItem('cart'))
      if(!cartIds) cartIds =[]

      setCart(data?.filter(item => cartIds?.find(id => id === item.id)))
    })()
  }, [data, AsyncStorage.getItem('cart')]);


  const emptyCart = async () => {
    await AsyncStorage.removeItem('cart')
    setCart([])
  }


  console.log(cart)
  return    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity>
          <Button title='Empty my cart' onPress={emptyCart}></Button>
        </TouchableOpacity>

        {cart?.map(item =>
          <View key={item.id} style={{justifyContent: 'center', alignContent: 'center', flexDirection: 'column'}}>
            <Image src={item.image} style={{width: 100, height: 200}}/>
            <Text>{item.title}</Text>
          </View>
        )}
        <Text></Text>
      </ScrollView>
    </SafeAreaView>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
