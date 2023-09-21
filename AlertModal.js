//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, Pressable, TouchableOpacity, Animated, Easing } from 'react-native';
import color from '../styles/color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { height, largeText, normalText } from '../styles/CustomFontStyle';
import fonts from '../styles/fontFamily';
import ButtonFilled from './ButtonFilled';


// create a component
const AlertModal = ({
    modalVisible,
    onPressButton1 = () => { },
    onPressButton2 = () => { },
    onPressButton = () => { },
    title = "Are you sure?",
    texts = "You want delete ",
    buttonWidth1 = "30%",
    buttonWidth2 = "30%",
    buttontitle1 = "Yes",
    buttontitle2 = "No",
    stripeModal = false,
    buttontitle = "",

}) => {
    const [Colores, setColores] = useState(true);
    useEffect(() => {
        startImageRotateFunction()

    }, [modalVisible])

    // let rotateValueHolder = new Animated.Value(0);

    // const startImageRotateFunction = () => {
    //     rotateValueHolder.setValue(0);
    //     Animated.timing(rotateValueHolder, {
    //         toValue: 1,
    //         duration: 3000,
    //         easing: Easing.sin,
    //         useNativeDriver: false,


    //     }).start(() => startImageRotateFunction());
    // };

    // const rotateData = rotateValueHolder.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: ['360deg', '0deg'],
    // });

    // const rotateData1 = rotateValueHolder.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: ['0deg', '180deg'],
    // });
    // const rotateData2 = rotateValueHolder.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: ['180deg', '0deg',],
    // });



    
    return (

        <Modal visible={modalVisible} transparent={true} onRequestClose={onPressButton2} animationType='fade' >
            <View style={{ backgroundColor: "rgba(12, 12, 12, 0.4)", flex: 1, padding: 30 }}>
                <Pressable onPress={onPressButton2} style={{ height: "30%", }} />
                <View style={{ borderRadius: 10, backgroundColor: color.white, paddingVertical: height * 0.01, }}>
                    <Animated.View style={{ transform: [{ rotateY: rotateData1, },], height: 80, width: 80, borderRadius: 100, borderWidth: 0.9, marginTop: 17, borderColor: !stripeModal ? color.green : "#facea8", alignItems: "center", justifyContent: "center", position: "absolute", alignSelf: "center" }}>

                    </Animated.View>
                    <Animated.View style={{ transform: [{ rotateX: rotateData2 },], height: 80, width: 80, borderRadius: 100, borderWidth: 0.8, marginTop: 17, borderColor:color.AppColor, alignItems: "center", justifyContent: "center", position: "absolute", alignSelf: "center" }}>

                    </Animated.View>
                    <Animated.View style={{ height: 80, width: 80, borderRadius: 100, borderWidth: 1, alignSelf: "center", marginTop: 10, borderColor: !stripeModal ? color.AppColor : "#facea8", alignItems: "center", justifyContent: "center" }}>
                        <Animated.View style={{ transform: [{ rotateY: rotateData }] }}>
                            // {
                            //     !stripeModal ?
                            //         <MaterialCommunityIcons name='help' size={30} color={Colores ? color.AppColor : color.green} /> :
                            //         <MaterialCommunityIcons name='exclamation' size={30} color={"#facea8"} />
                            // }
                        </Animated.View>
                    </Animated.View>
                    {
                        !stripeModal &&
                        <Text style={{ alignSelf: "center", marginTop: 5, fontSize: largeText, fontFamily: fonts.bold }}>{title}</Text>
                    }
                    <Text style={{ alignSelf: "center", marginTop: 10, fontSize: normalText, textAlign: 'center' }}>{texts}</Text>
                    {
                        !stripeModal ?
                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                                <ButtonFilled buttonHeight={40} containerStyle={{ paddingHorizontal: 20, }} buttonWidth={buttonWidth1} buttonBackgroundColor={color.green} buttonTitle={buttontitle1} buttonTitleColor={color.white} onPressAction={onPressButton1} />
                                <View style={{ width: 20 }} />
                                <ButtonFilled buttonHeight={40} containerStyle={{ paddingHorizontal: 10, borderWidth: 0.5 }} buttonBackgroundColor={color.white} buttonTitle={buttontitle2} buttonWidth={buttonWidth2} borderColor={color.bluelte} onPressAction={onPressButton2} buttonTitleColor={color.black} />
                            </View> :
                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                                <ButtonFilled containerStyle={{ paddingHorizontal: 20, }} buttonHeight={40} buttonWidth={"60%"} buttonBackgroundColor={color.bluelte} buttonTitle={buttontitle} buttonTitleColor={color.white} onPressAction={onPressButton} />
                            </View>
                    }
                </View>
                <Pressable onPress={onPressButton2} style={{ height: 300, }} />

            </View>

        </Modal>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});

//make this component available to the app
export default AlertModal;
