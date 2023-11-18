import { StyleSheet } from 'react-native';
import { windowWidth, windowHeight } from '../../configs/dimensions';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 23,
    color: '#080416',
    fontWeight: '600',
    textAlign: 'center',
    padding: 10,
    width: windowWidth,
  },
  image: {
    height: windowHeight * 0.7,
    width: windowWidth,
  },
  image: {
    backgroundColor: '#6C63FF',
    borderRadius: 12,
    width: windowWidth * 0.8,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  button: {
    backgroundColor: '#6C63FF',
    borderRadius: 12,
    width: windowWidth * 0.8,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: { fontSize: 18, color: '#FFF', fontWeight: '700' },
});
