import { Text, View } from "react-native"
import { useForm } from 'react-hook-form'
import { useCallback, useEffect, useState } from "react"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import styled from './styles'
import { Container } from "../../../components/Container"
import { HeaderUser } from "../../../components/HeaderUser"
import { BackBottom } from "../../../components/BackBottom"
import { Input } from "../../../components/Input"
import { Button } from "../../../components/Button"
import { ButtonSegmented } from "./ButtonSegmented"

export const RegisterFollowUp = () => {

    const [selectedField, setSelectedField] = useState('members')



    const fieldsValidationSchema = yup.object().shape({
        name: yup.string().required('O nome não pode ser vazio'),
        age: yup.string().required('A idade não pode ser vazio'),
        scholarity: yup.string().required('A escolaridade não pode ser vazia'),
        kinship: yup.string().required('O parentesco não pode ser vazio'),
        income: yup.string().required('A renda não pode ser vazio')
    })



    const {register, setValue, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(fieldsValidationSchema)
    })

    useEffect(() => {
      register('name')
      register('age')
      register('scholarity')
      register('kinship')
      register('income')
    }, [register])
    
    const onSubmit = (values) => {
        console.log(values, "VALUES!!")
    }


    return(
        <Container>
            <HeaderUser />
            <BackBottom title="Cadastro de acompanhamento" />

            <View style={styled.inputContainer}>
                <ButtonSegmented selected={selectedField} setSelected={setSelectedField}/>
            {selectedField === 'members' && (
                <>
                    <Input label="Nome"
                    //  value={data[entry.name]}
                    placeholder="Digite o Nome do membro da familia"
                    onChangeText={value => setValue('name', value)} 
                    error={errors?.name?.message}
                    messageError={errors?.name?.message}
                    />
                    <Input label="Idade"
                    //  value={data[entry.name]}
                    placeholder="Digite a Idade do membro da familia"
                    onChangeText={value => setValue('age', value)} 
                    error={errors?.age?.message}
                    messageError={errors?.age?.message}
                    />
                    <Input label="Escolaridade"
                    //  value={data[entry.name]}
                    placeholder="Selecione a Escolaridade"
                    onChangeText={value => setValue('scholarity', value)} 
                    error={errors?.scholarity?.message}
                    messageError={errors?.scholarity?.message}
                    />
                    <Input label="Parentesco"
                    //  value={data[entry.name]}
                        placeholder="Selecione o Parentesco"
                        onChangeText={value => setValue('kinship', value)} 
                        error={errors?.kinship?.message}
                        messageError={errors?.kinship?.message}
                        />
                    <Input label="Renda"
                    //  value={data[entry.name]}
                    placeholder="Selecione a Renda"
                    onChangeText={value => setValue('income', value)} 
                    error={errors?.income?.message}
                    messageError={errors?.income?.message}
                    />
                    <Button onPress={handleSubmit(onSubmit)} paddingButton={10} textSize={18} borderRadius={10}>
                        Adicionar Membro
                    </Button>
                </>
            )}
            {selectedField === 'family' && (
                <>
                    <Input label="Nome da família"
                    //  value={data[entry.name]}
                    placeholder="Digite o Nome da família"
                    onChangeText={value => setValue('name', value)} 
                    error={errors?.name?.message}
                    messageError={errors?.name?.message}
                    />
                    <Input label="Beneficios Sociais"
                    //  value={data[entry.name]}
                    placeholder="Selecione os Beneficios sociais"
                    onChangeText={value => setValue('age', value)} 
                    error={errors?.age?.message}
                    messageError={errors?.age?.message}
                    />
                    <Input label="Renda per capita"
                    //  value={data[entry.name]}
                    placeholder="Selecione a Renda per capita"
                    onChangeText={value => setValue('scholarity', value)} 
                    error={errors?.scholarity?.message}
                    messageError={errors?.scholarity?.message}
                    />
                    <Button  onPress={handleSubmit(onSubmit)} paddingButton={10} textSize={18} borderRadius={10}>
                        Cadastrar
                    </Button>
                    <Button backgroundColor="#E2773B"  onPress={handleSubmit(onSubmit)} paddingButton={10} textSize={18} borderRadius={10}>
                        Cancelar
                    </Button>
                </>
            )}
            </View>

        </Container>
    )
}