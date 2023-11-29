import { StyleSheet } from 'react-native';
import { windowWidth } from '../../../configs/dimensions';

export const styles = StyleSheet.create({
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 28.68,
  },
  button: {
    height: 41,
    borderRadius: 999,
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: { fontSize: 14, fontWeight: '500', lineHeight: 16.73 },
  submitButton: {
    backgroundColor: '#FFF',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  submitButtonText: { color: '#080416', fontSize: 17, fontWeight: '600' },
  headerButton: {
    height: 42,
    width: 42,
    borderRadius: 21,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#252045',
    marginBottom: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    width: windowWidth * 0.87,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#6C63FF',
    marginLeft: 15,
  },

  cancelButton: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#FFF',
    borderWidth: 1,
    marginTop: 10,
  },
  cancelButtonText: { color: '#FFF', fontSize: 17, fontWeight: '600' },
});
