import React from 'react';
import {View,Text, Button, Image, ScrollView} from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements'

export default function Home({navigation}){

 return(
    <ScrollView>
 <View style={{backgroundColor:'#bedadc', opacity:0.9}}>
 <Text style={{textAlign:'center', fontWeight:'bold', fontSize:25}}>Razas de Perros</Text>
 <Card>
  <Card.Title>Husky siberiano</Card.Title>
  <Card.Divider/>
        <View>
        <Image
          style={{
              height:350,
              width:350
          }}
            resizeMode="contain"
            source={require('../img/perro1.jpg')}
          />
        </View>
    </Card>
    <Card>
  <Card.Title>Pitbull</Card.Title>
  <Card.Divider/>
        <View>
        <Image
          style={{
              height:350,
              width:350
          }}
            resizeMode="contain"
            source={require('../img/pitbul.jpg')}
          />
        </View>
    </Card>
    <Card>
  <Card.Title>Golden retriever</Card.Title>
  <Card.Divider/>
        <View>
        <Image
          style={{
              height:350,
              width:350
          }}
            resizeMode="contain"
            source={require('../img/perro3.jpg')}
          />
        </View>
    </Card>
    <Card>
  <Card.Title>Pastor de Bosnia-Herzegovina y Croacia</Card.Title>
  <Card.Divider/>
        <View>
        <Image
          style={{
              height:350,
              width:350
          }}
            resizeMode="contain"
            source={require('../img/pastorbosnia.jpg')}
          />
        </View>
    </Card>
    <Card>
  <Card.Title>Gran danés</Card.Title>
  <Card.Divider/>
        <View>
          <Image
          style={{
              height:350,
              width:350
          }}
            resizeMode="contain"
            source={require('../img/perro5.jpg')}
          />
        </View>
    </Card>
 </View>
 </ScrollView>
 );
}