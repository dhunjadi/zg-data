import { auth } from "@/FirebaseConfig";
import { FirebaseError } from "firebase/app";
import { signOut } from "firebase/auth";
import { LogOut } from "lucide-react-native";
import React from "react";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountScreen = () => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.log(error);
        alert("Sign out failed: " + error.message);
      }
    }
  };

  return (
    <SafeAreaView className="bg-white flex-1 p-4">
      <Pressable
        onPress={handleSignOut}
        className="w-full flex-row gap-2 bg-primaryDark p-4 rounded-md justify-center items-center"
      >
        <Text className="text-white font-bold">Odjavi se</Text>
        <LogOut color="white" />
      </Pressable>
    </SafeAreaView>
  );
};

export default AccountScreen;
