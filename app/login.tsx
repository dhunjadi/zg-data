import Divider from "@/components/Divider";
import { useAuth } from "@/context/AuthContext";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ZagrebCoA from "../assets/images/zagreb-grb.png";

const MOCK_USERNAME = "admin";
const MOCK_PASSWORD = "admin";

const LoginScreen = () => {
  const { setIsLoggedIn } = useAuth();
  const router = useRouter();

  const [user, setUser] = useState({
    username: "",
    password: "",
    isError: false,
  });

  const handleLogin = () => {
    if (user.username === MOCK_USERNAME && user.password === MOCK_PASSWORD) {
      setIsLoggedIn(true);
      router.replace("/");
    } else {
      setUser({ ...user, isError: true });
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
          Open Data Zagreb
        </Text>

        <Text className="text-md text-neutral-700 mb-8">
          Pristupite javnim informacijama Grada Zagreba
        </Text>

        <TextInput
          placeholder="vas@email.hr"
          value={user.username}
          onChangeText={(val) => setUser({ ...user, username: val })}
          autoCorrect={false}
          placeholderTextColor="#9ca3af"
          className="p-4 rounded-md text-base w-full mb-4 border text-neutral-700 border-neutral-300"
        />

        <TextInput
          placeholder="******"
          secureTextEntry={true}
          value={user.password}
          onChangeText={(val) => setUser({ ...user, password: val })}
          autoCorrect={false}
          placeholderTextColor="#9ca3af"
          className="p-4 rounded-md text-base w-full mb-4 border text-neutral-700 border-neutral-300"
        />

        {user.isError && (
          <Text className="font-bold text-red-500 mb-4">
            Pogrešni email ili lozinka
          </Text>
        )}

        <Pressable
          onPress={handleLogin}
          className="w-full flex-row gap-2 bg-primaryDark p-4 rounded-md justify-center items-center"
        >
          <Text className="text-white font-bold">Prijavi se</Text>
          <MaterialIcons name="login" size={20} color="white" />
        </Pressable>

        <Divider text="ili nastavite s" />

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
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
