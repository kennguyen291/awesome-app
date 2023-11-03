import React from "react"
import { Text } from "react-native"

import { useNavigation } from "@react-navigation/native"
import { Button } from "react-native"
import { AuthScreenNavigationType } from "../../navigation/types"

const SignInScreen = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>()
    const navigateToSignUpScreen = () => {

        navigation.navigate("SignUp")
    }
    return (
       <>
        <Text>Sign In Screen</Text>
        <Button title="Navigate to Sign Up" onPress={navigateToSignUpScreen} />
       </>
     
    )
}

export default SignInScreen