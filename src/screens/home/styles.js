import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6C63FF',
  },
  headerContainer: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#FFF',
    fontSize: 22,
  },
  descriptionContainer: {
    backgroundColor: '#FFF',
    padding: 10,
    marginTop: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  paymentContainer: {
    backgroundColor: '#F3F7FC',
    height: 100,
    borderRadius: 8,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  amountTitle: {
    color: '#FFF',
    fontSize: 33,
    fontWeight: '800',
    marginTop: 10,
  },
  descriptionTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  paymentTitle: {
    color: '#080416',
    fontSize: 22,
    fontWeight: '600',
  },
  paymentCategory: {
    color: '#808080',
    fontSize: 15,
    fontWeight: '600',
  },
  reminder: {
    color: '#808080',
    fontSize: 18,
    fontWeight: '600',
  },
  date: {
    color: '#808080',
    fontSize: 14,
    fontWeight: '600',
  },
  noPayment: {
    color: '#808080',
    fontSize: 22,
    fontWeight: '600',
  },
  addButton: {
    position: 'absolute',
    bottom: 5,
    right: 10,
    backgroundColor: '#6C63FF',
    height: 50,
    width: 50,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
