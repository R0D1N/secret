import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity } from 'react-native';

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

        <TouchableOpacity 
          style={styles.log_in_button}
          onPress={()=> console.log(email + " " + password)}>
          <Text style={styles.log_in}>Log in</Text>
        </TouchableOpacity>

        <View style={styles.reg_buttons}>
          <Button
            
            title={"Register"}/>
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
    left: 10,
    marginTop: 20
  },
  reg_input: {
    margin: 10,
    paddingLeft: 20,
    height: 40,
    width: 300,
    borderWidth: 1,
    borderRadius: 45
  },
  log_in_button: {
    marginVertical: 20,
    width: "40%",
    alignSelf: 'flex-start',
    marginLeft: "30%",
    borderRadius: 45,
    backgroundColor: '#077EFF'
  },
  log_in: {
    color: '#ffffff',
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  }
});

export default Registration;