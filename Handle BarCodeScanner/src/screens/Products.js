import { StyleSheet, Text, SafeAreaView, FlatList, View, TextInput, Image } from 'react-native'
import React from 'react'
import { Database } from '../../Data'


const Products = () => {

  const [number, onChangeNumber] = React.useState('');

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.list}>
          <Text style={styles.arte}>Article: <Text style={styles.itms}>{item.article}</Text></Text>
          <Text style={styles.arte}> Code Article:<Text style={styles.itms}>{item.code_art}</Text> </Text>
          <Text style={styles.arte}> Prix HT: <Text style={styles.itms}>{item.pa_ht}</Text></Text>
          <Text style={styles.arte}> Prix TTC:<Text style={styles.itms}>{item.pv_ttc}</Text> </Text>
        </View>
      </View>

    )
  }
  const filteredData = Database.filter(item => item.code_art.includes(number));
  return (
    <>
      <View style={{ flexDirection: "row", alignContent: 'space-between', borderWidth: 1, borderRadius: 20, marginHorizontal: 10, marginVertical: 10, }}>
        <Image
          style={{ width: 32, height: 32, marginHorizontal: 10, marginVertical: 10 }}
          source={require('../../assets/search.png')}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="search by code article"
          keyboardType="numeric"
        />
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={number ? filteredData : Database}
          renderItem={renderItem}
          keyExtractor={item => item.code_art}
        />
      </SafeAreaView>
    </>

  )
}


export default Products

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    flexDirection: "row",
    backgroundColor: 'oldlace',
    marginHorizontal: 10,
    marginVertical: 10,
    width: "95%",
    alignContent: 'space-between',
    padding: 20,
    borderRadius: 20,

  },
  arte: {
    marginHorizontal: 2,
    marginVertical: 5,
  },
  list: {
    justifyContent: 'center',
  },
  itms: {
    color: "#f30f30",
  }, input: {
    width: 350,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderWidth: 0,

  },
})