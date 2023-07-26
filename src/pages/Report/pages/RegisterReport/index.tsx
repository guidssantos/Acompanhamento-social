import { Text, View } from "react-native"
import { Container } from "../../../../components/Container"
import { HeaderUser } from "../../../../components/HeaderUser"
import { BackBottom } from "../../../../components/BackBottom"
import { ReportQuestions } from "./components/ReportQuestions"


export const RegisterReport = () => {
    return(
        <Container>
            <HeaderUser/>
            <BackBottom title='Mapeamento de Vunerabilidades'/>
            <ReportQuestions/>
        </Container>
    )
}