import styled from './styles';

import { HeaderUser } from '../../components/HeaderUser';
import { Container } from '../../components/Container';
import { BackBottom } from '../../components/BackBottom';
import { ReportButton } from './components/ReportButton';




export const Users = ({navigation}) => {

    return(
        <Container>
            <HeaderUser />
            <BackBottom title="Usuários" />
            <ReportButton iconColor='#E2773B' backgroundColor='#2D6980' borderRadius={5} paddingButton={10} icon='arrow-right' iconSize={20} >
                Lista de Usuários
            </ReportButton>
            <ReportButton iconColor='#E2773B' backgroundColor='#2D6980' borderRadius={5} paddingButton={10} icon='arrow-right' iconSize={20} >
                Cadastro de Usuário
            </ReportButton>
        </Container>
    )
};