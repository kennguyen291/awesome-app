import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Button, Text } from "react-native"
import { AuthScreenNavigationType } from "../../navigation/types"

const SignUpScreen = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>()
    const navigateToSignInScreen = () => {
        navigation.navigate("SignIn")
    }
    return (
       <>
        <Text>Sign Up Screen</Text>
        <Button title="Navigate to Sign In" onPress={navigateToSignInScreen} />
       </>
     
    )
}

export default SignUpScreen