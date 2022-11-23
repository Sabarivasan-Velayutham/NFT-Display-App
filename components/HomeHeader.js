
import { View, Text, Image, TextInput } from 'react-native'
import { assets, COLORS, SHADOWS, SIZES } from '../constants'
import React from 'react'

const HomeHeader = ({ onSearch }) => {
  return (

    // overall View 
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font
    }}>

      {/* View which contains logo and profile picture  */}
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        // alignContent: "center"
      }}>

        {/* logo */}
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        />

        {/* View is used beacuse it holds profile pic as well as small tick mark image   */}
        <View style={{
          width: 45,
          height: 45,
          // backgroundColor:"white" 
        }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>

      </View>


      {/* info about the profile  */}
      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            // fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello Selvi 👋
        </Text>

        <Text
          style={{
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let's find masterpiece Art
        </Text>
      </View>


      {/* search bar  */}
      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          
          <TextInput
            placeholder="Search NFTs"
            // style={{ flex: 1 }}
            onChangeText={onSearch}
          />

        </View>
      </View>
    </View>
  )
}

export default HomeHeader