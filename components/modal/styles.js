import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '95%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    elevation: 5,
  },
  header: {
    width: '93%',
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  modalContent: {
    alignItems: 'center',
  },
  button: { borderRadius: 30, padding: 5 },
});
