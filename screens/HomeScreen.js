import React from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Text, Header, Card, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

export function HomeScreen({route, navigation}) {
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
    <View>
      <Header
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: () => {
            information();
          },
        }}
        centerComponent={{text: 'Home', style: {color: '#fff'}}}
        rightComponent={{
          icon: 'home',
          color: '#fff',
          onPress: () => {
            navigation.navigate('Login');
          },
        }}
        style={styles.title}
      />
      <Card
        title={route.params.cardTitle}
        image={require('../images/pic2.jpeg')}>
        <Text style={styles.text}>
          This images have been found by our app builder. His name is{' '}
          {route.params.username}
        </Text>
        <Button
          icon={<Icon name="eye" color="#ffffff" size={20} />}
          buttonStyle={styles.button}
          title="VIEW NOW"
          onPress={information}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 100,
  },
  button: {
    marginVertical: 32,
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
  text: {
    marginBottom: 10,
  },
});
