import { Text, View, Button, Image } from 'react-native';
import { onGoogleLogout } from '../auth/google';
import { styles } from '../styles/styles';
import { logout } from '../auth/email-pass-auth';

export const HomeScreen = ({ user, login }) => (
  <View style={styles.layout}>
    <Text style={styles.title}>Home</Text>
    {user.user != undefined ? (
      <>
        <Image
          style={{ width: 300, height: 300 }}
          source={{
            uri: user.user.photo,
          }}
        />
        <Text style={styles.title}>{user.user.email}</Text>
        <Button
          title="Sair"
          onPress={() => onGoogleLogout().then(() => login(false))}
        />
      </>
    ) : (
      <>
        {user.photoURL && (
          <Image
            style={{ width: 300, height: 300 }}
            source={{
              uri: user.photoURL,
            }}
          />
        )}
        <Text style={styles.title}>{user.email}</Text>
        <Button
          title="Sair"
          onPress={() => logout().then(() => login(false))}
        />
      </>
    )}
  </View>
);
