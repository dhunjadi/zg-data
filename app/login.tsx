import { useAuth } from "@/context/AuthContext";
import { auth } from "@/FirebaseConfig";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect } from "expo-router";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { LogIn } from "lucide-react-native";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as yup from "yup";
import ZagrebCoA from "../assets/images/zagreb-grb.png";

/* 
  email: admin@zg-data.hr
  password: admin123!
*/

type LoginForm = {
  email: string;
  password: string;
};

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Neispravan email format")
    .required("Email je obavezno polje"),
  password: yup.string().required("Lozinka je obavezno polje"),
});

const LoginScreen = () => {
  const { isLoggedIn, isLoading } = useAuth();
  const [isLoginError, setIsLoginError] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: "", password: "" },
    mode: "onTouched",
  });

  const handleLogin = async (data: LoginForm) => {
    const { email, password } = data;

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.log(error.message);
        setIsLoginError(true);
      }
    }
  };

  if (isLoading) {
    return null;
  }

  if (isLoggedIn) {
    return <Redirect href="/" />;
  }

  return (
    <SafeAreaView className="bg-white flex-1">
      <KeyboardAvoidingView
        className="flex-1 items-center justify-center px-4"
        behavior="padding"
      >
        <Image source={ZagrebCoA} className="w-32 h-32 mb-8" />
        <Text className="text-3xl font-bold text-primaryDark mb-4">
          Open Data Zagreb
        </Text>

        <Text className="text-md text-neutral-700 mb-8">
          Pristupite javnim informacijama Grada Zagreba
        </Text>

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="vas@email.hr"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              autoCorrect={false}
              placeholderTextColor="#9ca3af"
              className="p-4 rounded-md text-base w-full mb-4 border text-neutral-700 border-neutral-300"
            />
          )}
        />
        {errors.email && (
          <Text className="font-bold text-red-500 mb-4">
            {errors.email?.message}
          </Text>
        )}

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="******"
              secureTextEntry={true}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              autoCorrect={false}
              placeholderTextColor="#9ca3af"
              className="p-4 rounded-md text-base w-full mb-4 border text-neutral-700 border-neutral-300"
            />
          )}
        />
        {errors.password && (
          <Text className="font-bold text-red-500 mb-4">
            {errors.password?.message}
          </Text>
        )}

        {isLoginError && (
          <Text className="font-bold text-red-500 mb-4">
            Pogrešni email ili lozinka
          </Text>
        )}

        <Pressable
          onPress={handleSubmit(handleLogin)}
          className="w-full flex-row gap-2 bg-primaryDark p-4 rounded-md justify-center items-center"
        >
          <Text className="text-white font-bold">Prijavi se</Text>
          <LogIn color="white" />
        </Pressable>

        {/* <Divider text="ili nastavite s" />

        <Pressable
          onPress={() => {}}
          className="w-full flex-row items-center justify-center bg-white border border-neutral-300 p-4 rounded-md active:bg-neutral-50"
        >
          <View className="flex-row items-center justify-center gap-3">
            <AntDesign name="google" size={20} color="black" />

            <Text className="text-neutral-800 font-bold text-base uppercase tracking-wider">
              Prijava putem Google-a
            </Text>
          </View>
        </Pressable> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
