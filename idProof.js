import EncryptedStorage from 'react-native-encrypted-storage';

const storeData = async (values) => {
  try {
    await EncryptedStorage.setItem(
      'user_data',
      JSON.stringify({
        name: values.name,
        idProof: values.idProof,
        address: values.address,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
