import { View, Text, Linking } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { ImageBackground } from 'react-native';

const Home = ({navigation}) => {

    const route = useRoute()

    const param1 = route.params?.image
    const param3 = route.params?.Apply
    const param2 = route.params?.Text

    var menu_image = <Image 
    source={require('../assets/assunahmenu.png')}
    style = {styles.menu}
    />

    const [pages, setPages] = useState(false)

    const pressedin = () => {

        if (menu_image === <Image 
            source={require('../assets/menu.png')}
            style = {styles.menu}
            />){
                menu_image = null
                setPages(!pages)
            }else {
                menu_image = !menu_image
                setPages(!pages)
            }
        
    }
    

  return (
    <ImageBackground 
    source={param3 == "Background" && param1 != require('../assets/admin.jpg') ? param1 : null}
    >
        <ScrollView 
    showsVerticalScrollIndicator = {false}
    >
    <View style={{padding: 5}}>
    <View style = {styles.topview}>
        <TouchableOpacity 
        style = {{paddingHorizontal: 16, paddingVertical: 5}}
        onPress={pressedin}
        >
            {menu_image}
        </TouchableOpacity>
        {pages && (
            <View style = {styles.page}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginRight: 10}}>
                <TouchableOpacity
                onPress={() => setPages(!pages)}
                >
                    <Image 
                    source={require('../assets/back.png')}
                    style = {styles.menuicons}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigation.navigate('quran')}
                >
                    <Image 
                    source={require('../assets/quran.webp')}
                    style = {styles.menuicons}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                style={{marginTop: 13}}
                onPress={() => navigation.navigate('adhan')}
                >
                    <Image 
                    source={require('../assets/assunah.jpg')}
                    style = {{width: 50, height: 50, borderRadius: 20}}
                    />
                </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('About')}>
                    <Text style = {styles.texts}>About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
                    <Text style = {styles.texts}>Contacts</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Qirat')}>
                    <Text style = {styles.texts}>Assunah qirat center</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('admin')}>
                    <Text style = {styles.texts}>Admin Page</Text>
                </TouchableOpacity>
            </View>
        )}
        <Text style = {styles.header}>Assunah TV</Text>
    </View>
    <TouchableWithoutFeedback onPress={() => setPages(false)}>
    <View style = {styles.body}>
        <View style = {{alignItems: 'center'}}>
        <Text style = {styles.moderate}>The Way of Moderation</Text>
        <View>
        <Image 
        source={param3 == "Replace" && param1 != require('../assets/admin.jpg') ? param1 : 
        require('../assets/as-sunnah Gold V2.png')}
        style = {styles.main_image}
        />
        </View>
        <View>
          <View style={{flexDirection: 'column', gap: 30, backgroundColor: '#2C7865', paddingVertical: 20, borderRadius: 20, paddingHorizontal: 8}}>
            <View style={{flexDirection: 'column', gap: 20, alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontFamily: 'serif', fontStyle: 'italic', color: '#fff', fontWeight: '700'}}>Assunah Tv </Text>
            <Text style={{fontSize: 20, fontFamily: 'serif', color: '#fff', fontWeight: '700'}}>The Moderate Way</Text>
            </View>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 19, fontFamily: 'serif', fontStyle: 'italic', color: '#fff', fontWeight: '700'}}>Satelite: </Text>
                <Text style={{fontSize: 19, fontFamily: 'serif', color: '#fff'}}>Ethiosat</Text>
            </View>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 19, fontFamily: 'serif', fontStyle: 'italic', color: '#fff', fontWeight: '700'}}>Frequency: </Text>
                <Text style={{fontSize: 19, fontFamily: 'serif', color: '#fff'}}>11545</Text>
            </View>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 19, fontFamily: 'serif', fontStyle: 'italic', color: '#fff', fontWeight: '700'}}>Symbol Rate: </Text>
                <Text style={{fontSize: 19, fontFamily: 'serif', color: '#fff'}}>45000</Text>
            </View>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', gap: 20}}>
                <Text style={{fontSize: 19, fontFamily: 'serif', fontStyle: 'italic', color: '#fff', fontWeight: '700'}}>Polarization: </Text>
                <Text style={{fontSize: 19, fontFamily: 'serif', color: '#fff'}}>Horizontal</Text>
            </View>
          </View>
           {(param3 == "Replace" && param2 != '') ? <Text>{param2}</Text> : (
            <Text>The text will be displayed here</Text>
           )}
        </View>
        <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/AssunnahTVOfficial')}>
                        <Image 
                        source={require('../assets/facebook.png')}
                        style = {{width: 50, height: 50, borderRadius: 30, marginVertical: 20, marginHorizontal: 17}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://l.facebook.com/l.php?u=https%3A%2F%2Ft.me%2FAssunnahTVOfficial%3Ffbclid%3DIwAR0ADHG1Cht0ciDXJeARqI3AKMDbZ7X8crxwK02i3uhRrht76FIAW7r6NNA&h=AT3suhz5UoJTonA-ptOllfB09ARrnr-upGrb5xeZhmbveqeDmHDCfRenHapndqvt4w0_Icm3mgkS-wnU2JA9aNDQCXFJvNLC6yAwdV2E2kF4kcJedl8_fxWoJLwKrWrbVdLe&__tn__=-UK-R&c[0]=AT0cTWuYbmm27GbcPJR8NDGSkjlwl739wBAPzi_5BwSUa-uksogPpWPimTJ2OEvbjTYKMopJVi8UECHNKR0bHCstBMy5MHh-vL9sKHcWKnhkHMWWAsgXtXQCfWbYcBD8_zIERRDNxotoOb77MJk-lUk9AGYvpbTTQv46ty0QrIRYoXsUK5YSIBJ-rvvvW2mgdgOXdqqTPL2a-WuEypWoNg')}>
                        <Image 
                        source={require('../assets/telegram.png')}
                        style = {{width: 50, height: 50, borderRadius: 30, marginVertical: 20, marginHorizontal: 15}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/channel/UCnUcEEmMpVeXIoW01gKnxIQ')}>
                        <Image 
                        source={require('../assets/youtube.png')}
                        style = {{width: 50, height: 50, borderRadius: 30, marginVertical: 20, marginHorizontal: 15}}
                        />
                    </TouchableOpacity>
                </View>
        </View>
     </View>
     </TouchableWithoutFeedback>
     </View>
    </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({

    menuicons: {
        width: 50, 
        height: 50,
        backgroundColor: '#CFD9D3',
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 25
    },
    texts: {
        marginVertical: 15,
        textAlign: 'center',
        marginHorizontal: 20,
        backgroundColor: '#D7E0DF',
        borderRadius: 20,
        height: 50,
        textAlignVertical: 'center',
        width: 220
    },
    icons: {
        width: 50, 
        height: 50,
        marginLeft: 72
    },
    main_image: {
        width: 338, 
        height: 400,
        borderRadius: 30,
        marginVertical: 20
    },
    ScrollView: {
       flexGrow: 1
    },
    body: {
        backgroundColor: '#E7EEEC',
        paddingHorizontal: 20 
    },
    downtext: {
        textAlign: 'center', 
        lineHeight: 19,
        margin: 10,
        backgroundColor: '#D9E3E0',
        width: '95%',
        alignItems: 'center',
        borderRadius: 20,
        padding: 20
    },
    page: { 
        position: 'absolute', 
        zIndex: 2,
        flex: 1,
        backgroundColor: '#A1B278',
        marginHorizontal: 15,
        borderRadius: 30,
        marginVertical: -4,
        paddingVertical: 10
    },
    topview: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15
    },
    menu: {
        width: 60,
        height: 60,
        backgroundColor: 'gray',
        borderRadius: 20
    },
    header: {
        marginLeft: 10,
        fontSize: 25,
        backgroundColor: '#D3DCD9',
        width: 220,
        textAlign: 'center',
        borderRadius: 20,
        textAlignVertical: 'center',
        marginBottom: 12
    },
    moderate: {
       textAlign: 'center',
       marginVertical: 15,
       fontSize: 21
    },
    globe: {
        width: 50,
        height: 50,
        marginLeft: 55
    }
})
export default Home