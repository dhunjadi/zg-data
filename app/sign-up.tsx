import { auth } from "@/FirebaseConfig";
import { yupResolver } from "@hookform/resolvers/yup";
import { router } from "expo-router";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ArrowLeft } from "lucide-react-native";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as yup from "yup";
import ZagrebCoA from "../assets/images/zagreb-grb.png";

type SignUpForm = {
  email: string;
  password: string;
};

const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .email("Neispravan email format")
    .required("Email je obavezno polje"),
  password: yup
    .string()
    .min(6, "Lozinka mora sadržavati barem 6 znakova")
    .required("Lozinka je obavezno polje"),
});

const SignUpScreen = () => {
  const { t } = useTranslation();

  const [isLoading, setisLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: yupResolver(signUpSchema),
    defaultValues: { email: "", password: "" },
    mode: "onTouched",
  });

  const handleSignUp = async (data: SignUpForm) => {
    const { email, password } = data;

    try {
      setisLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      router.replace("/");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        // eslint-disable-next-line no-console
        console.log(error.message);
        alert("Došlo je do pogreške!");
      }
    } finally {
      setisLoading(false);
    }
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <KeyboardAvoidingView
        className="flex-1 items-center justify-center px-4"
        behavior="padding"
        keyboardVerticalOffset={100}
      >
        <Image source={ZagrebCoA} className="w-32 h-32 mb-8" />
        <Text className="text-3xl font-bold text-primaryDark mb-4">
          {t("screens.signUp.title")}
        </Text>

        <Text className="text-md text-neutral-700 mb-8">
          {t("screens.signUp.description")}
        </Text>

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={t("screens.signUp.emailPlaceholder")}
              value={value}
              autoCapitalize="none"
              onChangeText={onChange}
              onBlur={onBlur}
              autoCorrect={false}
              placeholderTextColor="#9ca3af"
              // eslint-disable-next-line max-len
              className={`p-4 rounded-md text-base w-full mb-4 border text-neutral-700 ${!errors.email ? "border-neutral-300" : "border-red-400"}`}
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
              placeholder={t("screens.signUp.passwordPlaceholder")}
              secureTextEntry={true}
              value={value}
              autoCapitalize="none"
              onChangeText={onChange}
              onBlur={onBlur}
              autoCorrect={false}
              placeholderTextColor="#9ca3af"
              // eslint-disable-next-line max-len
              className={`p-4 rounded-md text-base w-full mb-4 border text-neutral-700 ${!errors.password ? "border-neutral-300" : "border-red-400"}`}
            />
          )}
        />
        {errors.password && (
          <Text className="font-bold text-red-500 mb-4">
            {errors.password?.message}
          </Text>
        )}

        <Pressable
          onPress={handleSubmit(handleSignUp)}
          className="w-full flex-row gap-2 bg-primaryDark p-4 rounded-md justify-center items-center"
          disabled={isLoading}
        >
          <Text className="text-white font-bold">
            {isLoading ? <ActivityIndicator /> : t("screens.signUp.signUp")}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/login")}
          className="w-full flex-row gap-2 bg-primaryLight p-4 rounded-md justify-center items-center mt-4"
          disabled={isLoading}
        >
          <ArrowLeft color="white" />
          <Text className="text-white font-bold">
            {t("screens.signUp.backToSignIn")}
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
