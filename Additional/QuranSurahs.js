import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'

const QuranSurahs = () => {
  const receivedIndex = useRoute().params?.index
  const [ayahinfo, setAyahInfo] = useState([])
  const [itemAtIndex, setItemAtIndex] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchSurahs = async () => {
      const response = await fetch('http://api.alquran.cloud/v1/quran/quran-uthmani')
      const data = await response.json()
      const surahs = data.data.surahs
      setAyahInfo(surahs)

      if (receivedIndex !== undefined && receivedIndex > 0) {
        const ayahs = surahs[receivedIndex - 1].ayahs
        setItemAtIndex(ayahs)
      }
      setIsLoading(false)
    }

    fetchSurahs()

  }, [receivedIndex])

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View>
      {itemAtIndex.length > 0 ? (
        <FlatList
          data={itemAtIndex}
          keyExtractor={(item) => item.number.toString()}
          initialNumToRender={5}
          windowSize={10}
          renderItem={({ item }) => (
            <View style={{marginHorizontal: 20, marginVertical: 20, flexDirection: 'column', flex: 1, backgroundColor: `rgba(100,150, 130, 0.2)`, paddingHorizontal: 30, borderRadius: 20}}>
              <Text style={{lineHeight: 40, fontSize: 25, letterSpacing: 5}}>{item.text}</Text>
            </View>
          )}
        />
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </View>
  )
}

export default QuranSurahs