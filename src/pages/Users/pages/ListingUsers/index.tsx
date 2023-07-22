import { BackBottom } from "../../../../components/BackBottom"
import { Container } from "../../../../components/Container"
import { HeaderUser } from "../../../../components/HeaderUser"
import {View, Text} from 'react-native'
import { ReportButton } from "../../components/ReportButton"


export const ListingUsers = () => {

    const users = [
        {
            name: 'Vitor Miguel',
            role: 'Técnico'
        },
        {
            name: 'Guilherme dos santos',
            role: 'Técnico'
        },
        {
            name: 'Ana maria',
            role: 'Coordenação'
        },
        {
            name: 'Luana dos santos',
            role: 'Gestão'
        },
        {
            name: 'Leandro',
            role: 'Coordenação'
        },
        {
            name: 'Mariana',
            role: 'Técnico'
        },
        {
            name: 'José Fernandes',
            role: 'Técnico'
        },
        {
            name: 'Paulo',
            role: 'Técnico'
        },
        {
            name: 'Miguel',
            role: 'Técnico'
        },
        {
            name: 'Josué',
            role: 'Técnico'
        },
        {
            name: 'Amanda',
            role: 'Técnico'
        }
    ]

    return(
        <Container>
            <HeaderUser/>
            <BackBottom title='Lista de Usuários' />
            <View>
                {users.map((user) => (
                    <ReportButton key={user.name}  iconColor='#E2773B' backgroundColor='#2D6980' borderRadius={5} paddingButton={10} icon='arrow-right' iconSize={20} >
                        {user.name} - {user.role}
                    </ReportButton>
                ))}
            </View>
        </Container>
    )
}