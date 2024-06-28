import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const Quran = ({navigation}) => {

  const [quranTitle, setQuranTitle] = useState([])

  useEffect(() => {
    const recitation = async () => {

     await fetch('http://api.alquran.cloud/v1/quran/quran-uthmani')
    .then((response) =>response.json())
    .then((data) => data.data)
    .then((surah) => surah.surahs)
    .then((ayah) => {
      setQuranTitle(ayah)
    })
    }

    recitation()

  }, [])
  return (
    <View>
        <FlatList 
        showsVerticalScrollIndicator = {false}
        data={quranTitle}
        keyExtractor={(item) => item.englishName}
        initialNumToRender={5}
        windowSize={10}
        renderItem={({item}) => (
          <TouchableOpacity 
          onPress={() => navigation.navigate('surah', {index: item.number})}
          style={{alignItems: 'center', marginVertical: 10, backgroundColor: `rgba(120,150,150,0.3)`, width: 300, height: 50, alignSelf: 'center', justifyContent: 'center', borderRadius: 30}}
          >
            <Text style={{fontSize: 20}}>{item.name}</Text>
          </TouchableOpacity>
        )}
        />
    </View>
  )
}

export default Quran