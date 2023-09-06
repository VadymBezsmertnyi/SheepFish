import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setDeviceStorage(
  key: string,
  value: string,
): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (_error) {
    return false;
  }
}

export async function getDeviceStorage(key: string): Promise<string | null> {
  try {
    const result = await AsyncStorage.getItem(key);
    return result;
  } catch (_error) {
    return null;
  }
}

export async function deleteDeviceStorage(key: string): Promise<boolean> {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (_error) {
    return false;
  }
}
