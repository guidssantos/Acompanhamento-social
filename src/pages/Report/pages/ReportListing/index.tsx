import { BackBottom } from "../../../../components/BackBottom"
import { Container } from "../../../../components/Container"
import { HeaderUser } from "../../../../components/HeaderUser"
import {View, Text} from 'react-native'
import { ReportButton } from "../../components/ReportButton"


export const ListingReport = () => {

    const reports = [
        {
            name: 'Familia Boaratti',
            number: '0001'
        },
        {
            name: 'Familia Santos',
            number: '0002'
        },
        {
            name: 'Familia Silva',
            number: '0003'
        },
        {
            name: 'Familia Antonia',
            number: '0004'
        },
        {
            name: 'Familia Marques',
            number: '0005'
        },
        {
            name: 'Familia Silva',
            number: '0006'
        },
        {
            name: 'Familia Rocha',
            number: '0007'
        },
        {
            name: 'Familia Mendes',
            number: '0008'
        },
        {
            name: 'Familia das Dores',
            number: '0009'
        },
        {
            name: 'Familia Marcelo',
            number: '0010'
        },
        {
            name: 'Familia Santos',
            number: '0011'
        }
    ]

    return(
        <Container>
            <HeaderUser/>
            <BackBottom title='Lista de Relatórios' />
            <View>
                {reports.map((report) => (
                    <ReportButton key={report.name}  iconColor='#E2773B' backgroundColor='#2D6980' borderRadius={5} paddingButton={10} icon='arrow-right' iconSize={20} >
                        {report.name} # {report.number}
                    </ReportButton>
                ))}
            </View>
        </Container>
    )
}