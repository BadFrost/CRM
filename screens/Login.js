import * as React from 'react';
import { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, Modal } from 'react-native';
import Constants from "expo-constants";
import axios from 'axios';

export function Login({ navigation }) {
  const { manifest } = Constants;
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [errText, setErrText] = useState('');

  let loginHandler = async () => {
    if (email !== '' && pass !== '') {
      const uri = `${manifest.debuggerHost.split(':').shift()}`;
      axios.post(`http://${uri}:8080/login`, {
        email: email,
        pass: pass
      })
      .then(async (res) => {
        if (res.data === 'OK') {
          navigation.navigate('Dashboard')
        }
        else if (res.data === 'User not found!') {
          setErrText(res.data)
          setModalVisible(true)
        }
        else if (res.data === 'Email or password is incorrect!') {
          setErrText(res.data)
          setModalVisible(true)
        }
      })
      .catch(async (err) => {
        console.log(err)
      });
    }
  };

  return (
    <View style={styles.container}>
      <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
        <View style={styles.modalView}>
          <Text style={styles.errorText}>{errText}</Text>
          <TouchableOpacity
            style={styles.okButton}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles.ok}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Image
        style={styles.logo}
        source={require('../assets/icons/Logo.png')}  
      />
      <View style={styles.inputEmail}>
        <TextInput  
          style={styles.inputTextEmail}
          placeholder="Enter your E-mail"
          placeholderTextColor='rgba(255, 255, 255, 0.4)'
          onChangeText={email => setEmail(email)}/>
      </View>
      <View style={styles.inputPassword}>
        <TextInput  
          secureTextEntry
          style={styles.inputTextPassword}
          placeholder="Enter your password" 
          placeholderTextColor='rgba(255, 255, 255, 0.4)'
          onChangeText={pass => setPass(pass)}/>
      </View>
      <TouchableOpacity style={styles.iFrogotMyPassword}>
        <Text style={styles.iFrogotMyPasswordText}>I forgot my password</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.loginBtn}
      onPress={() => loginHandler()}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.signUp}>
        <Text style={styles.signUpText}>If you don`t have profile, click here for registrstion</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.supportBtn}>
        <Image
          source={require('../assets/icons/IconSupport1.png')}  
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    position: 'absolute',
    top: 64,
    width: 266,
    height: 112,
    opacity: 0.7
  },
  inputEmail:{
    position: "absolute",
    width: 312,
    height:50,
    top: 215,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius:10
  },
  inputPassword:{
    position: "absolute",
    width: 312,
    height:50,
    top: 305,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius:10
  },
  inputTextEmail:{
    position: "absolute",
    top: 14,
    left: 32,
    width: 255,
    height: 22,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: 'rgba(255, 255, 255, 0.4)'
  },
  inputTextPassword:{
    position: "absolute",
    top: 14,
    left: 32,
    width: 255,
    height: 22,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: 'rgba(255, 255, 255, 0.4)'
  },
  loginBtn:{
    position: "absolute",
    width:100,
    height:50,
    top: 432,
    backgroundColor:"rgba(204, 0, 255, 0.5)",
    borderRadius:10
  },
  loginText:{
    position: "absolute",
    top: 8,
    left: 19,
    width: 63,
    color:"white",
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 33
  },
  iFrogotMyPassword:{
    position: "absolute",
    width: 123,
    height: 16,
    top: 367
  },
  iFrogotMyPasswordText:{
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16,
    color: '#9B51E0'
  },
  supportBtn:{
    position: "absolute",
    top: 746,
    width: 30,
    height: 30,
    left: 317
  },
  signUp: {
    position: "absolute",
    width: '90%',
    height: 16,
    top: 400
  },
  signUpText: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  okButton: {
    position: "absolute",
    width: '25%',
    height: 40,
    top: 70,
    backgroundColor: "rgba(204, 0, 255, 1)",
    borderRadius: 10
  },
  ok: {
    position: "absolute",
    top: 3,
    left: '32%',
    width: 141,
    color:"white",
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 33
  },
  errorText: {
    position: "absolute",
    textAlign: 'center',
    top: 18,
    width: '90%',
    color: '#000000',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 33
  },
  modalView: {
    width: '90%',
    height: 120,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    alignSelf: "center"
  }
});
