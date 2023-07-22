import { Text, View } from "react-native"
import { Container } from "../../../../components/Container"
import { HeaderUser } from "../../../../components/HeaderUser"
import { BackBottom } from "../../../../components/BackBottom"
import { Input } from "../../../../components/Input"
import { useForm } from 'react-hook-form'
import { useCallback, useEffect } from "react"
import { Button } from "../../../../components/Button"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import styled from './styles'

export const Register = () => {



    const fieldsValidationSchema = yup.object().shape({
        name: yup.string().required('O nome não pode ser vazio'),
        email: yup.string().required('O email não pode ser vazio').email('Digite um email válido'),
        password: yup.string().required('A senha não pode ser vazia').min(6, 'A senha deve conter pelo menos 6 dígitos'),
        crascreas: yup.string().required('O CRAS/CREAS não pode ser vazio'),
        role: yup.string().required('O Perfil não pode ser vazio')
    })



    const {register, setValue, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(fieldsValidationSchema)
    })

    useEffect(() => {
      register('name')
      register('email')
      register('password')
      register('crascreas')
      register('role')
    }, [register])
    
    const onSubmit = (values) => {
        console.log(values, "VALUES!!")
    }

    console.log(errors, "ERROR")

    return(
        <Container>
            <HeaderUser />
            <BackBottom title="Cadastro de Usuário" />
            <View style={styled.inputContainer}>
            <Input label="Nome"
            //  value={data[entry.name]}
                placeholder="Digite o nome do usuário"
                onChangeText={value => setValue('name', value)} 
                error={errors?.name?.message}
                messageError={errors?.name?.message}
            />
            <Input label="E-mail"
            //  value={data[entry.name]}
                placeholder="Digite o e-mail do usuário"
                onChangeText={value => setValue('email', value)} 
                error={errors?.email?.message}
                messageError={errors?.email?.message}
            />
            <Input label="Senha"
            //  value={data[entry.name]}
                placeholder="Digite a senha do usuário"
                onChangeText={value => setValue('password', value)} 
                error={errors?.password?.message}
                messageError={errors?.password?.message}
            />
            <Input label="CRAS / CREAS"
            //  value={data[entry.name]}
                placeholder="Selecione o CRAS/CREAS do usuário"
                onChangeText={value => setValue('crascreas', value)} 
                error={errors?.crascreas?.message}
                messageError={errors?.crascreas?.message}
            />
            <Input label="Perfil"
            //  value={data[entry.name]}
                placeholder="Selecione o Perfil do usuário"
                onChangeText={value => setValue('role', value)} 
                error={errors?.role?.message}
                messageError={errors?.role?.message}
            />
            <Button onPress={handleSubmit(onSubmit)} paddingButton={10} textSize={18} borderRadius={10}>
                Registrar
            </Button>
            </View>
        </Container>
    )
}