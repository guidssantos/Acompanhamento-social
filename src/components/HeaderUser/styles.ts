import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10

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