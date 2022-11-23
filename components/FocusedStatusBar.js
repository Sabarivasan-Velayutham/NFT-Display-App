
import { View, Text, SafeAreaView, StatusBar } from 'react-native'
// import React, {useState} from 'react'
import { useIsFocused } from '@react-navigation/core'


const FocusedStatusBar = (props) => {

    const isFocused = useIsFocused();

    return isFocused ? <StatusBar animated={true} {...props} /> : null;
}
export default FocusedStatusBar