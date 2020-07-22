import React, {useState} from 'react';
import {StyleSheet, Alert} from 'react-native';

import {FilledButton} from '../components/FilledButton';
import {TextButton} from '../components/TextButton';
import {Container} from '../components/Container';
import Icon from 'react-native-vector-icons/Ionicons';
import {Input, Avatar} from 'react-native-elements';

export function LoginScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const information = () =>
    Alert.alert(
      'Information',
      'This function is still developed.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );

  return (
    <Container>
      <Avatar
        rounded
        source={require('../images/logo.png')}
        size="xlarge"
        containerStyle={styles.avatar}
      />
      <Input
        placeholder="Username"
        leftIcon={<Icon name="person-circle-outline" size={24} color="black" />}
        value={username}
        onChangeText={setUsername}
      />
      <Input
        placeholder="Password"
        leftIcon={<Icon name="lock-closed" size={24} color="black" />}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <FilledButton
        title={'Login'}
        style={styles.loginButton}
        onPress={() => {
          navigation.navigate('Home', {
            username: username,
            cardTitle: 'Angkor Wat',
          });
        }}
      />
      <TextButton
        title={'Have u an account? Create one'}
        onPress={information}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 32,
  },
  avatar: {
    marginBottom: 50,
  },
});
