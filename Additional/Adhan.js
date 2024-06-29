import { View, Text, ActivityIndicator, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MapView, { Circle, Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import { Audio } from 'expo-av'

const Adhan = () => {

    const [coordinates, setCoordinates] = useState([])
    const [Fajr, setFajr] = useState()
    const [Dhuhr, setDhuhr] = useState()
    const [Asr, setAsr] = useState()
    const [Maghrib, setMaghrib] = useState()
    const [Isha, setIsha] = useState()
    const [sunrise, setSunrise] = useState()
    const [sunset, setSunset] = useState()
    const [Imsak, setImsak] = useState()
    const [lat, setlat] = useState(null)
    const [lng, setlng] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const latlng = []
    const pray = []

    const Locations = async () => {
        await Location.getForegroundPermissionsAsync().then((response) => 
      { if (response.status !== 'granted') {
         Location.requestForegroundPermissionsAsync().then((allow) => {
            if (allow.granted == false) {
                alert('permission denied')
                return
            }
         })
    }}
    )

   const { coords } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
        distanceInterval: 500,
        timeInterval: 3000
    })
        latlng.push(
            {latitude: coords.latitude, 
            longitude: coords.longitude}
        )
    
    setCoordinates(latlng)
    setlat(coords.latitude)
    setlng(coords.longitude)

    praying()

    setLoading(false)

    }

    const praying = async () => {

        const todate = new Date()
        const date = todate.getDate()
        const month = todate.getMonth() + 1
        const year = todate.getFullYear()

        setTimeout(() => {
            
        }, 1000);

         await fetch(`http://api.aladhan.com/v1/timings/${date}-${month}-${year}?latitude=${lat}&longitude=${lng}&method=3`).then((response) =>
            response.json()).then((data) => data.data).then((prayerTime) => {
                pray.push(prayerTime.timings)
            })
         
            pray.map(item =>{
                setFajr(item.Fajr)
                setDhuhr(item.Dhuhr)
                setAsr(item.Asr)
                setMaghrib(item.Maghrib)
                setIsha(item.Isha)
                setSunrise(item.Sunrise)
                setSunset(item.Sunset)
                setImsak(item.Imsak)
            })
    }

    useEffect(() => {
        Locations()

        const adhan_Player = async () => {

            const date = new Date()
            const hour = date.getHours()
            const minute = date.getMinutes()
            let hour_minute = hour+":"+minute
            
            if (hour_minute === Fajr) {
                try {
                    const { sound } = await Audio.Sound.createAsync(require('../assets/a1.mp3'));
                    await sound.playAsync();
                  } catch (error) {
                    console.log(error);
                  }
            }else if(hour_minute === Dhuhr) {
                try {
                    const { sound } = await Audio.Sound.createAsync(require('../assets/a2.mp3'));
                    await sound.playAsync();
                  } catch (error) {
                    console.log(error);
                  }
            }else if(hour_minute === Asr) {
                try {
                    const { sound } = await Audio.Sound.createAsync(require('../assets/a3.mp3'));
                    await sound.playAsync();
                  } catch (error) {
                    console.log(error);
                  }
            }else if(hour_minute === Maghrib) {
                try {
                    const { sound } = await Audio.Sound.createAsync(require('../assets/a4.mp3'));
                    await sound.playAsync();
                  } catch (error) {
                    console.log(error);
                  }
            }else if(hour_minute === '16:04') {
                try {
                    const { sound } = await Audio.Sound.createAsync(require('../assets/a7.mp3'));
                    await sound.playAsync();
                  } catch (error) {
                    console.log(error);
                  }
            }
        }

        adhan_Player()
        const intervalId = setInterval(adhan_Player, 1000)

        return () => clearInterval (intervalId) 
        
    }, [lat,lng])

    if (loading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#00ff00" />
                <Text>Loading...</Text>
            </View>
        )
    }

  return (
    <View style={{gap: 15}}>
            <MapView
            style={{width: '95%', height: '40%', marginHorizontal: 10, borderRadius: 20}}
            region={{
                latitude: 8.9806,
                longitude: 38.7578,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05
            }}
            showsUserLocation = {true}
            followsUserLocation = {true}
            >
                {coordinates.map((item, index) => 
                <View key={index}>
                    <Marker 
                     coordinate={{
                    latitude: item.latitude, 
                    longitude: item.longitude
                }}
                />
                <Circle 
                center={{latitude: item.latitude, longitude: item.longitude}}
                radius={500}
                strokeColor="#000000"
                strokeWidth={2}
                fillColor="#00dd00"
                />
                </View>
                )}
            </MapView>
            <Text style={{textAlign: 'center', fontFamily: 'serif', fontSize: 16}}>Timed Approximatelly not Exactly</Text>
          <View 
         style={{gap: 10, backgroundColor: `rgba(120,200,100,0.5)`, width: 320, marginHorizontal: 20, borderRadius: 20, height: 350, marginBottom: 10, paddingVertical: 10}}>
                <View style={{flexDirection: 'row', gap: 50, alignSelf: 'center', marginVertical: 15}}>
                    <Text style={{fontSize: 20}}>Prayer Times</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', gap: 35, alignSelf: 'center'}}>
                    <Text>Imsak:</Text>
                    {Imsak ? (
                        <Text>{Imsak}</Text>
                    ): (
                        <Text>Loading...</Text>
                    )}
                </View>
                <View style={{display: 'flex', flexDirection: 'row', gap: 35, alignSelf: 'center'}}>
                    <Text>Fajr:</Text>
                    {Fajr ? (
                        <Text>{Fajr}</Text>
                    ): (
                        <Text>Loading...</Text>
                    )}
                </View>                
                <View style={{display: 'flex', flexDirection: 'row', gap: 35, alignSelf: 'center'}}>
                    <Text>Sunrise:</Text>
                    {sunrise ? (
                        <Text>{sunrise}</Text>
                    ): (
                        <Text>Loading...</Text>
                    )}
                </View>
                <View style={{display: 'flex', flexDirection: 'row', gap: 35, alignSelf: 'center'}}>
                    <Text>Dhuhr:</Text>
                    {Dhuhr ? (
                        <Text>{Dhuhr}</Text>
                    ): (
                        <Text>Loading...</Text>
                    )}
                </View>
                <View style={{display: 'flex', flexDirection: 'row', gap: 35, alignSelf: 'center'}}>
                    <Text>Asr:</Text>
                    {Asr ? (
                        <Text>{Asr}</Text>
                    ): (
                        <Text>Loading...</Text>
                    )}
                </View>
                <View style={{display: 'flex', flexDirection: 'row', gap: 35, alignSelf: 'center'}}>
                    <Text>Maghrib:</Text>
                    {Maghrib ? (
                        <Text>{Maghrib}</Text>
                    ): (
                        <Text>Loading...</Text>
                    )}
                </View>
                <View style={{display: 'flex', flexDirection: 'row', gap: 35, alignSelf: 'center'}}>
                    <Text>Isha:</Text>
                    {Isha ? (
                        <Text>{Isha}</Text>
                    ): (
                        <Text>Loading...</Text>
                    )}
                </View>
            </View> 
        
    </View>
  )
}

export default Adhan