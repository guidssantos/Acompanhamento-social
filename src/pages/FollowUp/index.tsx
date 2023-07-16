import styled from './styles';

import { HeaderUser } from '../../components/HeaderUser';
import { Container } from '../../components/Container';
import { BackBottom } from '../../components/BackBottom';
import { FollowUpButton } from './components/FollowUpButton';




export const FollowUp = ({navigation}) => {

    return(
        <Container>
            <HeaderUser />
            <BackBottom title="Acompanhamento" />
            <FollowUpButton iconColor='#E2773B' backgroundColor='#2D6980' borderRadius={5} paddingButton={10} icon='arrow-right' iconSize={20} >
                Lista de acompanhamento
            </FollowUpButton>
            <FollowUpButton iconColor='#E2773B' backgroundColor='#2D6980' borderRadius={5} paddingButton={10} icon='arrow-right' iconSize={20} >
                Cadastrar acompanhamento
            </FollowUpButton>
        </Container>
    )
};
