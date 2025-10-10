import { useAuthStore } from "@/store/authStore";
import { Link } from "expo-router";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const {user, token, checkAuth, logout} = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hi, {user?.username}</Text>
      <Text>Token, {token}</Text>
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
      <Link href="/(auth)">Login page</Link>
      <Link href="/(auth)/signup">Signup page</Link>
    </View>
  );
}
