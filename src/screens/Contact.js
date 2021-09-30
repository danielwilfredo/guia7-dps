import React from 'react';
import {View,Text, Button, Image, ScrollView} from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements'

export default function Contact(){
 return(
    <ScrollView>
    <View style={{backgroundColor:'#bedadc', opacity:0.9}}>
    <Text style={{textAlign:'center', fontWeight:'bold', fontSize:25}}>Fotos de Gatos</Text>
    <Card>
     <Card.Title>Gatito Bonito 1</Card.Title>
     <Card.Divider/>
           <View>
           <Image
             style={{
                 height:350,
                 width:350
             }}
               resizeMode="contain"
               source={require('../img/gato1.png')}
             />
           </View>
       </Card>
       <Card>
     <Card.Title>Gatito Bonito 2</Card.Title>
     <Card.Divider/>
           <View>
           <Image
             style={{
                 height:350,
                 width:350
             }}
               resizeMode="contain"
               source={require('../img/gato2.jpg')}
             />
           </View>
       </Card>
       <Card>
     <Card.Title>Gatito Bonito 3</Card.Title>
     <Card.Divider/>
           <View>
           <Image
             style={{
                 height:350,
                 width:350
             }}
               resizeMode="contain"
               source={require('../img/gatos.jpg')}
             />
           </View>
       </Card>
       <Card>
     <Card.Title>Gatito Bonito 4</Card.Title>
     <Card.Divider/>
           <View>
           <Image
             style={{
                 height:350,
                 width:350
             }}
               resizeMode="contain"
               source={require('../img/gat.jpg')}
             />
           </View>
       </Card>
       <Card>
     <Card.Title>Gatito Bonito 5</Card.Title>
     <Card.Divider/>
           <View>
             <Image
             style={{
                 height:350,
                 width:350
             }}
               resizeMode="contain"
               source={require('../img/gato1.png')}
             />
           </View>
       </Card>
    </View>
    </ScrollView>
 );
}