import { View } from 'react-native';
import { useState, useEffect } from 'react';
import { HomeScreen } from './src/screens/HomeScreen';
import { styles } from './src/styles/styles';
import { LoginScreen } from './src/screens/LoginScreen';
import auth from '@react-native-firebase/auth';

const App = () => {
  const [user, setUser] = useState(false);

  function onAuthStateChanged(user) {
    console.log('estado do usuario: ', user);
    setUser(user);
  }

  useEffect(() => {
    const subscriber = auth().onUserChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <View style={styles.container}>
      {user ? (
        <HomeScreen user={user} login={setUser} />
      ) : (
        <LoginScreen login={setUser} />
      )}
    </View>
  );
};

export default App;
