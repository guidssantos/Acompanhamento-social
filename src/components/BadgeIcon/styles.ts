import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  badge:{
    position: 'absolute',
    left: 15,
    top: -5,
    fontSize: 14,
    fontWeight: 'bold'
  }
});