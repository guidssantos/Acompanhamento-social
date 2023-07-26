import { useState } from "react";
import { ScrollView, Text, View } from "react-native"
import { RadioButton } from "react-native-paper"
import styled from './styles'
import { mock } from "./mock";
import { Button } from "../../../../../../components/Button";



export const ReportQuestions = () => {
  const [selectedValues, setSelectedValues] = useState(mock.map(() => ''));
  const totalQuestions = mock.length;

  const isQuestionAnswered = (questionIndex) => {
    return selectedValues[questionIndex] !== '';
  };

  const handleRadioChange = (questionIndex, newValue) => {
    setSelectedValues(prevValues => {
      const newValues = [...prevValues];
      newValues[questionIndex] = newValue;
      return newValues;
    });
  };

  return (
    <ScrollView style={{marginVertical: 10}}>
      {mock.map((question, index) => (
        <View key={index} style={[styled.questionContainer, isQuestionAnswered(index) ? null : styled.grayedOut]}>
          <View style={styled.titleWrapper}>
            <Text style={styled.title}>{question.title}</Text>
          </View>
          <RadioButton.Group
            onValueChange={newValue => handleRadioChange(index, newValue)}
            value={selectedValues[index]}
          >
            <View style={styled.questionButtons}>
              <View style={styled.questionButtons}>
                <RadioButton color="white" uncheckedColor="white" value="N/A" />
                <Text style={styled.optionColor}>Não se Aplica</Text>
              </View>
              <View style={styled.questionButtons}>
                <RadioButton color="white" uncheckedColor="white" value="low" />
                <Text style={styled.optionColor}>Baixa</Text>
              </View>
              <View style={styled.questionButtons}>
                <RadioButton color="white" uncheckedColor="white" value="medium" />
                <Text style={styled.optionColor}>Médio</Text>
              </View>
              <View style={styled.questionButtons}>
                <RadioButton color="white" uncheckedColor="white" value="high" />
                <Text style={styled.optionColor}>Alta</Text>
              </View>
            </View>
          </RadioButton.Group>
        </View>
      ))}
      <Button paddingButton={10} borderRadius={5}>Avançar</Button>
    </ScrollView>
  );
};