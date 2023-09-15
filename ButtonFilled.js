//import liraries
import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator, Dimensions, View } from 'react-native';
import color from '../styles/color';
import { deviceType, largeText, normalText } from '../styles/CustomFontStyle';
import fonts from '../styles/fontFamily';




const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
// create a component
const ButtonFilled = ({
    buttonWidth,
    buttonHeight,
    borderColor,
    borderWidth,
    borderRadius,
    buttonBackgroundColor,
    buttonTitle = "Button",
    buttonTitleColor,
    buttonIcon,
    buttonFontFamily,
    buttonFontSize,
    containerStyle,
    isdisabled,
    activeOpacity,
    onPressAction = () => { },
    loading = false,
    TextStyle,
    isUploadVideoLoader = false
}) => {
    return (
        <TouchableOpacity activeOpacity={activeOpacity ?? 0.2} disabled={isdisabled ?? false} onPress={loading || isUploadVideoLoader ? () => { } : onPressAction} style={[{ width: buttonWidth ?? '100%', height: buttonHeight ?? 45, backgroundColor: isdisabled ? (buttonBackgroundColor ?? color.AppColor) + "53" : (buttonBackgroundColor ?? color.AppColor), borderRadius: borderRadius ?? 3, borderWidth: borderWidth ?? undefined, borderColor: borderColor ?? undefined, marginVertical: 7, alignItems: 'center', justifyContent: 'center', }, { ...containerStyle }]}>
            {loading ?
                <ActivityIndicator color={buttonTitleColor ?? '#FFFF'} />
                :
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {buttonIcon && <>{buttonIcon}</>

                    }
                    <Text style={[{ fontSize: buttonFontSize ? buttonFontSize : deviceType == "Mobile" ? normalText : largeText, fontFamily: buttonFontFamily ?? fonts.semiBold, color: buttonTitleColor ?? color.white, paddingLeft: buttonIcon ? 5 : 0 }, { ...TextStyle }]}>{buttonTitle + ""}</Text>
                    {
                        isUploadVideoLoader && <ActivityIndicator color={"#FFFFFF"} size={"small"} />
                    }
                </View>
            }
        </TouchableOpacity>
    );
};

// define your styles


//make this component available to the app
export default ButtonFilled;
