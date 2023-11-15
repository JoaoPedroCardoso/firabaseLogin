import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const onGoogleLogin = async () => {
  const user = await GoogleSignin.signIn();
  return user;
};

export const onGoogleLogout = async () => {
  return await GoogleSignin.signOut();
};

GoogleSignin.configure({
  webClientId:
    '418851784719-ob5t0ko92utq99n0srml3gjnnsgknjr7.apps.googleusercontent.com',
});
