import { auth } from "@/FirebaseConfig";
import { yupResolver } from "@hookform/resolvers/yup";
import { router } from "expo-router";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ArrowLeft } from "lucide-react-native";
import React from "react";
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
      await createUserWithEmailAndPassword(auth, email, password);
      router.replace("/");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.log(error.message);
        alert("Došlo je do pogreške!");
      }
    }
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <KeyboardAvoidingView
        className="flex-1 items-center justify-center px-4"
        behavior="padding"
      >
        <Image source={ZagrebCoA} className="w-32 h-32 mb-8" />
        <Text className="text-3xl font-bold text-primaryDark mb-4">
          Registracija
        </Text>

        <Text className="text-md text-neutral-700 mb-8">
          Napravite korisnički račun
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

        <Pressable
          onPress={handleSubmit(handleSignUp)}
          className="w-full flex-row gap-2 bg-primaryDark p-4 rounded-md justify-center items-center"
        >
          <Text className="text-white font-bold">Registriraj se</Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/login")}
          className="w-full flex-row gap-2 bg-primaryLight p-4 rounded-md justify-center items-center mt-4"
        >
          <ArrowLeft color="white" />
          <Text className="text-white font-bold">Vrati se na prijavu</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
