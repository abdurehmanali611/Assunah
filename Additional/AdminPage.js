import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

const AdminPage = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const checkIfAdmin = () => {

        signInWithEmailAndPassword(auth, email, password)
        .then(() => navigation.navigate('upload'))
        .catch((err) => alert(err.message))
    }

  return (
      <View style={{marginTop: 60}}>
      <Image 
      source={require('../assets/admin.jpg')}
      style = {styles.logintxt}
      />
      <View style={styles.emailfamily}>
        <Text style={styles.emailtxt}>Email:</Text>
        <TextInput 
        placeholder='Email'
        textContentType='emailAddress'
        autoComplete='email'
        value={email}
        onChangeText={(newemail) => setEmail(newemail)}
        style = {{
          width: 320,
          height: 50,
          backgroundColor: `rgba(110,110,100,0.3)`,
          borderRadius: 30,
          marginHorizontal: 15,
          marginVertical: 20,
          padding: 10
        }}
        />
      </View>
      <View style={styles.emailfamily}>
        <Text style={styles.emailtxt}>Password:</Text>
        <TextInput 
        placeholder='password'
        textContentType='password'
        value={password}
        onChangeText={(newpass) => setPassword(newpass)}
        style = {{
          width: 320,
          height: 50,
          backgroundColor: `rgba(110,110,100,0.3)`,
          borderRadius: 30,
          marginHorizontal: 15,
          marginVertical: 20,
          padding: 10
        }}
        />
      </View>
      <View>
        <TouchableOpacity 
        style={styles.logbtn}
        onPress={checkIfAdmin}
        >
            <Text style={{fontFamily: 'serif', fontSize: 19}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create ({

    logintxt: {
        alignSelf: 'center',
        width: 90,
        height: 90,
        borderRadius: 20,
        marginVertical: 10,
        marginTop: '15%'
    },
    emailfamily: {
        marginHorizontal: 15,
        marginVertical: 10
    },
    emailtxt: {
        fontSize: 20,
        fontWeight: '400'
    },
    logbtn: {
      width: 130,
      height: 50,
      backgroundColor: `rgba(100,150,110,0.8)`,
      borderRadius: 30,
      marginVertical: 20,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center'
    }
})

export default AdminPage