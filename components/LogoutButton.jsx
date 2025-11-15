import { Text, Alert, TouchableOpacity } from "react-native";
import styles from "../assets/styles/profile.styles.js";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useAuthStore } from "../store/authStore.js";

export default function LogoutButton() {
  const { logout } = useAuthStore();

  const confrimLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", onPress: () => logout(), style: "destructive" },
    ]);
  };
  return (
    <TouchableOpacity style={styles.logoutButton} onPress={confrimLogout}>
      <Ionicons name="log-out-outline" size={20} color={COLORS.white} />
      <Text style={styles.logoutText}>Logout</Text>
    </TouchableOpacity>
  );
}
