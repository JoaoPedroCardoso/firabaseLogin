import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export const registrar = (email, pass, avatar) => {
  const update = {
    photoURL: avatar,
  };
  auth()
    .createUserWithEmailAndPassword(email, pass)
    .then(() => {
      console.log('User account created & signed in!');
      auth()
        .currentUser.updateProfile(update)
        .then(() => {
          console.log('Usuário atualizado');
        })
        .catch(error => console.log('atualizando: ', error));
    })
    .catch(error => {
      Alert.alert('Erro', error.message);
    });
};

export const signIn = (email, pass) => {
  auth()
    .signInWithEmailAndPassword(email, pass)
    .then(() => {
      console.log('User signed in!');
    })
    .catch(error => {
      Alert.alert('Erro', error.message);
    });
};

export const logout = async () => {
  return await auth().signOut();
};
