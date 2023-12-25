import { View, TextInput, StyleSheet, SafeAreaView, Button, Alert } from 'react-native'
import React from 'react'

const Maj = () => {
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container}>

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
          <Button
            title="Left button"
            width="45%"
            onPress={() => Alert.alert('Left button pressed')}
          />
        </View>
        <View style={styles.fixToText}>
          <Button
            title="Right button"
            onPress={() => Alert.alert('Right button pressed')}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: 350,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,

  },
  fixToText: {
    flexDirection: 'column',
    marginHorizontal: 19,
    marginVertical: 10
  },

});

export default Maj