import styled from './styles';

import { HeaderUser } from '../../components/HeaderUser';
import { Container } from '../../components/Container';
import { BackBottom } from '../../components/BackBottom';
import { ReportButton } from './components/ReportButton';




export const Report = ({navigation}) => {

    return(
        <Container>
            <HeaderUser />
            <BackBottom title="Relatórios" />
            <ReportButton iconColor='#E2773B' backgroundColor='#2D6980' borderRadius={5} paddingButton={10} icon='arrow-right' iconSize={20} >
                Lista de Relatórios
            </ReportButton>
            <ReportButton iconColor='#E2773B' backgroundColor='#2D6980' borderRadius={5} paddingButton={10} icon='arrow-right' iconSize={20} >
                Cadastrar Relatórios
            </ReportButton>
        </Container>
    )
};
