import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

const  Registration = () => {

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
      <View style={styles.registration}>
        <View>
          <Text style={styles.reg_text}>Enter your email</Text>
          <TextInput
            style={styles.reg_input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email"/>
        </View>
        <View>
          <Text style={styles.reg_text}>Enter your password</Text>
          <TextInput
            style={styles.reg_input}
            onChangeText={onChangePassword}
            value={password}
            secureTextEntry
            autoCorrect={false}
            placeholder="Password"/>
        </View>
        <View style={styles.reg_buttons}>
          <Button
            onPress={()=> console.log(email + " " + password)}
            title={"Register"}/>
          <Button title={"Log in"}/>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  registration: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  reg_text: {
    left: 10
  },
  reg_input: {
    margin: 10,
    paddingLeft: 20,
    height: 40,
    width: 300,
    borderWidth: 1,
    borderRadius: 45
  }
});

export default Registration;