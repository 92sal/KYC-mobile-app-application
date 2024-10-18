import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  idProof: Yup.string().required('ID Proof is required'),
  address: Yup.string().required('Address is required'),
});

const FormScreen = () => {
  const handleSubmit = (values) => {
    console.log(values);
    // API call for KYC submission
  };

  return (
    <Formik
      initialValues={{ name: '', idProof: '', address: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          {touched.name && errors.name ? <Text style={styles.error}>{errors.name}</Text> : null}

          <TextInput
            style={styles.input}
            placeholder="ID Proof"
            onChangeText={handleChange('idProof')}
            onBlur={handleBlur('idProof')}
            value={values.idProof}
          />
          {touched.idProof && errors.idProof ? <Text style={styles.error}>{errors.idProof}</Text> : null}

          <TextInput
            style={styles.input}
            placeholder="Address"
            onChangeText={handleChange('address')}
            onBlur={handleBlur('address')}
            value={values.address}
          />
          {touched.address && errors.address ? <Text style={styles.error}>{errors.address}</Text> : null}

          <Button title="Submit" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  error: {
    color: 'red',
  },
});

export default FormScreen;
