import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
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