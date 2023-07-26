import { StyleSheet } from "react-native";

export default StyleSheet.create({
  questionContainer: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: "#2D6980",
    borderRadius: 10,
    marginBottom: 15
  },
  title:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },
  questionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    gap: 2
},
    optionColor: {
        color: 'white'
    },
    titleWrapper: {
        marginBottom: 15
    },
    grayedOut: {
        opacity: 0.6, 
    },
});