import { View, Text, Image, Linking, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'

const Contacts = () => {

  const route = useRoute()

  const param1 = route.params?.image
  const param3 = route.params?.Apply

  const values = [{
    name: 'Assunah Telegram',
    image: <Image 
    source={require('../assets/telegram.png')}
    style = {{width: 50, height: 50, borderRadius: 20}}
    />,
    link: 'https://t.me/+251903000102'
  },
  {
    name: 'Assunah WhatsApp',
    image: <Image 
        source={require('../assets/whatsapp.png')}
        style = {{width: 50, height: 50, borderRadius: 20}}
        />,
    link: 'whatsapp://send?phone=+251903000102'
  },
  {
    name: 'Assunah Email',
    image: <Image 
        source={require('../assets/email.png')}
        style = {{width: 50, height: 50, borderRadius: 20}}
        />,
    link: 'mailto://assunnahtv.et@gmail.com'
  },
  {
    name: 'Assunah Phone',
    image: <Image 
        source={require('../assets/phone.png')}
        style = {{width: 50, height: 50, borderRadius: 20}}
        />,
    link: 'tel:+251903000102'
  }
]


  return (
    <ImageBackground
    source={param3 == "Background" && param1 != require('../assets/admin.jpg') ? param1 : null}
    >
      <View style={{marginTop: '20%'}}>
      <View>
        <FlatList 
         showsHorizontalScrollIndicator = {false}
         horizontal
         style={styles.flatlist}
         data={values}
         keyExtractor={item => item.name}
         renderItem={({item}) => {
          return <TouchableOpacity
             onPress={() => Linking.openURL(item.link)}
             style = {styles.socialmedia}
          >
            {item.image}
              <Text style = {styles.imageandtxt}>{item.name}</Text>
          </TouchableOpacity>
         }}
        />
      </View>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create ({
  socialmedia: {
     backgroundColor: `rgba(102,103,106,0.4)`,
     width: 120,
     marginHorizontal: 10,
     borderRadius: 30,
     alignItems: 'center',
     marginVertical: 20,
     height: 150,
     justifyContent: 'center'
  },
  flatlist: {
    backgroundColor: `rgba(102,103,120,0.4)`, 
    marginHorizontal: 20, 
    height: 350, 
    borderRadius: 30, 
    alignSelf: 'center', 
    width: 300, 
    paddingTop: '25%'
  },
  imageandtxt: { 
    fontWeight: '700',
    fontStyle: 'italic',
    fontSize: 15
  },
  phoneimage: {
    width: 40, 
    height: 40, 
    alignSelf: 'center', 
    borderRadius: 15
  },
  header: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 10,
    backgroundColor: '#D7E0DF',
    textAlign: 'center',
    borderRadius: 20,
    textAlignVertical: 'center',
    flex: 1,
    paddingHorizontal: 8
  }
})

export default Contacts