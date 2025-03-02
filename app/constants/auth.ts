import AsyncStorage from "@react-native-async-storage/async-storage";

const setCredentials = async () => {
  await AsyncStorage.setItem("userEmail", "mani");
  await AsyncStorage.setItem("userPassword", "123");
};

export default setCredentials
