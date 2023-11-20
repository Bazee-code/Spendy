import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
    color: '#16112B',
    marginTop: 10,
  },
  input: {
    color: 'rgba(120, 107, 156, 0.33)',
    borderWidth: 1,
    marginBottom: 20,
    fontSize: 20,
    height: 50,
    borderRadius: 8,
  },
  inputTitle: { marginBottom: 10, color: '#080416', fontSize: 16 },
  button: {
    backgroundColor: '#6C63FF',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
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
