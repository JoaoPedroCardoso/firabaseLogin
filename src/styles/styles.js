import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
  },
  caixa: {
    padding: 24,
    margin: 24
  },
  image: {
    width: 80,
    height: 80,
    margin: 4
  },
  selectedImage: color => ({
    borderWidth: 1,
    borderColor: color, 
    borderRadius:10
  }),
  listContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
