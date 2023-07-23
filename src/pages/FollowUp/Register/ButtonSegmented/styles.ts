import { StyleSheet } from "react-native";

export default StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 15,
    color: '#FFFF',
    position: 'relative'
  },
  button: {
    color: 'white',
    marginBottom: 5,
    fontSize: 20
    
  },
  selected: {
    borderBottomColor: 'white',
    borderBottomWidth: 3,
  }
});