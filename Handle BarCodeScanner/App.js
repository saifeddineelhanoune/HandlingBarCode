import React, { Component } from 'react';
import { StyleSheet, Text, View,Image,Pressable ,SafeAreaView,TextInput} from 'react-native';
//import Search from './src/screens/Search';
import Scanner from './src/screens/Scanner';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Products from './src/screens/Products';


function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
    <View>
        <Image
            style={styles.logo}
            source={require('./assets/logo.png')}
        />
    </View>
    <View style={styles.navbar}>
        <Pressable  style={styles.Container2} onPress={() => navigation.navigate('Scan')}>
            <Image
              style={styles.icon}
              source={require('./assets/switch.png')}
            />
            <Text>BarCodeScanner</Text>
        </Pressable>
        <Pressable style={styles.Container2} onPress={() => navigation.navigate('Search')} >
            <Image
              style={styles.icon}
              source={require('./assets/search.png')}
            />
          <Text>MAJ products</Text>
        </Pressable>
        <Pressable style={styles.Container2} onPress={() => navigation.navigate('Produits')} >
            <Image
              style={styles.icon}
              source={require('./assets/open-box.png')}
            />
          <Text>Search Products</Text>
        </Pressable>
    </View>
</View>
  );
}
const  ScanScreen = () => {
  return (
    <Scanner></Scanner>
  );
}
const  ProduitScreen = (value) => {
  return (
    <Products></Products>
  );
}
const  SearchScreen= ({navigation}) => {
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container3}>
      <Image
      style={{width:80,height:80}}
      source={require('./assets/search.png')}
      />
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Code scan"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Code Article"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Designation"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Qantity"
          keyboardType="numeric"
        />
        <View style={styles.fixToText}>
              <Pressable  style={styles.container4} onPress={() => navigation.navigate('Scan')}>
                  <Text>ADD</Text>
              </Pressable>
              <Pressable style={styles.container4} onPress={() => navigation.navigate('Search')} >
                  <Text>UPDATE</Text>
              </Pressable>
        </View>
      </SafeAreaView>
   </View>
  );
}
const Stack = createNativeStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
              <Stack.Screen name="La fonda" options={{headerShown: false}} component={HomeScreen}  />
              <Stack.Screen name="Scan" component={ScanScreen} />
              <Stack.Screen name="Search"  component={SearchScreen}/>
              <Stack.Screen name="Produits" component={ProduitScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginVertical:60,
    alignItems:'center',
    },
  Container2:{
    height:150,
    width:320,
    backgroundColor:'oldlace',
    marginHorizontal:10,
    marginVertical:10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    },
    container3:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
  icon:{
    padding:10,
    width:45,
    height: 45,
    marginVertical:10,
   },
  logo:{
    width:236,
    height:120,
    marginVertical:30
  },
  input: {
    width:350,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
    
  },
fixToText: {
  flexDirection: 'row',
  marginVertical:10,
},
container4:{
  marginHorizontal:10,
  width:'45%',
  alignItems:'center',
  backgroundColor:'oldlace',
  padding:9,
  
}
});
