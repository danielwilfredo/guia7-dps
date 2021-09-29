import React from 'react';
import {View,Text, Button} from 'react-native';
export default function Home({navigation}){

 return(
 <View>
 <Text> Estamos en Home cambiando home asfasfsasfd </Text>
 <Button title="Ir a About"
 onPress={()=>{navigation.navigate("about")}}></Button>
 </View>
 );
}