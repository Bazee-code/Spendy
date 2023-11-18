import { StyleSheet } from 'react-native';
import { windowWidth, windowHeight } from '../../configs/dimensions';

export const styles = StyleSheet.create({
  container: { padding: 10, height: windowHeight, marginTop: 150 },
  title: {
    color: '#080416',
    fontSize: 25,
    fontWeight: '600',
    width: windowWidth * 0.4,
  },
  input: {
    color: '#667085',
    borderBottomColor: '#667085',
    borderTopColor: '#FFF',
    borderLeftColor: '#FFF',
    borderRightColor: '#FFF',
    borderWidth: 1,
    marginBottom: 30,
    fontSize: 20,
  },
  inputTitle: { marginBottom: 10, color: '#080416', fontSize: 16 },
  button: {
    backgroundColor: '#6C63FF',
    padding: 20,
    borderRadius: 10,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '500',
  },
});
