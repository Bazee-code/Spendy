import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../../configs/dimensions';

export const styles = StyleSheet.create({
  container: {
    height: windowHeight,
  },
  title: {
    fontSize: 22,
    color: '#16112B',
    textAlign: 'center',
    marginVertical: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  profileImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  profileName: {
    fontSize: 20,
    color: '#16112B',
    fontWeight: '600',
    marginVertical: 10,
    textAlign: 'center',
  },
  editButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#6C63FF',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 3,
    right: 150,
  },
  formContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#6C63FF',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  input: {
    borderTopColor: '#FFF',
    borderLeftColor: '#FFF',
    borderRightColor: '#FFF',
    borderBottomColor: '#16112B',
    borderBottomWidth: 1,
    width: windowWidth * 0.85,
    paddingBottom: 5,
    fontSize: 18,
    color: '#16112B',
  },
  inputTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#16112B',
  },
});
