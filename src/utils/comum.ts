export const changeData = (variavel, valor, dados, setDados) => {
    setDados({
        ...dados,
        [variavel]: valor
    })
}

export function checkIfYouHaveEntryEmpty(dados, setDados){
    for(const [variavel, valor] of Object.entries(dados)){
      if(valor == '') {
        setDados({
          ...dados,
          [variavel]: null
        })
        return true
      }
    }
    return false
  }