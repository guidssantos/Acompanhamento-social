import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../config/firebase";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  AuthErrorCodes,
  signOut
} from "firebase/auth";

function errosFirebase(error){
  let mensagem = '';
  switch(error.code) {
    case AuthErrorCodes.EMAIL_EXISTS:
      mensagem = "Esse email já está em uso";
      break;
    case AuthErrorCodes.INVALID_EMAIL:
      mensagem = "Email inválido";
      break;
    case AuthErrorCodes.WEAK_PASSWORD:
      mensagem = "A senha precisa de no minimo 6 caracteres";
      break;
    default:
      mensagem="Erro desconhecido";
  }
  return mensagem;
}

// export async function cadastrar(email, senha) {
//   const resultado = await createUserWithEmailAndPassword(auth, email, senha)
//   .then((dadosDoUsuario) => {
//     console.log(dadosDoUsuario)
//     return "sucesso"
//   })
//   .catch((error) => {
//     console.log(error);
//     return errosFirebase(error)
//   });

//   return resultado
// }

export async function SignIn(email, senha) {
  const result = await signInWithEmailAndPassword(auth, email, senha)
  .then((dadosDoUsuario) => {
    console.log(dadosDoUsuario, "@@@@@@@@@@")
    AsyncStorage.setItem('user', JSON.stringify(dadosDoUsuario))
    return "sucesso"
  })
  .catch((error) => {
    console.log(error);
    return "erro"
  });
  return result
}

export async function Logout (){
    await signOut(auth);
    // localStorage.removeItem('SistemaUser');
    // setUser(null);
}