import { useAuth } from "@/context/AuthContext";
import { auth } from "@/FirebaseConfig";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, router } from "expo-router";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { LogIn } from "lucide-react-native";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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
        // eslint-disable-next-line no-console
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
          {t("screens.login.appTitle")}
        </Text>

        <Text className="text-md text-neutral-700 mb-8">
          {t("screens.login.description")}
        </Text>

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={t("screens.login.emailPlaceholder")}
              value={value}
              onChangeText={(text) => {
                setIsLoginError(false);
                onChange(text);
              }}
              onBlur={onBlur}
              autoCorrect={false}
              placeholderTextColor="#9ca3af"
              // eslint-disable-next-line max-len
              className={`p-4 rounded-md text-base w-full mb-4 border text-neutral-700 ${!isLoginError && !errors.email ? "border-neutral-300" : "border-red-400"}`}
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
              placeholder={t("screens.login.passwordPlaceholder")}
              secureTextEntry={true}
              value={value}
              onChangeText={(text) => {
                setIsLoginError(false);
                onChange(text);
              }}
              onBlur={onBlur}
              autoCorrect={false}
              placeholderTextColor="#9ca3af"
              // eslint-disable-next-line max-len
              className={`p-4 rounded-md text-base w-full mb-4 border text-neutral-700 ${!isLoginError && !errors.password ? "border-neutral-300" : "border-red-400"}`}
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
            {t("screens.login.signInError")}
          </Text>
        )}

        <Pressable
          onPress={handleSubmit(handleLogin)}
          className="w-full flex-row gap-2 bg-primaryDark p-4 rounded-md justify-center items-center"
        >
          <Text className="text-white font-bold">
            {t("screens.login.signIn")}
          </Text>
          <LogIn color="white" />
        </Pressable>

        <Pressable
          onPress={() => router.push("/sign-up")}
          className="w-full flex-row gap-2 bg-primaryLight p-4 rounded-md justify-center items-center mt-4"
        >
          <Text className="text-white font-bold">
            {t("screens.login.signUp")}
          </Text>
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
