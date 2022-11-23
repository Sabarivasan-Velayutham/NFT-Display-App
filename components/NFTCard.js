
import { View, Text, Image } from 'react-native'
import React from 'react'
import { assets, COLORS, SHADOWS, SIZES } from '../constants'
import { CircleButton, RectangleButton } from './Button'
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";
import { useNavigation } from '@react-navigation/native';

const NFTCard = ({ data }) => {

  const navigation = useNavigation();

  return (
    <View style={{

      // commented for testing of cards by applying white background
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,

      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      elevation: 10,
      // ...SHADOWS.dark

    }}>

      <View style={{
        width: "100%",
        height: 250,
      }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: SIZES.font,
            // borderTopRightRadius: SIZES.font,
          }}
        />

        <CircleButton imgUrl={assets.heart} right={10} top={10} />

      </View>
      {/* <Text style={{ color: "black" }}>NFT CARD </Text> */}

      {/* adding sub info of the card  */}
      <SubInfo />

      {/* adding nft title and eth prices  */}
      <View style={{ width: "100%", padding: SIZES.font }}>

        {/* nft title area */}
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        {/* next row view contains eth price along with rectangular button  */}
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <RectangleButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>

      </View>

    </View>
  )
}

export default NFTCard