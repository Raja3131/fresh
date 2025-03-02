import AsyncStorage from "@react-native-async-storage/async-storage";

const setCredentials = async () => {
  await AsyncStorage.setItem("userEmail", "mani@gmail.com");
  await AsyncStorage.setItem("userPassword", "123456");
};

export default setCredentials
