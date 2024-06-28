import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { Image } from 'react-native'
import Picker from 'react-native-picker-select'

const Uploading = ({navigation}) => {

    const [uploaded, setUploaded] = useState(require('../assets/admin.jpg'))
    const [screen, setScreen] = useState('')
    const [howApply, setHowApply] = useState('')
    const [text, setText] = useState('')

    const galleryupload = async () => {
        let gallerypermit = await ImagePicker.requestMediaLibraryPermissionsAsync()
    
        if (gallerypermit.granted == false){
          Alert.alert("Need Permission", "You should give us a permission")
        }
    
        let gallerylaunch = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          aspect: [1, 1],
          quality: 1,
          allowsEditing: true
        })
    
        if (!gallerylaunch.canceled){
          setUploaded(gallerylaunch.assets)
        }
      }

      const options = [
        {label: 'Home', value:'Home'},
        {label: 'About', value: 'About'},
        {label: 'Contact', value: 'Contact'}
      ]

      const howtransfer = [
        {label: 'Background', value: 'Background'},
        {label: 'Replace', value: 'Replace'}
      ]

      const Finished = () => {
          setTimeout(() => {
           try {
            screen.length == 0 || howApply.length == 0 ?
            alert('Please enter a valid inputs') : navigation.navigate(screen, {
              image: uploaded,
              Apply: howApply,
              Text: text
            })
           } catch (error) {
            alert(error.message)
           }
          }, 1000);
      }



  return (
    <ScrollView>
    <View>
        <View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={galleryupload}>
                <Image 
                source={uploaded}
                style={{width: 200, height: 200, margin: 30, borderRadius: 30}}
                />
        </TouchableOpacity>
        <Text style={{marginVertical: 10, fontSize: 19}}>Home Page Text</Text>
        <TextInput 
        textContentType='none'
        value={text}
        onChangeText={(newtext) => setText(newtext)}
        style={{backgroundColor: `rgba(120,150,120,0.5)`, width: 300, height: 100, borderRadius: 20, paddingHorizontal: 10}}
        multiline
        />
      </View>
      <View style={{backgroundColor: `rgba(10,100,100,0.73)`, width: 300, marginHorizontal: 20, marginVertical: 15, borderTopLeftRadius: 20, borderBottomRightRadius: 20}}>
       <Picker 
       items={howtransfer}
       onValueChange={(typevalue) => setHowApply(typevalue)}
       value={howApply}
       placeholder={{label:'select how to apply it', value: null}}
       />
      </View>
      <View style={{backgroundColor: `rgba(10,100,100,0.73)`, width: 300, marginHorizontal: 20, marginVertical: 15, borderTopLeftRadius: 20, borderBottomRightRadius: 20}}>
       <Picker 
       items={options}
       onValueChange={(value) => setScreen(value)}
       value={screen}
       placeholder={{label:'select a screen', value: null}}
       />
      </View>
        <TouchableOpacity 
        style={{alignSelf: 'center', width: 150, height: 60, backgroundColor: `rgba(10,80,100,0.5)`, borderRadius: 30, marginBottom: 20, alignItems: 'center', justifyContent: 'center'}}
        onPress={Finished}
        >
          <Text>Done</Text>
        </TouchableOpacity>
    </View>
  </View>
  </ScrollView>
  )
}

export default Uploading