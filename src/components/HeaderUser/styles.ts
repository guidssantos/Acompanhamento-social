import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  text:{
        color: '#FFFF'
  },
  textContainer:{
    flexDirection: 'column'
  },
  userInfoContainer:{
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center'
  }
});